import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { jwtDecode } from 'jwt-decode';
import { authApi } from '../api/auth';
import type { UserResponse } from '../@types/user';

interface AuthContextType {
  user: UserResponse | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: UserResponse | null) => void;
}

interface JwtPayload {
  sub: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<UserResponse | null>(null);

  const token = authApi.getAccessToken();
  let userId: string | null = null;

  if (token) {
    const decoded = jwtDecode<JwtPayload>(token);
    userId = decoded.sub;
  }

  const { data, isLoading } = useQuery<UserResponse>({
    queryKey: ['user', userId],
    queryFn: async () => {
      if (!userId) throw new Error('No user ID found in token');

      const response = await fetch(`/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch user');
      return response.json();
    },
    enabled: !!userId,
  });

  useEffect(() => {
    if (data) setUserState(data);
  }, [data]);

  const login = async (email: string, password: string) => {
    try {
      const response = await authApi.login({ email, password });
      setUserState(response.user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    authApi.logout();
    setUserState(null);
  };

  const setUser = (user: UserResponse | null) => {
    setUserState(user);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
