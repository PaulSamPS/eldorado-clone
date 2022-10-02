import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import DayProduct from '../components/DayProduct/DayProduct';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getDayProducts } from '../redux/actions/dayProductsAction';
import React from 'react';
import Slider from '../components/Slider/Slider';
import ProductList from '../components/ProductList/ProductList';
import { getProduct } from '../redux/actions/productAction';
import TopProduct from '../components/TopProduct/TopProduct';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { dayProducts } = useAppSelector((state) => state.dayProductReducer);
  const { products } = useAppSelector((state) => state.productReducer);

  React.useEffect(() => {
    dispatch(getDayProducts());
    dispatch(getProduct());
  }, []);

  return (
    <div className={styles.container}>
      <DayProduct product={dayProducts} />
      <Slider />
      <ProductList products={products} />
      <TopProduct product={products} />
    </div>
  );
};

export default Home;
