import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AuthProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setIsModal?: (isModal: boolean) => void;
}
