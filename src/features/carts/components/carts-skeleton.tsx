import { Flex } from '../../../components/ui/layouts/flex';
import { Skeleton } from '../../../components/ui/skeleton/skeleton';

interface CartsSkeletonProps {
  items?: number;
}
export const CartsSkeleton = ({ items = 10 }: CartsSkeletonProps) => {
  return (
    <Flex direction="row" align="center" gap={4}>
      {Array.from({ length: items }).map((_, index) => (
        <Skeleton key={index} width="100%" height="2rem" />
      ))}
    </Flex>
  );
};

CartsSkeleton.displayName = 'CartsSkeleton';
