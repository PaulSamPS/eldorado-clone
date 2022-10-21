import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { UserIcon, SearchIcon, CartBoldIcon, LogoIcon } from '@/icons';
import { Button } from '@/components/Ui';
import { priceRu } from '@/helpers';
import { BasketContext } from '@/context';

export const Header = () => {
  const { basket } = useContext(BasketContext);
  const count = basket.products.reduce((prev, curr) => prev + curr.qty, 0);
  const [basketCount, setBasketCount] = React.useState<number>(count);

  React.useEffect(() => {
    setBasketCount(count);
  }, [basket]);

  return (
    <div className={styles.header}>
      <Link href='/'>
        <a>
          <LogoIcon className={styles.logo} title='Эльдорадо' />
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
      <div className={styles.profile}>
        <div className={styles.login}>
          <UserIcon />
          <p>Вход или регистрация</p>
        </div>
      </div>
      <Link href='/basket'>
        {basket && basket.products.length > 0 ? (
          <a className={styles.basketProduct}>
            <CartBoldIcon />
            <div className={styles.count}>{basketCount}</div>
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
