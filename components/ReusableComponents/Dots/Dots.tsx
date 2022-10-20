import React from 'react';
import cn from 'classnames';
import { DotsProps } from './Dots.props';
import styles from './Dots.module.scss';

export const Dots = ({ slideIndex, dots, ...props }: DotsProps): JSX.Element => {
  const [dotsArray, setDotsArray] = React.useState<JSX.Element[]>(new Array(5).fill(<div />));

  const constructDots = (newSlideIndex: number) => {
    const updateDots = props.arr.map((dot, index) => (
      <button key={index} onClick={() => dots(index)} type='button'>
        <span
          className={cn(styles.dots, {
            [styles.active]: newSlideIndex === index,
            [styles.activeGreen]: newSlideIndex === index && props.appearance === 'activeGreen',
          })}
        />
      </button>
    ));
    setDotsArray(updateDots);
  };

  React.useEffect(() => {
    constructDots(slideIndex);
  }, [slideIndex, props.arr]);

  return (
    <div {...props} className={cn(styles.dots, props.className)}>
      {dotsArray.map((d, index) => (
        <span key={index}>{d}</span>
      ))}
    </div>
  );
};
