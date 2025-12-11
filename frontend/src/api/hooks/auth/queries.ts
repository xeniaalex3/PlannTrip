import { useQuery } from '@tanstack/react-query';
import { authApi } from '../../auth';
import type { UserResponse } from '../../../@types/user';

/**
 * Hook to retrieve the logged-in user
 */
export const useGetCurrentUser = () => {
  const token = authApi.getAccessToken();

  return useQuery<UserResponse>({
    queryKey: ['user', 'current'],
    queryFn: () => authApi.getCurrentUser(),
    enabled: !!token,
    retry: false,
  });
};

/**
 * Simple hook to check if the user is authenticated
 */
export const useIsAuthenticated = () => {
  const token = authApi.getAccessToken();
  return !!token;
};
