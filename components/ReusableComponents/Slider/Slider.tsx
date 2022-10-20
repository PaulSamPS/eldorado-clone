import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';
import { useSlider } from '../../../hooks/useSlider';
import { Dots } from '../Dots/Dots';
import { Arrow } from '../../Ui';

export const Slider = ({ greenDots = false, ...props }: SliderProps): JSX.Element => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const { offset, dots, left, right, slideIndex } = useSlider({
    imageWidth: props.width,
    arrLength: props.arr.length,
    duration: props.duration,
    auto,
  });

  return (
    <div
      className={styles.sliderBlock}
      style={{ width: `${props.width}px` }}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div
        className={cn(styles.sliderWrapper, props.className)}
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
      >
        {props.arr.map((slide: any) => (
          <div
            className={styles.slider}
            key={slide._id}
            style={{
              transform: `translateX(${offset}px)`,
              width: `${props.width}px`,
              height: `${props.height}px`,
            }}
          >
            <Link href='/'>
              <a>
                <img
                  src={`http://localhost:5000/slider/${slide.name}/${slide.img}`}
                  alt='slide'
                  style={{ width: `${props.width}px`, height: `${props.height}px` }}
                />
              </a>
            </Link>
          </div>
        ))}
        <Arrow
          appearance='left'
          background='white'
          onClick={left}
          style={{ top: `${props.arrowTop}%`, left: `-${props.arrowVertical}px` }}
        />
        <Arrow
          appearance='right'
          background='white'
          onClick={right}
          style={{ top: `${props.arrowTop}%`, right: `-${props.arrowVertical}px` }}
        />
      </div>
      <div className={styles.blockDots}>
        <Dots
          slideIndex={slideIndex}
          dots={dots}
          arr={props.arr}
          appearance={greenDots ? 'activeGreen' : undefined}
        />
      </div>
    </div>
  );
};
