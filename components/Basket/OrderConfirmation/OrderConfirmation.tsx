import React from 'react';
import { Total } from '@/components/ReusableComponents';
import { H } from '@/components/Ui';
import styles from './OrderConfirmation.module.scss';

export const OrderConfirmation = () => (
  <div className={styles.wrapper}>
    <H tag='h2'>Контактное лицо</H>
    <span>все поля формы обязательны для заполнения</span>
    <div className={styles.form}>
      <div className={styles.input}>
        <input name='email' type='email' />
        <label htmlFor='email'>E-mail</label>
      </div>
      <div className={styles.input}>
        <input name='name' type='text' />
        <label htmlFor='name'>Имя</label>
      </div>
    </div>
    <Total />
  </div>
);
