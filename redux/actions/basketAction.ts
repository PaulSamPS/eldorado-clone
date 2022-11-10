import { AxiosError, AxiosResponse } from 'axios';
import { $host } from '@/http';
import { AppDispatch } from '../store';
import { basketReducer } from '@/redux/reducers';
import { IErrorResponse, BasketInterface } from '@/interfaces';

export const getBasket = () => async (dispatch: AppDispatch) => {
  dispatch(basketReducer.actions.setLoadingBasket());
  await $host
    .get('basket')
    .then((res: AxiosResponse<BasketInterface>) => {
      dispatch(basketReducer.actions.setSuccessBasket(res.data));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      dispatch(basketReducer.actions.setErrorBaskets(e.response!.data.message));
    });
};
