import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IBrand } from '../../../interfaces/brand.interface';

export interface BrandsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  brands: IBrand[];
}
