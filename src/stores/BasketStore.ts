import { Vehicle } from '../types/vehicles';
import {
  observable,
  action,
  runInAction,
  makeObservable,
  configure,
  makeAutoObservable,
} from 'mobx';
import { nanoid } from 'nanoid';
import { makePersistable } from 'mobx-persist-store';

type BasketItem = {
  id: string;
  vehicle: Vehicle;
  qty: number;
};
configure({
  useProxies: 'never',
});

export class BasketStore {
  basketItems: BasketItem[] = [];
  qty: number = 0;

  constructor(basketItems: BasketItem[]) {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: 'basketItems',
      properties: ['basketItems'],
      storage: window.localStorage,
    });
  }

  addBasketItem = (vehicle: Vehicle) => {
    const item = this.basketItems.find((item) => item.vehicle.name === vehicle.name);
    if (!item) {
      this.basketItems.push({ id: nanoid(), vehicle, qty: this.qty + 1 });
    } else {
      item.qty = item.qty + 1;
    }
  };

  removeBasketItem = (id: string) => {
    this.basketItems = this.basketItems.filter((item) => item.id !== id);
  };
}

