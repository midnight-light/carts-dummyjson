export const resolveSpacing = (
  value: number | string | undefined,
  themeSpacing: Record<string, number>,
): string | undefined => {
  if (value === undefined) return undefined;

  if (typeof value === 'number') {
    const map: Record<number, string> = {
      1: 'xs',
      2: 'sm',
      3: 'md',
      4: 'lg',
      5: 'xl',
      6: 'xxl',
    };
    const key = map[value];
    return key ? `${themeSpacing[key]}px` : `${value * 4}px`;
  }

  return value;
};
