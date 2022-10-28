import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/product.interface';

export interface Rotate360Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIs360: (is360: boolean) => void;
  product: IProduct;
}
