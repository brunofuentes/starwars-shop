import axios from 'axios';
import { GetVehiclesResponse, Vehicle, vehiclesData } from '../types/vehicles';

const BASE_URL: String = 'https://swapi.dev/api';

const api = {
  getAllVehicles: async (page: number) => {
    try {
      const { data } = await axios.get<vehiclesData>(`${BASE_URL}/vehicles/?page=${page}`);
      return { data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        throw error;
      } else {
        console.log('unexpected error: ', error);
        throw new Error('An unexpected error occurred');
      }
    }
  },
  getOneVehicle: async (id: string | number) => {
    try {
      const { data } = await axios.get<Vehicle>(`${BASE_URL}/vehicles/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        throw error;
      } else {
        console.log('unexpected error: ', error);
        throw new Error('An unexpected error occurred');
      }
    }
  },
};

export default api;
