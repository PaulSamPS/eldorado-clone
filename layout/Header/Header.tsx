import React from 'react';
import { HeaderProps } from './Header.props';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Header.module.scss';
import { Button } from '../../components/Ui/Button/Button';
import { UserIcon, SearchIcon, CartBoldIcon } from '../../icons';

const Header = ({ openModal }: HeaderProps) => {
  const name = useTypedSelector((state) => state.loginUser.userInfo);
  const isAuth = localStorage.getItem('AccessToken');

  const { userInfo } = useTypedSelector((state) => state.loginUser);

  const userRole = userInfo.role === 'ADMIN';

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className={styles.header}>
      <img
        src='https://static.eldorado.ru/espa/1.37.0-ab-esp-5884.9-VioWqW9lifnHAggUCIllH/static_spa/assets/logo.107e1872.svg'
        alt='logo'
        className={styles.logo}
      />
      <div className={styles.form}>
        <div className={styles.search}>
          <div className={styles.input}>
            <input placeholder='Поиск' type='text' />
          </div>
          <Button appearance='primary' className={styles.searchBtn}>
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
      <div className={styles.cart}>
        <CartBoldIcon />
        <p>Корзина</p>
      </div>
    </div>
  );
};

export default Header;
