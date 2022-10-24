import React from 'react';
import cn from 'classnames';
import styles from './DayProduct.module.scss';
import { DayProductProps } from './DayProduct.props';
import { Item } from './Card';
import { useScreenWidth, useSlider } from '@/hooks';
import { IProduct } from '@/interfaces';
import { H, Arrow } from '@/components/Ui';
import { Dots, Timer } from '@/components/ReusableComponents';
import { $host } from '@/http';
import { WidthContainer } from '@/helpers';

export const DayProduct = ({ dayProducts, className }: DayProductProps): JSX.Element => {
  const { offset, dots, left, right, slideIndex } = useSlider({
    imageWidth: 220,
    arrLength: dayProducts.length,
  });

  const screenWidth = useScreenWidth();

  const setDayProducts = async () => {
    await $host.post('day-products');
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.top}>
        <H tag='h2'>Товары дня</H>
        <Timer className={styles.timer} onClick={setDayProducts} />
      </div>
      <div className={styles.dayProductBlock}>
        {dayProducts.map((product: IProduct) => (
          <Item
            key={product._id}
            product={product}
            appearance='dayProduct'
            offset={offset}
            className={styles.item}
          />
        ))}
        {screenWidth > WidthContainer && (
          <>
            <Arrow appearance='left' background='white' onClick={left} />
            <Arrow appearance='right' background='white' onClick={right} />
          </>
        )}
      </div>
      {screenWidth > 1000 && (
        <div className={styles.bl}>
          <Dots className={styles.dots} slideIndex={slideIndex} dots={dots} arr={dayProducts} />
        </div>
      )}
    </div>
  );
};
