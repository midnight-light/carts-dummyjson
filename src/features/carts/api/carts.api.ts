import { apiInstance } from '../../../app/api/instance';
import type { PaginationParams } from '../../../app/api/api.types';
import type { UpdateCartRequestDto } from './dto/request/carts-requests.dto';

const CART_ROUTES = {
  LIST: '/carts',
  DETAIL: (id: number) => `/carts/${id}`,
  ADD: '/carts/add',
  UPDATE: (id: number) => `/carts/${id}`,
} as const;

export const fetchCarts = async (params?: PaginationParams) => {
  const { data } = await apiInstance.get(CART_ROUTES.LIST, { params });
  return data;
};

export const fetchCartById = async (cartId: number) => {
  const { data } = await apiInstance.get(CART_ROUTES.DETAIL(cartId));
  return data;
};

export const updateCart = async (cartId: number, body: UpdateCartRequestDto) => {
  console.warn('updateCart api request', body, cartId);
  const { data } = await apiInstance.put(CART_ROUTES.UPDATE(cartId), body);
  console.warn('updateCart api response', data);
  return data;
};
