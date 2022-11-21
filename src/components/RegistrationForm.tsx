import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registrationSchema } from '../schemas';
import { observer } from 'mobx-react-lite';
import { useStores } from '../providers/StoresProvider';
import { RegistrationFormData } from '../types/forms';
import api from '../services/viacep';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();
  const {
    orderStore: { addCustomerToOrder },
  } = useStores();

  function onBlurCep(event: { target: { value: string } }, setFieldValue: any) {
    const { value } = event?.target;
    const cepValidated = value?.replace(/[^0-9]/g, '');

    if (cepValidated.length !== 8) return;
    api
      .getAddress(cepValidated)
      .then((data) => {
        setFieldValue('street', data?.logradouro);
        setFieldValue('state', data?.uf);
        setFieldValue('city', data?.localidade);
        setFieldValue('area', data?.bairro);
      })
      .catch((err) => {
        console.error('Error fetching data ', err);
      });
  }

  function onSubmit(values: RegistrationFormData) {
    addCustomerToOrder(values);
    navigate('/checkout');
    console.log('submitted');
  }

  const initialValues = {
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    phone: '',
    CEP: '',
    street: '',
    street2: '',
    houseNr: '',
    state: '',
    city: '',
    area: '',
  };

  return (
    <div className="p-2 mt-4">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={registrationSchema}
      >
        {({ isValid, handleBlur, setFieldValue }) => {
          return (
            <Form>
              <div id="customerForm">
                <h3 className="font-starwars text-yellow-300 brightness-200">Dados Pessoais</h3>
                <div className="flex sm:flex-row flex-col gap-2">
                  <div className="mt-3 flex sm:w-1/2 w-full flex-col">
                    <label className="pr-1" htmlFor="firstName">
                      Nome
                    </label>
                    <Field
                      name="firstName"
                      className="border-2 rounded-md text-zinc-700"
                      type="text"
                    />
                    <ErrorMessage name="firstName" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex flex-col sm:w-1/2 w-full">
                    <label className="pr-1" htmlFor="lastName">
                      Sobrenome
                    </label>
                    <Field
                      name="lastName"
                      className="border-2 rounded-md text-zinc-700"
                      type="text"
                    />
                    <ErrorMessage name="lastName" component="span" className="text-red-300" />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-2">
                  <div className="mt-3 flex flex-col sm:w-1/2 w-full">
                    <label className="pr-1" htmlFor="cpf">
                      CPF
                    </label>
                    <Field name="cpf" className="border-2 rounded-md text-zinc-700" type="text" />
                    <ErrorMessage name="cpf" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex flex-col sm:w-1/2 w-full">
                    <label className="pr-1" htmlFor="email">
                      Email
                    </label>
                    <Field name="email" className="border-2 rounded-md text-zinc-700" type="text" />
                    <ErrorMessage name="email" component="span" className="text-red-300" />
                  </div>
                </div>
              </div>
              <div id="addressForm">
                <div className="mt-3 flex flex-col">
                  <label className="pr-1" htmlFor="CEP">
                    CEP
                  </label>
                  <Field
                    name="CEP"
                    className="border-2 rounded-md text-zinc-700 w-full sm:w-1/3 mr-1"
                    onBlur={(e: { target: { value: string } }) => onBlurCep(e, setFieldValue)}
                    onBlurCapture={handleBlur}
                    type="text"
                  />
                  <ErrorMessage name="CEP" component="span" className="text-red-300" />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap sm:gap-2">
                  <div className="mt-3 flex flex-col w-full sm:w-4/5">
                    <label className="pr-1 " htmlFor="street">
                      Logradouro
                    </label>
                    <Field
                      name="street"
                      className="border-2 rounded-md text-zinc-700 w-full"
                      type="text"
                    />
                    <ErrorMessage name="street" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex flex-col sm:w-1/5 w-full">
                    <label className="pr-1 " htmlFor="houseNr">
                      Número
                    </label>
                    <Field
                      name="houseNr"
                      className="border-2 rounded-md text-zinc-700"
                      type="text"
                    />
                    <ErrorMessage name="houseNr" component="span" className="text-red-300" />
                  </div>
                </div>
                <div className="mt-3 flex flex-col w-full">
                  <label className="pr-1 " htmlFor="street2">
                    Complemento
                  </label>
                  <Field
                    name="street2"
                    className="border-2 rounded-md text-zinc-700 w-full"
                    type="text"
                  />
                </div>
                <div className="flex sm:justify-between flex-wrap sm:flex-nowrap sm:gap-2">
                  <div className="mt-3 flex flex-col w-1/2 pr-2 sm:pr-0">
                    <label className="pr-1 " htmlFor="state">
                      Estado
                    </label>
                    <Field name="state" className="border-2 rounded-md text-zinc-700" type="text" />
                    <ErrorMessage name="state" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex flex-col w-1/2 sm:w-1/3">
                    <label className="pr-1 " htmlFor="city">
                      Cidade
                    </label>
                    <Field name="city" className="border-2 rounded-md text-zinc-700" type="text" />
                    <ErrorMessage name="city" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex flex-col w-1/2 sm:w-1/3">
                    <label className="pr-1 " htmlFor="area">
                      Bairro
                    </label>
                    <Field name="area" className="border-2 rounded-md text-zinc-700" type="text" />
                    <ErrorMessage name="area" component="span" className="text-red-300" />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="mt-4 bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 transition ease-in-out duration-300 px-4 py-1 text-zinc-700 font-starwars disabled:opacity-25"
                  disabled={!isValid}
                >
                  Próxima Etapa
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default observer(RegistrationForm);
