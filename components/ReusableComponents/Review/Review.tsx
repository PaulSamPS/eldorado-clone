import React from 'react';
import { ReviewProps } from './Review.props';
import styles from './Review.module.scss';
import { ReviewIcon } from '../../../icons';
import cn from 'classnames';

export const Review = ({ review, children, className, ...props }: ReviewProps): JSX.Element => {
  return (
    <div className={cn(styles.review, className)} {...props}>
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
