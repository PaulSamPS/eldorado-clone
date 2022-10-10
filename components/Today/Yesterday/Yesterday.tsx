import React from 'react';
import styles from './Yesterday.module.scss';
import { H } from '../../Ui/H/H';
import Link from 'next/link';
import { YesterdayProps } from './Yesterday.props';

export const Yesterday = ({ productsYesterday }: YesterdayProps) => {
  return (
    <div className={styles.wrapper}>
      <H tag='h2'>Товары прошлых дней</H>
      {productsYesterday.map((p) => (
        <div className={styles.cardYesterday} key={p._id}>
          <div className={styles.yesterdayLeft}>
            <img src={`http://localhost:5000/product/${p.name}/${p.img[0].fileName}`} alt='' />
          </div>
          <div className={styles.yesterdayRight}>
            <Link href={`/product/${p._id}`}>
              <a>{p.name}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
