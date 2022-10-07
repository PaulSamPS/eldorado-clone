import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>Эльдорадо</div>
    </div>
  );
};
