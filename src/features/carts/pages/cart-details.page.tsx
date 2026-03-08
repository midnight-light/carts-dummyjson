import { AsyncBoundary } from '../../../components/async-boundary';
import { CartDetailsContent } from '../components/cart-details-content';
import { CartsError } from '../components/cart-error';
import { CartsSkeleton } from '../components/carts-skeleton';

export const CartDetailsPage: React.FC = () => (
  <AsyncBoundary fallback={<CartsSkeleton />} errorFallback={CartsError}>
    <CartDetailsContent />
  </AsyncBoundary>
);

CartDetailsPage.displayName = 'CartDetailsPage';
