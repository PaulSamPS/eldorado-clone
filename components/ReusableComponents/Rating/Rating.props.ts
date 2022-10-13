import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: true | false;
  isFully?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
