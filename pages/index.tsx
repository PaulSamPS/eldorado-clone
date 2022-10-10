import React from 'react';
import ShopPageComponent from '../page-components/Shop/ShopPageComponent';
import { GetStaticProps } from 'next';
import { $host } from '../http';
import { IProduct } from '../interfaces/product.interface';
import { IMenu } from '../interfaces/menu.interface';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getProduct } from '../redux/actions/productAction';
import { IBrand } from '../interfaces/brand.interface';

const Home = ({ products, dayProducts, menu, brand }: HomeProps): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <ShopPageComponent products={products} dayProducts={dayProducts} menu={menu} brand={brand} />
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const getProducts = await $host.get<IProduct[]>('product');
  const getDayProducts = await $host.get<IProduct[]>('day-products');
  const getBrands = await $host.get<IBrand[]>('brand');

  const getMenu = await $host.get<IMenu[]>('menu');
  const products = getProducts.data;
  const dayProducts = getDayProducts.data;
  const menu = getMenu.data;
  const brand = getBrands.data;
  return {
    props: {
      products,
      dayProducts,
      menu,
      brand,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  products: IProduct[];
  menu: IMenu[];
  dayProducts: IProduct[];
  brand: IBrand[];
}
