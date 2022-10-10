import React from 'react';
import styles from './AdminPageComponent.module.scss';
import { Add } from '../../components/Admin/Product';

export const AdminPageComponent = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav}>
        <li>Добавить продукт</li>
      </ul>
      <Add />
    </div>
  );
};
