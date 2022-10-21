interface IGenerateWidth {
  width: number;
  max: number;
  min: number;
}

export const generateWidth = ({ width, min, max }: IGenerateWidth): number => {
  if (width >= max) {
    return 1200;
  }

  if (width <= min) {
    return 320;
  }

  return width;
};
