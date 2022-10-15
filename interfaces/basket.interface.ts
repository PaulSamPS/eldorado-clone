import { IUser } from './user.interface';
import { IProduct } from './product.interface';

export interface BasketInterface {
  _id: string;
  user: IUser;
  products: IProduct[];
  totalPrice: number;
}
