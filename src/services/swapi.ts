import axios from 'axios'
import { Vehicle, GetVehiclesResponse } from '../types/vehicles'

const BASE_URL: String = 'https://swapi.dev/api'

const api = {
	getAllVehicles: async (page: number) => {
		try {
			const { data, status } = await axios.get<GetVehiclesResponse>(`${BASE_URL}/vehicles/?page=${page}`)
			return { data, status }
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message)
			} else {
				console.log('unexpected error: ', error)
				return 'An unexpected error occurred'
			}
		}
	},
	getOneVehicle: async (id: string | number) => {
		try {
			const { data, status } = await axios.get(`${BASE_URL}/vehicles/${id}`)
			return { data, status }
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message)
			} else {
				console.log('unexpected error: ', error)
				return 'An unexpected error occurred'
			}
		}
	},
}

export default api
