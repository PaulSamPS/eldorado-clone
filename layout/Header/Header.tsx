import React from 'react';
import { HeaderProps } from './Header.props';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Header.module.scss';
import { Button } from '../../components/Ui/Button/Button';
import { UserIcon, SearchIcon, CartBoldIcon, LogoIcon } from '../../icons';
import Link from 'next/link';

const Header = ({ openModal }: HeaderProps) => {
  const name = useAppSelector((state) => state.loginUser.userInfo);
  const isAuth = localStorage.getItem('AccessToken');

  const { userInfo } = useAppSelector((state) => state.loginUser);

  const userRole = userInfo.role === 'ADMIN';

  const logout = () => {
    localStorage.clear();
  };

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
