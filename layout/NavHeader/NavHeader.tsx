import React from 'react';
import { CatalogIcon } from '../../icons';
import styles from './NavHeader.module.scss';

export const NavHeader = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.btn}>
        <li className={styles.catalog}>
          <CatalogIcon />
          <a href={'#'}>Каталог</a>
        </li>
        <li className={styles.item}>
          <a href={'#'}>Акции</a>
        </li>
      </ul>
      <div className={styles.bgGrey}></div>
    </div>
  );
};
