import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Card.module.scss';
import { priceRu } from '@/helpers';
import { CardProps } from './Card.props';

export const Card = ({ currentProduct, dayProduct, className }: CardProps) => (
  <Link href={{ pathname: '/today', query: { id: dayProduct._id } }} key={dayProduct._id}>
    <a>
      <div
        className={cn(styles.card, className, {
          [styles.active]: dayProduct._id === currentProduct?._id,
        })}
      >
        <div className={styles.percent}>
          {`-${Math.floor(
            ((dayProduct.oldPrice! - dayProduct.price) / dayProduct.oldPrice!) * 100
          )}%`}
        </div>
        <div className={styles.left}>
          <img
            src={`http://localhost:5000/product/${dayProduct.name}/${dayProduct.img[0].fileName}`}
            alt={dayProduct.name}
            title={dayProduct.name}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.sale}>
            <span className={styles.oldPrice}>{priceRu(dayProduct.oldPrice)}</span>
            <span className={styles.discount}>
              -{priceRu(dayProduct.oldPrice! - dayProduct.price)}
            </span>
          </div>
          <span className={styles.price}>{priceRu(dayProduct.price)}</span>
          <p className={styles.name}>{dayProduct.name}</p>
        </div>
      </div>
    </a>
  </Link>
);
