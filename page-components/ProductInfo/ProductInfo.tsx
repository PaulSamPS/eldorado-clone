import React, { FC } from 'react';
import styles from './ProductInfo.module.scss';
import { ProductInfoProps } from './ProductInfo.props';
import { Buy, Carousel, Rating, Review } from '../../components/ReusableComponents';
import { ZoomModal } from '../../components/ReusableComponents/ZoomModal/ZoomModal';
import { Rotate360 } from '../../components/Rotate360/Rotate360';
import { Icon360 } from '../../icons';
import { ModalReview, Nav, Features, ProductReviews, WriteFeedback } from './components';

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const [itemIndex, setItemIndex] = React.useState<number>(0);
  const [is360, setIs360] = React.useState<boolean>(false);
  const [review, setReview] = React.useState<number>(1);
  const [rating, setRating] = React.useState<number>(5);
  const [sort, setSort] = React.useState<string>('Пользе');
  const [writeFeedback, setWriteFeedback] = React.useState<boolean>(false);

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
        <Nav setItemIndex={setItemIndex} itemIndex={itemIndex} />
      </div>
      {itemIndex === 0 ? (
        <Features product={product} />
      ) : (
        <WriteFeedback setWriteFeedback={setWriteFeedback} sort={sort} setSort={setSort} />
      )}
      <ProductReviews rating={rating} />
      {writeFeedback && <ModalReview setWriteFeedback={setWriteFeedback} />}
    </div>
  );
};

export default ProductInfo;
