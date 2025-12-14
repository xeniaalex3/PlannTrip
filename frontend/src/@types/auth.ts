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
    createdAt: string;
    updatedAt: string;
    id: number;
    email: string;
    firstname: string;
    lastname: string;
  };
}