import axios from 'axios'
import { authApi } from './auth'

export const api = axios.create({
  baseURL: import.meta.env.VITE_PROD_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = authApi.getAccessToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const newToken = await authApi.refresh()
        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return api.request(originalRequest)
      } catch {
        authApi.clearTokens()
        // Remove the redirect, let the context handle logout
        // window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)