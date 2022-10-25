import React from 'react';
import cn from 'classnames';
import styles from './OtherDay.module.scss';
import { H } from '../../Ui';
import { OtherDayProps } from './OtherDay.props';
import { Card } from './components/Card/Card';

export const OtherDay = ({ dayProducts, currentProduct, className }: OtherDayProps) => (
  <div className={cn(styles.wrapper, className)}>
    <H tag='h2'>Другие товары дня</H>
    <div className={styles.product}>
      {dayProducts.map((i) => (
        <Card key={i._id} currentProduct={currentProduct!} dayProduct={i} className={styles.item} />
      ))}
    </div>
  </div>
);
