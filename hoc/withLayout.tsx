import React, { FunctionComponent } from 'react';
import { AppInterface } from '@/interfaces';
import { AppContextProvider, IAppContext } from '@/context';
import { Layout } from '@/layout';

export const withLayout = <T extends Record<string, unknown> & AppInterface & IAppContext>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T) {
    return (
      <AppContextProvider basket={props.basket} modal={props.modal} dayProducts={props.dayProducts}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
