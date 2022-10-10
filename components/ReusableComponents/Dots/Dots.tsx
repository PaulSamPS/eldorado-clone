import React from 'react';
import cn from 'classnames';
import { DotsProps } from './Dots.props';
import styles from './Dots.module.scss';

export const Dots = ({
  slideIndex,
  appearance,
  dots,
  arr,
  className,
  ...props
}: DotsProps): JSX.Element => {
  const [dotsArray, setDotsArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  React.useEffect(() => {
    constructDots(slideIndex);
  }, [slideIndex, arr]);

  const constructDots = (slideIndex: number) => {
    const updateDots = arr.map((dot: JSX.Element, index) => {
      return (
        <button key={index} onClick={() => dots(index)}>
          <span
            className={cn(styles.dots, {
              [styles.active]: slideIndex === index,
              [styles.activeGreen]: slideIndex === index && appearance === 'activeGreen',
            })}
          />
        </button>
      );
    });
    setDotsArray(updateDots);
  };

  return (
    <div {...props} className={cn(styles.dots, className)}>
      {dotsArray.map((dots, index) => (
        <span key={index}>{dots}</span>
      ))}
    </div>
  );
};
