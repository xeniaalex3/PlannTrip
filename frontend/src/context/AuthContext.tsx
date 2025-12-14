import { createContext, useContext, useState, useEffect } from 'react'
import { authApi } from '../api/auth'
import type { User, UserResponse } from '../@types/user'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: User | null) => void
  isLoading: boolean
  profile: UserResponse | null
  setProfile: (profile: UserResponse | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserResponse | null>(null)
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
          lastname: userData.lastname
        })
        setProfile(userData)
      } catch {
        authApi.clearTokens()
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async (email: string, password: string) => {
    const response = await authApi.login({ email, password })
    authApi.setTokens(response.access_token, response.refresh_token)
    setUser(response.user)
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
        profile,
        isAuthenticated,
        login,
        setProfile,
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
