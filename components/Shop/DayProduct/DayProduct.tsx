import React from 'react';
import Dots from '../../Dots/Dots';
import CardItem from '../../CardItem/CardItem';
import { DayProductProps } from './DayProduct.props';
import { IProduct } from '../../../interfaces/product.interface';
import styles from './DayProduct.module.scss';
import Timer from '../../Timer/Timer';
import Arrow from '../../Ui/Arrow/Arrow';
import { useSlider } from '../../../hooks/useSlider';
import { H } from '../../Ui/H/H';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const DayProduct = ({ dayProducts }: DayProductProps): JSX.Element => {
  const dayProductsRedux = useAppSelector((state) => state.dayProductReducer.dayProducts);
  const { offset, dots, left, right, slideIndex } = useSlider(220, dayProductsRedux.length);

  return (
    <div className={styles.dayProductBlock}>
      <div className={styles.top}>
        <H tag='h2'>Товары дня</H>
        <Timer className={styles.timer} />
      </div>
      <div className={styles.wrapper}>
        {dayProductsRedux.map((product: IProduct) => (
          <CardItem key={product._id} product={product} appearance='dayProduct' offset={offset} />
        ))}
        <Arrow appearance='left' background='white' onClick={left} />
        <Arrow appearance='right' background='white' onClick={right} />
      </div>
      <div className={styles.bl}>
        <Dots className={styles.dots} slideIndex={slideIndex} dots={dots} arr={dayProductsRedux} />
      </div>
    </div>
  );
};
