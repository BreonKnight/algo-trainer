import {
  TrophyIcon,
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  FireIcon,
  BoltIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { BASE_URLS } from "@/lib/config/api/base.config";
import { getAuthToken } from "@/lib/services/authService";

interface Achievement {
  achievement: {
    id: number;
    name: string;
    description: string;
  };
  achieved_at: string | null;
}

interface DailyEngagement {
  id: number;
  date: string;
  time_spent: number;
  points_earned: number;
}

interface AuthResponse {
  id: number;
  email: string;
  name: string;
}

interface GamificationData {
  userActivities: Array<{
    id: number;
    type: string;
    timestamp: string;
    details: string;
  }>;
  engagementMetrics: {
    totalPoints: number;
    level: number;
    streak: number;
    challengesCompleted: number;
  };
  leaderboard: Array<{
    rank: number;
    username: string;
    points: number;
  }>;
  achievements: Array<{
    id: number;
    name: string;
    description: string;
    unlocked: boolean;
  }>;
  socialData: {
    followers: number;
    following: number;
  };
}

const GamificationDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [userId, setUserId] = useState<number | null>(null);

  const handleLogout = () => {
    // Clear the auth token
    localStorage.removeItem("auth_token");
    // Redirect to login page or home
    window.location.href = "/login";
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthToken();
      console.log("Token present:", !!token);

      if (!token) {
        toast.error("Please log in to view your gamification status");
        return;
      }

      try {
        console.log("Verifying token with auth service...");
        const response = await fetch(`${BASE_URLS.AUTH}/api/v1/auth/verify`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Token verification failed:", response.status);
          throw new Error("Token verification failed");
        }

        const data = (await response.json()) as AuthResponse;
        console.log("Token verification response:", data);

        if (data && data.id) {
          console.log("Setting user ID:", data.id);
          setUserId(data.id);
        } else {
          console.error("Invalid user data in response:", data);
          throw new Error("Invalid user data in token verification response");
        }
      } catch (e) {
        console.error("Failed to verify token:", e);
        toast.error("Failed to verify authentication token");
      }
    };

    verifyToken();
  }, []);

  const {
    data: engagementData,
    isLoading: isLoadingEngagement,
    error: engagementError,
  } = useQuery({
    queryKey: ["engagement", userId],
    queryFn: async () => {
      console.log("Fetching engagement data for user:", userId);
      const token = getAuthToken();
      if (!token) throw new Error("No authentication token found");

      const response = await fetch(`${BASE_URLS.GAMIFICATION}/api/v1/analytics/engagement`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Engagement data fetch failed:", response.status, errorData);
        throw new Error(`Failed to fetch engagement data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Engagement data received:", data);
      return data;
    },
    enabled: !!userId,
  });

  const {
    data: achievementsData,
    isLoading: isLoadingAchievements,
    error: achievementsError,
  } = useQuery({
    queryKey: ["achievements", userId],
    queryFn: async () => {
      const token = getAuthToken();
      if (!token) throw new Error("No authentication token found");

      const response = await fetch(
        `${BASE_URLS.GAMIFICATION}/api/v1/achievements/user/${userId}/stats`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Authentication failed. Please log in again.");
        }
        throw new Error("Failed to fetch achievements");
      }

      return response.json();
    },
    enabled: !!userId,
  });

  const {
    data: streakData,
    isLoading: isLoadingStreak,
    error: streakError,
  } = useQuery({
    queryKey: ["streak", userId],
    queryFn: async () => {
      const token = getAuthToken();
      if (!token) throw new Error("No authentication token found");

      const response = await fetch(`${BASE_URLS.GAMIFICATION}/api/v1/analytics/engagement/daily`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Authentication failed. Please log in again.");
        }
        throw new Error("Failed to fetch streak data");
      }

      return response.json();
    },
    enabled: !!userId,
  });

  const isLoading = isLoadingEngagement || isLoadingAchievements || isLoadingStreak;
  const error = engagementError || achievementsError || streakError;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-accent">Loading gamification data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-red-500">
          Error: {error instanceof Error ? error.message : "An error occurred"}
        </div>
      </div>
    );
  }

  if (!engagementData || !achievementsData || !streakData) {
    console.log("Missing data:", {
      engagementData,
      achievementsData,
      streakData,
    });
    return null;
  }

  console.log("Raw data received:", {
    engagementData,
    achievementsData,
    streakData,
  });

  const transformedData: GamificationData = {
    userActivities:
      engagementData.daily_engagement?.map((activity: DailyEngagement) => ({
        id: activity.id,
        type: "activity",
        timestamp: activity.date,
        details: `Spent ${activity.time_spent} minutes, earned ${activity.points_earned} points`,
      })) || [],
    engagementMetrics: {
      totalPoints: achievementsData.total_points || 0,
      level: Math.floor((achievementsData.total_points || 0) / 1000) + 1,
      streak: streakData.streak_days || 0,
      challengesCompleted: achievementsData.achieved_count || 0,
    },
    leaderboard: [],
    achievements:
      achievementsData.recent_achievements?.map((achievement: Achievement) => ({
        id: achievement.achievement.id,
        name: achievement.achievement.name,
        description: achievement.achievement.description,
        unlocked: achievement.achieved_at !== null,
      })) || [],
    socialData: {
      followers: 0,
      following: 0,
    },
  };

  console.log("Transformed data:", transformedData);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10 animate-pulse" />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text text-transparent animate-gradient-x mystical-text">
              Gamification Dashboard
            </h1>
            <p className="text-muted-foreground mystical-text">
              Track your progress and achievements
            </p>
          </div>
          {userId && (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span>Logout</span>
            </button>
          )}
        </div>

        {/* Combat-Style Navigation */}
        <div className="flex space-x-4 mb-8 p-2 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm">
          {["overview", "achievements", "leaderboard", "activity"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 mystical-text ${
                selectedTab === tab
                  ? "bg-accent/20 text-accent border-l-4 border-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Engagement Stats */}
          <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <TrophyIcon className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-foreground mystical-text">
                  Total Points
                </h3>
              </div>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                {transformedData.engagementMetrics.totalPoints}
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <StarIcon className="w-6 h-6 text-accent2" />
                <h3 className="text-lg font-semibold text-foreground mystical-text">Level</h3>
              </div>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent mystical-text">
                {transformedData.engagementMetrics.level}
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <FireIcon className="w-6 h-6 text-accent3" />
                <h3 className="text-lg font-semibold text-foreground mystical-text">Streak</h3>
              </div>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent3 to-accent bg-clip-text text-transparent mystical-text">
                {transformedData.engagementMetrics.streak}
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-2">
                <BoltIcon className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-foreground mystical-text">Challenges</h3>
              </div>
              <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                {transformedData.engagementMetrics.challengesCompleted}
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="col-span-full lg:col-span-2">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {transformedData.achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                      achievement.unlocked
                        ? "bg-accent/10 border-accent/50"
                        : "bg-card/50 border-border/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          achievement.unlocked
                            ? "bg-accent/20 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <TrophyIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mystical-text">
                          {achievement.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mystical-text">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="col-span-full lg:col-span-1">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent mystical-text">
                Leaderboard
              </h2>
              <div className="space-y-4">
                {transformedData.leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                        {entry.rank}
                      </div>
                      <span className="font-medium text-foreground mystical-text">
                        {entry.username}
                      </span>
                    </div>
                    <span className="text-accent font-bold mystical-text">{entry.points}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-span-full">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent3 to-accent bg-clip-text text-transparent mystical-text">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {transformedData.userActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <ClockIcon className="w-6 h-6 text-accent" />
                    <div>
                      <p className="text-foreground mystical-text">{activity.details}</p>
                      <p className="text-sm text-muted-foreground mystical-text">
                        {activity.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Stats */}
          <div className="col-span-full">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                Social Activity
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="w-6 h-6 text-accent" />
                    <h3 className="text-lg font-semibold text-foreground mystical-text">
                      Followers
                    </h3>
                  </div>
                  <p className="text-3xl font-bold mt-2 text-accent mystical-text">
                    {transformedData.socialData.followers}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="w-6 h-6 text-accent2" />
                    <h3 className="text-lg font-semibold text-foreground mystical-text">
                      Following
                    </h3>
                  </div>
                  <p className="text-3xl font-bold mt-2 text-accent2 mystical-text">
                    {transformedData.socialData.following}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamificationDashboard;
