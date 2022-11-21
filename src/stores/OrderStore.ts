import { configure, makeAutoObservable } from 'mobx';
import { makePersistable, clearPersistedStore } from 'mobx-persist-store';
import { nanoid } from 'nanoid';
import { BasketStore } from './BasketStore';
import { cardDetails, orderObject } from '../types/stores';
import { CustomerFormData } from '../types/forms';

configure({
  useProxies: 'always',
});

export class OrderStore {
  order: orderObject = {
    orderId: '',
    customer: {},
    basketItems: [],
    orderPrice: 0,
    paymentMethod: '',
  };
  cardDetails: cardDetails = {
    number: '',
    expiration: '',
    CVC: '',
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

  setPaymentMethod = (method: string) => {
    this.order.paymentMethod = method;
  };

  addPaymentDetails = (cardDetails: cardDetails) => {
    this.cardDetails = cardDetails;
  };

  clearOrderStore = async () => {
    await clearPersistedStore(this);
  };
}
