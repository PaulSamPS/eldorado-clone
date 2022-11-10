import jwtDecode from 'jwt-decode';

export const decodeToken = (token: any) => jwtDecode(token.data.token);
