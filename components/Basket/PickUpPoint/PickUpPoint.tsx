import React from 'react';
import styles from './PickUpPoint.module.scss';
import { H } from '@/components/Ui';
import { Top, Shop } from './components';
import { Total } from '@/components/ReusableComponents';

export const PickUpPoint = () => (
  <div className={styles.wrapper}>
    <Top />
    <div className={styles.content}>
      <div className={styles.shopList}>
        <H tag='h2'>Магазины «Эльдорадо»</H>
        <Shop />
      </div>
      <Total />
    </div>
  </div>
);
