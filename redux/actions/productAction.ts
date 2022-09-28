import { Dispatch } from 'redux';
import { $authHost, $host } from '../../http';
import { Api, SET_ONE_PRODUCT, SET_PRODUCTS } from '../constants/constants';
import { IProduct } from '../../interfaces/product.interface';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AppDispatch } from '../store';
import { productReducer } from '../reducers/productReducer';
import { IErrorResponse } from '../../interfaces/axiosError';

export const getProduct = () => async (dispatch: AppDispatch) => {
  dispatch(productReducer.actions.setIsLoadingProduct());
  await $host
    .get('product')
    .then((res: AxiosResponse<IProduct[]>) => {
      dispatch(productReducer.actions.setSuccessProducts(res.data));
    })
    .catch((e: AxiosError<IErrorResponse>) => {
      console.log(e.response?.data.message);
    });
};

export const getOneProduct = (id: string | undefined) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<IProduct[]>(Api + `product/${id}`);
    dispatch(setOneProduct(res.data));
  };
};

export const addProduct = async (formData: any) => {
  return await $host.post<IProduct[]>(Api + 'product', formData);
};

export const setProducts = (products: IProduct[]) => ({ type: SET_PRODUCTS, payload: products });
export const setOneProduct = (oneProduct: {}) => ({ type: SET_ONE_PRODUCT, payload: oneProduct });
