import cn from 'classnames';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { Rating, Review } from '../../../ReusableComponents';
import { Button } from '../../../Ui';
import { priceRu } from '../../../../helpers/priceRu';
import { FavouriteGreenIcon, FavouriteIcon } from '../../../../icons';
import { AppContext } from '../../../../context/appContext';
import { addToBasketHttp } from '../../../../http/addToBasketHttp';

export const Card = ({ product, className, offset }: CardProps) => {
  const { basket, setBasket } = useContext(AppContext);
  const [rating, setRating] = React.useState<number>(5);
  const [review, setReview] = React.useState<number>(51);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isInBasket, setIsIsInBasket] = React.useState<boolean>(false);
  const [isLike, setIsLike] = React.useState<boolean>(false);

  React.useEffect(() => {
    const item = basket.products.map((p) => p.product._id).includes(product._id);

    if (item) {
      setIsIsInBasket(item);
    }
  }, [basket]);

  const addToBasket = async () => {
    setIsLoading(true);
    try {
      const { newBasket } = await addToBasketHttp(product);
      if (setBasket) {
        setBasket(newBasket);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

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
