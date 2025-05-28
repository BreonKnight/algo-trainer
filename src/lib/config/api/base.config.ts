// Base URL configuration utility
export const getBaseUrl = (service: string, port: string) => {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:${port}/${service}`
    : `/${service}`;
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
  AUTH: getBaseUrl("api/v1", "8000"),
  CODE_EXECUTION: getBaseUrl("api", "5002"),
  GAMIFICATION: "/api/gamification",
} as const;
