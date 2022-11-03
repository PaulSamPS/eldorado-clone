import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from './Card.module.scss';
import { priceRu } from '@/helpers';
import { useAddToBasket } from '@/hooks';
import { CardProps } from './Card.props';
import { CloseIcon } from '@/icons';

export const Card = ({ product, className }: CardProps) => {
  const { ...props } = useAddToBasket(product.product);

  return (
    <div className={cn(styles.wrapper, className)} key={product.product._id}>
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
        <button className={styles.decrease} onClick={props.decrease} disabled={product.qty <= 1} />
        <div className={styles.count}>
          <input value={product.qty} onChange={(e) => props.increaseInput(e.target.value)} />
        </div>
        <button
          className={styles.increase}
          onClick={props.addToBasket}
          disabled={product.qty >= product.product.inStock}
        />
      </div>
      <span className={styles.totalSum}>{priceRu(product.product.price * product.qty)}</span>
      <div className={styles.delete} onClick={props.deleteProduct}>
        <CloseIcon />
      </div>
    </div>
  );
};
