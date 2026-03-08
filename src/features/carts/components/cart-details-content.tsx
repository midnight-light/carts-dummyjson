import { useCartDetails } from '../hooks/use-cart-details';
import { Button } from '../../../components/ui/buttons/button';
import { Typography } from '../../../components/ui/typography/typography';
import { Flex } from '../../../components/ui/layouts/flex';
import { Card, CardContent, CardFooter } from '../../../components/cards/card';
import { ProductItem } from '../../products/components/product-item';
import type { Product } from '../cart.types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { formatPrice } from '../../../utils/format-price';

const StyledProductsContainer = styled(Flex)`
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gap.md}px;
  align-items: center;
  max-height: 25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: columns;
    justify-content: center;
  }
`;

export const CartDetailsContent: React.FC = () => {
  const {
    data: { cart },
    actions: { goBack },
  } = useCartDetails();

  const [updatedProducts, setUpdatedProducts] = useState<Map<Product['id'], Product>>(() => new Map());
  const [addedPrice, setAddedPrice] = useState(0);

  const isDirty = useMemo(() => updatedProducts.size > 0, [updatedProducts]);

  const handleUpdateCart = useCallback((product: Product) => {
    setUpdatedProducts((prev) => new Map(prev).set(product.id, product));
  }, []);

  const mergedProducts = useMemo(
    () => cart.products.map((p) => updatedProducts.get(p.id) ?? p),
    [cart.products, updatedProducts],
  );

  const computedTotal = useMemo(
    () => mergedProducts.reduce((sum, p) => sum + p.price * p.quantity, 0),
    [mergedProducts],
  );

  const computedTotalQuantity = useMemo(() => mergedProducts.reduce((sum, p) => sum + p.quantity, 0), [mergedProducts]);

  useEffect(() => {
    console.warn('updatedProducts', Array.from(updatedProducts.values()));
  }, [updatedProducts]);

  return (
    <Flex direction="column" gap={4} fullWidth align="center" className="cart-details-content">
      <Flex align="center" justify="space-between" fullWidth px={4} py={4}>
        <Typography variant="h2">Cart #{cart.id}</Typography>
        <Card variant="elevated" p={4}>
          <CardContent pb={0}>
            <Flex direction="row" gap={2} fullWidth justify="center" align="center">
              <Typography variant="label">{computedTotalQuantity} шт.</Typography>
              <Typography variant="label">на сумму {formatPrice(computedTotal)}</Typography>
            </Flex>
          </CardContent>
          <CardFooter pt={2}>
            <Flex direction="row" gap={2} fullWidth justify="center" align="center">
              <Typography variant="label" color="success">
                сэкономлено: {formatPrice(cart.discountedTotal)}
              </Typography>
            </Flex>
          </CardFooter>
        </Card>
        <Button variant="secondary" size="sm" onClick={goBack}>
          Back
        </Button>
      </Flex>

      <StyledProductsContainer>
        {cart.products.map((product) => (
          <ProductItem key={product.id} product={product} onUpdate={handleUpdateCart} />
        ))}
      </StyledProductsContainer>
      {isDirty && (
        <Button variant="primary" size="sm">
          Save Cart
        </Button>
      )}
    </Flex>
  );
};

CartDetailsContent.displayName = 'CartDetailsContent';
