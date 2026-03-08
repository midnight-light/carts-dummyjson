import { ThemeProvider } from './theme-provider';
import { GlobalStyles } from '../styles/global-styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../api/query-client';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/router';

export const ProvidersWrapper = () => {
  return (
    <ThemeProvider theme="light">
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
