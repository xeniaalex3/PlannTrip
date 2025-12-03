import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../auth';
import type { LoginRequest, RegisterRequest } from '../../../@types/auth';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await authApi.login(data);
      authApi.setTokens(response.access_token, response.refresh_token);
      return response;
    },
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: RegisterRequest) => {
      return await authApi.register(data);
    },
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      authApi.logout();
    },
  });
};
