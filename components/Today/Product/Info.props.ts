import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../interfaces/product.interface';

export interface InfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  currentProduct: IProduct | undefined;
}
