import React from 'react';
import styles from './Percent.module.scss';
import { PercentProps } from './Percent.props';

export const Percent = ({ currentProduct }: PercentProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.totalPercent}>
        {Math.floor(
          ((currentProduct!.oldPrice! - currentProduct!.price) / currentProduct!.oldPrice!) * 100
        )}
        <div>%</div>
      </span>
      <span>скидка</span>
    </div>
  );
};
