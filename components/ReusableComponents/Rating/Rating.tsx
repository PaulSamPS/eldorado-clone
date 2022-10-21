import React, { KeyboardEvent } from 'react';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.scss';
import { StarIcon } from '@/icons';

export const Rating = ({
  isEditable = false,
  isFully = false,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<div />));

  const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !props.setRating) {
      return;
    }
    props.setRating(index);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => (
      <span
        key={index}
        className={cn(styles.star, {
          [styles.filled]: index < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(index + 1)}
        onMouseLeave={() => changeDisplay(props.rating)}
        onClick={() => onClick(index + 1)}
      >
        <StarIcon
          onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
        />
      </span>
    ));
    setRatingArray(updatedArray);
  };

  React.useEffect(() => {
    constructRating(props.rating);
  }, [props.rating]);

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  const onClick = (index: number) => {
    if (!isEditable || !props.setRating) {
      return;
    }
    props.setRating(index);
  };

  return (
    <div className={props.className}>
      {isEditable ? (
        <div className={styles.starBlock}>
          {ratingArray.map(() => (
            <div className={styles.starReview}>{props.rating}</div>
          ))}
        </div>
      ) : (
        <div className={styles.ratingBlock}>
          {isFully ? ratingArray.map((r, index) => <span key={index}>{r}</span>) : ratingArray[0]}
          {!isFully ? <span>{props.rating}</span> : ''}
        </div>
      )}
    </div>
  );
};
