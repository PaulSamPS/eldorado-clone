import jwtDecode from 'jwt-decode';
import { AxiosError, AxiosResponse } from 'axios';
import { $host } from '@/http';
import { IAuthSentResponse, IErrorResponse } from '@/interfaces';
import { authReducer } from '@/redux/reducers';
import { AppDispatch } from '../store';

export const login = () => async (dispatch: AppDispatch) => {
  dispatch(authReducer.actions.setLoading());
  await $host
    .get('user/login')
    .then((res: AxiosResponse<IAuthSentResponse>) => {
      dispatch(authReducer.actions.setUser(jwtDecode(res.data.token)));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      dispatch(authReducer.actions.setError(<string>e.response?.data.message));
      dispatch(authReducer.actions.setLogout());
    });
};

export const enterCode = (code: string, userId: string) => async (dispatch: AppDispatch) => {
  dispatch(authReducer.actions.setLoading());
  await $host
    .post('code/enter-code', { code, userId })
    .then((res: AxiosResponse<IAuthSentResponse>) => {
      dispatch(authReducer.actions.setUser(jwtDecode(res.data.token)));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      dispatch(authReducer.actions.setError(<string>e.response?.data.message));
    });
};
