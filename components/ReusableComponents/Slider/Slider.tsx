import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';
import { useSlider, useScreenWidth } from '@/hooks';
import { Dots } from '@/components/ReusableComponents';
import { Arrow } from '@/components/Ui';

export const Slider = ({ greenDots = false, className, ...props }: SliderProps): JSX.Element => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const screenWidth = useScreenWidth();
  const { ...slider } = useSlider({
    imageWidth: props.width,
    arrLength: props.arr.length,
    duration: props.duration,
    auto: screenWidth > 1000 ? auto : false,
  });

  return (
    <div
      className={cn(styles.wrapper, className)}
      style={{ width: `${props.width}px` }}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div
        className={styles.sliderWrapper}
        style={{ width: `${props.width}px`, height: `${props.height}px` }}
      >
        {props.arr.map((slide: any) => (
          <div
            className={styles.slider}
            key={slide._id}
            style={{
              transform: `translateX(${slider.offset}px)`,
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
        {screenWidth > 1000 && (
          <>
            <Arrow
              appearance='left'
              background='white'
              onClick={slider.left}
              style={{ top: `${props.arrowTop}%`, left: `-${props.arrowVertical}px` }}
            />
            <Arrow
              appearance='right'
              background='white'
              onClick={slider.right}
              style={{ top: `${props.arrowTop}%`, right: `-${props.arrowVertical}px` }}
            />
          </>
        )}
      </div>
      {screenWidth > 1000 && (
        <div className={styles.blockDots}>
          <Dots
            slideIndex={slider.slideIndex}
            dots={slider.dots}
            arr={props.arr}
            appearance={greenDots ? 'activeGreen' : undefined}
          />
        </div>
      )}
    </div>
  );
};
