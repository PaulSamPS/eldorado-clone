import { IProduct } from './product.interface';

export interface IAuthSentResponse {
  message: string;
  token: string;
}

export interface IAuthForm {
  password: string;
  email: string;
}

export interface IRegistration {
  password: string;
  email: string;
  userName: string;
}

export interface ILocation {
  pathname: string;
}
