import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IFeatures } from '../../../../interfaces/product.interface';

export interface TableProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  features: IFeatures;
}
