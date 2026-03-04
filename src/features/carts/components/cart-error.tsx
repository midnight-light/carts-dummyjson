import styled from '@emotion/styled';
import { getErrorMessage, isApiErrorWithStatus } from '../../../app/api/utils/api-error-handler';

interface CartsErrorProps {
  error: Error;
}

const resolveMessage = (error: Error): string => {
  if (isApiErrorWithStatus(error, 404)) return 'Carts not found';
  if (isApiErrorWithStatus(error, 403)) return 'Access denied';
  if (isApiErrorWithStatus(error, 503)) return 'Service unavailable, please try again later';
  return getErrorMessage(error);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
  padding: ${({ theme }) => theme.spacing.xl}px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  background-color: ${({ theme }) => theme.colors.bg.base};
  border: 1px solid ${({ theme }) => theme.colors.error.base};
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.error.base};
  margin: 0;
`;

const Message = styled.p`
  font-family: ${({ theme }) => theme.typography.families.sansSerif};
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  color: ${({ theme }) => theme.colors.text.subtitle};
  margin: 0;
`;

export const CartsError = ({ error }: CartsErrorProps) => (
  <Container role="alert">
    <Title>Failed to load carts</Title>
    <Message>{resolveMessage(error)}</Message>
  </Container>
);

CartsError.displayName = 'CartsError';
