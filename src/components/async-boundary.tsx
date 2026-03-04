import { Suspense, type ReactNode, type ComponentType } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface ErrorFallbackProps {
  error: Error;
}

interface AsyncBoundaryProps {
  fallback: ReactNode;
  errorFallback: ComponentType<ErrorFallbackProps>;
  children: ReactNode;
}

const toError = (thrown: unknown): Error => {
  if (thrown instanceof Error) return thrown;
  return new Error(String(thrown));
};

/**
 * @description AsyncBoundary component to handle loading and error states
 * @param fallback - fallback UI to render while the component is loading
 * @param errorFallback - component to render when an error occurs
 * @param children - child components to render
 * @returns
 *
 * @example
 * <AsyncBoundary errorFallback={CartsError} fallback={<CartsSkeleton />}>
 *  <CartsPage />
 * </AsyncBoundary>
 */
export const AsyncBoundary = ({ fallback, errorFallback: ErrorFallback, children }: AsyncBoundaryProps) => (
  <ErrorBoundary fallbackRender={({ error }) => <ErrorFallback error={toError(error)} />}>
    <Suspense fallback={fallback}>{children}</Suspense>
  </ErrorBoundary>
);

AsyncBoundary.displayName = 'AsyncBoundary';
