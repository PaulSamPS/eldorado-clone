import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../interfaces/product.interface';
import { IMenu } from '../../interfaces/menu.interface';

export interface ShopProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: IProduct[];
  menu: IMenu[];
}
