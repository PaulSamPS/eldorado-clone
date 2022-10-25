import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../../../interfaces/product.interface';

export interface PercentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentProduct: IProduct | undefined;
}
