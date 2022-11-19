import axios from 'axios'
import { GetCEPResponse } from '../types/cep'

const BASE_URL = `https://viacep.com.br/ws`

const api = {
	getAddress: async (cep: string | number) => {
		try {
			const { data, status } = await axios.get<GetCEPResponse>(`${BASE_URL}/${cep}/json`)
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
