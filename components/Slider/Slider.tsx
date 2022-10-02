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
    img: 'https://static.eldorado.ru/upload/newbx/2e8/2e847c62a73a609ba350cb5c51647644.png/resize/660x300/',
    type: 'cart',
  },
  {
    id: 1,
    img: 'https://static.eldorado.ru/upload/newbx/6ee/6eef3e888c29ceaec4788fcb4d5a1c3f.png/resize/660x300/',
    type: 'login',
  },
  {
    id: 2,
    img: 'https://static.eldorado.ru/upload/newbx/158/158e1234240317572e316fadec158f81.png/resize/660x300/',
    type: 'registration',
  },
  {
    id: 3,
    img: 'https://static.eldorado.ru/upload/newbx/bf9/bf96288224960fc91726b42fce680dbc.png/resize/660x300/',
    type: 'cart',
  },
  {
    id: 4,
    img: 'https://static.eldorado.ru/upload/newbx/3eb/3eb47082211defc8e57fa934ece11d33.png/resize/660x300/',
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
