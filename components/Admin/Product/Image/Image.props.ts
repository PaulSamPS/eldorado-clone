import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setFiles: ([]: any) => void;
}
