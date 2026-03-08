import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useUpdateCart } from '../api/hooks/use-carts';
import { cartsQueryKeys } from '../api/query-keys.carts';
import { mapProductsToUpdateDto } from '../utils/mappers';
import type { Product, Cart, CartsResponse } from '../cart.types';

interface UseHandleSaveCartOptions {
  onClearLocalState?: () => void;

  onSuccess?: (updatedCart: Cart) => void;
  onError?: (error: unknown) => void;
}

interface UseHandleSaveCartReturn {
  handleSave: (products: Product[]) => void;
  isPending: boolean;
  isError: boolean;
  error: unknown;
}

/**
 * @description Custom hook for handling cart save with cache updates
 *
 * @param cartId - ID of the cart to update
 * @param options - Configuration options
 *
 * @returns {UseHandleSaveCartReturn}
 *
 * @example
 * const { handleSave, isPending } = useHandleSaveCart(cart.id, {
 *   onClearLocalState: () => setUpdatedProducts(new Map()),
 *   onSuccess: (cart) => console.log('Saved!', cart),
 * });
 * handleSave(mergedProducts);
 */
export const useHandleSaveCart = (cartId: number, options: UseHandleSaveCartOptions = {}): UseHandleSaveCartReturn => {
  const { onClearLocalState, onSuccess, onError } = options;

  const queryClient = useQueryClient();
  const { mutate: updateCart, isPending, isError, error } = useUpdateCart(cartId);

  const handleSave = useCallback(
    (products: Product[]) => {
      if (isPending) return;

      const previousDetailsCache = queryClient.getQueryData<Cart>(cartsQueryKeys.details(cartId));
      const previousListsCaches = queryClient.getQueriesData<CartsResponse>({
        queryKey: cartsQueryKeys.lists(),
      });
      console.log('Found caches:', previousListsCaches.length);
      const optimisticCart: Cart = {
        ...(previousDetailsCache as Cart),
        products: products,
        total: products.reduce((sum, p) => sum + p.price * p.quantity, 0),
        discountedTotal: products.reduce((sum, p) => sum + p.discountedTotal, 0),
        totalProducts: products.length,
        totalQuantity: products.reduce((sum, p) => sum + p.quantity, 0),
      };

      queryClient.setQueryData(cartsQueryKeys.details(cartId), optimisticCart);

      queryClient.setQueriesData(
        { queryKey: cartsQueryKeys.lists() },
        (oldData: CartsResponse | undefined): CartsResponse | undefined => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            carts: oldData.carts.map((c) => (c.id === cartId ? optimisticCart : c)),
          };
        },
      );

      onClearLocalState?.();

      const dto = {
        merge: true,
        products: mapProductsToUpdateDto(products),
      };

      updateCart(dto, {
        onSuccess: (updatedCart: Cart) => {
          queryClient.setQueryData(cartsQueryKeys.details(cartId), updatedCart);

          queryClient.setQueriesData(
            { queryKey: cartsQueryKeys.lists() },
            (oldData: CartsResponse | undefined): CartsResponse | undefined => {
              if (!oldData) return oldData;

              return {
                ...oldData,
                carts: oldData.carts.map((cart) => (cart.id === updatedCart.id ? updatedCart : cart)),
              };
            },
          );

          onSuccess?.(updatedCart);
        },
        onError: (err) => {
          if (previousDetailsCache) {
            queryClient.setQueryData(cartsQueryKeys.details(cartId), previousDetailsCache);
          }

          previousListsCaches.forEach(([queryKey, data]) => {
            if (data) {
              queryClient.setQueryData(queryKey, data);
            }
          });
          console.error('Failed to update cart:', err);
          onError?.(err);
        },
      });
    },
    [updateCart, cartId, queryClient, isPending, onClearLocalState, onSuccess, onError],
  );

  return {
    handleSave,
    isPending,
    isError,
    error,
  };
};
