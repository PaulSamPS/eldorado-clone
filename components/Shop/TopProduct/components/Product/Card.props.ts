import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../../../interfaces/product.interface';

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
  offset?: number;
}
