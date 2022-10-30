import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BasketInterface } from '@/interfaces';

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  basket: BasketInterface;
}
