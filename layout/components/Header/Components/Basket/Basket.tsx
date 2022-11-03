import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './Basket.module.scss';
import { priceRu } from '@/helpers';
import { AppContext } from '@/context';
import { CartBoldIcon } from '@/icons';
import { BasketProps } from './Basket.props';

export const Basket = ({ className }: BasketProps) => {
  const { basket } = useContext(AppContext);
  const count = basket.products.reduce((prev, curr) => prev + curr.qty, 0);
  const [basketCount, setBasketCount] = React.useState<number>(count);

  React.useEffect(() => {
    setBasketCount(count);
  }, [basket]);

  return (
    <div className={className}>
      {basket && basket.products.length > 0 ? (
        <Link href={{ pathname: '/basket' }}>
          <a className={styles.basketProduct}>
            <CartBoldIcon />
            <div className={styles.count}>{basketCount}</div>
            <span>{priceRu(basket.totalPrice)}</span>
          </a>
        </Link>
      ) : (
        <Link href={{ pathname: '/basket' }}>
          <a className={styles.basket}>
            <CartBoldIcon />
            <p>Корзина</p>
          </a>
        </Link>
      )}
    </div>
  );
};
