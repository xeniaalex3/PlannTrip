import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../auth';

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await fetch('/api/auth/user', {
        headers: {
          Authorization: `Bearer ${authApi.getAccessToken()}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch user');
      return response.json();
    },
    enabled: !!authApi.getAccessToken(),
  });
};

export const useIsAuthenticated = () => {
  return !!authApi.getAccessToken();
};
