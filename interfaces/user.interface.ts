import { IProduct } from './product.interface';

interface IOrders {
  product: IProduct;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  orders: IOrders[];
}

export interface IEnterCode {
  code: string;
  userId: string;
}
