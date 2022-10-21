import React, { createContext, PropsWithChildren, useState } from 'react';
import { BasketInterface } from '../interfaces/basket.interface';

export interface IBasketContext {
  basket: BasketInterface;
  setBasket?: (newBasket: BasketInterface) => void;
}

export const BasketContext = createContext<IBasketContext>({
  basket: {} as BasketInterface,
});

export const AppContextProvider = ({
  children,
  basket,
}: PropsWithChildren<IBasketContext>): JSX.Element => {
  const [basketState, setBasketState] = useState<BasketInterface>(basket);

  const setBasket = (newBasket: BasketInterface) => {
    setBasketState(newBasket);
  };

  return (
    <BasketContext.Provider value={{ basket: basketState, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
