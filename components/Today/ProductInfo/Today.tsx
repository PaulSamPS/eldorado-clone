import React from 'react';
import styles from './Today.module.scss';
import { H } from '../../Ui';
import { TodayProps } from './Today.props';
import { Buy, Carousel, Rules, Features } from './components';
import { Percent } from './components/Percent/Percent';
import {Rating, Review} from '../../ReusableComponents';

export const Today = ({ currentProduct }: TodayProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.left}>
          <H tag='h1'>{currentProduct?.name}</H>
          <div className={styles.rating}>
            <Rating rating={5} isFully className={styles.star} />
            <Review review={5} className={styles.comments} />
          </div>
          <div className={styles.productBlock}>
            <Percent currentProduct={currentProduct} />
            <Carousel currentProduct={currentProduct} />
          </div>
        </div>
        <div className={styles.right}>
          <Buy currentProduct={currentProduct} />
          <Features currentProduct={currentProduct} />
        </div>
      </div>
      <Rules />
    </div>
  );
};
