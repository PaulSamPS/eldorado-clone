import React from 'react';
import styles from './Empty.module.scss';
import { EmptyBasketIcon } from '@/icons';
import { H } from '@/components/Ui';

export const Empty = () => (
  <div className={styles.wrapper}>
    <EmptyBasketIcon />
    <H tag='h2'>Корзина пуста</H>
  </div>
);
