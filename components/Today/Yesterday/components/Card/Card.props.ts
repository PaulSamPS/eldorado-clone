import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '@/interfaces';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productsYesterday: IProduct;
}
