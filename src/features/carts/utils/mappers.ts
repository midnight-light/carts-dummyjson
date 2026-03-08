import type { UpdateCartProductDto } from '../api/dto/request/carts-requests.dto';
import type { Product } from '../cart.types';

/**
 * @example
 * const products = [
 *   { id: '144', title: 'Cricket Helmet', price: 44.99, quantity: 4, ... }
 * ];
 * const mapped = mapProductsToUpdateDto(products);
 * // Result: [{ id: 144, quantity: 4 }]
 */
export const mapProductsToUpdateDto = (products: Product[]): UpdateCartProductDto[] => {
  return products.map((product) => ({
    id: product.id,
    quantity: product.quantity,
  }));
};
