import styled from '@emotion/styled';
import type { CSSProperties, HTMLAttributes } from 'react';
import { resolveSpacing } from '../../../lib/utils/resolve-spacing';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: CSSProperties['gridTemplateColumns'];
  rows?: CSSProperties['gridTemplateRows'];
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  alignItems?: CSSProperties['alignItems'];
  justifyItems?: CSSProperties['justifyItems'];
}

const StyledGrid = styled.div<GridProps>`
  display: grid;
  align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
  justify-items: ${({ justifyItems }) => justifyItems ?? 'stretch'};
  grid-template-columns: ${({ columns }) => columns ?? 'none'};
  grid-template-rows: ${({ rows }) => rows ?? 'none'};
  ${({ gap, theme }) => gap !== undefined && `gap: ${resolveSpacing(gap, theme.spacing)};`}
  ${({ rowGap, theme }) => rowGap !== undefined && `row-gap: ${resolveSpacing(rowGap, theme.spacing)};`}
${({ columnGap, theme }) => columnGap !== undefined && `column-gap: ${resolveSpacing(columnGap, theme.gap)};`}
`;

export const Grid = ({ children, ...props }: GridProps) => <StyledGrid {...props}>{children}</StyledGrid>;

Grid.displayName = 'Grid';
