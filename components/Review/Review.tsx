import React from 'react';
import { ReviewProps } from './Review.props';
import styles from './Review.module.scss';
import { ReviewIcon } from '../../icons';

const Review = ({ review, children, className, ...props }: ReviewProps): JSX.Element => {
  return (
    <div {...props} className={styles.review}>
      <ReviewIcon className={styles.reviewIcon} />
      {review <= 0 ? (
        <span>Добавить отзыв</span>
      ) : review === 1 ? (
        <span>{review} отзыв</span>
      ) : (
        <span>{review} отзыва</span>
      )}
    </div>
  );
};

export default Review;
