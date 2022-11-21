import React from 'react';
import { Vehicle } from '../types/vehicles';
import { useStores } from '../providers/StoresProvider';
import { observer } from 'mobx-react-lite';

const VehicleCard = observer((props: { vehicle: Vehicle }) => {
  const { vehicle } = props;

  const {
    basketStore: { addBasketItem },
  } = useStores();

  return (
    <div className="bg-zinc-800 m-3 sm:m-1 rounded-md text-gray-200 p-3 shadow-lg flex flex-col border-2 border-zinc-700 hover:border-blue-400 opacity-90">
      <div>
        <p className="text-center py-8 text-2xl font-starwars text-yellow-300 brightness-200">
          {vehicle?.name}
        </p>
      </div>
      <p className="border-b border-zinc-700">Modelo: {vehicle?.model}</p>
      <p className="border-b border-zinc-700">Fabricante: {vehicle?.manufacturer}</p>
      <p className="border-b border-zinc-700">
        Velocidade atm máxima: {vehicle?.max_atmosphering_speed}
      </p>
      <p className="border-b border-zinc-700">Classe: {vehicle?.vehicle_class}</p>
      <p className="border-b border-zinc-700">Capacidade de carga: {vehicle?.cargo_capacity}</p>
      <p className="border-b border-zinc-700">Tripulação: {vehicle?.crew}</p>
      <p className="border-b border-zinc-700">Comprimento: {vehicle?.length}</p>
      <p className="border-b border-zinc-700">Passageiros: {vehicle?.passengers}</p>
      {vehicle?.consumables !== 'unknown' && <p>Consumíveis: {vehicle?.consumables}</p>}
      <p className="border-b border-zinc-700">Custo em créditos: {vehicle?.cost_in_credits}</p>

      <div className="mt-auto mx-auto py-4">
        <button
          disabled={vehicle?.cost_in_credits === 'unknown'}
          className={`${
            vehicle?.cost_in_credits === 'unknown'
              ? 'bg-red-500'
              : 'bg-green-800 hover:bg-green-600'
          }  rounded drop-shadow-xl  px-4 py-1 brightness-125 disabled:opacity-25 transition ease-in-out duration-300`}
          onClick={() => {
            addBasketItem(vehicle);
          }}
        >
          {vehicle?.cost_in_credits === 'unknown' ? 'Indisponível' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </div>
  );
});

export default VehicleCard;
