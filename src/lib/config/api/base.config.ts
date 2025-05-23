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
  },
} as const;

// Base URLs for all services
export const BASE_URLS = {
  AUTH: getBaseUrl("auth", "5000"),
  CODE_EXECUTION: getBaseUrl("api", "5002"),
  GAMIFICATION: "/api/gamification",
} as const;
