/**
 * @example
 * {
 *  "merge": true,
 *  "products": [UpdateCartProductDto]
 * }
 */
export interface UpdateCartRequestDto {
  merge: boolean;
  products: UpdateCartProductDto[];
}

/**
 * @example
 * {
 *  "id": "1",
 *  "quantity": 1
 * }
 */
export interface UpdateCartProductDto {
  id: number;
  quantity: number;
}
