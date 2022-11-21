export type CustomerFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string | number;
  CEP: string;
  street: string;
  street2: string;
  houseNr: string | number;
  state: string;
  city: string;
  area: string;
};

export type RegistrationFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string | number;
  CEP: string;
  street: string;
  street2: string;
  houseNr: string | number;
  state: string;
  city: string;
  area: string;
};

export type PaymentFormData = {
  cardNumber: number | string;
  expirationDate: string;
  CVC: string;
};
