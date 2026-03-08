import { Card, CardContent, CardFooter, CardHeader } from '../../../components/cards/card';
import type { Product } from '../../carts/cart.types';
import { Typography } from '../../../components/ui/typography/typography';
import { Flex } from '../../../components/ui/layouts/flex';
import { Button } from '../../../components/ui/buttons';
import { useMemo, useState } from 'react';
import { formatPrice } from '../../../utils/format-price';

interface ProductItemProps {
  product: Product;
  onUpdate: (product: Product) => void;
}

export const ProductItem = ({ product, onUpdate }: ProductItemProps) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    setQuantity(value);
    onUpdate({ ...product, quantity: value });
  };

  const totalPrice = useMemo(() => product.price * quantity, [product.price, quantity]);

  return (
    <Card variant="elevated" p={0}>
      <CardHeader>
        <Typography variant="label">{product.title}</Typography>
        <Typography variant="label">{formatPrice(product.price)} / шт.</Typography>
      </CardHeader>
      <CardContent py={4} px={2} maxHeight="10rem">
        <Flex align="center" gap={3} justify="center" direction="row">
          <Button variant="primary" size="icon" onClick={() => handleQuantityChange(quantity - 1)}>
            -
          </Button>
          <Typography variant="label">{quantity}</Typography>
          <Button variant="primary" size="icon" onClick={() => handleQuantityChange(quantity + 1)}>
            +
          </Button>
          <Typography variant="h2">Итого: {formatPrice(totalPrice)}</Typography>
        </Flex>
      </CardContent>
    </Card>
  );
};
