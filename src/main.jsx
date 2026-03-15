import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import { AuthProvider } from '@/contexts/SupabaseAuthContext.jsx';
import { AIChatProvider } from '@/contexts/AIChatContext.jsx';

const rootElement = document.getElementById('root');

const app = (
  <BrowserRouter>
    <AuthProvider>
      <AIChatProvider>
        <App />
      </AIChatProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If the root already has prerendered HTML, hydrate it (SSG pages).
// Otherwise fall back to a fresh client-side render (dynamic / auth-gated pages).
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}