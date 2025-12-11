import { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../api/auth';
import type { UserResponse } from '../@types/user';

interface AuthContextType {
  user: UserResponse | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: UserResponse | null) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Rehydrate user when app loads and token exists
  useEffect(() => {
    const loadUser = async () => {
      const currentToken = authApi.getAccessToken();
      
      if (!currentToken) {
        setIsLoading(false);
        return;
      }

      try {
        // Try to fetch current user from backend
        const userData = await authApi.getCurrentUser();
        setUser(userData);
      } catch (error) {
        // If it fails, token might be invalid
        // Clear tokens and let interceptor handle redirect
        console.error('Failed to load user:', error);
        authApi.clearTokens();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await authApi.login({ email, password });
    authApi.setTokens(response.access_token, response.refresh_token);
    setUser(response.user);
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
  };

  // Calculate isAuthenticated based on current token (always reactive)
  const token = authApi.getAccessToken();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        setUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};


