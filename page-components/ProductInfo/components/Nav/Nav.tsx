import React, { FC } from 'react';
import styles from './Nav.module.scss';
import cn from 'classnames';
import { NavProps } from './Nav.props';

const info = [
  { id: 1, name: 'Характеристики' },
  { id: 2, name: 'Отзывы' },
];

export const Nav: FC<NavProps> = ({ itemIndex, setItemIndex }) => {
  return (
    <div className={styles.wrapper}>
      {info.map((i: any, index: number) => (
        <ul
          key={i.id}
          onClick={() => setItemIndex(index)}
          className={cn({
            [styles.activeNav]: itemIndex === index,
          })}
        >
          <li>{i.name}</li>
        </ul>
      ))}
    </div>
  );
};
