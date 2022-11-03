import React from 'react';
import styles from './Empty.module.scss';
import { EmptyBasketIcon } from '@/icons';

export const Empty = () => (
  <div className={styles.wrapper}>
    <EmptyBasketIcon />
  </div>
);
