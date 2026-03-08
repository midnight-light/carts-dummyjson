import { useCarts } from './api/hooks/use-carts';
import { CartCard } from './components/cart-card';
import styled from '@emotion/styled';
import { Flex } from '../../components/ui/layouts/flex';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;

  gap: 1rem;
  width: 100%;
  height: 100%;
`;

export const CartsPage = () => {
  const { data } = useCarts();

  const navigate = useNavigate();

  const handleDetails = (cartId: number) => {
    navigate(`/cart/${cartId}`);
  };

  return (
    <StyledContainer>
      <Flex direction="row" gap={4} fullWidth wrap="wrap" justify="center" align="center">
        {data.carts.map((cart, index) => (
          <CartCard key={`cart-${index}`} item={cart} onDetails={handleDetails} />
        ))}
      </Flex>
    </StyledContainer>
  );
};
