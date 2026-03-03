import { Global, css, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          font-family: ${theme.typography.families.sansSerif};
          font-size: ${theme.typography.sizes.md}px;
          font-weight: ${theme.typography.weights.normal};
          line-height: 1.6;
          color: ${theme.colors.fg.base};
          background-color: ${theme.colors.bg.base};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        a {
          color: ${theme.colors.primary.base};
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: ${theme.colors.primary.base};
          }
        }

        button {
          font-family: inherit;
        }
      `}
    />
  );
};
