import React, { useEffect, useState } from 'react';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getMenu } from '../redux/actions/menuAction';
import styles from './Layout.module.scss';
import Slider from '../components/Slider/Slider';

const Layout = () => {
  const [modal, setModal] = useState<boolean>(false);
  const { menu } = useTypedSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMenu());
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
        <Sidebar className={styles.sidebar} menu={menu} />
        <div className={styles.content}>
          <div>123</div>
          <div className={styles.main}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
