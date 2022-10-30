import React from 'react';
import cn from 'classnames';
import styles from './Nav.module.scss';

const nav = [
  { id: 0, name: 'Ваша корзина' },
  { id: 1, name: 'Пункт самовывоза' },
  { id: 2, name: 'Способ оплаты' },
  { id: 3, name: 'Подтверждение заказа' },
];

export const Nav = () => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(3);
  console.log(nav.length);
  return (
    <div className={styles.wrapper}>
      {nav.map((n, index) => (
        <div key={n.id}>
          <div
            className={cn(styles.triangles, {
              [styles.activeWhite]: currentIndex === index && currentIndex !== nav.length - 1,
              [styles.activeGray]: index < currentIndex,
              [styles.lastGray]: currentIndex === nav.length - 1,
            })}
          >
            <span>{n.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
