import React from 'react';
import Shop from '../page-components/Shop/Shop';
import { GetStaticProps } from 'next';
import { $host } from '../http';
import { IProduct } from '../interfaces/product.interface';
import { IMenu } from '../interfaces/menu.interface';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getProduct } from '../redux/actions/productAction';

const Home = ({ products, menu }: HomeProps): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return <Shop products={products} menu={menu} />;
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const getProducts = await $host.get<IProduct[]>('product');
  const getMenu = await $host.get<IMenu[]>('menu');
  const products = getProducts.data;
  const menu = getMenu.data;
  return {
    props: {
      products,
      menu,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  products: IProduct[];
  menu: IMenu[];
}
