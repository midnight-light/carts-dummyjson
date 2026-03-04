import { PageLayout } from '../components/ui/layouts/page-layout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default App;
