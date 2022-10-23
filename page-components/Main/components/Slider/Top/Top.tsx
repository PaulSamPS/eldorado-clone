import React from 'react';
import styles from './Top.module.scss';
import { useSlider } from '@/hooks';
import { Dots, Slider } from '@/components/ReusableComponents';
import { Arrow } from '@/components/Ui';
import { TopProps } from './Top.props';

export const Top = ({ ...props }: TopProps) => {
  const [auto, setAuto] = React.useState<boolean>(true);
  const { ...slider } = useSlider({
    imageWidth: props.width,
    arrLength: props.arr.map((a) => a.l).length,
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
      {props.arr.map((array) =>
        array.l.map((l) => (
          <Slider
            key={l._id}
            width={props.width}
            maxHeight={props.maxHeight}
            item={l}
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
        arr={props.arr.map((a) => a.l)}
        appearance='activeGreen'
      />
      <Arrow appearance='left' background='white' onClick={slider.left} />
      <Arrow appearance='right' background='white' onClick={slider.right} />
    </div>
  );
};
