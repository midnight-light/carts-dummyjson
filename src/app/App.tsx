import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Flex } from '../components/ui/layouts/flex';
import { Button } from '../components/ui/buttons/button';
import { PageLayout } from '../components/ui/layouts/page-layout';
import { CartsPage } from '../features/carts/carts.page';
import { AsyncBoundary } from '../components/async-boundary';
import { CartsError } from '../features/carts/components/cart-error';
import { CartsSkeleton } from '../features/carts/components/carts-skeleton';

function App() {
  return (
    <PageLayout>
      <Flex direction="column" align="center" gap={4} fullWidth fullHeight>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Button size="sm">Click me</Button>
        <AsyncBoundary errorFallback={CartsError} fallback={<CartsSkeleton />}>
          <CartsPage />
        </AsyncBoundary>
      </Flex>
    </PageLayout>
  );
}

export default App;
