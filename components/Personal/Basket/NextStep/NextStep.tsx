import React, { useContext } from 'react';
import styles from './NextStep.module.scss';
import { Button, H } from '@/components/Ui';
import { priceRu } from '@/helpers';
import { AppContext } from '@/context';

export const NextStep = () => {
  const { basket } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <H tag='h1'>Выберите способ доставки</H>
        <label htmlFor='method'>
          <input type='radio' name='method' checked readOnly />
          <span>Самовывоз</span>
        </label>
      </div>
      <div className={styles.right}>
        <H tag='h1'>Итого</H>
        <ul>
          <li>
            <span>Товаров на</span>
            <span className={styles.value}>{priceRu(basket.totalPrice)}</span>
          </li>
          <li>
            <span>Самовывоз</span>
            <span className={styles.value}>Бесплатно</span>
          </li>
          <li className={styles.total}>
            <span>Всего к оплате</span>
            <span className={styles.totalValue}>{priceRu(basket.totalPrice)}</span>
          </li>
          <Button appearance='primary'>Продолжить</Button>
        </ul>
      </div>
    </div>
  );
};
