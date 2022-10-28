import React from 'react';
import cn from 'classnames';
import styles from './Carousel.module.scss';
import { CarouselProps } from './Carousel.props';
import { useScreenWidth, useSlider } from '@/hooks';
import { Arrow } from '@/components//Ui';

export const Carousel = ({ currentProduct, className, imageWidth }: CarouselProps) => {
  const screenWidth = useScreenWidth();
  const { offset, offsetPreview, slideIndex, left, right, dots } = useSlider({
    arrLength: currentProduct!.img.length,
    imageWidth,
    preview: true,
    imageWidthPreview: 62.5,
  });

  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={styles.sliderWrapper}
        style={{ width: `${imageWidth}px`, height: `${imageWidth}px` }}
      >
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
              style={{ width: `${imageWidth}px`, height: `${imageWidth}px` }}
            />
          </div>
        ))}
      </div>
      {screenWidth > 650 && (
        <>
          {slideIndex > 0 && imageWidth < 500 && (
            <Arrow appearance='left' background='none' onClick={left} className={styles.leftTop} />
          )}
          {slideIndex !== currentProduct!.img.length - 1 && imageWidth < 500 && (
            <Arrow
              appearance='right'
              background='none'
              onClick={right}
              className={styles.rightTop}
            />
          )}
          <div className={styles.previewWrapper}>
            {currentProduct?.img.map((image: any, index: number) => (
              <button
                type='button'
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
              </button>
            ))}
          </div>
          {slideIndex > 0 && (
            <Arrow appearance='left' background='white' onClick={left} className={styles.leftBot} />
          )}
          {slideIndex !== currentProduct!.img.length - 1 && (
            <Arrow
              appearance='right'
              background='white'
              onClick={right}
              className={styles.rightBot}
            />
          )}
        </>
      )}
    </div>
  );
};
