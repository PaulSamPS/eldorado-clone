import React, { useContext } from 'react';
import { AppContext } from '@/context';
import styles from './Product.module.scss';
import { Top, Empty, Card, NextStep } from './components';
import { useAppSelector } from '../../../hooks/redux';

export const Products = () => {
  const { basket } = useAppSelector((state) => state.basket);

  return (
    <>
      {basket && basket.products.length > 0 ? (
        <>
          <Top />
          {basket.products.map((p) => (
            <Card key={p.product._id} product={p} className={styles.card} />
          ))}
          <NextStep />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};
