import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import DayProduct from '../components/DayProduct/DayProduct';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getDayProducts } from '../redux/actions/dayProductsAction';
import React from 'react';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const { dayProducts } = useAppSelector((state) => state.dayProductReducer);

  React.useEffect(() => {
    dispatch(getDayProducts());
  }, []);

  return (
    <div className={styles.container}>
      <DayProduct product={dayProducts} />
    </div>
  );
};

export default Home;
