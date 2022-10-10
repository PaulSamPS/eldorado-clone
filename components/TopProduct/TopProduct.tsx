import React, { useState } from 'react';
import { TopProductProps } from './TopProduct.props';
import cn from 'classnames';
import { IProduct } from '../../interfaces/product.interface';
import styles from './TopProduct.module.scss';
import Arrow from '../Ui/Arrow/Arrow';
import { H } from '../Ui/H/H';
import { Card, Nav } from './components';

const TopProduct = ({ className, product }: TopProductProps): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const IMG_WIDTH = 182;

  const prevSlide = () => {
    setOffset((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const nextSlide = () => {
    if (slideIndex === product.length - 5) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) => {
        return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (product.length - 5)));
      });
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className={cn(styles.wrapperSwipe, className)}>
      <H tag='h2'>Рекомендуем вам</H>
      <Arrow
        appearance='left'
        background='white'
        onClick={prevSlide}
        className={styles.arrowLeft}
      />
      <Arrow
        appearance='right'
        background='white'
        onClick={nextSlide}
        className={styles.arrowRight}
      />
      <Nav />
      <div className={styles.cardBlock}>
        <div className={styles.cardGrid}>
          {product.map((product: IProduct) => (
            <Card key={product._id} product={product} offset={offset} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
