import { useMutation, useQuery } from "@tanstack/react-query";

import { analyticsService } from "@/lib/services/analyticsService";

type ActivityMetadata = {
  [key: string]: string | number | boolean | null;
};

export const useAnalytics = () => {
  // User Activity Analytics
  const trackActivity = useMutation({
    mutationFn: ({
      activityType,
      metadata,
    }: {
      activityType: string;
      metadata?: ActivityMetadata;
    }) => analyticsService.trackActivity(activityType, metadata),
  });

  const getActivitySummary = useQuery({
    queryKey: ["activitySummary"],
    queryFn: () => analyticsService.getActivitySummary(),
  });

  const getActivities = useQuery({
    queryKey: ["activities"],
    queryFn: () => analyticsService.getActivities({}),
  });

  // Achievement Analytics
  const getAchievementTrends = useQuery({
    queryKey: ["achievementTrends"],
    queryFn: () => analyticsService.getAchievementTrends(),
  });

  const getAchievementAnalytics = useQuery({
    queryKey: ["achievementAnalytics"],
    queryFn: () => analyticsService.getAchievementAnalytics(0),
  });

  const getUserAchievementStats = useQuery({
    queryKey: ["userAchievementStats"],
    queryFn: () => analyticsService.getUserAchievementStats(),
  });

  const getAchievementCompletionRates = useQuery({
    queryKey: ["achievementCompletionRates"],
    queryFn: () => analyticsService.getAchievementCompletionRates(),
  });

  // User Engagement Analytics
  const getEngagementMetrics = useQuery({
    queryKey: ["engagementMetrics"],
    queryFn: () => analyticsService.getEngagementMetrics(),
  });

  const getDailyEngagement = useQuery({
    queryKey: ["dailyEngagement"],
    queryFn: () => analyticsService.getDailyEngagement(),
  });

  const getUserStreak = useQuery({
    queryKey: ["userStreak"],
    queryFn: () => analyticsService.getUserStreak(),
  });

  return {
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
