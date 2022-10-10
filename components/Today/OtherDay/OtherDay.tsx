import React from 'react';
import styles from './OtherDay.module.scss';
import { H } from '../../Ui/H/H';
import Link from 'next/link';
import cn from 'classnames';
import { priceRu } from '../../../helpers/priceRu';
import { OtherDayProps } from './OtherDay.props';

export const OtherDay = ({ dayProducts, currentProduct }: OtherDayProps) => {
  return (
    <div className={styles.wrapper}>
      <H tag='h2'>Другие товары дня</H>
      {dayProducts
        .filter((p) => p.oldPrice > 0)
        .map((i) => (
          <Link href={`/today/${i._id}`} key={i._id}>
            <a>
              <div className={cn(styles.card, { [styles.active]: i._id === currentProduct?._id })}>
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
  );
};
