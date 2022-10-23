import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISlider } from '@/interfaces';

export interface BotProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
  maxHeight: number;
  arr: ISlider[];
}
