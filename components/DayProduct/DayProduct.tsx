import React, { useState } from 'react';
import Dots from '../Dots/Dots';
import CardItem from '../CardItem/CardItem';
import { DayProductProps } from './DayProduct.props';
import { IProduct } from '../../interfaces/product.interface';
import styles from './DayProduct.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Timer from '../Timer/Timer';
import Arrow from '../Ui/Arrow/Arrow';

const DayProduct = ({ product }: DayProductProps): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const { dayProducts } = useTypedSelector((state) => state.dayProductReducer);

  const IMG_WIDTH = 220;

  const left = () => {
    setOffset((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const right = () => {
    if (slideIndex === dayProducts.length - 1) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) => {
        return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (dayProducts.length - 1)));
      });
      setSlideIndex(slideIndex + 1);
    }
  };

  const dots = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
  };

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
