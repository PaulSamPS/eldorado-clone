import React, { useContext } from 'react';
import cn from 'classnames';
import { CartIconProps } from './CartIcon.props';
import styles from './CartIcon.module.scss';
import { AddToCartIcon } from '@/icons';
import { useAddToBasket } from '@/hooks';
import { AppContext } from '@/context';

export const CartIcon = ({
  product,
  className,
  appearance,
  ...props
}: CartIconProps): JSX.Element => {
  const [isInBasket, setIsIsInBasket] = React.useState<boolean>(false);
  const { basket } = useContext(AppContext);

  React.useEffect(() => {
    const item = basket.products.map((p) => p.product._id).includes(product._id);

    if (item) {
      setIsIsInBasket(item);
    }
  }, [basket]);

  return (
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
};
