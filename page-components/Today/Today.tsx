import React from 'react';
import styles from './Today.module.scss';
import { TodayProps } from './Today.props';
import { H } from '@/components/Ui';
import { OtherDay, Info, Yesterday } from '@/components/Today';
import { Timer } from '@/components/ReusableComponents';

export const Today = ({ currentProduct, productsYesterday, dayProducts }: TodayProps) => (
  <div className={styles.wrapper}>
    <OtherDay
      currentProduct={currentProduct}
      dayProducts={dayProducts}
      className={styles.otherDay}
    />
    <Yesterday productsYesterday={productsYesterday} className={styles.yesterday} />
    <div className={styles.main}>
      <H tag='h2'>Только сегодня!</H>
      <div className={styles.top}>
        <H tag='h2'>Товар дня</H>
        <div className={styles.endAction}>
          <span className={styles.text}>До конца действия супер-цены осталось:</span>
          <Timer className={styles.timer} />
        </div>
      </div>
      <Info currentProduct={currentProduct} />
    </div>
  </div>
);
