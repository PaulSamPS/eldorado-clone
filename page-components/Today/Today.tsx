import React from 'react';
import styles from './Today.module.scss';
import { TodayProps } from './Today.props';
import { priceRu } from '../../helpers/priceRu';
import Link from 'next/link';

export const Today = ({ products, currentProduct }: TodayProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        {products
          .filter((p) => p.oldPrice > 0)
          .map((i) => (
            <Link href={`/today/${i._id}`} key={i._id}>
              <a>
                <div className={styles.card}>
                  <div className={styles.percent}>
                    {'-' + Math.floor(((i.oldPrice! - i.price) / i.oldPrice!) * 100) + '%'}
                  </div>
                  <div className={styles.left}>
                    <img
                      src={`http://localhost:5000/product/${i.name}/${i.img[0].fileName}`}
                      alt={i.name}
                    />
                  </div>
                  <div className={styles.right}>
                    <div className={styles.sale}>
                      <span className={styles.oldPrice}>{priceRu(i.oldPrice)}</span>
                      <span className={styles.discount}>-{priceRu(i.oldPrice! - i.price)}</span>
                    </div>
                    <span className={styles.price}>{priceRu(i.price)}</span>
                    <p className={styles.name}>{i.name}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
      <div className={styles.main}>
        <img
          src={`http://localhost:5000/product/${currentProduct!.name}/${
            currentProduct!.img[0].fileName
          }`}
          alt={currentProduct!.name}
        />
      </div>
    </div>
  );
};
