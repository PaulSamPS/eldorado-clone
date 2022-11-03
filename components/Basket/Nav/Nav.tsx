import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './Nav.module.scss';
import { StepContext } from '@/context';

const nav = [
  { id: 0, name: 'Ваша корзина' },
  { id: 1, name: 'Пункт самовывоза' },
  { id: 2, name: 'Способ оплаты' },
  { id: 3, name: 'Подтверждение заказа' },
];

export const Nav = () => {
  const { step, setStep } = useContext(StepContext);

  return (
    <div className={styles.wrapper}>
      {nav.map((n, index) => (
        <div
          key={n.id}
          onClick={index < step ? () => setStep(index) : undefined}
          style={{ cursor: index < step ? 'pointer' : 'unset' }}
          className={cn(styles.triangles, {
            [styles.activeWhite]: step === index,
            [styles.activeGray]: index < step,
          })}
        >
          <div>
            <span>{n.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
