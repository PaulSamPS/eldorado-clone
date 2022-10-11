import React, { createContext, PropsWithChildren, useContext } from 'react';

export interface IAppContext {
  modalState: boolean;
  setModal: (modal: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  modalState: false,
  setModal: (modal: boolean) => void {},
});

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [modalState, setModalState] = React.useState<boolean>(false);
  console.log(modalState);
  const setModal = (modal: boolean) => {
    setModalState(modal);
  };

  return <AppContext.Provider value={{ modalState, setModal }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
