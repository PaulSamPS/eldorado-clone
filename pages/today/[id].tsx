import React from 'react';
import { Today } from '../../page-components/Today/Today';
import { GetStaticPaths, GetStaticProps } from 'next';
import { $host } from '../../http';
import { IProduct } from '../../interfaces/product.interface';

const TodayId = ({ products, oneProduct }: TodayProps) => {
  return <Today products={products} currentProduct={oneProduct} />;
};

export default TodayId;

export const getStaticPaths: GetStaticPaths = async () => {
  const getProducts = await $host.get<IProduct[]>('product');
  const products = getProducts.data;
  const paths = products.map((p) => ({ params: { id: p._id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TodayProps> = async ({ params }) => {
  const getOneProduct = await $host.get<IProduct>(`product/${params!.id}`);
  const oneProduct = getOneProduct.data;
  const getProducts = await $host.get<IProduct[]>(`product`);
  const products = getProducts.data;
  return {
    props: {
      products,
      oneProduct,
    },
  };
};

interface TodayProps extends Record<string, unknown> {
  products: IProduct[];
  oneProduct: IProduct;
}
