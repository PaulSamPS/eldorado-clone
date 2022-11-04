import React from 'react';
import cn from 'classnames';
import { ReviewProps } from './Review.props';
import styles from './Review.module.scss';
import { ReviewIcon } from '@/icons';
import { endOf } from '@/helpers';

export const Review = ({ review, children, className, ...props }: ReviewProps): JSX.Element => (
  <div className={cn(styles.review, className)} {...props}>
    <ReviewIcon className={styles.reviewIcon} />
    {review <= 0 ? (
      <span>Добавить отзыв</span>
    ) : (
      <span>
        {review} &nbsp;
        {endOf(review, 'отзыв', 'отзыва', 'отзывов')}
      </span>
    )}
  </div>
);
