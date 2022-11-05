import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = forwardRef(
  (
    { appearance, className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => (
    <div className={cn(className, styles.inputWrapper)}>
      <input
        ref={ref}
        className={cn(styles.input, {
          [styles.error]: error,
          [styles.form]: appearance === 'form',
          [styles.auth]: appearance === 'auth',
        })}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  )
);
