import { useState } from "react";

import { GAMIFICATION_ENDPOINTS, API_CONFIG } from "@/lib/config/api";

interface Badge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  isClaimed: boolean;
}

interface Progress {
  level: number;
  experience: number;
  nextLevelExperience: number;
  badges: Badge[];
}

interface GamificationError {
  message: string;
  status: number;
}

export const useGamification = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GamificationError | null>(null);

  const getProgress = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(GAMIFICATION_ENDPOINTS.PROGRESS, {
        ...API_CONFIG,
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch progress");
      }

      const data: Progress = await response.json();
      return data;
    } catch (err) {
      setError(err as GamificationError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getBadges = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(GAMIFICATION_ENDPOINTS.BADGES, {
        ...API_CONFIG,
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch badges");
      }

      const data: Badge[] = await response.json();
      return data;
    } catch (err) {
      setError(err as GamificationError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const claimBadge = async (badgeId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(GAMIFICATION_ENDPOINTS.CLAIM_BADGE, {
        ...API_CONFIG,
        method: "POST",
        body: JSON.stringify({ badgeId }),
      });

      if (!response.ok) {
        throw new Error("Failed to claim badge");
      }

      const data: Badge = await response.json();
      return data;
    } catch (err) {
      setError(err as GamificationError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    getProgress,
    getBadges,
    claimBadge,
    loading,
    error,
  };
};
