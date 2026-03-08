import { Card, CardContent, CardFooter, CardHeader } from '../../../components/cards/card';
import { Button } from '../../../components/ui/buttons';
import { Grid } from '../../../components/ui/layouts/grid';
import { Typography } from '../../../components/ui/typography/typography';
import type { Cart } from '../cart.types';

interface CartCardProps {
  item: Cart;
  onDetails: (cartId: string) => void;
}

export const CartCard = ({ item, onDetails }: CartCardProps) => {
  return (
    <Card variant="elevated">
      <CardHeader>
        <h3>Cart #{item.id}</h3>
        <span>User #: {item.userId}</span>
      </CardHeader>
      <CardContent>
        <Grid columns="repeat(2, 1fr)" rowGap={2} columnGap={4} alignItems="center" justifyItems="center">
          <Typography variant="label" color="subtitle">
            Total Products
          </Typography>
          <Typography variant="label" color="subtitle">
            Total Amount
          </Typography>

          <Typography variant="body">{item.totalProducts}</Typography>
          <Typography variant="body">{item.total}</Typography>
        </Grid>
      </CardContent>
      <CardFooter py={2} px={1}>
        <Button variant="primary" fullWidth onClick={() => onDetails(item.id)}>
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};
