import { AUTH_ENDPOINTS } from "./auth.config";
import { CODE_EXECUTION_ENDPOINTS } from "./code-execution.config";
import { GAMIFICATION_ENDPOINTS } from "./gamification.config";

export * from "./base.config";
export * from "./auth.config";
export * from "./code-execution.config";
export * from "./gamification.config";

// Export all endpoints in a single object for convenience
export const API_ENDPOINTS = {
  AUTH: AUTH_ENDPOINTS,
  CODE_EXECUTION: CODE_EXECUTION_ENDPOINTS,
  GAMIFICATION: GAMIFICATION_ENDPOINTS,
} as const;
