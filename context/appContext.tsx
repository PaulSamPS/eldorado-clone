import React, { createContext, PropsWithChildren, useState } from 'react';
import { BasketInterface } from '../interfaces/basket.interface';

export interface IAppContext {
  basket: BasketInterface;
  setBasket?: (newBasket: BasketInterface) => void;
}

export const AppContext = createContext<IAppContext>({
  basket: {} as BasketInterface,
});

export const AppContextProvider = ({
  children,
  basket,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [basketState, setBasketState] = useState<BasketInterface>(basket);

  const setBasket = (newBasket: BasketInterface) => {
    setBasketState(newBasket);
  };

  return (
    <AppContext.Provider value={{ basket: basketState, setBasket }}>{children}</AppContext.Provider>
  );
};
