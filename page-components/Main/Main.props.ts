import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BasketInterface, IMenu, IProduct, ISlider } from '@/interfaces';

export interface MainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menu: IMenu[];
  products: IProduct[];
  dayProducts: IProduct[];
  slider: ISlider[];
  basket: BasketInterface;
}
