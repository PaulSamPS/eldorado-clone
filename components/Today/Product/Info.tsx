import React from 'react';
import styles from './Info.module.scss';
import { H } from '@/components/Ui';
import { InfoProps } from './Info.props';
import { Rules, Features } from './components';
import { Percent } from './components/Percent/Percent';
import { Carousel, Rating, Review, Buy, ZoomModal } from '@/components/ReusableComponents';

export const Info = ({ currentProduct }: InfoProps) => (
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
