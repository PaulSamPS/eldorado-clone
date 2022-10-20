import React from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => (
  <button
    type='button'
    className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}
    {...props}
  >
    {children}
  </button>
);
