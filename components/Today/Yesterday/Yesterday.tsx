import React from 'react';
import cn from 'classnames';
import styles from './Yesterday.module.scss';
import { H } from '@/components/Ui';
import { YesterdayProps } from './Yesterday.props';
import { Card } from './components';

export const Yesterday = ({ productsYesterday, className }: YesterdayProps) => (
  <div className={cn(styles.wrapper, className)}>
    <H tag='h2'>Товары прошлых дней</H>
    <div className={styles.product}>
      {productsYesterday.map((p) => (
        <Card key={p._id} productsYesterday={p} className={styles.item} />
      ))}
    </div>
  </div>
);
