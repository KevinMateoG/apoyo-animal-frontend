import { http, tokenStorage } from "@/src/features/common/http";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "../domain/auth";

export async function login(request: LoginRequest): Promise<AuthResponse> {
  const response = await http<AuthResponse>("/api/auth/sign-in/email", {
    method: "POST",
    body: request,
  });
  if (response.token) {
    tokenStorage.set(response.token);
  }
  return response;
}

export async function register(
  request: RegisterRequest,
): Promise<AuthResponse> {
  const response = await http<AuthResponse>("/api/auth/sign-up/email", {
    method: "POST",
    body: request,
  });
  if (response.token) {
    tokenStorage.set(response.token);
  }
  return response;
}

export async function getSession(): Promise<AuthResponse | null> {
  return http<AuthResponse | null>("/api/auth/get-session", {
    method: "GET",
  });
}

export async function logout(): Promise<void> {
  await http<void>("/api/auth/sign-out", { method: "POST" });
  tokenStorage.clear();
}
