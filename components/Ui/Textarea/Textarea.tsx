import React from 'react';
import cn from 'classnames';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';

export const Textarea = ({ error, className, ...props }: TextareaProps): JSX.Element => (
  <div className={cn(className, styles.textAreaWrapper)}>
    <textarea
      className={cn(styles.textArea, {
        [styles.error]: error,
      })}
      {...props}
    />
    {error && <span className={styles.errorMessage}>{error.message}</span>}
  </div>
);
