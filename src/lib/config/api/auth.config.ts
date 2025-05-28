import { BASE_URLS } from "./base.config";

export const AUTH_ENDPOINTS = {
  REGISTER: `${BASE_URLS.AUTH}/auth/register`,
  LOGIN: `${BASE_URLS.AUTH}/auth/login`,
  LOGOUT: `${BASE_URLS.AUTH}/auth/logout`,
  ME: `${BASE_URLS.AUTH}/auth/me`,
  REFRESH: `${BASE_URLS.AUTH}/auth/refresh`,
} as const;
