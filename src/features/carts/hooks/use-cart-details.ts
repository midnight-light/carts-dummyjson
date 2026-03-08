import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './use-carts';
import type { Cart } from '../cart.types';

interface UseCartDetailsReturn {
  data: {
    cart: Cart;
  };
  actions: {
    goBack: () => void;
  };
}

/**
 * @description Reads :id from the route params, fetches cart details,
 * and exposes a back-navigation action.
 *
 * @example
 * const { data: { cart }, actions: { goBack } } = useCartDetails();
 */
export const useCartDetails = (): UseCartDetailsReturn => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    throw new Error('useCartDetails must be used within a /cart/:id route');
  }

  const { data: cart } = useCart(id);

  return {
    data: { cart },
    actions: {
      goBack: () => navigate('/'),
    },
  };
};
