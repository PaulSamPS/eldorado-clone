import type { GetServerSideProps } from 'next';
import React from 'react';
import axios from 'axios';
import { withLayout } from '@/layout';
import { IMenu, IProduct, ISlider, BasketInterface } from '@/interfaces';
import { $host } from '@/http';
import { MainPageComponents } from '../page-components';

function Home({ ...props }: HomeProps) {
  return <MainPageComponents {...props} />;
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ req }) => {
  const { data: basket } = await axios.get<BasketInterface>('http://localhost:5000/api/basket', {
    withCredentials: true,
    headers: {
      basket: req?.cookies?.basket!,
    },
  });
  const { data: menu } = await $host.get<IMenu[]>('menu');
  const { data: products } = await $host.get<IProduct[]>('products');
  const { data: dayProducts } = await $host.get<IProduct[]>('day-products');
  const { data: slider } = await $host.get<ISlider[]>('slider');

  return {
    props: {
      menu,
      products,
      dayProducts,
      slider,
      basket,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: IMenu[];
  products: IProduct[];
  dayProducts: IProduct[];
  slider: ISlider[];
  basket: BasketInterface;
}
