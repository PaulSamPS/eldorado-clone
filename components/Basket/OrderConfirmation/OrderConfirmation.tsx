import React from 'react';
import { Total, Auth } from '@/components/ReusableComponents';
import { H } from '@/components/Ui';
import styles from './OrderConfirmation.module.scss';
import { Inputs } from './components';

export const OrderConfirmation = () => (
  <div className={styles.wrapper}>
    <H tag='h3'>Контактное лицо</H>
    <span className={styles.subtitle}>все поля формы обязательны для заполнения</span>
    <div className={styles.content}>
      <div className={styles.form}>
        <Auth />
        <Inputs />
      </div>
      <Total />
    </div>
  </div>
);
