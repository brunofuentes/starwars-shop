import React, { PropsWithChildren } from 'react';
import { BasketStore } from '../stores/BasketStore';
import { OrderStore } from '../stores/OrderStore';

type StoresContextValue = {
  basketStore: BasketStore;
  orderStore: OrderStore;
};

const StoresContext = React.createContext<StoresContextValue>({} as StoresContextValue);

export const StoresProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const basketStore = new BasketStore();
  const orderStore = new OrderStore(basketStore);

  return (
    <StoresContext.Provider value={{ basketStore, orderStore }}>{children}</StoresContext.Provider>
  );
};

export const useStores = () => React.useContext(StoresContext);
