import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';
import { useSlider, useScreenWidth } from '@/hooks';
import { Dots } from '@/components/ReusableComponents';
import { Arrow } from '@/components/Ui';

export const Slider = ({ greenDots = false, ...props }: SliderProps): JSX.Element => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const screenWidth = useScreenWidth();
  const { ...slider } = useSlider({
    imageWidth: props.width,
    arrLength: props.arr.length,
    duration: props.duration,
    auto: screenWidth > 1000 ? auto : false,
  });
  console.log(props.width, '0');

  return (
    <div
      className={cn(styles.wrapper, props.className)}
      style={{
        width: '100%',
        maxHeight: `${props.height}px`,
      }}
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >
      <div className={styles.sliderWrapper}>
        {props.arr.map((l) => (
          <div
            className={styles.slider}
            style={{
              transform: `translateX(${slider.offset}px)`,
              width: screenWidth < 1000 ? '100%' : `${props.width}`,
            }}
          >
            <img
              src={`http://localhost:5000/slider/${l.name}/${l.img}`}
              alt='slide'
              style={{
                width: `${screenWidth <= 1000 ? props.width - 100 : props.width}px`,
              }}
            />
          </div>
        ))}
      </div>
      {screenWidth > 1000 && (
        <Dots
          className={styles.dots}
          slideIndex={slider.slideIndex}
          dots={slider.dots}
          arr={props.arr}
          appearance={greenDots ? 'activeGreen' : undefined}
        />
      )}
      {screenWidth > 1000 && (
        <>
          <Arrow
            appearance='left'
            background='white'
            onClick={slider.left}
            style={{ top: `${(props.height - 50) / 2}px`, left: `-${props.arrowVertical}px` }}
          />
          <Arrow
            appearance='right'
            background='white'
            onClick={slider.right}
            style={{ top: `${(props.height - 50) / 2}px`, right: `-${props.arrowVertical}px` }}
          />
        </>
      )}
    </div>
  );
};
