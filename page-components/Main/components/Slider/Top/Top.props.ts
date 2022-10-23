import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISlider } from '@/interfaces';

export interface TopProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
  maxHeight: number;
  arr: ISlider[];
}
