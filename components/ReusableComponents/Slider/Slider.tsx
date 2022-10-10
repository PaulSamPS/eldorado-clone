import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';
import Arrow from '../../Ui/Arrow/Arrow';
import Link from 'next/link';
import { useSlider } from '../../../hooks/useSlider';
import { Dots } from '../Dots/Dots';

export const Slider = ({
  arr,
  width,
  height,
  greenDots = false,
  arrowTop,
  arrowVertical,
  duration,
  className,
}: SliderProps) => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const { offset, dots, left, right, slideIndex } = useSlider({
    imageWidth: width,
    arrLength: arr.length,
    duration: duration,
    auto: auto,
  });

  return (
    <div
      className={styles.sliderBlock}
      style={{ width: `${width}px` }}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div
        className={cn(styles.sliderWrapper, className)}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {arr.map((slide: any) => (
          <div
            className={styles.slider}
            key={slide.id}
            style={{
              transform: `translateX(${offset}px)`,
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <Link href={slide.type}>
              <img
                src={slide.img}
                alt='slide'
                style={{ width: `${width}px`, height: `${height}px` }}
              />
            </Link>
          </div>
        ))}
        <Arrow
          appearance='left'
          background='white'
          onClick={left}
          style={{ top: `${arrowTop}%`, left: `-${arrowVertical}px` }}
        />
        <Arrow
          appearance='right'
          background='white'
          onClick={right}
          style={{ top: `${arrowTop}%`, right: `-${arrowVertical}px` }}
        />
      </div>
      <div className={styles.blockDots}>
        <Dots
          slideIndex={slideIndex}
          dots={dots}
          arr={arr}
          appearance={greenDots ? 'activeGreen' : undefined}
        />
      </div>
    </div>
  );
};
