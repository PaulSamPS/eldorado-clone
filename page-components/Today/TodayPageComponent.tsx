import React from 'react';
import styles from './TodayPageComponent.module.scss';
import { TodayPageComponentProps } from './TodayPageComponent.props';
import { H } from '../../components/Ui/H/H';
import Timer from '../../components/Timer/Timer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { OtherDay, Today, Yesterday } from '../../components/Today';

export const TodayPageComponent = ({
  currentProduct,
  productsYesterday,
}: TodayPageComponentProps) => {
  const { dayProducts } = useAppSelector((state) => state.dayProductReducer);

  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <OtherDay currentProduct={currentProduct} dayProducts={dayProducts} />
        <Yesterday productsYesterday={productsYesterday} />
      </div>
      <div className={styles.main}>
        <H tag='h2'>Только сегодня!</H>
        <div className={styles.top}>
          <H tag='h2'>Товар дня</H>
          <div className={styles.endAction}>
            <span>До конца действия супер-цены осталось:</span>
            <Timer className={styles.timer} />
          </div>
        </div>
        <Today currentProduct={currentProduct} />
      </div>
    </div>
  );
};
