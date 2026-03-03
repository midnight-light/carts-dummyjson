import '@emotion/react';
import { CustomTheme } from '../app/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
