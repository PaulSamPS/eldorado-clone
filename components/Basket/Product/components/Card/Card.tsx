import React from 'react';
import Link from 'next/link';
import styles from './Card.module.scss';
import { priceRu } from '@/helpers';
import { useAddToBasket } from '@/hooks';
import { CardProps } from './Card.props';

export const Card = ({ product }: CardProps) => {
  const { addToBasket, decrease } = useAddToBasket(product.product);

  return (
    <div className={styles.wrapper} key={product.product._id}>
      <div className={styles.image}>
        <img
          src={`http://localhost:5000/product/${product.product.name}/${product.product.img[0].fileName}`}
          alt={product.product.name}
          title={product.product.name}
        />
      </div>
      <Link href={{ pathname: '/product', query: { id: product.product._id } }}>
        <a className={styles.productName}>{product.product.name}</a>
      </Link>
      <span className={styles.price}>{priceRu(product.product.price)}</span>
      <div className={styles.qty}>
        <div className={styles.decrease} onClick={decrease} />
        <div className={styles.count}>
          <input value={product.qty} />
        </div>
        <div className={styles.increase} onClick={addToBasket} />
      </div>
      <span className={styles.totalSum}>{priceRu(product.product.price * product.qty)}</span>
    </div>
  );
};
