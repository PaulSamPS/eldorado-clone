import cn from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { Rating, Review } from '@/components/ReusableComponents';
import { Button } from '@/components/Ui';
import { priceRu } from '@/helpers';
import { FavouriteGreenIcon, FavouriteIcon } from '@/icons';
import { useAddToBasket } from '@/hooks';

export const Card = ({ product, className, offset }: CardProps) => {
  const [rating, setRating] = React.useState<number>(5);
  const [review, setReview] = React.useState<number>(51);
  const [isLike, setIsLike] = React.useState<boolean>(false);
  const { isLoading, isInBasket, addToBasket } = useAddToBasket(product);

  const onPressEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      setIsLike(!isLike);
    }
  };

  return (
    <div className={cn(styles.wrapper, className)} style={{ transform: `translateX(${offset}px)` }}>
      <div className={styles.img}>
        <img
          src={`http://localhost:5000/product/${product.name}/${product.img[0].fileName}`}
          alt={product.name}
          title={product.name}
        />
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} isEditable={false} />
        <Review review={review} />
      </div>
      <Link href={`product/${product._id}`}>
        <span className={styles.name}>{product.name}</span>
      </Link>
      <span className={styles.price}>{priceRu(product.price)}</span>
      <div className={styles.bottom}>
        <Button
          appearance='primary'
          className={cn(styles.btn, { [styles.inTheBasket]: isInBasket })}
          disabled={isLoading}
          onClick={addToBasket}
        >
          {isInBasket ? 'В корзине' : 'В корзину'}
        </Button>
        <button
          type='button'
          onClick={() => setIsLike(!isLike)}
          onKeyDown={(e) => onPressEnter(e)}
          className={styles.favourite}
        >
          {isLike ? <FavouriteGreenIcon /> : <FavouriteIcon />}
        </button>
      </div>
    </div>
  );
};
