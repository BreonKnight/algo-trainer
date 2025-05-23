import { BASE_URLS } from "./base.config";

export const AUTH_ENDPOINTS = {
  REGISTER: `${BASE_URLS.AUTH}/register`,
  LOGIN: `${BASE_URLS.AUTH}/login`,
  LOGOUT: `${BASE_URLS.AUTH}/logout`,
  ME: `${BASE_URLS.AUTH}/me`,
  REFRESH: `${BASE_URLS.AUTH}/refresh`,
} as const;
