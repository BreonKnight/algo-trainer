import { useState, useCallback } from "react";
import { analyticsService } from "../lib/services/analyticsService";
import type {
  UserActivity,
  ActivitySummary,
  AchievementAnalytics,
  AchievementTrends,
  UserEngagement,
  UserEngagementMetrics,
} from "../lib/services/analyticsService";

export const useAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // User Activity Analytics
  const trackActivity = useCallback(
    async (activityType: string, metadata?: Record<string, any>) => {
      try {
        setLoading(true);
        setError(null);
        return await analyticsService.trackActivity(activityType, metadata);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to track activity"));
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const getActivitySummary = useCallback(async (days: number = 30) => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getActivitySummary(days);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get activity summary"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getActivities = useCallback(
    async (params: {
      activityType?: string;
      startDate?: Date;
      endDate?: Date;
      limit?: number;
      offset?: number;
    }) => {
      try {
        setLoading(true);
        setError(null);
        return await analyticsService.getActivities(params);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to get activities"));
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Achievement Analytics
  const getAchievementTrends = useCallback(async (limit: number = 5, category?: string) => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getAchievementTrends(limit, category);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get achievement trends"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getAchievementAnalytics = useCallback(async (achievementId: number) => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getAchievementAnalytics(achievementId);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get achievement analytics"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getUserAchievementStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getUserAchievementStats();
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get user achievement stats"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getAchievementCompletionRates = useCallback(async (category?: string) => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getAchievementCompletionRates(category);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to get achievement completion rates")
      );
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // User Engagement Analytics
  const getEngagementMetrics = useCallback(async (days: number = 30) => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getEngagementMetrics(days);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get engagement metrics"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getDailyEngagement = useCallback(async (date?: Date) => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getDailyEngagement(date);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get daily engagement"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const getUserStreak = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      return await analyticsService.getUserStreak();
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to get user streak"));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    // User Activity Analytics
    trackActivity,
    getActivitySummary,
    getActivities,
    // Achievement Analytics
    getAchievementTrends,
    getAchievementAnalytics,
    getUserAchievementStats,
    getAchievementCompletionRates,
    // User Engagement Analytics
    getEngagementMetrics,
    getDailyEngagement,
    getUserStreak,
  };
};
