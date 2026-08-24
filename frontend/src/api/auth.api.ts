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
    "/api/auth/login",
    data
  );

  return response.data;
};