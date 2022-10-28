import React, { useContext } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { CartIconProps } from './CartIcon.props';
import styles from './CartIcon.module.scss';
import { AddToCartIcon } from '@/icons';
import { useAddToBasket } from '@/hooks';
import { AppContext } from '@/context';

export const CartIcon = ({
  className,
  appearance,
  isInBasket,
  ...props
}: CartIconProps): JSX.Element => (
  <div
    className={cn(styles.iconBasket, className, {
      [styles.added]: isInBasket,
      [styles.addedWhite]: appearance === 'button',
    })}
    {...props}
  >
    <AddToCartIcon /> <span />
  </div>
);
