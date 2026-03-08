import styled from '@emotion/styled';
import { Flex } from './flex';

const PageLayoutContainer = styled(Flex)`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 6;
  background-color: ${({ theme }) => theme.colors.bg.base};

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayoutContainer direction="column" justify="start" align="center" gap={4} fullWidth fullHeight px={6} pt={6}>
      {children}
    </PageLayoutContainer>
  );
};
