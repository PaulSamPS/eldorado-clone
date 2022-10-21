import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMenu } from '@/interfaces';

export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  menu: IMenu[];
}
