import { BASE_URLS } from "./base.config";

export const AUTH_ENDPOINTS = {
  REGISTER: `${BASE_URLS.AUTH}/api/v1/auth/register`,
  LOGIN: `${BASE_URLS.AUTH}/login`,
  LOGOUT: `${BASE_URLS.AUTH}/api/v1/auth/logout`,
  ME: `${BASE_URLS.AUTH}/api/v1/auth/me`,
  REFRESH: `${BASE_URLS.AUTH}/api/v1/auth/refresh`,
} as const;
