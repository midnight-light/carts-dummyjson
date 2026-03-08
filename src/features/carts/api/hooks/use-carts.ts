import { cartsQueryKeys } from '../query-keys.carts';
import type { PaginationParams } from '../../../../app/api/api.types';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import * as cartsApi from '../carts.api';
import type { CartsResponse } from '../../cart.types';
import type { UpdateCartRequestDto } from '../dto/request/carts-requests.dto';

export const useCarts = (params?: PaginationParams) => {
  return useSuspenseQuery<CartsResponse>({
    queryKey: cartsQueryKeys.list(params),
    queryFn: () => cartsApi.fetchCarts(params),
  });
};

export const useCart = (cartId: number) => {
  return useSuspenseQuery({
    queryKey: cartsQueryKeys.details(cartId),
    queryFn: () => cartsApi.fetchCartById(cartId),
  });
};

export const useUpdateCart = (cartId: number) => {
  return useMutation({
    mutationFn: (body: UpdateCartRequestDto) => cartsApi.updateCart(cartId, body),
  });
};
