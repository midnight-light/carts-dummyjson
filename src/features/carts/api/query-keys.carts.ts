import type { PaginationParams } from '../../../app/api/api.types';
import { queryKeys } from '../../../app/api/query-keys';

export const cartsQueryKeys = {
  all: () => [...queryKeys.all, 'carts'] as const,
  lists: () => [...cartsQueryKeys.all(), 'list'] as const,
  list: (params?: PaginationParams) => [...cartsQueryKeys.lists(), params] as const,
  details: (cartId: number) => [...cartsQueryKeys.all(), 'detail', cartId] as const,
};
