import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Flex } from '../components/ui/layouts/flex';
import { Button } from '../components/ui/buttons/button';
import { PageLayout } from '../components/ui/layouts/page-layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <PageLayout>
      <Flex direction="column" align="center" gap={4}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Button size="sm">Click me</Button>
      </Flex>
    </PageLayout>
  );
}

export default App;
