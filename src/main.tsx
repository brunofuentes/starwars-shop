import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoresProvider } from './providers/StoresProvider';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoresProvider>
      <App />
    </StoresProvider>
  </React.StrictMode>,
);
