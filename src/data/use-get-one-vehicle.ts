import { useState, useEffect, useCallback } from 'react';
import { Vehicle } from '../types/vehicles';
import api from '../services/swapi';

const useGetOneVehicle = (id: string | number) => {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  const refetch = useCallback(() => {
    api
      .getOneVehicle(id)
      .then((data) => setVehicle(data))
      .catch((err) => {
        console.error('Error fetching data ', err);
      });
  }, []);

  useEffect(refetch, [refetch]);

  return { vehicle, refetch };
};

export default useGetOneVehicle;
