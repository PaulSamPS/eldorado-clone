import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import styles from './Buy.module.scss';
import { priceRu } from '@/helpers';
import { Button, CartIcon } from '@/components/Ui';
import { BuyProps } from './Buy.props';
import { LocationIcon } from '@/icons';
import { useAddToBasket } from '@/hooks';

export const Buy = ({ currentProduct, className }: BuyProps) => {
  const { isInBasket, addToBasket } = useAddToBasket(currentProduct!);
  const { push } = useRouter();

  const handlePush = async () => {
    await push({ pathname: '/personal/basket' });
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.topBuy}>
        <div className={styles.sale}>
          <span className={styles.oldPrice}>{priceRu(currentProduct!.oldPrice)}</span>
          <span className={styles.discount}>
            -{priceRu(currentProduct!.oldPrice! - currentProduct!.price)}
          </span>
        </div>
        <span className={styles.price}>{priceRu(currentProduct!.price)}</span>
        <Button appearance='primary' onClick={isInBasket ? handlePush : addToBasket}>
          <CartIcon isInBasket={isInBasket!} appearance='button' />
          {isInBasket ? 'В корзине' : 'Купить сейчас'}
        </Button>
      </div>
      <hr />
      <div className={styles.deliveryBlock}>
        <div className={styles.location}>
          <LocationIcon />
          <a>Самовывоз</a> <span>завтра, бесплатно</span>
        </div>
      </div>
    </div>
  );
};
