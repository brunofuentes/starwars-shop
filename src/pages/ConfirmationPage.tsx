import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStores } from '../providers/StoresProvider';

function ConfirmationPage() {
  const {
    basketStore: { clearBasketStore },
    orderStore: { clearOrderStore },
  } = useStores();

  useEffect(() => {
    clearBasketStore();
    clearOrderStore();
  }, []);

  return (
    <div className="text-gray-200 mx-auto w-full min-h-full mb-8 opacity-90">
      <div className="bg-zinc-700 p-1 sm:p-3 rounded-b-md ">
        <h2 className="font-starwars text-2xl text-green-800 brightness-125 text-center py-5">
          Sua compra foi enviada com sucesso.
        </h2>
        <div className="text-center">
          <p className="text-center my-8">Enviaremos um email com a confirmação da compra.</p>
        </div>
        <div className="text-center mb-10 mt-20">
          <Link
            to="/"
            className="mt-4 bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 transition ease-in-out duration-300 px-4 py-1 text-zinc-700 font-starwars"
          >
            Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
