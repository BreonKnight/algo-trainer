// Base URL configuration utility
export const getBaseUrl = (service: string, port: string) => {
  return process.env.NODE_ENV === "development" ? `http://localhost:${port}` : `/${service}`;
};

// Common API configuration
export const API_CONFIG = {
  credentials: "include" as const,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  mode: "cors" as const,
} as const;

// Base URLs for all services
export const BASE_URLS = {
  AUTH: getBaseUrl("auth", "8000"),
  CODE_EXECUTION: getBaseUrl("code-execution", "8002"),
  GAMIFICATION: getBaseUrl("gamification", "8001"),
} as const;
