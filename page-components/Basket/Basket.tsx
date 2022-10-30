import React from 'react';
import styles from './Basket.module.scss';
import { Nav, Product } from '@/components/Basket';

export const Basket = () => (
  <div className={styles.wrapper}>
    <Nav />
    <Product />
  </div>
);
