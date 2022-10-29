import React, { createContext, PropsWithChildren, useState } from 'react';
import { BasketInterface, IProduct } from '@/interfaces';

export interface IAppContext {
  basket: BasketInterface;
  setBasket?: (newBasket: BasketInterface) => void;
  dayProducts: IProduct[];
  setDayProducts?: (newProducts: IProduct[]) => void;
  modal: boolean;
  setModal?: (newModal: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  basket: {} as BasketInterface,
  dayProducts: [],
  modal: false,
});

export const AppContextProvider = ({
  children,
  basket,
  modal,
  dayProducts,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [basketState, setBasketState] = useState<BasketInterface>(basket);
  const [dayProductsState, setDayProductsState] = useState<IProduct[]>(dayProducts);
  const [modalState, setModalState] = useState<boolean>(modal);

  const setBasket = (newBasket: BasketInterface) => {
    setBasketState(newBasket);
  };

  const setDayProducts = (newProducts: IProduct[]) => {
    setDayProductsState(newProducts);
  };

  const setModal = (newModal: boolean) => {
    setModalState(newModal);
  };

  return (
    <AppContext.Provider
      value={{
        basket: basketState,
        setBasket,
        modal: modalState,
        setModal,
        dayProducts: dayProductsState,
        setDayProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
