import { api } from './client'
import type {
  LoginRequest,
  AuthResponse,
  RegisterRequest
} from '../@types/auth'
import type { UserResponse } from '../@types/user'

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/login', data)
    return response.data
  },

  register: async (data: RegisterRequest): Promise<UserResponse> => {
    const response = await api.post('/register', data)
    return response.data
  },

  // Get current user from token
  getCurrentUser: async (): Promise<UserResponse> => {
    const response = await api.get('/user/me')
    return response.data
  },

  // Store tokens in localStorage
  setTokens: (accessToken: string, refreshToken: string) => {
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('refresh_token', refreshToken)
  },

  // Retrieve access token
  getAccessToken: (): string | null => {
    return localStorage.getItem('access_token')
  },

  // Retrieve refresh token
  getRefreshToken: (): string | null => {
    return localStorage.getItem('refresh_token')
  },

  // Clear tokens
  clearTokens: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  },

  // Logout
  logout: () => {
    authApi.clearTokens()
  }
}
