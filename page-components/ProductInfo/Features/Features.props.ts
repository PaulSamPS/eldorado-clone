import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IFeatures, IProduct } from '../../../interfaces/product.interface';

export interface FeaturesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  features: IFeatures;
}
