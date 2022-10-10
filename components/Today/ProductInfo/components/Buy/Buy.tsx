import React from 'react';
import styles from './Buy.module.scss';
import { priceRu } from '../../../../../helpers/priceRu';
import { Button } from '../../../../Ui/Button/Button';
import { BuyProps } from './Buy.props';
import { CartButtonIcon, LocationIcon } from '../../../../../icons';

export const Buy = ({ currentProduct }: BuyProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBuy}>
        <div className={styles.sale}>
          <span className={styles.oldPrice}>{priceRu(currentProduct!.oldPrice)}</span>
          <span className={styles.discount}>
            -{priceRu(currentProduct!.oldPrice! - currentProduct!.price)}
          </span>
        </div>
        <span className={styles.price}>{priceRu(currentProduct!.price)}</span>
        <Button appearance='primary'>
          <CartButtonIcon /> Купить сейчас
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