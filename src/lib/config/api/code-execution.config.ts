import { BASE_URLS } from "./base.config";

export const CODE_EXECUTION_ENDPOINTS = {
  EXECUTE: `${BASE_URLS.CODE_EXECUTION}/execute`,
} as const;
