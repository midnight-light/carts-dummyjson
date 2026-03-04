import { cartsQueryKeys } from '../api/query-keys.carts';
import type { PaginationParams } from '../../../app/api/api.types';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import * as cartsApi from '../api/carts.api';
import type { CartsResponse } from '../cart.types';

export const useCarts = (params?: PaginationParams) => {
  return useSuspenseQuery<CartsResponse>({
    queryKey: cartsQueryKeys.list(params),
    queryFn: () => cartsApi.fetchCarts(params),
  });
};

export const useCart = (cartId: string) => {
  return useSuspenseQuery({
    queryKey: cartsQueryKeys.details(cartId),
    queryFn: () => cartsApi.fetchCartById(cartId),
  });
};

export const useDeleteCart = (cartId: string) => {
  return useMutation({
    mutationFn: () => cartsApi.deleteCart(cartId),
  });
};
