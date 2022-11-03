import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { CatalogIcon } from '@/icons';
import styles from './Nav.module.scss';

const nav = [
  { id: 0, name: 'Все акции' },
  { id: 1, name: 'Экспресс-доставка' },
  { id: 2, name: 'Доступные цены' },
  { id: 3, name: 'Iphone 14' },
  { id: 4, name: 'Гарантия низкой цены' },
];

export const Nav = () => (
  <div className={styles.wrapper}>
    <ul className={styles.btn}>
      <li className={styles.catalog}>
        <CatalogIcon />
        <Link href='/catalog'>
          <a>Каталог</a>
        </Link>
      </li>
      {nav.map((n) => (
        <li key={n.id} className={styles.item}>
          <a
            href='layout/components/Nav/Nav#'
            className={cn({ [styles.red]: n.name.toLowerCase() === 'все акции' })}
          >
            {n.name}
          </a>
        </li>
      ))}
      <li className={styles.last} />
    </ul>
  </div>
);
