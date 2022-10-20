import cn from 'classnames';
import Link from 'next/link';
import React, { useContext } from 'react';
import { getCookie } from 'cookies-next';
import styles from './Card.module.scss';
import { CardProps } from './Card.props';
import { Rating, Review } from '../../../ReusableComponents';
import { Button } from '../../../Ui';
import { priceRu } from '../../../../helpers/priceRu';
import { FavouriteGreenIcon, FavouriteIcon } from '../../../../icons';
import { $host } from '../../../../http';
import { BasketInterface } from '../../../../interfaces/basket.interface';
import { AppContext } from '../../../../context/appContext';

export function Card({ product, className, offset }: CardProps) {
  const { setBasket, basket } = useContext(AppContext);
  const [like, setLike] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isInBasket, setIsIsInBasket] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(5);
  const [review, setReview] = React.useState<number>(22);

  const addToBasket = async () => {
    try {
      setIsLoading(true);
      const basketCookie = getCookie('basket');
      const res = await $host.post<BasketInterface>(
        'basket/add',
        {
          productId: product._id,
          productPrice: product.price,
        },
        {
          withCredentials: true,
          headers: {
            basket: basketCookie,
          },
        }
      );
      if (setBasket) {
        setBasket(res.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const item = basket.products.map((p) => p.product._id).includes(product._id);

    if (item) {
      setIsIsInBasket(item);
    }
  }, [basket]);

  const onPressEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      setLike(!like);
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
          onClick={() => setLike(!like)}
          onKeyDown={(e) => onPressEnter(e)}
          className={styles.favourite}
        >
          {like ? <FavouriteGreenIcon /> : <FavouriteIcon />}
        </button>
      </div>
    </div>
  );
}
