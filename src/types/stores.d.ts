export type itemBasket = {
  id: string;
  vehicle: Vehicle;
  qty: number;
};

export type cardDetails = {
  number: string;
  expiration: string;
  CVC: string;
};

export type orderObject = {
  orderId: string;
  customer: CustomerFormData | {};
  basketItems: itemBasket[];
  orderPrice: number | string | undefined;
  paymentMethod: string;
};
