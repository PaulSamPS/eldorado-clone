import React, { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import { Header } from './Header';
import { AppInterface } from '@/interfaces';
import { AppContextProvider } from '@/context';

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export const withLayout = <T extends Record<string, unknown> & AppInterface>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T) {
    return (
      <AppContextProvider basket={props.basket}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
