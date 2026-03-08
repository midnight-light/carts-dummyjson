import { css, type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';
import { resolveSpacing } from '../../lib/utils/resolve-spacing';

type CardSize = 'sm' | 'md' | 'lg' | 'xl';

interface CardPaddingProps {
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
}

interface CardRootProps extends HTMLAttributes<HTMLDivElement>, CardPaddingProps {
  variant?: 'outlined' | 'elevated';
  fullWidth?: boolean;
  fullHeight?: boolean;
  size?: CardSize;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement>, CardPaddingProps {
  maxWidth?: number | string;
  maxHeight?: number | string;
  alignItems?: 'center' | 'start' | 'end';
  justifyContent?: 'center' | 'start' | 'end';
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement>, CardPaddingProps {
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

const resolveAlignItems = (alignItems?: 'center' | 'start' | 'end'): SerializedStyles => {
  switch (alignItems) {
    case 'center':
      return css`
        align-items: center;
      `;
    case 'start':
      return css`
        align-items: start;
      `;
    case 'end':
      return css`
        align-items: end;
      `;
    default:
      return css`
        align-items: center;
      `;
  }
};

const resolveJustifyContent = (justifyContent?: 'center' | 'start' | 'end'): SerializedStyles => {
  switch (justifyContent) {
    case 'center':
      return css`
        justify-content: center;
      `;
    case 'start':
      return css`
        justify-content: start;
      `;
    case 'end':
      return css`
        justify-content: end;
      `;
    default:
      return css`
        justify-content: center;
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

  /* Paddings */
  ${({ p, theme }) => p && `padding: ${resolveSpacing(p, theme.spacing)};`}
  ${({ px, theme }) =>
    px && `padding-left: ${resolveSpacing(px, theme.spacing)}; padding-right: ${resolveSpacing(px, theme.spacing)};`}
  ${({ py, theme }) =>
    py && `padding-top: ${resolveSpacing(py, theme.spacing)}; padding-bottom: ${resolveSpacing(py, theme.spacing)};`}
  ${({ pt, theme }) => pt && `padding-top: ${resolveSpacing(pt, theme.spacing)};`}
  ${({ pr, theme }) => pr && `padding-right: ${resolveSpacing(pr, theme.spacing)};`}
  ${({ pb, theme }) => pb && `padding-bottom: ${resolveSpacing(pb, theme.spacing)};`}
  ${({ pl, theme }) => pl && `padding-left: ${resolveSpacing(pl, theme.spacing)};`}
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  align-items: start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
`;

const StyledContent = styled.div<CardContentProps>`
  flex: 1;
  ${({ maxWidth: width }) => (width ? `width: ${width}; ` : 'width: 100%;')}
  ${({ maxHeight: height }) => (height ? `height: ${height};` : 'height: 100%;')}
  ${({ alignItems }) => resolveAlignItems(alignItems)}
  ${({ justifyContent }) => resolveJustifyContent(justifyContent)}
  /* Paddings */
  ${({ p, theme }) => p && `padding: ${resolveSpacing(p, theme.spacing)};`}
  ${({ px, theme }) =>
    px && `padding-left: ${resolveSpacing(px, theme.spacing)}; padding-right: ${resolveSpacing(px, theme.spacing)};`}
  ${({ py, theme }) =>
    py && `padding-top: ${resolveSpacing(py, theme.spacing)}; padding-bottom: ${resolveSpacing(py, theme.spacing)};`}
  ${({ pt, theme }) => pt && `padding-top: ${resolveSpacing(pt, theme.spacing)};`}
  ${({ pr, theme }) => pr && `padding-right: ${resolveSpacing(pr, theme.spacing)};`}
  ${({ pb, theme }) => pb && `padding-bottom: ${resolveSpacing(pb, theme.spacing)};`}
  ${({ pl, theme }) => pl && `padding-left: ${resolveSpacing(pl, theme.spacing)};`}
`;

const StyledFooter = styled.div<CardFooterProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm}px;
  ${({ p, theme }) => p && `padding: ${resolveSpacing(p, theme.spacing)};`}
  ${({ px, theme }) =>
    px && `padding-left: ${resolveSpacing(px, theme.spacing)}; padding-right: ${resolveSpacing(px, theme.spacing)};`}
  ${({ py, theme }) =>
    py && `padding-top: ${resolveSpacing(py, theme.spacing)}; padding-bottom: ${resolveSpacing(py, theme.spacing)};`}
  ${({ pt, theme }) => pt && `padding-top: ${resolveSpacing(pt, theme.spacing)};`}
  ${({ pr, theme }) => pr && `padding-right: ${resolveSpacing(pr, theme.spacing)};`}
  ${({ pb, theme }) => pb && `padding-bottom: ${resolveSpacing(pb, theme.spacing)};`}
  ${({ pl, theme }) => pl && `padding-left: ${resolveSpacing(pl, theme.spacing)};`}
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

const CardContent = ({ children, ...props }: CardContentProps) => <StyledContent {...props}>{children}</StyledContent>;
CardContent.displayName = 'Card.Content';

const CardFooter = ({ children, ...props }: CardFooterProps) => <StyledFooter {...props}>{children}</StyledFooter>;
CardFooter.displayName = 'Card.Footer';

export type { CardRootProps, CardFooterProps };
export { Card, CardHeader, CardContent, CardFooter };
