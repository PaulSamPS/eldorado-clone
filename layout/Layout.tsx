import React, { useEffect, useState } from 'react';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import Header from './Header/Header';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { getMenu } from '../redux/actions/menuAction';
import styles from './Layout.module.scss';
import { getDayProducts } from '../redux/actions/dayProductsAction';
import { getProduct } from '../redux/actions/productAction';
import { LayoutProps } from './Layout.props';
import { NavHeader } from './NavHeader/NavHeader';

const Layout = ({ children }: LayoutProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
        <NavHeader />
        <div className={styles.content}>
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
