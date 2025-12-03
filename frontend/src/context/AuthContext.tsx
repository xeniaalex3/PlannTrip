import { createContext, useContext, useEffect, useState } from 'react'
import { authApi, type UserResponse } from '../api/auth'
import { api } from '../api/client'

interface AuthContextType {
  user: UserResponse | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: UserResponse | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<UserResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Verifica se há token armazenado ao carregar o componente
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = authApi.getAccessToken()
        if (token) {
          // Buscar dados do usuário atual do backend
          const response = await api.get('/auth/me')
          setUserState(response.data)
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error)
        // Se falhar, limpar tokens
        authApi.clearTokens()
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await authApi.login({ email, password })
      setUserState(response.user)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    authApi.logout()
    setUserState(null)
  }

  const setUser = (user: UserResponse | null) => {
    setUserState(user)
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!authApi.getAccessToken() && !!user,
    login,
    logout,
    setUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
