import React from 'react';
import cn from 'classnames';
import { UserIcon } from '@/icons';
import styles from './Login.module.scss';
import { LoginProps } from './Login.props';

export const Login = ({ className }: LoginProps) => (
  <div className={cn(styles.wrapper, className)}>
    <div className={styles.login}>
      <UserIcon />
      <p>Вход или регистрация</p>
    </div>
  </div>
);
