import React, { FC } from 'react';
import styles from './ProductReviews.module.scss';
import { Rating } from '../../../../components/ReusableComponents';
import { ProductReviewsProps } from './ProductReviews.props';

export const ProductReviews: FC<ProductReviewsProps> = ({ rating }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <span className={styles.name}>Name</span>
        <Rating rating={rating} isFully={true} />
      </div>
      <div className={styles.bottom}>
        <span className={styles.date}>Review Date</span>
        <span className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus expedita
          illum maxime minus nam numquam odit omnis porro qui quos sed, similique. Ab consectetur
          facilis iste numquam odit?
        </span>
      </div>
    </div>
  );
};
