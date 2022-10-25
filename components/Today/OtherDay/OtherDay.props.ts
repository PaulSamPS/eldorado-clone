import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '@/interfaces';

export interface OtherDayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dayProducts: IProduct[];
  currentProduct: IProduct | undefined;
}
