import React from 'react';
import { priceRu } from '../../../../helpers/priceRu';
import { ItemProps } from './Item.props';
import styles from './Item.module.scss';
import { CartIcon } from '../../../../icons';
import Link from 'next/link';
import {Rating, Review} from '../../../ReusableComponents';

export const Item = ({
  className,
  product,
  appearance,
  offset,
  ...props
}: ItemProps): JSX.Element => {
  const [rating, setRating] = React.useState<number>(4);
  const [review, setReview] = React.useState<number>(4);

  return (
    <>
      {appearance === 'dayProduct' && (
        <div className={styles.cardDayProduct} style={{ transform: `translateX(${offset}px)` }}>
          <div className={styles.img}>
            <Link href={`/today/${product._id}`}>
              <a>
                <img
                  src={`http://localhost:5000/product/${product.name}/${product.img[0].fileName}`}
                  alt={product.name}
                  title={product.name}
                />
              </a>
            </Link>
          </div>
          <div className={styles.percent}>
            <span className={styles.totalPercent}>
              {Math.floor(((product.oldPrice! - product.price) / product.oldPrice!) * 100)}
              <div>%</div>
            </span>
            <span>скидка</span>
          </div>
          <div className={styles.rating}>
            <Rating rating={rating} isEditable={false} />
            <Review review={review} />
          </div>
          <Link href={`/today/${product._id}`}>
            <a className={styles.name}>{product.name}</a>
          </Link>
          <div className={styles.sale}>
            <span className={styles.oldPrice}>{priceRu(product.oldPrice)}</span>
            <span className={styles.discount}>-{priceRu(product.oldPrice! - product.price)}</span>
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

