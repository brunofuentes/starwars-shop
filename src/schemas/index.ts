import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  firstName: yup.string().min(3, 'O nome deve ter no mínimo 3 caracteres.'),
  lastName: yup.string().min(3, 'O sobrenome deve ter no mínimo 3 caracteres.'),
  cpf: yup
    .string()
    .trim()
    .matches(
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
      'CPF/CNPJ Inválido',
    )
    .required('Campo Obrigatório.'),
  email: yup.string().email('Insira um email válido').required('Campo Obrigatório.'),
  CEP: yup.string().min(8, 'CEP deve ter 8 dígitos').required('CEP é Obrigatório'),
  street: yup.string().required('Campo Obrigatório.'),
  houseNr: yup.string().required('Campo Obrigatório.'),
  state: yup.string().required('Campo Obrigatório.'),
  city: yup.string().required('Campo Obrigatório.'),
  area: yup.string().required('Campo Obrigatório.'),
});

export const paymentSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .min(8, 'Insira um número de cartão válido')
    .required('Campo Obrigatório.'),
  expirationDate: yup.string().required('Campo Obrigatório.'),
  CVC: yup.string().required('Campo Obrigatório.'),
});
