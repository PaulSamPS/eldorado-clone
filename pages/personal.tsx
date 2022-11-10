import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { withLayout } from '@/hoc';
import { Cabinet } from '@/page-components';
import withAuth from '../hoc/withAuth';
import { wrapper } from '@/redux/store';
import { setUser } from '@/redux/reducers';
import { IAuthSentResponse } from '@/interfaces';
import { decodeToken } from '../http/authUser';

const Personal = () => <Cabinet />;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const res = await axios.get('http://localhost:5000/api/user/get', {
        withCredentials: true,
        headers: {
          accessToken: req?.cookies?.accessToken!,
          refreshToken: req?.cookies?.refreshToken!,
        },
      });
      const token = decodeToken(res);
      console.log(token.validateToken);
      // store.dispatch(setUser(jwtDecode(user.token)));
      // store.dispatch(setUser(null));

      return { props: {} };
    }
);

export default withLayout(withAuth(Personal));
