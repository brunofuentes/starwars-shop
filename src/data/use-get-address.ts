import { useState, useEffect, useCallback } from 'react';
import api from '../services/viacep';

const useGetAddress = (cep: string | number | null) => {
  const [address, setAddress] = useState<any>(null);

  const refetch = useCallback(() => {
    api
      .getAddress(cep)
      .then((data) => setAddress(data))
      .catch((err) => {
        console.error('Error fetching data ', err);
      });
  }, []);

  useEffect(refetch, [refetch]);

  return { address, refetch };
};

export default useGetAddress;
