export const generateCountTextReviews = (review: number) => {
  let number = Math.abs(review);

  number %= 100;

  if (number >= 5 && number <= 20) {
    return 'отзывов';
  }

  number %= 10;

  if (number === 1) {
    return 'отзыв';
  }

  if (number >= 2 && number <= 4) {
    return 'отзыва';
  }

  return 'отзывов';
};
