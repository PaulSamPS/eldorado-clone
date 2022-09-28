import React, { useState } from 'react';
import Rating from '../Rating/Rating';
import Review from '../Review/Review';
import { priceRu } from '../../helpers/priceRu';
import { CardItemProps } from './CardItem.props';
import cn from 'classnames';
import styles from './CardItem.module.scss';
import { CartIcon, FavouriteIcon, FavouriteGreenIcon } from '../../icons';
import Link from 'next/link';
import { Button } from '../Ui/Button/Button';

const CardItem = ({
  className,
  product,
  appearance,
  offset,
  ...props
}: CardItemProps): JSX.Element => {
  const [rating, setRating] = useState<number>(4);
  const [review, setReview] = useState<number>(4);
  const [like, setLike] = useState<boolean>(false);

  return (
    <>
      {appearance === 'topProduct' && (
        <div
          className={cn(styles.cardTopProduct, className)}
          style={{ transform: `translateX(${offset}px)` }}
          {...props}
        >
          <div className={styles.img}>
            <img
              src={`http://localhost:5000/product/${product.name}/${product.img[0].fileName}`}
              alt='Продукт'
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
            <Button appearance='primary' className={styles.btn}>
              В корзину
            </Button>
            <div onClick={() => setLike(!like)}>
              {like ? <FavouriteGreenIcon /> : <FavouriteIcon />}
            </div>
          </div>
        </div>
      )}
      {appearance === 'dayProduct' && (
        <div className={styles.cardDayProduct} style={{ transform: `translateX(${offset}px)` }}>
          <div className={styles.img}>
            <img
              src={`http://localhost:5000/product/${product.name}/${product.img[0].fileName}`}
              alt='product'
            />
          </div>
          <div className={styles.percent}>
            <span className={styles.totalPercent}>
              {Math.floor(((product.oldPrice! - product.price) / product.oldPrice!) * 100)}%
            </span>
            <span>скидка</span>
          </div>
          <div className={styles.rating}>
            <Rating rating={rating} isEditable={false} />
            <Review review={review} />
          </div>
          <Link href={`product/${product._id}`}>
            <span className={styles.name}>{product.name}</span>
          </Link>
          <div className={styles.sale}>
            <span className={styles.oldPrice}>{priceRu(product.oldPrice)}</span>
            <span className={styles.discount}>-{product.oldPrice! - product.price}</span>
          </div>
          <div className={styles.bottom}>
            <span className={styles.price}>{priceRu(product.price)}</span>
            <div className={styles.cart}>
              <CartIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardItem;
