import React, { useContext } from 'react';
import { NextStep, Top, Empty, Card } from '@/components/Personal/Basket';
import { AppContext } from '@/context';
import styles from './Basket.module.scss';

export const Basket = () => {
  const { basket } = useContext(AppContext);
  return (
    <div className={styles.wrapper}>
      {basket.products.length > 0 ? (
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
    </div>
  );
};
