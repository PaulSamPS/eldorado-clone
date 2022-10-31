import { getCookie } from 'cookies-next';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { BasketInterface, IProduct } from '@/interfaces';
import { AppContext } from '@/context';
import { $host } from '@/http';

interface IUseAddToBasket {
  isLoading: boolean;
  isInBasket: boolean;
  addToBasket: () => void;
  decrease: () => void;
}

export const useAddToBasket = (product: IProduct): IUseAddToBasket => {
  const { basket, setBasket } = useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isInBasket, setIsIsInBasket] = React.useState<boolean>(false);
  const { query } = useRouter();

  const basketCookie = getCookie('basket');
  React.useEffect(() => {
    const item = basket.products.map((p) => p.product._id).includes(product._id);

    setIsIsInBasket(item);
  }, [basket, query]);

  const addToBasket = async () => {
    setIsLoading(true);
    try {
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
      if (setBasket) {
        setBasket(newBasket);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const decrease = async () => {
    setIsLoading(true);
    try {
      const { data: newBasket } = await $host.post<BasketInterface>(
        'basket/decrease',
        {
          productId: product._id,
        },
        {
          withCredentials: true,
          headers: {
            basket: basketCookie,
          },
        }
      );
      if (setBasket) {
        setBasket(newBasket);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isInBasket, addToBasket, decrease };
};
