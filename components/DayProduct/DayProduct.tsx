import React from 'react';
import Dots from '../Dots/Dots';
import CardItem from '../CardItem/CardItem';
import { DayProductProps } from './DayProduct.props';
import { IProduct } from '../../interfaces/product.interface';
import styles from './DayProduct.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Timer from '../Timer/Timer';
import Arrow from '../Ui/Arrow/Arrow';
import { useSlider } from '../../hooks/useSlider';

const DayProduct = ({ product }: DayProductProps): JSX.Element => {
  const { dayProducts } = useTypedSelector((state) => state.dayProductReducer);
  const { offset, dots, left, right, slideIndex } = useSlider(220, dayProducts.length);

  return (
    <div className={styles.dayProductBlock}>
      <div className={styles.top}>
        <h2>Товары дня</h2>
        <Timer className={styles.timer} />
      </div>
      <div className={styles.wrapper}>
        {dayProducts.slice(0, 5).map((product: IProduct) => (
          <CardItem key={product._id} product={product} appearance='dayProduct' offset={offset} />
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

export default DayProduct;
