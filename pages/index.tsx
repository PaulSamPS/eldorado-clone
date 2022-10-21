import type { GetServerSideProps } from 'next';
import React from 'react';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { IMenu } from '../interfaces/menu.interface';
import { Sidebar } from '../layout/Sidebar/Sidebar';
import { IProduct } from '../interfaces/product.interface';
import { TopProduct } from '../components/TopProduct/TopProduct';
import { DayProduct } from '../components/DayProduct/DayProduct';
import { $host } from '../http/axios';
import { Slider } from '../components/ReusableComponents';
import { ISlider } from '../interfaces/slider.interface';
import { BasketInterface } from '../interfaces/basket.interface';
import { Header } from '../layout/Header/Header';

function Home({ menu, products, dayProducts, slider, basket }: HomeProps) {
  console.log(basket);
  return (
    <div>
      <Header />
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
          width={800}
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
