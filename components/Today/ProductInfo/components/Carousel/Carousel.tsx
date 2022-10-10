import React from 'react';
import styles from './Carousel.module.scss';
import Arrow from '../../../../Ui/Arrow/Arrow';
import cn from 'classnames';
import { CarouselProps } from './Carousel.props';
import { useRouter } from 'next/router';

export const Carousel = ({ currentProduct }: CarouselProps) => {
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [offset, setOffset] = React.useState<number>(0);
  const [offsetPreview, setOffsetPreview] = React.useState<number>(0);
  const IMG_WIDTH = 380;
  const IMG_WIDTH_PREVIEW = 62.5;
  const { query } = useRouter();

  React.useEffect(() => {
    setSlideIndex(0);
    setOffsetPreview(0);
    setOffset(0);
  }, [query]);

  const right = () => {
    setOffset((currentOffset: number) => {
      return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (currentProduct!.img.length - 1)));
    });
    setSlideIndex(slideIndex + 1);
    setOffsetPreview((currentOffset: number) => {
      return Math.max(
        currentOffset - IMG_WIDTH_PREVIEW,
        -(IMG_WIDTH_PREVIEW * (currentProduct!.img.length - 4))
      );
    });
  };

  const left = () => {
    setOffset((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setOffsetPreview((currentOffset: number) => {
      return Math.min(currentOffset + IMG_WIDTH_PREVIEW, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const handleClick = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
    setOffsetPreview(-IMG_WIDTH_PREVIEW);
  };

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
            onClick={() => handleClick(index)}
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
