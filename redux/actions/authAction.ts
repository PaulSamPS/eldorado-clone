import { $host } from '../../http';
import { IAuthForm, IAuthSentResponse } from '../../interfaces/auth.interface';
import jwtDecode from 'jwt-decode';
import { loginReducer } from '../reducers/loginReducer';
import { AxiosError, AxiosResponse } from 'axios';
import { AppDispatch } from '../store';
import { IErrorResponse } from '../../interfaces/axiosError';
import { registrationReducer } from '../reducers/registrationReducer';

export const login =
  ({ password, email }: IAuthForm) =>
  async (dispatch: AppDispatch) => {
    dispatch(loginReducer.actions.setLoading());
    await $host
      .post('user/login', { password, email })
      .then((res: AxiosResponse<IAuthSentResponse>) => {
        dispatch(loginReducer.actions.setSuccess(jwtDecode(res.data.token)));
        localStorage.setItem('AccessToken', 'Bearer ' + res.data.token);
      })
      .catch((e: AxiosError<IErrorResponse>) => {
        dispatch(loginReducer.actions.setErrorLogin(<string>e.response?.data.message));
      });
  };

export const registration =
  ({ password, email }: IAuthForm) =>
  async (dispatch: AppDispatch) => {
    await $host
      .post(`api/auth/registration`, { password, email })
      .then((res: AxiosResponse) => {
        dispatch(registrationReducer.actions.setSuccess());
      })
      .catch((e: AxiosError<IErrorResponse>) => {
        dispatch(
          registrationReducer.actions.setErrorRegistration(<string>e.response?.data.message)
        );
        console.log(e);
      });
  };
