import React from 'react';
import cn from 'classnames';
import styles from './Card.module.scss';
import Link from 'next/link';
import { priceRu } from '../../../../../helpers/priceRu';
import { Button } from '../../../../Ui';
import { CardProps } from './Card.props';
import { FavouriteGreenIcon, FavouriteIcon } from '../../../../../icons';
import {Rating, Review} from '../../../../ReusableComponents';

export const Card = ({ product, className, offset, ...props }: CardProps) => {
  const [like, setLike] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(5);
  const [review, setReview] = React.useState<number>(5);

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
        <Button appearance='primary' className={styles.btn}>
          В корзину
        </Button>
        <div onClick={() => setLike(!like)} className={styles.favourite}>
          {like ? <FavouriteGreenIcon /> : <FavouriteIcon />}
        </div>
      </div>
    </div>
  );
};
