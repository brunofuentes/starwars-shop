import React, { useState } from 'react';
import { paymentSchema } from '../schemas';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStores } from '../providers/StoresProvider';
import { PaymentFormData } from '../types/forms';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

function PaymentForm() {
  const navigate = useNavigate();
  function onSubmit(values: PaymentFormData) {
    console.log('pagamento via cartão de crédito, enviar email');
    console.log(values);
    navigate('/confirmation');
  }

  function obSubmitBoleto() {
    console.log('pagamento via boleto, enviar email.');
    navigate('/confirmation');
  }

  const {
    orderStore: { setPaymentMethod },
  } = useStores();

  const [activeBtn, setActiveBtn] = useState<string>('');
  function handleCardBtn(e: { target: { id: string } }) {
    const { id } = e.target;
    setActiveBtn(id);
    setPaymentMethod(id);
  }

  return (
    <div className="p-2 mt-4">
      <h3 className="font-starwars text-yellow-300 brightness-200">Pagamento</h3>
      <p className="my-3">Método</p>
      <div className="flex gap-2 sm:w-2/5 justify-around mx-auto">
        <button
          onClick={(e) => handleCardBtn(e)}
          id="creditCard"
          className={`${
            activeBtn === 'creditCard' ? 'bg-blue-800 brightness-125 shadow-md' : 'bg-zinc-600'
          }  p-3 rounded-md hover:brightness-200 transition ease-out duration-300`}
        >
          Cartão de crédito
        </button>
        <button
          onClick={(e) => handleCardBtn(e)}
          id="boleto"
          className={`${
            activeBtn === 'boleto' ? 'bg-blue-800 brightness-125 shadow-md' : 'bg-zinc-600'
          }  p-3 rounded-md hover:brightness-200 transition ease-out duration-300`}
        >
          Boleto Bancário
        </button>
      </div>
      {activeBtn === 'boleto' ? (
        <div className="text-center py-3">
          <p>Você receberá o boleto em seu email ao finalizar a compra.</p>
          <button
            onClick={obSubmitBoleto}
            className="mt-4 bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 transition ease-in-out duration-300 px-4 py-1 text-zinc-700 font-starwars"
          >
            Finalizar Compra
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{
            cardNumber: '',
            expirationDate: '',
            CVC: '',
          }}
          validationSchema={paymentSchema}
          onSubmit={onSubmit}
        >
          {({ isValid }) => {
            return (
              <Form>
                <div className="flex flex-wrap sm:flex-nowrap sm:gap-2">
                  <div className="mt-3 flex sm:w-1/2 w-full flex-col">
                    <label className="pr-1" htmlFor="cardNumber">
                      Número do Cartão
                    </label>
                    <Field
                      disabled={activeBtn !== 'creditCard'}
                      name="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      className="border-2 rounded-md text-zinc-700"
                      type="text"
                    />
                    <ErrorMessage name="cardNumber" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex w-1/2 sm:w-1/4 flex-col pr-2 sm:pr-0">
                    <label className="pr-1" htmlFor="expirationDate">
                      Data de Expiração
                    </label>
                    <Field
                      disabled={activeBtn !== 'creditCard'}
                      name="expirationDate"
                      placeholder="MM/AA"
                      className="border-2 rounded-md text-zinc-700"
                      type="text"
                    />
                    <ErrorMessage name="cardNumber" component="span" className="text-red-300" />
                  </div>
                  <div className="mt-3 flex w-1/2 sm:w-1/4 flex-col">
                    <label className="pr-1" htmlFor="CVC">
                      CVC
                    </label>
                    <Field
                      disabled={activeBtn !== 'creditCard'}
                      name="CVC"
                      placeholder="000"
                      className="border-2 rounded-md text-zinc-700"
                      type="text"
                    />
                    <ErrorMessage name="cardNumber" component="span" className="text-red-300" />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="mt-4 bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 transition ease-in-out duration-300 px-4 py-1 text-zinc-700 font-starwars"
                  >
                    Finalizar Compra
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
}

export default observer(PaymentForm);
