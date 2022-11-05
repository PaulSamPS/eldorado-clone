import React from 'react';
import styles from './Inputs.module.scss';
import { Input } from '@/components/Ui';

export const Inputs = () => (
  <>
    <div className={styles.input}>
      <Input appearance='auth' name='e-mail' type='email' />
      <label htmlFor='e-mail'>E-mail</label>
    </div>
    <div className={styles.input}>
      <Input appearance='auth' name='first name' type='text' />
      <label htmlFor='first name'>Имя</label>
    </div>
    <div className={styles.input}>
      <Input appearance='auth' name='last name' type='text' />
      <label htmlFor='last name'>Фамилия</label>
    </div>
  </>
);
