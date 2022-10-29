import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { withLayout } from '@/hoc';
import { BasketInterface, IMenu, IProduct, ISlider } from '@/interfaces';
import { $host } from '@/http';

const Basket = () => <div>123</div>;

export default withLayout(Basket);

export const getServerSideProps: GetServerSideProps<BasketProps> = async ({ req }) => {
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

interface BasketProps extends Record<string, unknown> {
  menu: IMenu[];
  products: IProduct[];
  dayProducts: IProduct[];
  slider: ISlider[];
  basket: BasketInterface;
}
