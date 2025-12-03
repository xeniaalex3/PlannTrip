# Frontend API Documentation

## Autenticação

### Estrutura de Arquivos

```
src/api/
├── auth.ts                    # Funções principais da API de autenticação
├── client.ts                  # Cliente axios com interceptadores
└── hooks/auth/
    ├── mutations.ts           # React Query mutations para auth
    └── queries.ts             # React Query queries para auth
```

## Funções Disponíveis

### `authApi.login(data: LoginRequest): Promise<AuthResponse>`
Faz login com email e password. Armazena automaticamente os tokens no localStorage.

```typescript
import { authApi } from '@/api/auth';

const response = await authApi.login({
  email: 'user@example.com',
  password: 'password123'
});
// Retorna: { access_token, refresh_token, user }
```

### `authApi.register(data: RegisterRequest): Promise<UserResponse>`
Registra um novo usuário.

```typescript
import { authApi } from '@/api/auth';

const response = await authApi.register({
  firstname: 'John',
  lastname: 'Doe',
  email: 'john@example.com',
  password: 'password123'
});
```

### `authApi.setTokens(accessToken, refreshToken): void`
Armazena tokens no localStorage.

### `authApi.getAccessToken(): string | null`
Recupera o access token do localStorage.

### `authApi.getRefreshToken(): string | null`
Recupera o refresh token do localStorage.

### `authApi.clearTokens(): void`
Remove todos os tokens do localStorage.

### `authApi.logout(): void`
Faz logout limpando os tokens.

## React Query Hooks

### `useLoginMutation()`
Hook para fazer login com React Query.

```typescript
import { useLoginMutation } from '@/api/hooks/auth/mutations';

const { mutate: login, isPending, error } = useLoginMutation();

const handleLogin = () => {
  login(
    { email, password },
    {
      onSuccess: (data) => {
        console.log('Login successful', data.user);
      },
      onError: (error) => {
        console.error('Login failed', error);
      }
    }
  );
};
```

### `useRegisterMutation()`
Hook para registrar um novo usuário.

```typescript
import { useRegisterMutation } from '@/api/hooks/auth/mutations';

const { mutate: register, isPending } = useRegisterMutation();

const handleRegister = () => {
  register(
    { firstname, lastname, email, password },
    {
      onSuccess: () => {
        console.log('Registration successful');
      }
    }
  );
};
```

### `useLogoutMutation()`
Hook para fazer logout.

```typescript
import { useLogoutMutation } from '@/api/hooks/auth/mutations';

const { mutate: logout } = useLogoutMutation();

logout();
```

### `useGetCurrentUser()`
Hook para recuperar o usuário atual. Apenas executa se houver um token.

```typescript
import { useGetCurrentUser } from '@/api/hooks/auth/queries';

const { data: user, isLoading, error } = useGetCurrentUser();
```

### `useIsAuthenticated()`
Hook para verificar se o usuário está autenticado.

```typescript
import { useIsAuthenticated } from '@/api/hooks/auth/queries';

const isAuthenticated = useIsAuthenticated();

if (!isAuthenticated) {
  // Redirecionar para login
}
```

## Configuração do Cliente Axios

O cliente axios está configurado em `src/api/client.ts` com:

### Interceptador de Request
- Adiciona automaticamente o `Authorization: Bearer {token}` em todas as requisições

### Interceptador de Response
- Se o status for 401 (Unauthorized):
  - Remove os tokens do localStorage
  - Redireciona para `/login`

## Variáveis de Ambiente

Adicione ao seu `.env`:

```
VITE_PROD_BACKEND_URL=http://localhost:3000/api
```

## Tipos TypeScript

```typescript
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
  };
}

export interface UserResponse {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}
```

## Endpoints do Backend Esperados

- `POST /auth/login` - Login do usuário
- `POST /auth/register` - Registrar novo usuário
- `GET /auth/me` - Obter usuário atual (opcional)

## Exemplo de Uso Completo

```typescript
// Login.tsx
import { useNavigate } from '@tanstack/react-router';
import { useLoginMutation } from '@/api/hooks/auth/mutations';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLoginMutation();
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    login(data, {
      onSuccess: () => {
        toast.success('Login successful!');
        navigate({ to: '/' });
      },
      onError: (error) => {
        toast.error(error.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      <input {...register('password')} type="password" />
      <button disabled={isPending} type="submit">
        {isPending ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```
