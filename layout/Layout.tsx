import React, { useState } from 'react';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import Header from './Header/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import { NavHeader } from './NavHeader/NavHeader';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: LayoutProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={styles.wrapper}>
      {modal && <ModalLogin closeModal={closeModal} />}
      <div className={styles.container}>
        <Header openModal={openModal} className={styles.top} />
        <NavHeader />
        <div className={styles.content}>
          <div className={styles.main}>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
