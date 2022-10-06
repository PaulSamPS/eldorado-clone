import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
  height: number;
  greenDots?: boolean;
  arr: any[];
  arrowTop: number;
  arrowVertical: number;
}
