import { AppDispatch } from '../store';
import { $host } from '../../http';
import { AxiosError, AxiosResponse } from 'axios';
import { dayProductReducer } from '../reducers/dayProducts.reducer';
import { IErrorResponse } from '../../interfaces/axiosError';
import { IProduct } from '../../interfaces/product.interface';

export const getDayProducts = () => async (dispatch: AppDispatch) => {
  await $host
    .get('day-products')
    .then((res: AxiosResponse<IProduct[]>) => {
      dispatch(dayProductReducer.actions.setSuccessDayProducts(res.data));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      console.log(e.response?.data.message);
    });
};
