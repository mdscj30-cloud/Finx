# FinxisAI — Claude Code Project Memory

## Project overview
FinxisAI is an AI-powered accounting and bookkeeping platform for CPAs and SMBs.
React 18 SPA with a Supabase backend, full client portal, CPA portal, and marketing site.

## Stack
- **Frontend:** React 18, Vite 4, React Router 6, Framer Motion
- **Styling:** Tailwind CSS 3, shadcn/ui (Radix UI primitives), `clsx` + `tailwind-merge`
- **Backend/Auth:** Supabase (auth + database + edge functions)
- **AI:** Groq API via Supabase Edge Function (`/functions/v1/groq`) — streaming chat
- **Icons:** lucide-react@0.292.0
- **Charts:** recharts
- **Path alias:** `@/` → `src/`

## Key commands
```bash
npm run dev        # dev server on :3000 (or next available port)
npm run build      # production build → dist/
npm run lint       # eslint
```

## Environment variables
Copy `.env.example` to `.env` before running:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```
Never hardcode credentials — always use `import.meta.env.VITE_*`.

## Project structure
```
src/
  App.jsx              # All routes defined here
  main.jsx             # Entry — wraps app in BrowserRouter + AuthProvider + AIChatProvider
  components/          # 80+ shared components
    ui/                # shadcn/ui primitives (button, card, dialog, etc.)
    cpa/               # CPA portal components
  pages/               # 100+ page components
    comparison/        # 30+ comparison pages
    cpa/               # CPA portal pages
    services/          # Service landing pages
    how-we-think/      # Editorial pages
    country/           # Country-specific pages
    funnels/           # Segment landing pages
  contexts/
    SupabaseAuthContext.jsx   # Auth state — useAuth() hook
    AIChatContext.jsx         # AI chat state — useAIChat() hook
  lib/
    customSupabaseClient.js  # Supabase client (exports `supabase`)
    NavigationData.js        # Header nav structure
    blogData.js / caseStudiesData.js / glossaryData.js etc.
  hooks/
    useNetworkStatus.js      # Online/offline detection
    useSupabaseQuery.js      # Generic Supabase query hook
```

## Routing rules
- All routes live in `src/App.jsx`
- Protected routes use `<Route element={<ProtectedRoute />}>` nested pattern — NOT children prop
- Lazy load all non-critical pages with `React.lazy()`
- Eager load SEO-critical pages (BlogPostPage, CaseStudyPage, ComparisonPage, GlossaryTermPage)
- Route order matters: specific `/services/ai-bookkeeping` routes must come before catch-all `/services/:slug`

## Auth
- `useAuth()` from `@/contexts/SupabaseAuthContext.jsx`
- Returns: `{ user, session, loading, signIn, signUp, signOut }`
- `ProtectedRoute` renders `<Outlet />` — use nested routes pattern

## Component conventions
- All components are functional with named exports or default exports
- Tailwind for all styling — no CSS modules or styled-components
- Use `cn()` from `@/lib/utils` for conditional class merging
- shadcn/ui components are in `src/components/ui/` — don't modify them directly
- Page components include `<SEOHead>` and schema markup via `generateXxxSchema()` from `@/lib/seoHelpers`

## AI Chat
- `AIChat.jsx` streams from Supabase Edge Function `/functions/v1/groq`
- State lives in `AIChatContext.jsx` — `messages` array, `isAIChatOpen` bool
- Always use immutable state updates (`.map()`) — never mutate message objects directly

## Known dead files (do not route or reference)
- `src/pages/BlogPage.jsx` — superseded by `BlogListPage`
- `src/pages/GlossaryPage.jsx` — superseded by `GlossaryIndexPage`
- `src/pages/PortalPage.jsx` — orphaned, not routed
- `src/pages/SitemapPage.jsx` — not routed, needs `/sitemap` route if needed

## Git workflow
- Branch: `main`
- Commit style: `type: short description` (feat / fix / refactor / chore / docs)
- Always run `npm run build` before committing to catch type/import errors
