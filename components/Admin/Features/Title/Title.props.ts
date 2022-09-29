import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: any;
  info: any[];
  setInfo: ([]: any) => void;
}
