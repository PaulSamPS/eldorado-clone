import React from 'react';
import { Today } from '../../page-components/Today/Today';
import { GetStaticPaths, GetStaticProps } from 'next';
import { $host } from '../../http';
import { IProduct } from '../../interfaces/product.interface';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setSuccessDayProducts } from '../../redux/reducers/dayProducts.reducer';

const TodayId = ({ dayProducts, oneProduct, productsYesterday }: TodayProps) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setSuccessDayProducts(dayProducts));
  }, []);

  return <Today currentProduct={oneProduct} productsYesterday={productsYesterday} />;
};

export default TodayId;

export const getStaticPaths: GetStaticPaths = async () => {
  const getDayProducts = await $host.get<IProduct[]>('product');
  const dayProducts = getDayProducts.data;
  const paths = dayProducts.map((p) => ({ params: { id: p._id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TodayProps> = async ({ params }) => {
  const getDayProducts = await $host.get<IProduct[]>(`day-products`);
  const getOneProduct = await $host.get<IProduct>(`product/${params!.id}`);
  const getProductsYesterday = await $host.get<IProduct[]>('products-yesterday');

  const dayProducts = getDayProducts.data;
  const oneProduct = getOneProduct.data;
  const productsYesterday = getProductsYesterday.data;
  return {
    props: {
      dayProducts,
      oneProduct,
      productsYesterday,
    },
  };
};

interface TodayProps extends Record<string, unknown> {
  dayProducts: IProduct[];
  oneProduct: IProduct;
  productsYesterday: IProduct[];
}
