import React, { memo } from 'react';
import ModalLogin from '../components/ModalLogin/ModalLogin';
import Header from './Header/Header';
import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import { NavHeader } from './NavHeader/NavHeader';
import { Footer } from './Footer/Footer';
import { $host } from '../http';
import { IProduct } from '../interfaces/product.interface';
import { setSuccessDayProducts } from '../redux/reducers/dayProducts.reducer';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { refreshToken } from '../redux/actions/authAction';

const Layout = memo(({ children }: LayoutProps) => {
  const [modal, setModal] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const getDayProducts = async () => {
    const dayProducts = await $host.get<IProduct[]>('day-products');
    dispatch(setSuccessDayProducts(dayProducts.data));
  };

  React.useEffect(() => {
    refreshToken();
    getDayProducts();
  }, []);

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
});

export default Layout;
