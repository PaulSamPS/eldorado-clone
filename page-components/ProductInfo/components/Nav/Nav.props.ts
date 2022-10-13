import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setItemIndex: (number: number) => void;
  itemIndex: number;
}
