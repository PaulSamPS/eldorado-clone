import React from 'react';
import { Button } from '../../../Ui';
import styles from './Nav.module.scss';

export const Nav = () => (
  <div className={styles.nav}>
    <Button appearance='ghost' className={styles.btn}>
      Персональная подборка
    </Button>
    <Button appearance='ghost' className={styles.btn}>
      Хиты продаж
    </Button>
    <Button appearance='ghost' className={styles.btn}>
      Топ новинок
    </Button>
  </div>
);
