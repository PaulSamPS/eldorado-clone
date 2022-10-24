import React from 'react';
import styles from './MobileMenu.module.scss';
import {
  MobileMainIcon,
  MobileCatalogIcon,
  CartBoldIcon,
  MobileLoginIcon,
  MobileMenuIcon,
} from '@/icons';
import { Button } from '@/components/Ui';

export const MobileMenu = () => (
  <div className={styles.wrapper}>
    <div className={styles.itemsWrapper}>
      <a className={styles.item}>
        <span className={styles.main}>
          <MobileMainIcon />
        </span>
        Главная
      </a>
      <Button appearance='ghost' className={styles.item}>
        <span className={styles.main}>
          <MobileCatalogIcon />
        </span>
        Каталог
      </Button>
      <a className={styles.item}>
        <span>
          <CartBoldIcon />
        </span>
        Корзина
      </a>
      <Button appearance='ghost' className={styles.item}>
        <span>
          <MobileLoginIcon />
        </span>
        Кабинет
      </Button>
      <Button appearance='ghost' className={styles.item}>
        <span>
          <MobileMenuIcon />
        </span>
        Меню
      </Button>
    </div>
  </div>
);
