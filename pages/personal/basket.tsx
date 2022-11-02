import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { withLayout, withStepsLayout } from '@/hoc';
import { BasketInterface, IMenu } from '@/interfaces';
import { $host } from '@/http';
import { Basket } from '@/page-components/Personal';

const BasketPage = () => <Basket />;

export default withLayout(withStepsLayout(BasketPage));

export const getServerSideProps: GetServerSideProps<BasketProps> = async ({ req }) => {
  const { data: basket } = await axios.get<BasketInterface>('http://localhost:5000/api/basket', {
    withCredentials: true,
    headers: {
      basket: req?.cookies?.basket!,
    },
  });
  const { data: menu } = await $host.get<IMenu[]>('menu');

  return {
    props: {
      menu,
      basket,
    },
  };
};

interface BasketProps extends Record<string, unknown> {
  menu: IMenu[];
  basket: BasketInterface;
}
