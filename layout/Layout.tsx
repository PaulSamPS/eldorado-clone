import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header';
import { AppInterface } from '@/interfaces';
import { AppContextProvider, IAppContext } from '@/context';
import styles from './Layout.module.scss';
import { MobileMenu } from '@/components';
import { Nav } from './Nav';

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header />
    <Nav />
    <main>{children}</main>
    <MobileMenu />
  </div>
);
