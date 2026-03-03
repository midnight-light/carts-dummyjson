import type { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { GlobalStyles } from '../styles/global-styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../api/query-client';

interface ProvidersWrapperProps {
  children: ReactNode;
}

export const ProvidersWrapper = ({ children }: ProvidersWrapperProps) => {
  return (
    <ThemeProvider theme="light">
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};
