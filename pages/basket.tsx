import React from 'react';
import { GetServerSideProps } from 'next';
import { withLayout } from '@/hoc';
import { IMenu } from '@/interfaces';
import { $host } from '@/http';
import { Steps } from '@/page-components';

const Basket = () => <Steps />;

export default withLayout(Basket);

export const getServerSideProps: GetServerSideProps<BasketProps> = async () => {
  const { data: menu } = await $host.get<IMenu[]>('menu');

  return {
    props: {
      menu,
    },
  };
};

interface BasketProps extends Record<string, unknown> {
  menu: IMenu[];
}
