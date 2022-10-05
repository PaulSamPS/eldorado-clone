import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import React from 'react';
import Shop from '../page-components/Shop/Shop';
import { GetStaticProps } from 'next';
import { $host } from '../http';
import { IProduct } from '../interfaces/product.interface';

const Home: NextPage = ({ products }: HomeProps) => {
  return (
    <div className={styles.container}>
      <Shop products={products} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const getProducts = await $host.get<IProduct[]>('product');
  const products = getProducts.data;
  return {
    props: {
      products,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  products: IProduct[];
}
