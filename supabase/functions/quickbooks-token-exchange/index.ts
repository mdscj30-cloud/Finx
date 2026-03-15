import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { corsHeaders } from '../cors.ts';

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { code, realmId, userId } = await req.json();

    if (!code || !realmId || !userId) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: code, realmId, userId' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Read credentials from Supabase Edge Function secrets (set via Supabase dashboard or CLI)
    const clientId = Deno.env.get('QB_CLIENT_ID');
    const clientSecret = Deno.env.get('QB_CLIENT_SECRET');
    const redirectUri = Deno.env.get('QB_REDIRECT_URI') ?? 'https://finxisai.com/quickbooks-callback';

    if (!clientId || !clientSecret) {
      console.error('QuickBooks credentials not configured in Edge Function secrets');
      return new Response(
        JSON.stringify({ error: 'QuickBooks integration not configured. Contact support.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Exchange authorization code for tokens
    const tokenEndpoint = 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer';
    const credentials = btoa(`${clientId}:${clientSecret}`);

    const tokenResponse = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!tokenResponse.ok) {
      const errorBody = await tokenResponse.text();
      console.error('QuickBooks token exchange failed:', tokenResponse.status, errorBody);
      return new Response(
        JSON.stringify({ error: 'Failed to exchange authorization code with QuickBooks.' }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tokens = await tokenResponse.json();
    const { access_token, refresh_token, expires_in, x_refresh_token_expires_in } = tokens;

    // Store tokens securely in Supabase
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const expiresAt = new Date(Date.now() + expires_in * 1000).toISOString();
    const refreshExpiresAt = new Date(Date.now() + x_refresh_token_expires_in * 1000).toISOString();

    const { error: upsertError } = await supabaseAdmin
      .from('quickbooks_tokens')
      .upsert(
        {
          user_id: userId,
          realm_id: realmId,
          access_token,
          refresh_token,
          access_token_expires_at: expiresAt,
          refresh_token_expires_at: refreshExpiresAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'user_id' }
      );

    if (upsertError) {
      console.error('Failed to store QB tokens:', upsertError);
      return new Response(
        JSON.stringify({ error: 'Failed to save integration tokens.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, realmId }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('Unexpected error in quickbooks-token-exchange:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
