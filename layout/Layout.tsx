import React, { useEffect, useState } from 'react';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getMenu } from '../redux/actions/menuAction';
import styles from './Layout.module.scss';
import Slider from '../components/Slider/Slider';
import DayProduct from '../components/DayProduct/DayProduct';
import { getDayProducts } from '../redux/actions/dayProductsAction';

const Layout = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { menu } = useTypedSelector((state) => state.menu);
  const { dayProducts } = useTypedSelector((state) => state.dayProductReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMenu());
    dispatch(getDayProducts());
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
            <Slider />
            <DayProduct product={dayProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
