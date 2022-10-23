import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISliderItem } from '@/interfaces';

export interface SliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
  offset: number;
  maxHeight: number;
  item: ISliderItem;
}
