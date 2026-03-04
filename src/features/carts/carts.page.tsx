import { getErrorMessage } from '../../app/api/utils/api-error-handler';
import { useCarts } from './hooks/use-carts';
import { CartCard } from './components/cart-card';
import styled from '@emotion/styled';
import { Flex } from '../../components/ui/layouts/flex';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const CartsPage = () => {
  const { data, isLoading, error } = useCarts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {getErrorMessage(error)}</div>;

  return (
    <StyledContainer>
      <h1>Carts</h1>
      <Flex direction="row" gap={4} fullWidth wrap="wrap">
        {data.carts.map((cart, index) => (
          <CartCard key={`cart-${index}`} item={cart} />
        ))}
      </Flex>
    </StyledContainer>
  );
};
