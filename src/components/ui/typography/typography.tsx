import styled from '@emotion/styled';
import type { ElementType, HTMLAttributes } from 'react';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';

type TypographyColor = 'label' | 'subtitle' | 'help' | 'success';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: ElementType;
}

const VARIANT_TAG: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body: 'p',
  caption: 'span',
  label: 'span',
};

const StyledTypography = styled.p<TypographyProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  color: ${({ color = 'label', theme }) => theme.colors.text[color]};

  ${({ variant = 'body', theme }) => {
    const { sizes, weights } = theme.typography;
    const styles: Record<TypographyVariant, string> = {
      h1: `font-size: ${sizes.xl}px; font-weight: ${weights.bold}; line-height: 1.2;`,
      h2: `font-size: ${sizes.lg}px; font-weight: ${weights.bold}; line-height: 1.3;`,
      h3: `font-size: ${sizes.md}px; font-weight: ${weights.medium}; line-height: 1.4;`,
      body: `font-size: ${sizes.sm}px; font-weight: ${weights.normal}; line-height: 1.5;`,
      caption: `font-size: ${sizes.xs}px; font-weight: ${weights.normal}; line-height: 1.4;`,
      label: `font-size: ${sizes.md}px; font-weight: ${weights.bold}; line-height: 1.4;`,
    };
    return styles[variant];
  }}
`;

export const Typography = ({ variant = 'body', color = 'label', as, children, ...props }: TypographyProps) => {
  const tag = as ?? VARIANT_TAG[variant];

  return (
    <StyledTypography as={tag} variant={variant} color={color} {...props}>
      {children}
    </StyledTypography>
  );
};

Typography.displayName = 'Typography';
