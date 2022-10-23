import React from 'react';
import styles from './Bot.module.scss';
import { Dots, Slider } from '@/components/ReusableComponents';
import { Arrow } from '@/components/Ui';
import { useSlider } from '@/hooks';
import { BotProps } from './Bot.props';

export const Bot = ({ ...props }: BotProps) => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const { ...slider } = useSlider({
    imageWidth: props.width,
    arrLength: props.arr.map((a) => a.s).length,
    duration: 2000,
    auto,
  });
  return (
    <div
      className={styles.wrapper}
      style={{
        width: '100%',
        maxHeight: `${props.maxHeight}px`,
      }}
    >
      {props.arr.map((a) =>
        a.s.map((s) => (
          <Slider
            key={s._id}
            width={props.width}
            maxHeight={props.maxHeight}
            item={s}
            onMouseEnter={() => setAuto(false)}
            onMouseLeave={() => setAuto(true)}
            offset={slider.offset}
          />
        ))
      )}
      <Dots
        className={styles.dots}
        slideIndex={slider.slideIndex}
        dots={slider.dots}
        arr={props.arr.map((a) => a.s)}
        appearance='activeGreen'
      />
      <Arrow appearance='left' background='white' onClick={slider.left} className={styles.left} />
      <Arrow
        appearance='right'
        background='white'
        onClick={slider.right}
        className={styles.right}
      />
    </div>
  );
};
