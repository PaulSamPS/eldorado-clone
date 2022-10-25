import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card = ({ productsYesterday, className }: CardProps) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.yesterdayLeft}>
      <img
        src={`http://localhost:5000/product/${productsYesterday.name}/${productsYesterday.img[0].fileName}`}
        alt=''
      />
    </div>
    <div className={styles.yesterdayRight}>
      <Link href={`/product/${productsYesterday._id}`}>
        <a>{productsYesterday.name}</a>
      </Link>
    </div>
  </div>
);
