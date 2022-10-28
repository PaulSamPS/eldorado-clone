import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CartIconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isInBasket: boolean;
  appearance?: 'button';
}
