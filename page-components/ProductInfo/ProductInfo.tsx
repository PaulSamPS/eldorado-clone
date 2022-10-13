import React from 'react';
import cn from 'classnames';
import styles from './ProductInfo.module.scss';
import { ProductInfoProps } from './ProductInfo.props';
import { Button } from '../../components/Ui';
import { Buy, Carousel, Rating, Review } from '../../components/ReusableComponents';
import { ZoomModal } from '../../components/ReusableComponents/ZoomModal/ZoomModal';
import { Rotate360 } from '../../components/Rotate360/Rotate360';
import { Icon360, WriteIcon } from '../../icons';
import { ModalReview } from './ModalReview/ModalReview';

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [itemIndex, setItemIndex] = React.useState<number>(0);
  const [is360, setIs360] = React.useState<boolean>(false);
  const [review, setReview] = React.useState<number>(1);
  const [rating, setRating] = React.useState<number>(5);
  const [sort, setSort] = React.useState<string>('Пользе');
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
        <div className={styles.reviewsBlock}>
          <div className={styles.writeFeedback}>
            <label htmlFor='Sort'>
              Сортировать по:
              <select name='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
                <option>Пользе</option>
                <option>Дате добавления</option>
              </select>
            </label>
            <Button
              className={styles.btnReview}
              appearance='primary'
              onClick={() => setCreateReview(!createReview)}
            >
              <WriteIcon />
              Написать отзыв
            </Button>
          </div>
          <div className={styles.review}>
            <div className={styles.top}>
              <span className={styles.name}>Name</span>
              <Rating rating={rating} isFully={true} />
            </div>
            <div className={styles.bottom}>
              <span className={styles.date}>Review Date</span>
              <span className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum delectus
                expedita illum maxime minus nam numquam odit omnis porro qui quos sed, similique. Ab
                consectetur facilis iste numquam odit?
              </span>
            </div>
          </div>
          {createReview && <ModalReview />}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
