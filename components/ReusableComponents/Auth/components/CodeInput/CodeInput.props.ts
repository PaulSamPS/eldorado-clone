import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CodeInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userId: string;
  setIsAuth: (isAuth: boolean) => void;
}
