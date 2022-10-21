import { getCookie } from 'cookies-next';
import { $host } from './axios';
import { BasketInterface } from '../interfaces/basket.interface';
import { IProduct } from '../interfaces/product.interface';

interface AddToBasketHttp {
  newBasket: BasketInterface;
}

export const addToBasketHttp = async (product: IProduct): Promise<AddToBasketHttp> => {
  const basketCookie = getCookie('basket');
  const { data: newBasket } = await $host.post<BasketInterface>(
    'basket/add',
    {
      productId: product._id,
      productPrice: product.price,
    },
    {
      withCredentials: true,
      headers: {
        basket: basketCookie,
      },
    }
  );
  return Promise.resolve({ newBasket });
};
