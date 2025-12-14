import type { Trip } from "./trips";

export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
}

export interface UserResponse extends User {
  createdAt: string;
  updatedAt: string;
  trips?: Trip[];
}