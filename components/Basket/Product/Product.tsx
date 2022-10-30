import React, { useContext } from 'react';
import Link from 'next/link';
import { RemoveIcon } from '@/icons';
import styles from './Product.module.scss';
import { AppContext } from '@/context';
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
        <div className={styles.card} key={p.product._id}>
          <div className={styles.image}>
            <img
              src={`http://localhost:5000/product/${p.product.name}/${p.product.img[0].fileName}`}
              alt={p.product.name}
              title={p.product.name}
            />
          </div>
          <Link href={{ pathname: '/product', query: { id: p.product._id } }}>
            <a className={styles.productName}>{p.product.name}</a>
          </Link>
          <span className={styles.price}>{priceRu(p.product.price)}</span>
          <div>{p.qty}</div>
          <span>{priceRu(p.product.price * p.qty)}</span>
        </div>
      ))}
    </div>
  );
};
