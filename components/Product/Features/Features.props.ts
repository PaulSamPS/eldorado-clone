import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '@/interfaces';

export interface FeaturesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProduct;
}
