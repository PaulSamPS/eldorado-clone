import React from 'react';
import { LayoutProps } from './Layout.props';
import { Header, Nav } from './components';
import styles from './Layout.module.scss';
import { MobileMenu } from '@/components';

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header />
    <Nav />
    <main>{children}</main>
    <MobileMenu />
  </div>
);
