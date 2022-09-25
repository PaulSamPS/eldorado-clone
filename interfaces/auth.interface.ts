export interface IAuthSentResponse {
  message: string;
  token: string;
}

export interface IAuthForm {
  password: string;
  email: string;
}

export interface ILocation {
  pathname: string;
}
