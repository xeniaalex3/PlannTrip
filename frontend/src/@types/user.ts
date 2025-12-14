import type { Trip } from "./trips";

export interface UserResponse {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
  trips?: Trip[];
}