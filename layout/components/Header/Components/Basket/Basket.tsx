import React, { useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import styles from './Basket.module.scss';
import { priceRu } from '@/helpers';
import { AppContext } from '@/context';
import { CartBoldIcon } from '@/icons';
import { BasketProps } from './Basket.props';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux';
import { BasketInterface } from '@/interfaces';
import { setSuccessBasket } from '../../../../../redux/reducers/basketReducer';
import { $host } from '@/http';

export const Basket = ({ className }: BasketProps) => {
  // const { basket } = useContext(AppContext);
  const { basket } = useAppSelector((state) => state.basket);
  const count = basket ? basket.products.reduce((prev, curr) => prev + curr.qty, 0) : 0;
  const [basketCount, setBasketCount] = React.useState<number>(count);
  const dispatch = useAppDispatch();

  const getBasket = async () => {
    const res = await $host.get<BasketInterface>('basket');
    dispatch(setSuccessBasket(res.data));
  };

  React.useEffect(() => {
    getBasket();
  }, []);

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
