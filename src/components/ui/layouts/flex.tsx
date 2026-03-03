import styled from '@emotion/styled';
import type { HTMLAttributes, CSSProperties, ElementType } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  direction?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  wrap?: CSSProperties['flexWrap'];
  gap?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  basis?: CSSProperties['flexBasis'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  minWidth?: CSSProperties['minWidth'];
  minHeight?: CSSProperties['minHeight'];
  inline?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;

  /**
   * Paddings
   * @example p={2} // 1:xs, 2:sm, 3:md, 4:lg, 5:xl
   * @example p="1rem" // custom value
   */
  p?: number | string;

  px?: number | string;

  py?: number | string;

  pt?: number | string;

  pr?: number | string;

  pb?: number | string;

  pl?: number | string;

  /**
   * Margins: mr - margin right, ml - margin left, mt - margin top, mb - margin bottom
   * @example m={2} // 1:xs, 2:sm, 3:md, 4:lg, 5:xl, 6:xxl
   * @example m="1rem" // custom value
   */
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
}

const resolveSpacing = (
  value: number | string | undefined,
  themeSpacing: Record<string, number>,
): string | undefined => {
  if (value === undefined) return undefined;

  if (typeof value === 'number') {
    const spacingMap: Record<number, keyof typeof themeSpacing> = {
      1: 'xs',
      2: 'sm',
      3: 'md',
      4: 'lg',
      5: 'xl',
      6: 'xxl',
    };

    const spacingKey = spacingMap[value];
    return spacingKey ? `${themeSpacing[spacingKey]}px` : `${value * 4}px`;
  }

  return value;
};

const StyledFlex = styled.div<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ direction }) => direction ?? 'row'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  align-items: ${({ align }) => align ?? 'stretch'};
  align-content: ${({ alignContent }) => alignContent};
  flex-wrap: ${({ wrap }) => wrap ?? 'nowrap'};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  flex-basis: ${({ basis }) => basis};

  /* Gap */
  ${({ gap, theme }) => gap && `gap: ${resolveSpacing(gap, theme.spacing)};`}
  ${({ rowGap, theme }) => rowGap && `row-gap: ${resolveSpacing(rowGap, theme.spacing)};`}
  ${({ columnGap, theme }) => columnGap && `column-gap: ${resolveSpacing(columnGap, theme.spacing)};`}
  
  /* Dimensions */
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  
  ${({ fullWidth }) => fullWidth && 'width: 100%;'}
  ${({ fullHeight }) => fullHeight && 'height: 100%;'}
  
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
  
  /* Margins */
  ${({ m, theme }) => m && `margin: ${resolveSpacing(m, theme.spacing)};`}
  ${({ mx, theme }) =>
    mx && `margin-left: ${resolveSpacing(mx, theme.spacing)}; margin-right: ${resolveSpacing(mx, theme.spacing)};`}
  ${({ my, theme }) =>
    my && `margin-top: ${resolveSpacing(my, theme.spacing)}; margin-bottom: ${resolveSpacing(my, theme.spacing)};`}
  ${({ mt, theme }) => mt && `margin-top: ${resolveSpacing(mt, theme.spacing)};`}
  ${({ mr, theme }) => mr && `margin-right: ${resolveSpacing(mr, theme.spacing)};`}
  ${({ mb, theme }) => mb && `margin-bottom: ${resolveSpacing(mb, theme.spacing)};`}
  ${({ ml, theme }) => ml && `margin-left: ${resolveSpacing(ml, theme.spacing)};`}
`;

/**
 * Flex - универсальный компонент для flexbox layout
 * Поддерживает все CSS flexbox свойства через props, интеграцию с темой для spacing, и полиморфный as prop.
 * @example
 * <Flex direction="column" p={4}> // 1:xs, 2:sm, 3:md, 4:lg, 5:xl, 6:xxl
 *   <h2>Section Title</h2>
 *   <p>Content</p>
 * </Flex>
 */
export const Flex = ({ children, ...props }: FlexProps) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

Flex.displayName = 'Flex';
