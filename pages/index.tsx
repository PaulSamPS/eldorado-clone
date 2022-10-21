import type { GetServerSideProps } from 'next';
import React from 'react';
import axios from 'axios';
import { withLayout } from '@/layout';
import { IMenu, IProduct, ISlider, BasketInterface } from '@/interfaces';
import { DayProduct, TopProduct, Sidebar } from '@/components';
import { $host } from '@/http';
import { Slider } from '@/components/ReusableComponents';

function Home({ menu, products, dayProducts, slider, basket }: HomeProps) {
  console.log(basket);
  return (
    <div>
      <Sidebar menu={menu} />
      <TopProduct product={products} />
      <DayProduct dayProducts={dayProducts} />
      {slider.map((s) => (
        <Slider key={s._id} arr={s.l} arrowTop={37.5} arrowVertical={30} height={300} width={600} />
      ))}
      {slider.map((s) => (
        <Slider
          key={s._id}
          arr={s.s}
          height={110}
          width={1200}
          greenDots
          arrowTop={19}
          arrowVertical={65}
          duration={2000}
        />
      ))}
    </div>
  );
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
