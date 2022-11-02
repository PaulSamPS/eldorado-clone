import React from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { BasketInterface, IProduct } from '@/interfaces';
import { $host } from '@/http';
import { withLayout } from '@/hoc';
import { Product } from '@/page-components';

const ProductPage = ({ product }: ProductProps) => <Product product={product} />;

export default withLayout(ProductPage);

export const getServerSideProps: GetServerSideProps<ProductProps> = async ({ query, req }) => {
  const { data: product } = await $host.get<IProduct>(`products/${query.id}`);
  const { data: basket } = await axios.get<BasketInterface>('http://localhost:5000/api/basket', {
    withCredentials: true,
    headers: {
      basket: req?.cookies?.basket!,
    },
  });

  return {
    props: {
      product,
      basket,
    },
  };
};

interface ProductProps extends Record<string, unknown> {
  product: IProduct;
}
