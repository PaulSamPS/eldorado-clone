import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: any;
  info: any[];
  setInfo: ([]: any) => void;
  titleNumber: number;
}
