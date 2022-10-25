import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SliderProps<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
  height: number;
  greenDots?: boolean;
  arr: Array<T>;
  arrowVertical?: number;
  duration?: number;
}
