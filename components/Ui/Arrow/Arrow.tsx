import React from 'react';
import cn from 'classnames';
import { ArrowProps } from './Arrow.props';
import styles from './Arrow.module.scss';
import { ArrowIcon } from '@/icons';

export const Arrow = ({ className, appearance, background, ...props }: ArrowProps): JSX.Element => (
  <button
    type='button'
    className={cn(styles.btn, className, {
      [styles.arrowRight]: appearance === 'right',
      [styles.arrowLeft]: appearance === 'left',
      [styles.backgroundWhite]: background === 'white',
      [styles.backgroundNone]: background === 'none',
    })}
    {...props}
  >
    <ArrowIcon />
  </button>
);
