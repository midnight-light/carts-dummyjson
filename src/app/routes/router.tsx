import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import AppLayout from '../App';
import { AsyncBoundary } from '../../components/async-boundary';
import { CartsError } from '../../features/carts/components/cart-error';
import { CartsSkeleton } from '../../features/carts/components/carts-skeleton';

const CartsPage = lazy(() =>
  import('../../features/carts/carts.page').then((m) => ({
    default: m.CartsPage,
  })),
);

const CartDetailsPage = lazy(() =>
  import('../../features/carts/pages/cart-details.page').then((m) => ({
    default: m.CartDetailsPage,
  })),
);

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: (
          <AsyncBoundary errorFallback={CartsError} fallback={<CartsSkeleton />}>
            <CartsPage />
          </AsyncBoundary>
        ),
      },
      {
        path: '/cart/:id',
        element: (
          <AsyncBoundary errorFallback={CartsError} fallback={<CartsSkeleton />}>
            <CartDetailsPage />
          </AsyncBoundary>
        ),
      },
    ],
  },
]);
