import React from 'react';
import styles from './Empty.module.scss';
import { EmptyBasket } from '@/icons';

export const Empty = () => (
  <div className={styles.wrapper}>
    <EmptyBasket />
  </div>
);
