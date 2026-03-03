import type { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { GlobalStyles } from '../styles/global-styles';

interface ProvidersWrapperProps {
  children: ReactNode;
}

export const ProvidersWrapper = ({ children }: ProvidersWrapperProps) => {
  return (
    <ThemeProvider theme="light">
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
