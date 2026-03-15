-- QuickBooks OAuth tokens table
-- Stores access/refresh tokens per user, scoped by QuickBooks company (realmId)

create table if not exists public.quickbooks_tokens (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  realm_id      text not null,
  access_token  text not null,
  refresh_token text not null,
  access_token_expires_at   timestamptz not null,
  refresh_token_expires_at  timestamptz not null,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  unique (user_id)
);

-- Only the owning user and service role can read/write tokens
alter table public.quickbooks_tokens enable row level security;

create policy "Users can read own QB tokens"
  on public.quickbooks_tokens for select
  using (auth.uid() = user_id);

create policy "Users can upsert own QB tokens"
  on public.quickbooks_tokens for insert
  with check (auth.uid() = user_id);

create policy "Users can update own QB tokens"
  on public.quickbooks_tokens for update
  using (auth.uid() = user_id);

create policy "Users can delete own QB tokens"
  on public.quickbooks_tokens for delete
  using (auth.uid() = user_id);
