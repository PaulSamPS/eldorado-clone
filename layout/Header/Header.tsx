import React from 'react';
import { HeaderProps } from './Header.props';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Header.module.scss';
import { Button } from '../../components/Ui';
import { UserIcon, SearchIcon, CartBoldIcon, LogoIcon } from '../../icons';
import Link from 'next/link';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getBasket, getBasketItems } from '../../redux/actions/basketAction';
import { priceRu } from '../../helpers/priceRu';

const Header = ({ openModal }: HeaderProps) => {
  const name = useAppSelector((state) => state.loginUser.userInfo);
  const { basket } = useAppSelector((state) => state.basketReducer);
  const dispatch = useAppDispatch();
  const isAuth = localStorage.getItem('AccessToken');

  const { userInfo } = useAppSelector((state) => state.loginUser);

  const userRole = userInfo.role === 'ADMIN';
  console.log(basket.products.length);
  const handleBasket = async () => {
    await dispatch(getBasket(userInfo._id !== '' ? userInfo._id : undefined));
  };

  const logout = () => {
    localStorage.clear();
  };

  React.useEffect(() => {
    dispatch(getBasketItems());
  }, []);

  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <a>
          <LogoIcon className={styles.logo} />
        </a>
      </Link>
      <div className={styles.form}>
        <div className={styles.search}>
          <div className={styles.input}>
            <input placeholder='Поиск' type='text' />
          </div>
          <Button appearance='primary' className={styles.searchBtn} onClick={handleBasket}>
            Поиск
            <SearchIcon className={styles.searchLogo} />
          </Button>
        </div>
      </div>
      {!isAuth ? (
        <div className={styles.profile}>
          <div className={styles.login} onClick={openModal}>
            <UserIcon />
            <p>Вход или регистрация</p>
          </div>
        </div>
      ) : (
        <div className={styles.profile}>
          <div className={styles.login}>
            <UserIcon />
            <p>{name.userName}</p>
          </div>
          {userRole && <span className={styles.logout}>Админ</span>}
          <span onClick={logout} className={styles.logout}>
            Выйти
          </span>
        </div>
      )}
      <Link href={'/basket'}>
        {basket.products.length > 0 ? (
          <a className={styles.basketProduct}>
            <CartBoldIcon />
            <div className={styles.count}>{basket.products.length}</div>
            <span>{priceRu(basket.totalPrice)}</span>
          </a>
        ) : (
          <a className={styles.cart}>
            <CartBoldIcon />
            <p>Корзина</p>
          </a>
        )}
      </Link>
    </div>
  );
};

export default Header;
