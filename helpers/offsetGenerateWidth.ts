import { WidthContainer } from './constants';

export const offsetGenerateWidth = (width: number, screen: number): number => {
  if (screen <= 1300 && screen >= WidthContainer && width > 960) {
    return 960;
  }

  return width;
};
