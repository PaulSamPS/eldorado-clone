import React from 'react';
import cn from 'classnames';
import styles from './Buy.module.scss';
import { priceRu } from '@/helpers';
import { Button } from '@/components/Ui';
import { BuyProps } from './Buy.props';
import { CartButtonIcon, LocationIcon } from '@/icons';

export const Buy = ({ currentProduct, className }: BuyProps) => (
  <div className={cn(styles.wrapper, className)}>
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
