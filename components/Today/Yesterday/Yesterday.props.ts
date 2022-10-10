import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../interfaces/product.interface';

export interface YesterdayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  productsYesterday: IProduct[];
}
