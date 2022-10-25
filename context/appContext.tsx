import React, { createContext, PropsWithChildren, useState } from 'react';
import { BasketInterface } from '@/interfaces';

export interface IAppContext {
  basket: BasketInterface;
  setBasket?: (newBasket: BasketInterface) => void;
  modal: boolean;
  setModal?: (newModal: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  basket: {} as BasketInterface,
  modal: false,
});

export const AppContextProvider = ({
  children,
  basket,
  modal,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [basketState, setBasketState] = useState<BasketInterface>(basket);
  const [modalState, setModalState] = useState<boolean>(modal);

  const setBasket = (newBasket: BasketInterface) => {
    setBasketState(newBasket);
  };

  const setModal = (newModal: boolean) => {
    setModalState(newModal);
  };

  return (
    <AppContext.Provider value={{ basket: basketState, setBasket, modal: modalState, setModal }}>
      {children}
    </AppContext.Provider>
  );
};
