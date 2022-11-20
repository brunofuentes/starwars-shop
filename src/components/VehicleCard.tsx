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
    <div className="sm:w-3/6 md:w-2/6 lg:w-72 w-full bg-zinc-700 m-3 sm:m-1 rounded-md text-gray-200 p-3 shadow-lg flex flex-col">
      <div>
        <p className="text-center py-8 text-2xl font-starwars">{vehicle?.name}</p>
        <p>Modelo: {vehicle?.model}</p>
      </div>
      <p>Capacidade de carga: {vehicle?.cargo_capacity}</p>
      <p>Consumíveis: {vehicle?.consumables}</p>
      <p>Custo em créditos: {vehicle?.cost_in_credits}</p>
      <p>Tripulação: {vehicle?.crew}</p>
      <p>
        Filmes
        {vehicle?.films.map((film) => (
          <li key={film}>{film}</li>
        ))}
      </p>
      <p>Comprimento: {vehicle?.length}</p>
      <p>Fabricante: {vehicle?.manufacturer}</p>
      <p>Velocidade atm máxima: {vehicle?.max_atmosphering_speed}</p>
      <p>Passageiros: {vehicle?.passengers}</p>
      <p>
        Pilotos:
        {vehicle?.pilots.map((pilot) => (
          <li key={pilot}>{pilot}</li>
        ))}
      </p>
      <p>Passageiros: {vehicle?.passengers}</p>
      <p>Classe do Veículo: {vehicle?.vehicle_class}</p>

      <div className="mt-auto mx-auto py-4">
        <button
          disabled={vehicle?.cost_in_credits === 'unknown'}
          className="bg-red-600 rounded drop-shadow-xl hover:bg-red-500 px-4 py-1 brightness-150 disabled:opacity-25"
          onClick={() => {
            addBasketItem(vehicle);
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
});

export default VehicleCard;
