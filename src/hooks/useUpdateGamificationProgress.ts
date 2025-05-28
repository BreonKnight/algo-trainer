import { useQueryClient } from "@tanstack/react-query";

import { BASE_URLS } from "@/lib/config/api/base.config";
import { getAuthToken } from "@/lib/services/authService";

export interface ActivityMetadata {
  tutorial_id?: string;
  time_spent?: number;
  algorithm_id?: string;
  is_first_attempt?: boolean;
  is_perfect_solution?: boolean;
  streak_days?: number;
}

export interface GamificationProgressUpdate {
  points?: number;
  streak?: number;
  activityType?: string;
  activityMetadata?: ActivityMetadata;
}

// Points configuration
const POINTS = {
  TUTORIAL_COMPLETED: 50,
  ALGORITHM_SOLVED: 100,
  DAILY_STREAK: 10,
  FIRST_ATTEMPT: 25,
  PERFECT_SOLUTION: 50,
};

export function useUpdateGamificationProgress() {
  const queryClient = useQueryClient();

  const updateEngagement = async (update: GamificationProgressUpdate) => {
    const token = getAuthToken();
    if (!token) throw new Error("No authentication token found");

    // Update user engagement
    const engagementResponse = await fetch(
      `${BASE_URLS.GAMIFICATION}/api/v1/analytics/engagement`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          points_earned: update.points || 0,
          time_spent: 0,
          streak_days: update.streak || 0,
        }),
      }
    );

    if (!engagementResponse.ok) {
      throw new Error("Failed to update engagement");
    }

    // Record activity if type is provided
    if (update.activityType) {
      const activityResponse = await fetch(`${BASE_URLS.GAMIFICATION}/api/v1/analytics/activity`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activity_type: update.activityType,
          activity_metadata: update.activityMetadata || {},
        }),
      });

      if (!activityResponse.ok) {
        throw new Error("Failed to record activity");
      }
    }

    // Invalidate relevant queries to refresh data
    queryClient.invalidateQueries({ queryKey: ["engagement"] });
    queryClient.invalidateQueries({ queryKey: ["achievements"] });
    queryClient.invalidateQueries({ queryKey: ["streak"] });

    return true;
  };

  // Track tutorial completion
  const trackTutorialCompletion = async (tutorialId: string, timeSpent: number) => {
    return updateEngagement({
      points: POINTS.TUTORIAL_COMPLETED,
      activityType: "tutorial_completed",
      activityMetadata: {
        tutorial_id: tutorialId,
        time_spent: timeSpent,
      },
    });
  };

  // Track algorithm solution
  const trackAlgorithmSolution = async (
    algorithmId: string,
    isFirstAttempt: boolean,
    isPerfectSolution: boolean
  ) => {
    let points = POINTS.ALGORITHM_SOLVED;
    if (isFirstAttempt) points += POINTS.FIRST_ATTEMPT;
    if (isPerfectSolution) points += POINTS.PERFECT_SOLUTION;

    return updateEngagement({
      points,
      activityType: "algorithm_solved",
      activityMetadata: {
        algorithm_id: algorithmId,
        is_first_attempt: isFirstAttempt,
        is_perfect_solution: isPerfectSolution,
      },
    });
  };

  // Track daily streak
  const trackDailyStreak = async (streakDays: number) => {
    return updateEngagement({
      points: POINTS.DAILY_STREAK,
      streak: streakDays,
      activityType: "streak_updated",
      activityMetadata: {
        streak_days: streakDays,
      },
    });
  };

  return {
    updateEngagement,
    trackTutorialCompletion,
    trackAlgorithmSolution,
    trackDailyStreak,
  };
}
