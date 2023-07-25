import { useCallback, useState } from 'react'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

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
				const response = await api.request<T>({
					url,
					method,
					data: body,
				})
				return response.data
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
