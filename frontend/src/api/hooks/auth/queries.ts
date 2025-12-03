import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../auth';
import { jwtDecode } from 'jwt-decode';
import type { UserResponse } from '../../../@types/user';

interface JwtPayload {
  sub: string;
}

/**
 * Hook to retrieve the logged-in user
 */
export const useGetCurrentUser = () => {
  const token = authApi.getAccessToken();
  let userId: string | null = null;

  if (token) {
    const decoded = jwtDecode<JwtPayload>(token);
    userId = decoded.sub;
  }

  return useQuery<UserResponse>({
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
};

/**
 * Simple hook to check if the user is authenticated
 */
export const useIsAuthenticated = () => {
  const token = authApi.getAccessToken();
  return !!token;
};
