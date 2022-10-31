import React, { useContext } from 'react';
import Link from 'next/link';
import { RemoveIcon } from '@/icons';
import styles from './Product.module.scss';
import { AppContext } from '@/context';
import { priceRu } from '@/helpers';
import { useAddToBasket } from '@/hooks';
import { Card } from './components';

const header = [
  { id: 0, name: 'Товар' },
  { id: 1, name: 'Цена' },
  { id: 2, name: 'Колличество' },
  { id: 3, name: 'Сумма' },
];

export const Product = () => {
  const { basket } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.clearBasket}>
          <RemoveIcon />
          <span>Очистить корзину</span>
        </div>
        <div className={styles.name}>
          {header.map((h) => (
            <div key={h.id}>{h.name}</div>
          ))}
        </div>
      </div>
      {basket.products.map((p) => (
        <Card key={p.product._id} product={p} />
      ))}
    </div>
  );
};
