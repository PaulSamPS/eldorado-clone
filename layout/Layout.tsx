import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header';
import { AppInterface } from '@/interfaces';
import { AppContextProvider, IAppContext } from '@/context';
import styles from './Layout.module.scss';
import { MobileMenu } from '@/components';
import { Nav } from './Nav';

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.wrapper}>
    <Header />
    <Nav />
    <main>{children}</main>
    <MobileMenu />
  </div>
);

export const withLayout = <T extends Record<string, unknown> & AppInterface & IAppContext>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T) {
    return (
      <AppContextProvider basket={props.basket} modal={props.modal}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
