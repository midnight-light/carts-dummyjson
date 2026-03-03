import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme } from '../styles/theme';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: 'light' | 'dark';
}

export const ThemeProvider = ({ children, theme = 'light' }: ThemeProviderProps) => {
  const selectedTheme = useMemo(() => lightTheme, [theme]);

  return <EmotionThemeProvider theme={selectedTheme}>{children}</EmotionThemeProvider>;
};
