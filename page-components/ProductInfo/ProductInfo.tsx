import React from 'react';
import cn from 'classnames';
import styles from './ProductInfo.module.scss';
import { ProductInfoProps } from './ProductInfo.props';
import { Button, Input } from '../../components/Ui';
import Textarea from '../../components/Ui/Textarea/Textarea';
import { Buy, Carousel, Rating, Review } from '../../components/ReusableComponents';
import { ZoomModal } from '../../components/ReusableComponents/ZoomModal/ZoomModal';
import { Rotate360 } from '../../components/Rotate360/Rotate360';
import { Icon360 } from '../../icons';

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [itemIndex, setItemIndex] = React.useState<number>(0);
  const [is360, setIs360] = React.useState<boolean>(false);
  const [review, setReview] = React.useState<number>(1);
  const [rating, setRating] = React.useState<number>(5);
  const [createReview, setCreateReview] = React.useState<boolean>(false);

  const info = [
    { id: 1, name: 'Характеристики' },
    { id: 2, name: 'Отзывы' },
  ];

  return (
    <div className={styles.productInfo}>
      <h1 className={styles.title}>{product.name}</h1>
      {is360 && <Rotate360 setIs360={setIs360} product={product} />}
      <div className={styles.rating}>
        <Rating rating={rating} isEditable={false} isFully={true} />
        <Review review={review} />
      </div>
      <div className={styles.productBlock}>
        <div className={styles.productImage}>
          <Carousel currentProduct={product} className={styles.carousel} imageWidth={240} />
          <ZoomModal currentProduct={product} className={styles.zoom} />
          {product.rotate3d.length > 0 && (
            <div className={styles.rotate360} onClick={() => setIs360(true)}>
              <Icon360 />
            </div>
          )}
        </div>
        <Buy currentProduct={product} className={styles.buy} />
        <div className={styles.navBlock}>
          {info.map((i: any, index: number) => (
            <ul
              key={i.id}
              onClick={() => setItemIndex(index)}
              className={cn({
                [styles.activeNav]: itemIndex === index,
              })}
            >
              <li>{i.name}</li>
            </ul>
          ))}
        </div>
      </div>
      {itemIndex === 0 && (
        <div className={styles.features}>
          <div className={styles.name}>Характеристики {product.name}</div>
          {product.features.map((p) => (
            <div key={p._id} className={styles.table}>
              <div>{p.title}</div>
              {p.item.map((i) => (
                <ul key={i._id} className={styles.list}>
                  <li>{i.name}</li>
                  <li>{i.description}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      )}
      {itemIndex === 1 && (
        <div>
          <h2 className={styles.infoTitle}>Отзывы</h2>
          <Button
            className={styles.btnReview}
            appearance='primary'
            onClick={() => setCreateReview(!createReview)}
          >
            Написать отзыв
          </Button>
          <div className={styles.reviewBlock}>
            <div>
              <span className={styles.name}>User</span>
            </div>
            <div className={styles.review}>
              <Rating rating={rating} isFully={true} />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus
                expedita illum maxime minus nam numquam odit omnis porro qui quos sed, similique. Ab
                consectetur facilis iste numquam odit?
              </span>
            </div>
          </div>
          {createReview && (
            <div className={styles.addReview}>
              <h1>Написать отзыв</h1>
              <div className={styles.label}>
                <label htmlFor='name'>
                  Ваше имя:
                  <Input name='name' />
                </label>
              </div>
              <div className={styles.label}>
                <label htmlFor='city'>
                  Город:
                  <Input name='city' />
                </label>
              </div>
              <Rating
                rating={rating}
                isEditable={true}
                setRating={setRating}
                className={styles.ratingModal}
              />
              <label htmlFor='textarea'>
                Отзыв:
                <Textarea className={styles.textarea} name='textarea' />
              </label>
              <Button className={styles.sendReview} appearance='primary'>
                Отправить
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
