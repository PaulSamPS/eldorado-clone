import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductReviewsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
}
