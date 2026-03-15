import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Helmet } from 'react-helmet';
import App from './App';
import { AuthContext } from './contexts/SupabaseAuthContext';
import { AIChatProvider } from './contexts/AIChatContext';

// Minimal server-side auth context — no Supabase calls during prerender
const SERVER_AUTH = {
  user: null,
  session: null,
  loading: false,
  authError: null,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => ({ error: null }),
};

export function render(url) {
  const appHtml = renderToString(
    <AuthContext.Provider value={SERVER_AUTH}>
      <AIChatProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </AIChatProvider>
    </AuthContext.Provider>
  );

  // Collect all <Helmet> tags rendered during renderToString
  const helmet = Helmet.renderStatic();

  return { appHtml, helmet };
}
