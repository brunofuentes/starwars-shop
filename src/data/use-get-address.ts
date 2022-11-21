import { useState, useEffect, useCallback } from 'react';
import api from '../services/viacep';

const useGetAddress = (cep: string | number) => {
  const [address, setAddress] = useState<{}>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refetch = useCallback(() => {
    setIsLoading(true);
    api
      .getAddress(cep)
      .then((data) => setAddress(data))
      .finally(() => setIsLoading(false))
      .catch((err) => {
        console.error('Error fetching data ', err);
      });
  }, [cep]);

  useEffect(refetch, [refetch]);

  return { address, isLoading, refetch };
};

export default useGetAddress;
