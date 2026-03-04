import { css, type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

type CardSize = 'sm' | 'md' | 'lg' | 'xl';

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'outlined' | 'elevated';
  fullWidth?: boolean;
  fullHeight?: boolean;
  size?: CardSize;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  divider?: boolean;
}

const resolveSize = (size?: CardSize): SerializedStyles => {
  switch (size) {
    case 'sm':
      return css`
        max-width: 16rem;
        max-height: 24rem;
      `;
    case 'md':
      return css`
        width: 20rem;
        max-height: 28rem;
      `;
    case 'lg':
      return css`
        max-width: 24rem;
        max-height: 32rem;
      `;
    case 'xl':
      return css`
        max-width: 28rem;
        max-height: 36rem;
      `;
    default:
      return css`
        max-width: 100%;
        max-height: 100%;
      `;
  }
};

const StyledRoot = styled.div<CardRootProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  overflow: hidden;
  ${({ size }) => resolveSize(size)}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  ${({ variant = 'outlined', theme }) =>
    variant === 'outlined'
      ? `border: 1px solid ${theme.colors.border.base};`
      : `box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);`}
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
`;

const StyledContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

const StyledFooter = styled.div<CardFooterProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
`;

const Card = ({ children, size = 'md', ...props }: CardRootProps) => (
  <StyledRoot size={size} {...props}>
    {children}
  </StyledRoot>
);
Card.displayName = 'Card.Root';

const CardHeader = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <StyledHeader {...props}>{children}</StyledHeader>
);
CardHeader.displayName = 'Card.Header';

const CardContent = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <StyledContent {...props}>{children}</StyledContent>
);
CardContent.displayName = 'Card.Content';

const CardFooter = ({ children, ...props }: CardFooterProps) => <StyledFooter {...props}>{children}</StyledFooter>;
CardFooter.displayName = 'Card.Footer';

export type { CardRootProps, CardFooterProps };
export { Card, CardHeader, CardContent, CardFooter };
