/**
 * @description Formats a numeric price value into a USD currency string.
 *
 * @example
 * formatPrice(1689.8700000000001) // "$1,689.87"
 * formatPrice(124.94999999999999) // "$124.95"
 * formatPrice(10)                 // "$10"
 * formatPrice(10.5)               // "$10.50"
 */
export const formatPrice = (value: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
