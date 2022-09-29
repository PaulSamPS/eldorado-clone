import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FeaturesItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: any;
  info: any[];
  setInfo: ([]: any) => void;
  titleNumber: number;
}
