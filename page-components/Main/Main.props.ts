import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenu, IProduct, ISlider } from '@/interfaces';

export interface MainPageComponentsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menu: IMenu[];
  products: IProduct[];
  dayProducts: IProduct[];
  slider: ISlider[];
}
