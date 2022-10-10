import React from 'react';
import styles from './Nav.module.scss';
import { Button } from '../../../../Ui/Button/Button';

export const Nav = () => {
  return (
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
};
