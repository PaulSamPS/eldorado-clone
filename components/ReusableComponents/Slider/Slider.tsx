import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';
import { useSlider, useScreenWidth } from '@/hooks';
import { Dots } from '@/components/ReusableComponents';
import { Arrow } from '@/components/Ui';
import { WidthContainer, offsetGenerateWidth } from '@/helpers';
import { ISliderItem } from '@/interfaces';

export const Slider = ({ greenDots = false, ...props }: SliderProps<ISliderItem>): JSX.Element => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const screenWidth = useScreenWidth();
  const { ...slider } = useSlider({
    imageWidth: screenWidth > 1300 ? props.width : offsetGenerateWidth(props.width, screenWidth),
    arrLength: props.arr.length,
    duration: screenWidth > WidthContainer ? props.duration : undefined,
    // auto: false,
    auto: screenWidth > WidthContainer ? auto : false,
  });

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
            key={l._id}
            className={styles.slider}
            style={{
              transform: `translateX(${slider.offset}px)`,
              width: screenWidth < WidthContainer ? '100%' : `${props.width}`,
            }}
          >
            <img
              src={`http://localhost:5000/slider/${l.name}/${l.img}`}
              alt='slide'
              style={{
                width: `${
                  screenWidth <= WidthContainer
                    ? props.width - 100
                    : offsetGenerateWidth(props.width, screenWidth)
                }px`,
              }}
            />
          </div>
        ))}
      </div>
      {screenWidth > WidthContainer && (
        <Dots
          className={styles.dots}
          slideIndex={slider.slideIndex}
          dots={slider.dots}
          arr={props.arr}
          appearance={greenDots ? 'activeGreen' : undefined}
        />
      )}
      {screenWidth > WidthContainer && (
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
