import React from 'react';
import cn from 'classnames';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';
import { useScreenWidth } from '@/hooks';

export const Slider = ({ className, ...props }: SliderProps): JSX.Element => {
  const screenWidth = useScreenWidth();

  return (
    <div
      className={cn(styles.wrapper, className)}
      style={{
        transform: `translateX(${props.offset}px)`,
        width: '100%',
      }}
    >
      <img
        src={`http://localhost:5000/slider/${props.item.name}/${props.item.img}`}
        alt='slide'
        style={{
          width: `${screenWidth <= 1000 ? props.width - 100 : props.width}px`,
        }}
      />
    </div>
  );
};
