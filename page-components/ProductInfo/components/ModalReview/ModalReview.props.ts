import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ModalReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  setWriteFeedback: (writeFeedback: boolean) => void;
  rating: number;
  setRating: (rating: number) => void;
}
