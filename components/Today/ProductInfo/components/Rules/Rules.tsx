import React from 'react';
import styles from './Rules.module.scss';
import { H } from '../../../../Ui';

export const Rules = () => {
  return (
    <div className={styles.wrapper}>
      <H tag='h4'>Правила проведения акции &quot;Товар дня&quot;</H>
      <ol>
        <li>
          Товар дня не пересекается ни с какими другими акциями, кроме выдачи купонов, эльдокарт или
          эльдочеков.
        </li>
        <li>
          При участии товара дня в акциях по рассрочке, возможно его приобретение в льготный кредит.
        </li>
        <li>
          Дополнительные условия акции &quot;Товар дня&quot; уточняйте по телефону 8 800 250 25 25.
        </li>
      </ol>
    </div>
  );
};
