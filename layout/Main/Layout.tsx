import React from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './components/Header';
import styles from './Layout.module.scss';
import { MobileMenu } from '@/components';
import { Nav } from './components/Nav';

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header />
    <Nav />
    <main>{children}</main>
    <MobileMenu />
  </div>
);
