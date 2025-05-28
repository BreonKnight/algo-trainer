import axios from "axios";
import { getAuthToken } from "./authService";

const API_URL = import.meta.env.VITE_AUTH_API_URL || "http://localhost:8000/api/v1";

// Types
export interface UserActivity {
  id: number;
  user_id: number;
  activity_type: string;
  metadata?: Record<string, any>;
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
  async trackActivity(activityType: string, metadata?: Record<string, any>): Promise<UserActivity> {
    const response = await axios.post(
      `${API_URL}/analytics/activity`,
      { activity_type: activityType, metadata },
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getActivitySummary(days: number = 30): Promise<ActivitySummary> {
    const response = await axios.get(`${API_URL}/analytics/activity/summary`, {
      headers: this.getHeaders(),
      params: { days },
    });
    return response.data;
  }

  async getActivities(params: {
    activityType?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    offset?: number;
  }): Promise<UserActivity[]> {
    const response = await axios.get(`${API_URL}/analytics/activities`, {
      headers: this.getHeaders(),
      params: {
        activity_type: params.activityType,
        start_date: params.startDate?.toISOString(),
        end_date: params.endDate?.toISOString(),
        limit: params.limit,
        offset: params.offset,
      },
    });
    return response.data;
  }

  // Achievement Analytics
  async getAchievementTrends(limit: number = 5, category?: string): Promise<AchievementTrends> {
    const response = await axios.get(`${API_URL}/analytics/achievements/trends`, {
      headers: this.getHeaders(),
      params: { limit, category },
    });
    return response.data;
  }

  async getAchievementAnalytics(achievementId: number): Promise<AchievementAnalytics> {
    const response = await axios.get(
      `${API_URL}/analytics/achievements/${achievementId}/analytics`,
      { headers: this.getHeaders() }
    );
    return response.data;
  }

  async getUserAchievementStats(): Promise<Record<string, any>> {
    const response = await axios.get(`${API_URL}/analytics/achievements/user/stats`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }

  async getAchievementCompletionRates(category?: string): Promise<Record<string, number>> {
    const response = await axios.get(`${API_URL}/analytics/achievements/completion-rates`, {
      headers: this.getHeaders(),
      params: { category },
    });
    return response.data;
  }

  // User Engagement Analytics
  async getEngagementMetrics(days: number = 30): Promise<UserEngagementMetrics> {
    const response = await axios.get(`${API_URL}/analytics/engagement`, {
      headers: this.getHeaders(),
      params: { days },
    });
    return response.data;
  }

  async getDailyEngagement(date?: Date): Promise<UserEngagement> {
    const response = await axios.get(`${API_URL}/analytics/engagement/daily`, {
      headers: this.getHeaders(),
      params: { date: date?.toISOString() },
    });
    return response.data;
  }

  async getUserStreak(): Promise<{ current_streak: number; longest_streak: number }> {
    const response = await axios.get(`${API_URL}/analytics/engagement/streak`, {
      headers: this.getHeaders(),
    });
    return response.data;
  }
}

export const analyticsService = new AnalyticsService();
