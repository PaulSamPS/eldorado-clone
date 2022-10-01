import React from 'react';
import styles from './AdminPanel.module.scss';
import AddProduct from './AddProduct';

export const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav}>
        <li>Добавить продукт</li>
      </ul>
      <AddProduct />
    </div>
  );
};
