import React from 'react';
import styles from './Carousel.module.scss';
import Arrow from '../../../../Ui/Arrow/Arrow';
import cn from 'classnames';
import { CarouselProps } from './Carousel.props';
import { useSlider } from '../../../../../hooks/useSlider';

export const Carousel = ({ currentProduct }: CarouselProps) => {
  const { offset, offsetPreview, slideIndex, left, right, dots } = useSlider({
    arrLength: currentProduct!.img.length,
    imageWidth: 380,
    preview: true,
    imageWidthPreview: 62.5,
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderWrapper}>
        {currentProduct?.img.map((image: any) => (
          <div
            key={image.fileName}
            className={styles.slider}
            style={{ transform: `translateX(${offset}px)` }}
          >
            <img
              src={`http://localhost:5000/product/${currentProduct.name}/${image.fileName}`}
              alt={currentProduct.name}
              title={currentProduct.name}
            />
          </div>
        ))}
      </div>
      {slideIndex > 0 && (
        <Arrow appearance='left' background='none' onClick={left} className={styles.leftTop} />
      )}
      {slideIndex !== currentProduct!.img.length - 1 && (
        <Arrow appearance='right' background='none' onClick={right} className={styles.rightTop} />
      )}
      <div className={styles.previewWrapper}>
        {currentProduct?.img.map((image: any, index: number) => (
          <div
            key={image.fileName}
            onClick={() => dots(index)}
            style={{ transform: `translateX(${offsetPreview}px)` }}
            className={cn(styles.previewSlider, {
              [styles.active]: slideIndex === index,
            })}
          >
            <img
              src={`http://localhost:5000/product/${currentProduct.name}/${image.fileName}`}
              alt=''
            />
          </div>
        ))}
      </div>
      {slideIndex > 0 && (
        <Arrow appearance='left' background='white' onClick={left} className={styles.leftBot} />
      )}
      {slideIndex !== currentProduct!.img.length - 1 && (
        <Arrow appearance='right' background='white' onClick={right} className={styles.rightBot} />
      )}
    </div>
  );
};
