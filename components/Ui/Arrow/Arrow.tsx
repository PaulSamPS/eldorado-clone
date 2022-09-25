import React from 'react';
import cn from 'classnames';
import { ArrowProps } from './Arrow.props';
import styles from './Arrow.module.scss';
import { ArrowIcon } from '../../../icons';

const Arrow = ({ className, appearance, background, ...props }: ArrowProps): JSX.Element => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.arrowRight]: appearance == 'right',
        [styles.arrowLeft]: appearance == 'left',
        [styles.backgroundWhite]: background == 'white',
        [styles.backgroundNone]: background == 'none',
      })}
      {...props}
    >
      <ArrowIcon />
    </button>
  );
};

export default Arrow;
