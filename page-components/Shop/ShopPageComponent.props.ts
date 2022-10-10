import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/product.interface';
import { IMenu } from '../../interfaces/menu.interface';
import { IBrand } from '../../interfaces/brand.interface';

export interface ShopPageComponentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[];
  dayProducts: IProduct[];
  menu: IMenu[];
  brand: IBrand[];
}
