import React, { KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.scss';
import { StarIcon } from '../../../icons';

export const Rating = ({
  isEditable = false,
  rating,
  isFully = false,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  console.log(isEditable);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
      return (
        <span
          key={index}
          className={cn(styles.star, {
            [styles.filled]: index < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(index + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(index + 1)}
        >
          <StarIcon
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(index);
  };

  const onClick = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(index);
  };

  const handleSpace = (index: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(index);
  };

  return (
    <div className={className} {...props}>
      {isEditable ? (
        <div className={styles.starBlock}>
          {ratingArray.map((rating, index) => (
            <div key={index} className={styles.starReview}>
              {rating}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.ratingBlock}>
          {isFully ? ratingArray.map((r, index) => <span key={index}>{r}</span>) : ratingArray[0]}
          {!isFully ? <span>{rating}</span> : ''}
        </div>
      )}
    </div>
  );
};
