import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ProvidersWrapper } from './app/providers/providers-wrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProvidersWrapper />
  </StrictMode>,
);
