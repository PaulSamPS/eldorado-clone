import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BasketProduct } from '@/interfaces';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: BasketProduct;
}
