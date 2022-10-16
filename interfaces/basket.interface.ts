import { IUser } from './user.interface';
import { IProduct } from './product.interface';

interface BasketProduct {
  product: IProduct;
  qty: number;
}

export interface BasketInterface {
  _id: string;
  user: IUser;
  products: BasketProduct[];
  totalPrice: number;
}
