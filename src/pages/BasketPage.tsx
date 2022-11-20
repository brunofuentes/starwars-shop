import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasketItem from '../components/BasketItem';
import PreviousPageBtn from '../components/PreviousPageBtn';
import { useStores } from '../providers/StoresProvider';

function BasketPage() {
  const navigate = useNavigate();
  const {
    basketStore: { basketItems, basketTotalCost },
  } = useStores();

  return (
    <div className="text-gray-200 mx-auto w-full min-h-full">
      <div className="bg-zinc-700 p-1 sm:p-3 rounded-b-md">
        <PreviousPageBtn text="Voltar para Loja" to="/" />
        <div className="font-starwars p-2">
          <h1>Suas compras</h1>
        </div>
        {basketItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
        <div className="text-right mt-4">
          <p className="font-starwars">Soma: {basketTotalCost()}</p>
          <button
            onClick={() => navigate('/checkout')}
            className="mt-4 bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 transition ease-in-out duration-300 px-4 py-1 text-zinc-700 font-starwars"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default observer(BasketPage);
