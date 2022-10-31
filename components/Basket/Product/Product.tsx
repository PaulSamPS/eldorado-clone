import React, { useContext } from 'react';
import { RemoveIcon } from '@/icons';
import styles from './Product.module.scss';
import { AppContext } from '@/context';
import { Card } from './components';
import { Button, H } from '@/components/Ui';
import { priceRu } from '@/helpers';

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
        <Card key={p.product._id} product={p} className={styles.card} />
      ))}
      <div className={styles.next}>
        <div className={styles.left}>
          <H tag='h1'>Выберите способ доставки</H>
          <label htmlFor='method'>
            <input type='radio' name='method' checked />
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
    </div>
  );
};
