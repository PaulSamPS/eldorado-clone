import React from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { Basket } from './Components/Basket/Basket';
import { Login } from './Components/Login/Login';
import { Search } from './Components/Search/Search';
import { Logo } from './Components/Logo/Logo';

export const Header = ({ className }: HeaderProps) => (
  <div className={cn(styles.wrapper, className)}>
    <Logo />
    <Search className={styles.search} />
    <Login className={styles.login} />
    <Basket className={styles.basket} />
  </div>
);
