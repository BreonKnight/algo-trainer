import axios from "axios";

const AUTH_SERVICE_URL = import.meta.env.VITE_AUTH_SERVICE_URL || "http://localhost:8000";

export const authApi = axios.create({
  baseURL: AUTH_SERVICE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add auth token
authApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface AchievementRequirements {
  tutorial_completed?: number;
  algorithm_solved?: number;
  perfect_solutions?: number;
  streak_days?: number;
  points_earned?: number;
}

export interface GamificationData {
  total_achievements: number;
  achieved_count: number;
  completion_percentage: number;
  total_points: number;
  recent_achievements: Array<{
    id: number;
    user_id: number;
    achievement_id: number;
    achieved_at: string;
    achievement: {
      id: number;
      name: string;
      description: string;
      points: number;
      requirements: AchievementRequirements;
      is_active: boolean;
      created_at: string;
      updated_at: string;
    };
  }>;
}

export const getGamificationData = async (userId: number): Promise<GamificationData> => {
  const response = await authApi.get<GamificationData>(
    `/api/gamification/achievements/user/${userId}/stats`
  );
  return response.data;
};
