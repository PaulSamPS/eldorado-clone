import {DetailedHTMLProps, HTMLAttributes} from 'react';
import {IProduct} from '../../../../interfaces/product.interface';

export interface ItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: IProduct
    offset?: number
    appearance: 'topProduct' | 'dayProduct'
}
