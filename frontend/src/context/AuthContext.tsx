import { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '../api/auth'
import type { UserResponse } from '../@types/user'

interface AuthContextType {
  user: UserResponse | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: UserResponse | null) => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      const token = authApi.getAccessToken()

      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const userData = await authApi.getCurrentUser()
        setUser({
          id: userData.id,
          email: userData.email,
          firstname: userData.firstname,
          lastname: userData.lastname,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt
        })
      } catch {
        // Try to refresh token if getCurrentUser fails
        try {
          await authApi.refresh()
          // Retry getCurrentUser with new token
          const userData = await authApi.getCurrentUser()
          setUser({
            id: userData.id,
            email: userData.email,
            firstname: userData.firstname,
            lastname: userData.lastname,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
          })
        } catch {
          // If refresh also fails, clear tokens
          authApi.clearTokens()
          setUser(null)
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await authApi.login({ email, password })
    authApi.setTokens(response.access_token, response.refresh_token)
    setUser({
      id: response.user.id,
      email: response.user.email,
      firstname: response.user.firstname,
      lastname: response.user.lastname,
      createdAt: response.user.createdAt,
      updatedAt: response.user.updatedAt
    })
  }

  const logout = () => {
    authApi.logout()
    setUser(null)
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        setUser,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
