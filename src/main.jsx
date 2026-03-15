import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import { AuthProvider } from '@/contexts/SupabaseAuthContext.jsx';
import { AIChatProvider } from '@/contexts/AIChatContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <AIChatProvider>
          <App />
        </AIChatProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);