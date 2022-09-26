import React, { useEffect, useState } from 'react';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getMenu } from '../redux/actions/menuAction';
import styles from './Layout.module.scss';
import Slider from '../components/Slider/Slider';
import DayProduct from '../components/DayProduct/DayProduct';
import { getDayProducts } from '../redux/actions/dayProductsAction';
import { getProduct } from '../redux/actions/productAction';
import ProductList from '../components/ProductList/ProductList';

const Layout = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { menu } = useAppSelector((state) => state.menu);
  const { dayProducts } = useAppSelector((state) => state.dayProductReducer);
  const { products } = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(getMenu());
    dispatch(getDayProducts());
    dispatch(getProduct());
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <ModalLogin closeModal={closeModal} />}
      <div className={styles.container}>
        <Header openModal={openModal} className={styles.top} />
        <div className={styles.content}>
          <div>
            <Sidebar className={styles.sidebar} menu={menu} />
          </div>
          <div className={styles.main}>
            <Slider className={styles.slider} />
            <DayProduct className={styles.dayProducts} product={dayProducts} />
            <ProductList className={styles.productsList} products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
