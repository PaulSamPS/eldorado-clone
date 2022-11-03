import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface StepsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
