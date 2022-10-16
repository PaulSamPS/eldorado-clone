import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';
import Link from 'next/link';
import { priceRu } from '../../../../../helpers/priceRu';
import { Button } from '../../../../Ui';
import { CardProps } from './Card.props';
import { FavouriteGreenIcon, FavouriteIcon } from '../../../../../icons';
import { Rating, Review } from '../../../../ReusableComponents';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { addToBasket } from '../../../../../redux/actions/basketAction';
import { useAppSelector } from '../../../../../hooks/useAppSelector';

export const Card = ({ product, className, offset, ...props }: CardProps) => {
  const { basket } = useAppSelector((state) => state.basketReducer);
  const [like, setLike] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isInBasket, setIsIsInBasket] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(5);
  const [review, setReview] = React.useState<number>(5);
  const dispatch = useAppDispatch();

  const addToCart = async () => {
    setIsLoading(true);
    await dispatch(addToBasket(product._id, product.price))
      .then(() => {
        setIsLoading(false);
        setIsIsInBasket(true);
      })
      .catch(() => {
        setIsIsInBasket(false);
      });
  };

  React.useEffect(() => {
    if (basket.products.map((p) => p.product._id).includes(product._id)) {
      setIsIsInBasket(true);
    } else {
      setIsIsInBasket(false);
    }
  }, [basket]);

  return (
    <div
      className={cn(styles.wrapper, className)}
      style={{ transform: `translateX(${offset}px)` }}
      {...props}
    >
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
          onClick={addToCart}
          disabled={isLoading}
        >
          {isInBasket ? 'В корзине' : 'В корзину'}
        </Button>
        <div onClick={() => setLike(!like)} className={styles.favourite}>
          {like ? <FavouriteGreenIcon /> : <FavouriteIcon />}
        </div>
      </div>
    </div>
  );
};
