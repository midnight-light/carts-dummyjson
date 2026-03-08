import type { Product } from '../../../cart.types';

export interface UpdateCartRequestDto {
  merge: boolean;
  products: Product[];
}
