import React, { FunctionComponent } from 'react';
import { useAppSelector } from '@/hooks';
import { AppInterface } from '@/interfaces';
import { IAppContext } from '@/context';
import Page401 from '../pages/401';

const withAuth =
  <T extends Record<string, unknown> & AppInterface & IAppContext>(
    Component: FunctionComponent<T>
  ) =>
  (props: T) => {
    const { user } = useAppSelector((state) => state.auth);

    if (!user) {
      return <Page401 />;
    }

    return <Component {...props} />;
  };

export default withAuth;
