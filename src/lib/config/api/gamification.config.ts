import { BASE_URLS } from "./base.config";

export const GAMIFICATION_ENDPOINTS = {
  PROGRESS: `${BASE_URLS.GAMIFICATION}/progress`,
  BADGES: `${BASE_URLS.GAMIFICATION}/badges`,
  CLAIM_BADGE: `${BASE_URLS.GAMIFICATION}/badges/claim`,
} as const;
