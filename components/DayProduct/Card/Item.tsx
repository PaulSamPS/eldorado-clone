import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { ItemProps } from './Item.props';
import styles from './Item.module.scss';
import { priceRu } from '@/helpers';
import { Rating, Review } from '@/components/ReusableComponents';
import { CartIcon } from '@/components/Ui';
import { useAddToBasket } from '@/hooks';

export const Item = ({ className, ...props }: ItemProps): JSX.Element => {
  const [rating, setRating] = React.useState<number>(4);
  const [review, setReview] = React.useState<number>(4);
  const { isInBasket, addToBasket } = useAddToBasket(props.product);

  return (
    <div
      className={cn(styles.wrapper, className)}
      style={{ transform: `translateX(${props.offset}px)` }}
    >
      <div className={styles.img}>
        <Link href={{ pathname: '/today', query: { id: props.product._id } }}>
          <a>
            <img
              src={`http://localhost:5000/product/${props.product.name}/${props.product.img[0].fileName}`}
              alt={props.product.name}
              title={props.product.name}
            />
          </a>
        </Link>
      </div>
      <div className={styles.percent}>
        <span className={styles.totalPercent}>
          {Math.floor(
            ((props.product.oldPrice! - props.product.price) / props.product.oldPrice!) * 100
          )}
          <div>%</div>
        </span>
        <span>скидка</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} isEditable={false} />
        <Review review={review} />
      </div>
      <Link href={{ pathname: '/today', query: { id: props.product._id } }}>
        <a className={styles.name}>{props.product.name}</a>
      </Link>
      <div className={styles.sale}>
        <span className={styles.oldPrice}>{priceRu(props.product.oldPrice)}</span>
        <span className={styles.discount}>
          -{priceRu(props.product.oldPrice! - props.product.price)}
        </span>
      </div>
      <div className={styles.bottom}>
        <span className={styles.price}>{priceRu(props.product.price)}</span>
        <CartIcon className={styles.icon} onClick={addToBasket} isInBasket={isInBasket} />
      </div>
    </div>
  );
};
