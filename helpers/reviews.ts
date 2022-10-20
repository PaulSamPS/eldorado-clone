export const generateCountTextReviews = (review: number) => {
  if (review >= 5 || review >= 25) {
    return 'отзывов';
  }
  if (review === 1 || review === 21) {
    return 'отзыв';
  }

  if (review > 1 || review >= 22 || review <= 24) {
    return 'отзыва';
  }

  return 'отзывов';
};
