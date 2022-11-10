import type { GetServerSideProps } from 'next';
import React from 'react';
import { IMenu, IProduct, ISlider } from '@/interfaces';
import { $host } from '@/http';
import { Main } from '@/page-components';
import { withLayout } from '@/hoc';

function Home({ ...props }: HomeProps) {
  return <Main {...props} />;
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
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
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: IMenu[];
  products: IProduct[];
  dayProducts: IProduct[];
  slider: ISlider[];
}
