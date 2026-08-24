import axios from "axios";
import type {
  SignUpData,
  SignInData,
  AuthResponse,
} from "../types/auth.types";

export const register = async (
  data: SignUpData
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    "http://localhost:3000/api/auth/register", // Добавлено http://
    data
  );

  return response.data;
};

export const login = async (
  data: SignInData
): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(
    "http://localhost:3000/api/auth/login",
    data
  );

  console.log(response.data)

  return response.data;
};

export const logout = async (): Promise<void> => {
  await axios.post("/api/auth/logout");
}