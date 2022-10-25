import { WidthContainer } from './constants';

export const generateWidthCarousel = (width: number, screen: number): number => {
  if (screen <= 1400 && screen > WidthContainer) {
    return 350;
  }

  if (screen <= WidthContainer) {
    return 200;
  }

  return width;
};
