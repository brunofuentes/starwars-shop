import { Vehicle } from '../types/vehicles';
import { itemBasket } from '../types/basket';
import { configure, makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';
import { makePersistable } from 'mobx-persist-store';

configure({
  useProxies: 'always',
});

export class BasketStore {
  basketItems: itemBasket[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: 'basketItems',
      properties: ['basketItems'],
      storage: window.sessionStorage,
    });
  }

  addBasketItem = (vehicle: Vehicle) => {
    const item = this.basketItems.find((item) => item.vehicle.name === vehicle.name);
    if (!item) {
      this.basketItems.push({ id: nanoid(), vehicle, qty: 1 });
    } else {
      item.qty = item.qty + 1;
    }
  };

  reduceBasketItemQty = (id: string) => {
    const item = this.basketItems.find((item) => item.id === id);
    if (!item) return;
    if (item.qty < 2) {
      this.removeBasketItem(id);
    } else {
      item.qty--;
    }
  };

  removeBasketItem = (id: string) => {
    this.basketItems = this.basketItems.filter((item) => item.id !== id);
  };

  basketTotalCost = () => {
    if (this.basketItems.length > 0)
      return this.basketItems
        .map((item) => item.qty * item.vehicle.cost_in_credits)
        .reduce((a, b) => a + b);
  };
}

