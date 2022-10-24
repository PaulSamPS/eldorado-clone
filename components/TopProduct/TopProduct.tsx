import React from 'react';
import cn from 'classnames';
import { TopProductProps } from './TopProduct.props';
import styles from './TopProduct.module.scss';
import { Card, Nav } from './components';
import { IProduct } from '@/interfaces';
import { H, Arrow } from '@/components/Ui';
import { useScreenWidth } from '@/hooks';
import { WidthContainer } from '@/helpers';

export const TopProduct = ({ product, className }: TopProductProps): JSX.Element => {
  const [offset, setOffset] = React.useState<number>(0);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const screenWidth = useScreenWidth();
  const IMG_WIDTH = 235.2;

  const prevSlide = () => {
    setOffset((currentOffset: number) => Math.min(currentOffset + IMG_WIDTH, 0));
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const nextSlide = () => {
    if (slideIndex === product.length - 4) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) =>
        Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (product.length - 4)))
      );
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className={cn(styles.wrapperSwipe, className)}>
      <H tag='h2'>Рекомендуем вам</H>
      {screenWidth > WidthContainer && (
        <>
          <Arrow
            appearance='left'
            background='white'
            onClick={prevSlide}
            className={styles.arrowLeft}
          />
          <Arrow
            appearance='right'
            background='white'
            onClick={nextSlide}
            className={styles.arrowRight}
          />
        </>
      )}
      <Nav />
      <div className={styles.cardBlock}>
        <div className={styles.cardGrid} style={{ width: '100%' }}>
          {product.map((p: IProduct) => (
            <Card key={p._id} product={p} offset={offset} className={styles.card} />
          ))}
        </div>
      </div>
    </div>
  );
};
