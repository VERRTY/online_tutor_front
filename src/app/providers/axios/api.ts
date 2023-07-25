import { useCallback, useState } from 'react'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

// Определите обобщенный интерфейс для данных ответа
interface ApiResponse<T> {
	content: T
	// Добавьте другие свойства ответа, если есть
}

const hostURL = 'https://online-tutor-back.onrender.com'
export const baseURL = `${hostURL}`

const api = axios.create({
	baseURL,
	withCredentials: true,
	validateStatus: status => {
		return status < 500
	},
})

export const useHttp = () => {
	const [loading, setLoading] = useState<boolean>(false)

	const request = useCallback(
		async <T>(
			url: string,
			method: AxiosRequestConfig['method'] = 'GET',
			body: object = {}
		): Promise<T> => {
			try {
				setLoading(true)
				const response: AxiosResponse<ApiResponse<T>> = await api.request({
					url,
					method,
					data: body,
				})
				return response.data.content
			} catch (error) {
				throw error
			} finally {
				setLoading(false)
			}
		},
		[]
	)

	return { loading, request }
}
