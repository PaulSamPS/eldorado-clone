import React from 'react';
import styles from './Today.module.scss';
import { H } from '../../Ui';
import { TodayProps } from './Today.props';
import { Rules, Features } from './components';
import { Percent } from './components/Percent/Percent';
import { Carousel, Rating, Review, Buy } from '../../ReusableComponents';
import { ZoomModal } from '../../ReusableComponents/ZoomModal/ZoomModal';

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
            <div className={styles.carousel}>
              <Carousel currentProduct={currentProduct} imageWidth={240} />
              <ZoomModal currentProduct={currentProduct} />
            </div>
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
