import type { Product } from '../../carts/cart.types';

/**
 * @example
 * {
 *  1: {Product} // Product with updated quantity
 * }
 */
export type UpdatedProductItem = Map<Product['id'], Product>;
