import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const StyledButton = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  min-height: 2.5rem;

  /* size variants */
  ${({ size = 'md', theme }) => {
    const sizes = {
      sm: css`
        padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
        font-size: ${theme.typography.sizes.xs}px;
      `,
      md: css`
        padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
        font-size: ${theme.typography.sizes.sm}px;
      `,
      lg: css`
        padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
        font-size: ${theme.typography.sizes.md}px;
      `,
    };
    return sizes[size];
  }}

  /* color variants */
  ${({ variant = 'primary', theme }) => {
    const variants = {
      primary: css`
        background-color: ${theme.colors.primary.base};
        color: ${theme.colors.fg.inverted};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary.base};
        }

        &:active:not(:disabled) {
          background-color: ${theme.colors.primary.base};
        }
      `,
      secondary: css`
        background-color: ${theme.colors.secondary.base};
        color: ${theme.colors.secondary.base};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary.base};
        }
      `,
      danger: css`
        background-color: ${theme.colors.error.base};
        color: ${theme.colors.fg.base};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.error.base};
        }
      `,
    };
    return variants[variant];
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.base};
    outline-offset: 2px;
  }
`;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.displayName = 'Button';
