import styled from '@emotion/styled';
import { Flex } from './flex';

const PageLayoutContainer = styled(Flex)`
  width: 100vw;
  height: 100svh;
  padding: 6;
  background-color: ${({ theme }) => theme.colors.error};
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayoutContainer direction="column" justify="start" align="center" gap={4} fullWidth fullHeight px={6} pt={6}>
      {children}
    </PageLayoutContainer>
  );
};
