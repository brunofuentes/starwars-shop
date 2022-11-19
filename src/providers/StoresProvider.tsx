import React, { PropsWithChildren } from 'react';
import { BasketStore } from '../stores/BasketStore';

type StoresContextValue = {
  basketStore: BasketStore;
};

const StoresContext = React.createContext<StoresContextValue>({} as StoresContextValue);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const basketStore = new BasketStore();

  return <StoresContext.Provider value={{ basketStore }}>{children}</StoresContext.Provider>;
};

export const useStores = () => React.useContext(StoresContext);

