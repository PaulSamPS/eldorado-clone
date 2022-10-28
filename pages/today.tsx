import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { $host } from '@/http';
import { BasketInterface, IProduct } from '@/interfaces';
import { Today } from '@/page-components';
import { withLayout } from '@/layout';

const TodayId = ({ dayProducts, oneProduct, productsYesterday }: TodayProps) => (
  <Today
    currentProduct={oneProduct}
    productsYesterday={productsYesterday}
    dayProducts={dayProducts}
  />
);

export default withLayout(TodayId);

export const getServerSideProps: GetServerSideProps<TodayProps> = async ({ query, req }) => {
  const { data: dayProducts } = await $host.get<IProduct[]>('day-products');
  const { data: oneProduct } = await $host.get<IProduct>(`products/${query.id}`);
  const { data: productsYesterday } = await $host.get<IProduct[]>('products-yesterday');
  const { data: basket } = await axios.get<BasketInterface>('http://localhost:5000/api/basket', {
    withCredentials: true,
    headers: {
      basket: req?.cookies?.basket!,
    },
  });

  return {
    props: {
      dayProducts,
      oneProduct,
      productsYesterday,
      basket,
    },
  };
};

interface TodayProps extends Record<string, unknown> {
  dayProducts: IProduct[];
  oneProduct: IProduct;
  productsYesterday: IProduct[];
}
