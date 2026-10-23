import { API_BASE_URL } from "./config";

const TOKEN_KEY = "cs-token";

export const tokenStorage = {
  get: (): string | null =>
    typeof window === "undefined" ? null : localStorage.getItem(TOKEN_KEY),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = "HttpError";
  }
}

let unauthorizedHandler: (() => void) | null = null;

export function setUnauthorizedHandler(handler: (() => void) | null) {
  unauthorizedHandler = handler;
}

interface RequestOptions extends Omit<RequestInit, "body" | "headers"> {
  body?: unknown;
  headers?: Record<string, string>;
}

interface ApiErrorBody {
  message?: string;
  error?: { code?: string; message?: string; details?: unknown };
}

/** Envía cookies de sesión (`credentials: "include"`) para Better Auth y adjunta Bearer token si existe. */
export async function http<T>(
  path: string,
  { body, headers, credentials = "include", ...init }: RequestOptions = {},
): Promise<T> {
  const token = tokenStorage.get();

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    credentials,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (response.status === 401) {
    tokenStorage.clear();
    unauthorizedHandler?.();
  }

  if (!response.ok) {
    const errorBody = (await response.json().catch(() => undefined)) as
      | ApiErrorBody
      | undefined;
    throw new HttpError(
      response.status,
      errorBody?.error?.message ?? errorBody?.message ?? response.statusText,
      errorBody?.error?.details,
    );
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
