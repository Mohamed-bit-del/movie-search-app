import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider } from "./context/AppContext";
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
