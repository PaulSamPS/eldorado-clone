import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import Dots from '../Dots/Dots';
import styles from './Slider.module.scss';
import Arrow from '../Ui/Arrow/Arrow';
import Link from 'next/link';
import { useSlider } from '../../hooks/useSlider';

const sliderTop = [
  {
    id: 0,
    img: 'https://static.eldorado.ru/upload/newbx/1f8/1f84c572ed42d9d309712e0818c8893f.png/resize/660x300/',
    type: 'cart',
  },
  {
    id: 1,
    img: 'https://static.eldorado.ru/upload/newbx/4b6/4b6f3cb459e482fb1c1db6760fbc335b.png/resize/660x300/',
    type: 'login',
  },
  {
    id: 2,
    img: 'https://static.eldorado.ru/upload/newbx/a84/a84c47bf28e3f2d3f5dad937ab2436db.png/resize/660x300/',
    type: 'registration',
  },
  {
    id: 3,
    img: 'https://static.eldorado.ru/upload/newbx/4f3/4f3edd6d92a5c73ef12b706dd56c0df0.png/resize/660x300/',
    type: 'cart',
  },
  {
    id: 4,
    img: 'https://static.eldorado.ru/upload/newbx/e00/e0001f81e8e63dcaf707f9f1dbc92b67.png/resize/660x300/',
    type: 'cart',
  },
];

const Slider = ({ className }: SliderProps) => {
  const { offset, dots, left, right, slideIndex } = useSlider(660, sliderTop.length, true);

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
