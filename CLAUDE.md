# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
npm run build      # runs tools/generate-llms.js then vite build → dist/
npm run preview    # preview production build on :3000
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
  components/          # Shared components (templates, layout, UI blocks)
    ui/                # shadcn/ui primitives (button, card, dialog, etc.) — don't modify
    cpa/               # CPA portal components
  pages/               # Page components
    comparison/        # Comparison pages
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
    seoHelpers.js            # generateXxxSchema() functions for JSON-LD schema markup
    NavigationData.js        # Header nav structure
    blogData.js / caseStudiesData.js / glossaryData.js etc.  # Static content data
    LinkingStrategy.js       # Rules for internal link generation
    LinkGeneratorEngine.js   # Generates contextual links using linking strategy + data files
    LinkValidator.js         # Validates internal links
  hooks/
    useNetworkStatus.js      # Online/offline detection
    useSupabaseQuery.js      # Generic Supabase query hook
tools/
  generate-llms.js           # Pre-build: scrapes routes/pages to generate llms.txt for AI crawlers
  install-missing-components.js
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

## Data-driven template architecture
Many page types are generated from static data files rather than individual page files:
- `ServiceIndustryTemplate` — renders service × industry pages from `serviceIndustryData.js` / `industryServiceData.js`
- `ServiceLocationPage` — renders service × location pages from `locationServiceData.js`
- `ComparisonPageTemplate` — renders all comparison pages from comparison data
- `SegmentLandingPageTemplate` — renders funnel/segment pages from `funnelPagesData.js`
- `CountryPageLayout`, `HowWeThinkLayout`, `StateLocationPage` — similar pattern

When adding a new page in one of these categories, add an entry to the relevant data file rather than creating a new page component.

## Internal linking system
`LinkGeneratorEngine` + `LinkingStrategy` + `LinkValidator` power automatic contextual link injection across content pages. `LinkPlacement` and `ContextualLink` components render those links. Don't bypass this system when adding content-heavy pages — use it to wire up related resources.

## Component conventions
- All components are functional with named exports or default exports
- Tailwind for all styling — no CSS modules or styled-components
- Use `cn()` from `@/lib/utils` for conditional class merging
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
- Always run `npm run build` before committing to catch import errors
