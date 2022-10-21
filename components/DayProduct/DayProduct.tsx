import React from 'react';
import styles from './DayProduct.module.scss';
import { DayProductProps } from './DayProduct.props';
import { Item } from './Card';
import { useSlider } from '../../hooks/useSlider';
import { IProduct } from '../../interfaces/product.interface';
import { H, Arrow } from '../Ui';
import { Dots, Timer } from '../ReusableComponents';
import { $host } from '../../http/axios';

export const DayProduct = ({ dayProducts }: DayProductProps): JSX.Element => {
  const { offset, dots, left, right, slideIndex } = useSlider({
    imageWidth: 220,
    arrLength: dayProducts.length,
  });

  const setDayProducts = async () => {
    await $host.post('day-products');
  };

  return (
    <div className={styles.dayProductBlock}>
      <div className={styles.top}>
        <H tag='h2'>Товары дня</H>
        <Timer className={styles.timer} onClick={setDayProducts} />
      </div>
      <div className={styles.wrapper}>
        {dayProducts.map((product: IProduct) => (
          <Item key={product._id} product={product} appearance='dayProduct' offset={offset} />
        ))}
        <Arrow appearance='left' background='white' onClick={left} />
        <Arrow appearance='right' background='white' onClick={right} />
      </div>
      <div className={styles.bl}>
        <Dots className={styles.dots} slideIndex={slideIndex} dots={dots} arr={dayProducts} />
      </div>
    </div>
  );
};
