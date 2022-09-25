import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import Dots from '../Dots/Dots';
import styles from './Slider.module.scss';
import Arrow from '../Ui/Arrow/Arrow';
import Link from 'next/link';

const Slider = ({ className }: SliderProps) => {
  const [offset, setOffset] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const IMG_WIDTH = 660;

  const sliderTop = [
    {
      id: 0,
      img: 'https://static.eldorado.ru/upload/newbx/a9f/a9f9907b6fef0b52093a5cba8b5b1302.png/resize/660x300/',
      type: 'cart',
    },
    {
      id: 1,
      img: 'https://static.eldorado.ru/upload/newbx/636/636426a6dcf4c6954ec6f4610e0a1daf.png/resize/660x300/',
      type: 'login',
    },
    {
      id: 2,
      img: 'https://static.eldorado.ru/upload/newbx/582/5820494fd78bfcc5137097760c493c0e.png/resize/660x300/',
      type: 'registration',
    },
    {
      id: 3,
      img: 'https://static.eldorado.ru/upload/newbx/4f3/4f3edd6d92a5c73ef12b706dd56c0df0.png/resize/660x300/',
      type: 'cart',
    },
    {
      id: 4,
      img: 'https://static.eldorado.ru/upload/newbx/b18/b1841bda587934660e832f28d1cdb69e.png/resize/660x300/',
      type: 'cart',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === sliderTop.length - 1) {
        setSlideIndex(0);
        setOffset(0);
      } else {
        setOffset((currentOffset: number) => {
          return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * sliderTop.length));
        });
        setSlideIndex((slideIndex) => slideIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const right = () => {
    if (slideIndex === sliderTop.length - 1) {
      setSlideIndex(0);
      setOffset(0);
    } else {
      setOffset((currentOffset: number) => {
        return Math.max(currentOffset - IMG_WIDTH, -(IMG_WIDTH * (sliderTop.length - 1)));
      });
      setSlideIndex(slideIndex + 1);
    }
  };

  const left = () => {
    setOffset((currentOffset: number) => {
      console.log(currentOffset);
      return Math.min(currentOffset + IMG_WIDTH, 0);
    });
    setSlideIndex(slideIndex === 0 ? 0 : slideIndex - 1);
  };

  const dots = (index: number) => {
    setSlideIndex(index);
    setOffset(-(index * IMG_WIDTH));
  };

  return (
    <div className={styles.sliderBlock}>
      <h2>Новые акции</h2>
      <div className={cn(styles.sliderWrapper, className)}>
        {sliderTop.map((slide: any) => (
          <div
            className={styles.slider}
            key={slide.id}
            style={{ transform: `translateX(${offset}px)` }}
          >
            <Link href={slide.type}>
              <img src={slide.img} alt='slide' />
            </Link>
          </div>
        ))}
        <Arrow appearance='left' background='white' onClick={left} />
        <Arrow appearance='right' background='white' onClick={right} />
      </div>
      <div className={styles.blockDots}>
        <Dots slideIndex={slideIndex} dots={dots} arr={sliderTop} />
      </div>
    </div>
  );
};

export default Slider;
