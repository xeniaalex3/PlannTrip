import { useMutation } from '@tanstack/react-query';
import { authApi } from '../../auth';
import type { LoginRequest, RegisterRequest } from '../../../@types/auth';
import { useAuth } from '../../../context/AuthContext';

export const useLoginMutation = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (data: LoginRequest) => {
      await login(data.email, data.password);
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
  const { logout } = useAuth();

  return useMutation({
    mutationFn: async () => {
      logout();
    },
  });
};
