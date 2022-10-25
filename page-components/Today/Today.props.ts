import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '@/interfaces';

export interface TodayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productsYesterday: IProduct[];
  currentProduct: IProduct | undefined;
  dayProducts: IProduct[];
}
