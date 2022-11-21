import { configure, makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { nanoid } from 'nanoid';
import { itemBasket } from '../types/basket';
import { BasketStore } from './BasketStore';
import { CustomerFormData, AddressFormValues } from '../types/forms';

configure({
  useProxies: 'always',
});

interface orderObject {
  orderId: string;
  customer: CustomerFormData | {};
  address: AddressFormValues | {};
  basketItems: itemBasket[];
  orderPrice: number | string | undefined;
  paymentMethod: string;
}

export class OrderStore {
  order: orderObject = {
    orderId: '',
    customer: {},
    address: {},
    basketItems: [],
    orderPrice: 0,
    paymentMethod: '',
  };

  constructor(private basketStore: BasketStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    makePersistable(this, {
      name: 'order',
      properties: ['order'],
      storage: window.sessionStorage,
    });
  }

  createOrder = () => {
    this.order.basketItems = this.basketStore.basketItems;
    this.order.orderPrice = this.basketStore.basketTotalCost();
    this.order.orderId = nanoid();
  };

  addCustomerToOrder = (customer: CustomerFormData) => {
    this.order.customer = customer;
  };

  addAddressToOrder = (address: AddressFormValues) => {
    this.order.address = address;
  };

  setPaymentMethod = (method: string) => {
    this.order.paymentMethod = method;
  };
}
