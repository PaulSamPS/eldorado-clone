import React from 'react';
import { Today } from '../../page-components/Today/Today';
import { GetStaticPaths, GetStaticProps } from 'next';
import { $host } from '../../http';
import { IProduct } from '../../interfaces/product.interface';

const TodayId = ({ products, oneProduct, productsYesterday }: TodayProps) => {
  return (
    <Today products={products} currentProduct={oneProduct} productsYesterday={productsYesterday} />
  );
};

export default TodayId;

export const getStaticPaths: GetStaticPaths = async () => {
  const getProducts = await $host.get<IProduct[]>('product');
  const products = getProducts.data;
  const paths = products.map((p) => ({ params: { id: p._id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TodayProps> = async ({ params }) => {
  const getProducts = await $host.get<IProduct[]>(`day-products`);
  const getOneProduct = await $host.get<IProduct>(`product/${params!.id}`);
  const getProductsYesterday = await $host.get<IProduct[]>('products-yesterday');

  const products = getProducts.data;
  const oneProduct = getOneProduct.data;
  const productsYesterday = getProductsYesterday.data;
  return {
    props: {
      products,
      oneProduct,
      productsYesterday,
    },
  };
};

interface TodayProps extends Record<string, unknown> {
  products: IProduct[];
  oneProduct: IProduct;
  productsYesterday: IProduct[];
}
