import React from 'react';
import { Total } from '@/components/ReusableComponents';
import styles from './Payment.module.scss';

export const Payment = () => (
  <div className={styles.wrapper}>
    <div className={styles.payment}>
      <div className={styles.method}>
        <label htmlFor='method'>
          <input type='radio' name='method' checked readOnly />
          <span>Оплата при получении</span>
        </label>
      </div>
    </div>
    <Total />
  </div>
);
