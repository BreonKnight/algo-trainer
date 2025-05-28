import { useMutation, useQuery } from "@tanstack/react-query";

import { getAuthToken } from "./authService";

const API_URL = import.meta.env.VITE_AUTH_API_URL || "http://localhost:8000/api/v1";

type ActivityMetadata = {
  [key: string]: string | number | boolean | null;
};

// Types
export interface UserActivity {
  id: number;
  user_id: number;
  activity_type: string;
  metadata?: ActivityMetadata;
  created_at: string;
}

export interface ActivitySummary {
  total_activities: number;
  activity_types: Record<string, number>;
  recent_activities: UserActivity[];
  most_active_hours: Record<string, number>;
  most_active_day: string;
  average_daily_activities: number;
}

export interface AchievementAnalytics {
  id: number;
  achievement_id: number;
  total_earned: number;
  average_completion_time: number;
  difficulty_rating: number;
  popularity_score: number;
  last_updated: string;
}

export interface AchievementTrends {
  most_popular: AchievementAnalytics[];
  most_difficult: AchievementAnalytics[];
  fastest_completed: AchievementAnalytics[];
  completion_rates: Record<string, number>;
}

export interface UserEngagement {
  id: number;
  user_id: number;
  date: string;
  login_count: number;
  achievement_count: number;
  points_earned: number;
  time_spent: number;
  streak_days: number;
}

export interface UserEngagementMetrics {
  daily_engagement: UserEngagement[];
  average_time_spent: number;
  streak_history: number[];
  achievement_progress: Record<string, number>;
  average_session_duration: number;
  daily_active_users: number;
  user_retention_rate: number;
}

export interface UserAchievementStats {
  total_achievements: number;
  completed_achievements: number;
  in_progress_achievements: number;
  achievement_points: number;
  recent_achievements: Array<{
    id: number;
    name: string;
    completed_at: string;
    points_earned: number;
  }>;
}

// Analytics Service
class AnalyticsService {
  private getHeaders() {
    const token = getAuthToken();
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }

  // User Activity Analytics
  async trackActivity(activityType: string, metadata?: ActivityMetadata): Promise<UserActivity> {
    const response = await fetch(`${API_URL}/analytics/activity`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify({ activity_type: activityType, metadata }),
    });
    if (!response.ok) throw new Error("Failed to track activity");
    return response.json();
  }

  async getActivitySummary(days: number = 30): Promise<ActivitySummary> {
    const searchParams = new URLSearchParams();
    searchParams.append("days", days.toString());
    const response = await fetch(`${API_URL}/analytics/activity/summary?${searchParams}`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get activity summary");
    return response.json();
  }

  async getActivities(params: {
    activityType?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    offset?: number;
  }): Promise<UserActivity[]> {
    const searchParams = new URLSearchParams();
    if (params.activityType) searchParams.append("activity_type", params.activityType);
    if (params.startDate) searchParams.append("start_date", params.startDate.toISOString());
    if (params.endDate) searchParams.append("end_date", params.endDate.toISOString());
    if (params.limit) searchParams.append("limit", params.limit.toString());
    if (params.offset) searchParams.append("offset", params.offset.toString());

    const response = await fetch(`${API_URL}/analytics/activities?${searchParams}`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get activities");
    return response.json();
  }

  // Achievement Analytics
  async getAchievementTrends(limit: number = 5, category?: string): Promise<AchievementTrends> {
    const searchParams = new URLSearchParams();
    searchParams.append("limit", limit.toString());
    if (category) searchParams.append("category", category);

    const response = await fetch(`${API_URL}/analytics/achievements/trends?${searchParams}`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get achievement trends");
    return response.json();
  }

  async getAchievementAnalytics(achievementId: number): Promise<AchievementAnalytics> {
    const response = await fetch(`${API_URL}/analytics/achievements/${achievementId}/analytics`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get achievement analytics");
    return response.json();
  }

  async getUserAchievementStats(): Promise<UserAchievementStats> {
    const response = await fetch(`${API_URL}/analytics/achievements/user/stats`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get user achievement stats");
    return response.json();
  }

  async getAchievementCompletionRates(category?: string): Promise<Record<string, number>> {
    const searchParams = new URLSearchParams();
    if (category) searchParams.append("category", category);

    const response = await fetch(
      `${API_URL}/analytics/achievements/completion-rates?${searchParams}`,
      {
        headers: this.getHeaders(),
      }
    );
    if (!response.ok) throw new Error("Failed to get achievement completion rates");
    return response.json();
  }

  // User Engagement Analytics
  async getEngagementMetrics(days: number = 30): Promise<UserEngagementMetrics> {
    const searchParams = new URLSearchParams();
    searchParams.append("days", days.toString());
    const response = await fetch(`${API_URL}/analytics/engagement?${searchParams}`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get engagement metrics");
    return response.json();
  }

  async getDailyEngagement(date?: Date): Promise<UserEngagement> {
    const searchParams = new URLSearchParams();
    if (date) searchParams.append("date", date.toISOString());

    const response = await fetch(`${API_URL}/analytics/engagement/daily?${searchParams}`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get daily engagement");
    return response.json();
  }

  async getUserStreak(): Promise<{ current_streak: number; longest_streak: number }> {
    const response = await fetch(`${API_URL}/analytics/engagement/streak`, {
      headers: this.getHeaders(),
    });
    if (!response.ok) throw new Error("Failed to get user streak");
    return response.json();
  }
}

export const analyticsService = new AnalyticsService();

// React Query Hooks
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

  const activitySummary = useQuery({
    queryKey: ["activitySummary"],
    queryFn: () => analyticsService.getActivitySummary(),
  });

  const activities = useQuery({
    queryKey: ["activities"],
    queryFn: () => analyticsService.getActivities({}),
  });

  // Achievement Analytics
  const achievementTrends = useQuery({
    queryKey: ["achievementTrends"],
    queryFn: () => analyticsService.getAchievementTrends(),
  });

  const achievementAnalytics = useQuery({
    queryKey: ["achievementAnalytics"],
    queryFn: () => analyticsService.getAchievementAnalytics(0),
  });

  const userAchievementStats = useQuery({
    queryKey: ["userAchievementStats"],
    queryFn: () => analyticsService.getUserAchievementStats(),
  });

  const achievementCompletionRates = useQuery({
    queryKey: ["achievementCompletionRates"],
    queryFn: () => analyticsService.getAchievementCompletionRates(),
  });

  // User Engagement Analytics
  const engagementMetrics = useQuery({
    queryKey: ["engagementMetrics"],
    queryFn: () => analyticsService.getEngagementMetrics(),
  });

  const dailyEngagement = useQuery({
    queryKey: ["dailyEngagement"],
    queryFn: () => analyticsService.getDailyEngagement(),
  });

  const userStreak = useQuery({
    queryKey: ["userStreak"],
    queryFn: () => analyticsService.getUserStreak(),
  });

  return {
    // User Activity Analytics
    trackActivity,
    activitySummary,
    activities,
    // Achievement Analytics
    achievementTrends,
    achievementAnalytics,
    userAchievementStats,
    achievementCompletionRates,
    // User Engagement Analytics
    engagementMetrics,
    dailyEngagement,
    userStreak,
  };
};
