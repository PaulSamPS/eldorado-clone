import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  isModal: (isModal: boolean) => void;
  errorMessage: string;
}
