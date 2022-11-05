import React from 'react';
import NumbrerFormat from 'react-number-format';
import { Total } from '@/components/ReusableComponents';
import { H } from '@/components/Ui';
import styles from './OrderConfirmation.module.scss';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const OrderConfirmation = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);
  return (
    <div className={styles.wrapper}>
      <H tag='h2'>Контактное лицо</H>
      <span>все поля формы обязательны для заполнения</span>
      <div className={styles.form}>
        <div className={styles.input}>
          <NumbrerFormat
            className='field'
            format='+# (###) ###-##-##'
            mask='_'
            placeholder='+7 (123) 456-78-90'
            value={values.value}
            onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
          />
        </div>
        <div className={styles.input}>
          <input name='e-mail' type='email' />
          <label htmlFor='e-mail'>E-mail</label>
        </div>
        <div className={styles.input}>
          <input name='first name' type='text' />
          <label htmlFor='first name'>Имя</label>
        </div>
        <div className={styles.input}>
          <input name='last name' type='text' />
          <label htmlFor='last name'>Фамилия</label>
        </div>
      </div>
      <Total />
    </div>
  );
};
