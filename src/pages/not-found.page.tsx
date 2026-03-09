import styled from '@emotion/styled';
import { Typography } from '../components/ui/typography/typography';
import { Button } from '../components/ui/buttons/button';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.bg.base};
`;

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page not found</Typography>
      <Button variant="primary" onClick={() => navigate('/')}>
        Go to home
      </Button>
    </StyledContainer>
  );
};
