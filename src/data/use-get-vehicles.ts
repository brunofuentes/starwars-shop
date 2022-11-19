import { useState, useEffect, useCallback } from 'react';
import { GetVehiclesResponse, vehiclesData } from '../types/vehicles';
import api from '../services/swapi';

const useGetVehicles = (page: number) => {
  const [vehicles, setVehicles] = useState<vehiclesData>(null);

  const refetch = useCallback(() => {
    api
      .getAllVehicles(page)
      .then((res) => setVehicles(res?.data))
      .catch((err) => {
        console.error('Error fetching data ', err);
      });
  }, []);

  useEffect(refetch, [refetch]);

  return { vehicles, refetch };
};

export default useGetVehicles;
