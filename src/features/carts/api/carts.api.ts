import { apiInstance } from '../../../app/api/instance';
import type { PaginationParams } from '../../../app/api/api.types';

const CART_ROUTES = {
  LIST: '/carts',
  DETAIL: (id: string) => `/carts/${id}`,
  ADD: '/carts/add',
  UPDATE: (id: string) => `/carts/${id}`,
  DELETE: (id: string) => `/carts/${id}`,
} as const;

export const fetchCarts = async (params?: PaginationParams) => {
  const { data } = await apiInstance.get(CART_ROUTES.LIST, { params });
  return data;
};

export const fetchCartById = async (cartId: string) => {
  const { data } = await apiInstance.get(CART_ROUTES.DETAIL(cartId));
  return data;
};

export const updateCart = async (cartId: string, body: unknown) => {
  const { data } = await apiInstance.patch(CART_ROUTES.UPDATE(cartId), body);
  return data;
};

export const deleteCart = async (cartId: string) => {
  const { data } = await apiInstance.delete(CART_ROUTES.DELETE(cartId));
  return data;
};
