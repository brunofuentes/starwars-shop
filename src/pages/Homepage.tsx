import React, { useRef, useState } from 'react';
import VehiclesList from '../components/VehiclesList';
import { useStores } from '../providers/StoresProvider';
import { observer } from 'mobx-react';
import useGetVehicles from '../data/use-get-vehicles';

function Homepage() {
  const { basketStore } = useStores();

  const [page, setPage] = useState<number>(1);

  const { vehicles } = useGetVehicles(page);
  return (
    <div className="mx-auto max-w-4xl flex justify-center flex-col my-8">
      <VehiclesList vehicles={vehicles} />
      <div className="my-4 mx-auto flex">
        <button
          onClick={() => setPage((prevValue) => prevValue - 1)}
          disabled={!vehicles?.previous}
          className="bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 px-4 py-1 brightness-150 font-starwars mx-1 flex disabled:opacity-25"
        >
          Anterior
        </button>
        <button
          onClick={() => setPage((prevValue) => prevValue + 1)}
          disabled={!vehicles?.next}
          className="bg-yellow-300 rounded drop-shadow-xl hover:bg-yellow-500 px-4 py-1 brightness-150 font-starwars mx-1 flex disabled:opacity-25"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default observer(Homepage);
