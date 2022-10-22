interface IGenerateWidth {
  width: number;
  max: number;
  min: number;
}

export const generateWidth = ({ width, min, max }: IGenerateWidth): number => {
  if (width >= max) {
    return max;
  }

  if (width <= min) {
    return min;
  }

  return width;
};
