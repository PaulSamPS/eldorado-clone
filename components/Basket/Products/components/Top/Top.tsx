import React from 'react';
import styles from './Top.module.scss';
import { RemoveIcon } from '@/icons';
import { useAddToBasket } from '@/hooks';

const top = [
  { id: 0, name: 'Товар' },
  { id: 1, name: 'Цена' },
  { id: 2, name: 'Колличество' },
  { id: 3, name: 'Сумма' },
];

export const Top = () => {
  const { clearBasket } = useAddToBasket();

  return (
    <div className={styles.wrapper}>
      <div className={styles.clearBasket}>
        <RemoveIcon />
        <span onClick={clearBasket}>Очистить корзину</span>
      </div>
      <div className={styles.name}>
        {top.map((h) => (
          <div key={h.id}>{h.name}</div>
        ))}
      </div>
    </div>
  );
};
