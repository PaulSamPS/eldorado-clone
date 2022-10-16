import { $host } from '../../http';
import { AppDispatch } from '../store';
import { basketReducer } from '../reducers/basketReducer';
import { AxiosError, AxiosResponse } from 'axios';
import { IErrorResponse } from '../../interfaces/axiosError';
import { BasketInterface } from '../../interfaces/basket.interface';

export const getBasket = (userId?: string) => async (dispatch: AppDispatch) => {
  dispatch(basketReducer.actions.setLoadingBasket());
  await $host
    .post('basket', userId && { userId: userId })
    .then((res: AxiosResponse<BasketInterface>) => {
      dispatch(basketReducer.actions.setSuccessBasket(res.data));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      dispatch(basketReducer.actions.setErrorBaskets(e.response!.data.message));
    });
};

export const addToBasket =
  (productId?: string, price?: number) => async (dispatch: AppDispatch) => {
    dispatch(basketReducer.actions.setLoadingBasket());
    await $host
      .post('basket/add-to-basket', { productId: productId, productPrice: price })
      .then((res: AxiosResponse<BasketInterface>) => {
        dispatch(basketReducer.actions.setSuccessBasket(res.data));
      })
      .catch((e: AxiosError<IErrorResponse>) => {
        dispatch(basketReducer.actions.setErrorBaskets(e.response!.data.message));
      });
  };

export const getBasketItems = () => async (dispatch: AppDispatch) => {
  dispatch(basketReducer.actions.setLoadingBasket());
  await $host
    .get('get-basket')
    .then((res: AxiosResponse<BasketInterface>) => {
      dispatch(basketReducer.actions.setSuccessBasket(res.data));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      dispatch(basketReducer.actions.setErrorBaskets(e.response!.data.message));
    });
};
