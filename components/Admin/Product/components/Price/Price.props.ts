import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
  setPrice: (price: number) => void;
  oldPrice: number;
  setOldPrice: (price: number) => void;
  addOldPrice: boolean;
  setAddOldPrice: (oldPrice: boolean) => void;
}
