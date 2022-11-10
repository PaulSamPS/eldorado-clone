import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { withLayout } from '@/hoc';
import { Cabinet } from '@/page-components';
import withAuth from '../hoc/withAuth';
import { wrapper } from '@/redux/store';
import { setUser } from '@/redux/reducers';

const Personal = () => <Cabinet />;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const { data: user } = await axios.get('http://localhost:5000/api/user/get', {
        withCredentials: true,
        headers: {
          accessToken: req?.cookies?.accessToken!,
        },
      });
      store.dispatch(setUser(user));

      return { props: {} };
    }
);

export default withLayout(withAuth(Personal));
