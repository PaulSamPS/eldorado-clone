import React from 'react';
import NumberFormat from 'react-number-format';
import styles from './Phone.module.scss';
import { Button } from '@/components/Ui';

type InputValueState = {
  formattedValue: string;
  value: string;
};

export const Phone = () => {
  const [values, setValues] = React.useState<InputValueState>({} as InputValueState);

  return (
    <div className={styles.wrapper}>
      <NumberFormat
        name='phone'
        format='+# (###) ###-##-##'
        mask='_'
        placeholder='+7 (123) 456-78-90'
        value={values.value}
        onValueChange={({ formattedValue, value }) => setValues({ formattedValue, value })}
      />
      <label htmlFor='phone'>Телефон</label>
      <Button appearance='primary' className={styles.btn} disabled={!values}>
        Получить код
      </Button>
    </div>
  );
};
