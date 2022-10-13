import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface WriteFeedbackProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setWriteFeedback: (writeFeedback: boolean) => void;
  sort: string;
  setSort: (writeFeedback: string) => void;
}
