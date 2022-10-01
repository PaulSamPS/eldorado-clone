import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NameProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  setName: (name: string) => void;
}
