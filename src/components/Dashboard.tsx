import {
  TrophyIcon,
  StarIcon,
  ClockIcon,
  FireIcon,
  BoltIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import ErrorBoundary from "@/components/common/ErrorBoundary";
import { useTheme } from "@/components/theme/use-theme";
import { Skeleton } from "@/components/ui/skeleton";
import { BASE_URLS } from "@/lib/config/api/base.config";
import { getAuthToken } from "@/lib/services/authService";
import { retry } from "@/lib/utils/retry";

interface AuthResponse {
  id: number;
  email: string;
  name: string;
}

interface DailyEngagement {
  id: number;
  date: string;
  time_spent: number;
  points_earned: number;
}

interface Achievement {
  achievement: {
    id: number;
    name: string;
    description: string;
  };
  achieved_at: string | null;
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

type TabType = "overview" | "achievements" | "leaderboard" | "activity";

const DashboardSkeleton = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="p-6 rounded-xl border shadow bg-[#3B4252]">
          <Skeleton className="h-8 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl border shadow bg-[#3B4252]">
        <Skeleton className="h-6 w-1/3 mb-4" />
        <Skeleton className="h-48 w-full" />
      </div>
      <div className="p-6 rounded-xl border shadow bg-[#3B4252]">
        <Skeleton className="h-6 w-1/3 mb-4" />
        <Skeleton className="h-48 w-full" />
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("overview");
  const [userId, setUserId] = useState<number | null>(null);
  useTheme();

  const handleLogout = () => {
    // Clear the auth token
    localStorage.removeItem("auth_token");
    // Redirect to auth page
    window.location.href = "/auth";
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
        const response = await retry(
          () =>
            fetch(`${BASE_URLS.AUTH}/api/v1/auth/verify`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              credentials: "include",
              mode: "cors",
            }),
          { maxAttempts: 3, delay: 1000 }
        );

        if (!response.ok) {
          throw new Error("Token verification failed");
        }

        const data = (await response.json()) as AuthResponse;
        if (data && data.id) {
          setUserId(data.id);
        } else {
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
      const token = getAuthToken();
      if (!token) throw new Error("No authentication token found");

      const response = await retry(
        () =>
          fetch(`${BASE_URLS.GAMIFICATION}/api/v1/analytics/engagement`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            credentials: "include",
            mode: "cors",
          }),
        { maxAttempts: 3, delay: 1000 }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch engagement data: ${response.statusText}`);
      }

      return response.json();
    },
    enabled: !!userId,
    retry: 3,
    retryDelay: 1000,
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
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          credentials: "include",
          mode: "cors",
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
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
        mode: "cors",
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
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="p-6 rounded-xl border shadow bg-[#3B4252] text-[#ECEFF4]">
        <h3 className="text-lg font-semibold mb-2">Error Loading Dashboard</h3>
        <p>Please try refreshing the page or contact support if the problem persists.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-[#81A1C1] text-white rounded-md hover:bg-[#5E81AC] transition-colors"
        >
          Refresh Page
        </button>
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
      totalPoints:
        engagementData.daily_engagement?.reduce(
          (total: number, activity: DailyEngagement) => total + (activity.points_earned || 0),
          0
        ) || 0,
      level: Math.max(
        1,
        Math.floor(
          (engagementData.daily_engagement?.reduce(
            (total: number, activity: DailyEngagement) => total + (activity.points_earned || 0),
            0
          ) || 0) / 1000
        ) + 1
      ),
      streak: streakData.streak_days || 0,
      challengesCompleted:
        achievementsData.recent_achievements?.filter(
          (achievement: Achievement) => achievement.achieved_at !== null
        ).length || 0,
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

  console.log("Calculated metrics:", {
    totalPoints: transformedData.engagementMetrics.totalPoints,
    level: transformedData.engagementMetrics.level,
    streak: transformedData.engagementMetrics.streak,
    challengesCompleted: transformedData.engagementMetrics.challengesCompleted,
  });

  console.log("Transformed data:", transformedData);

  return (
    <ErrorBoundary fallback={<DashboardSkeleton />}>
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_70%)] opacity-10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--accent2)_0%,_transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--accent3)_0%,_transparent_50%)] opacity-5" />

        <div className="container mx-auto px-4 py-8 relative z-10">
          {/* Enhanced Header with Welcome Message */}
          <div className="mb-8 flex justify-between items-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text text-transparent animate-gradient-x mystical-text">
                Welcome Back!
              </h1>
              <p className="text-muted-foreground mystical-text">
                Track your progress and achievements
              </p>
            </div>
            {userId && (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
              >
                <ArrowRightOnRectangleIcon className="w-5 h-5" />
                <span>Logout</span>
              </button>
            )}
          </div>

          {/* Enhanced Navigation with Active Tab Indicator */}
          <div className="flex space-x-4 mb-8 p-2 bg-card/50 rounded-lg border border-border/50 backdrop-blur-sm shadow-lg">
            {["overview", "achievements", "leaderboard", "activity"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab as TabType)}
                className={`relative px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 mystical-text ${
                  selectedTab === tab
                    ? "bg-accent/20 text-accent border-l-4 border-accent shadow-md shadow-accent/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {selectedTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Main Content with Tab-based Rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedTab === "overview" && (
              <>
                {/* Stats Cards with Enhanced Visuals */}
                <div className="col-span-full grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <TrophyIcon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mystical-text">
                        Total Points
                      </h3>
                    </div>
                    <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                      {transformedData.engagementMetrics.totalPoints}
                    </p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      Level {transformedData.engagementMetrics.level}
                    </div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent2/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent2/20">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-accent2/20">
                        <StarIcon className="w-6 h-6 text-accent2" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mystical-text">Level</h3>
                    </div>
                    <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent mystical-text">
                      {transformedData.engagementMetrics.level}
                    </p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {transformedData.engagementMetrics.totalPoints % 1000} / 1000 XP to next level
                    </div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent3/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent3/20">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-accent3/20">
                        <FireIcon className="w-6 h-6 text-accent3" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mystical-text">
                        Streak
                      </h3>
                    </div>
                    <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent3 to-accent bg-clip-text text-transparent mystical-text">
                      {transformedData.engagementMetrics.streak}
                    </p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {transformedData.engagementMetrics.streak > 0
                        ? "Keep it up!"
                        : "Start your streak today!"}
                    </div>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/20">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <BoltIcon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mystical-text">
                        Challenges
                      </h3>
                    </div>
                    <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                      {transformedData.engagementMetrics.challengesCompleted}
                    </p>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {transformedData.engagementMetrics.challengesCompleted > 0
                        ? "Great progress!"
                        : "Start your journey!"}
                    </div>
                  </div>
                </div>

                {/* Additional Stats Section */}
                <div className="col-span-full lg:col-span-2">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                        Learning Progress
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                        <div className="flex items-center space-x-2">
                          <AcademicCapIcon className="w-5 h-5 text-accent" />
                          <span className="text-sm font-medium">Tutorials Completed</span>
                        </div>
                        <p className="text-2xl font-bold mt-2 text-accent">
                          {
                            transformedData.userActivities.filter(
                              (a) => a.type === "tutorial_completed"
                            ).length
                          }
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent2/10 border border-accent2/20">
                        <div className="flex items-center space-x-2">
                          <PuzzlePieceIcon className="w-5 h-5 text-accent2" />
                          <span className="text-sm font-medium">Problems Solved</span>
                        </div>
                        <p className="text-2xl font-bold mt-2 text-accent2">
                          {
                            transformedData.userActivities.filter(
                              (a) => a.type === "algorithm_solved"
                            ).length
                          }
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent3/10 border border-accent3/20">
                        <div className="flex items-center space-x-2">
                          <SparklesIcon className="w-5 h-5 text-accent3" />
                          <span className="text-sm font-medium">Perfect Solutions</span>
                        </div>
                        <p className="text-2xl font-bold mt-2 text-accent3">
                          {
                            transformedData.userActivities.filter(
                              (a) => a.type === "perfect_solution"
                            ).length
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Preview with Enhanced Visuals */}
                <div className="col-span-full lg:col-span-2">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                        Recent Achievements
                      </h2>
                      <button
                        onClick={() => setSelectedTab("achievements")}
                        className="text-sm text-accent hover:text-accent2 transition-colors"
                      >
                        View All →
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {transformedData.achievements.slice(0, 4).map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                            achievement.unlocked
                              ? "bg-accent/10 border-accent/50 hover:shadow-lg hover:shadow-accent/20"
                              : "bg-card/50 border-border/50 hover:shadow-lg"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
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

                {/* Recent Activity Preview with Enhanced Visuals */}
                <div className="col-span-full lg:col-span-1">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent mystical-text">
                        Recent Activity
                      </h2>
                      <button
                        onClick={() => setSelectedTab("activity")}
                        className="text-sm text-accent hover:text-accent2 transition-colors"
                      >
                        View All →
                      </button>
                    </div>
                    <div className="space-y-4">
                      {transformedData.userActivities.slice(0, 5).map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                        >
                          <div className="p-2 rounded-lg bg-accent/20">
                            <ClockIcon className="w-6 h-6 text-accent" />
                          </div>
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

                {/* Quick Actions Section */}
                <div className="col-span-full">
                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent3 to-accent bg-clip-text text-transparent mystical-text">
                      Quick Actions
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button className="p-4 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2">
                          <AcademicCapIcon className="w-5 h-5 text-accent" />
                          <span>Start Tutorial</span>
                        </div>
                      </button>
                      <button className="p-4 rounded-lg bg-accent2/10 border border-accent2/20 hover:bg-accent2/20 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2">
                          <PuzzlePieceIcon className="w-5 h-5 text-accent2" />
                          <span>Solve Problem</span>
                        </div>
                      </button>
                      <button className="p-4 rounded-lg bg-accent3/10 border border-accent3/20 hover:bg-accent3/20 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2">
                          <ChartBarIcon className="w-5 h-5 text-accent3" />
                          <span>View Progress</span>
                        </div>
                      </button>
                      <button className="p-4 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent/20 transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2">
                          <TrophyIcon className="w-5 h-5 text-accent" />
                          <span>View Achievements</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {selectedTab === "achievements" && (
              <div className="col-span-full">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent mystical-text">
                    All Achievements
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {transformedData.achievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className={`p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                          achievement.unlocked
                            ? "bg-accent/10 border-accent/50 hover:shadow-lg hover:shadow-accent/20"
                            : "bg-card/50 border-border/50 hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
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
            )}

            {selectedTab === "leaderboard" && (
              <div className="col-span-full">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent2 to-accent3 bg-clip-text text-transparent mystical-text">
                    Global Leaderboard
                  </h2>
                  <div className="space-y-4">
                    {transformedData.leaderboard.map((entry) => (
                      <div
                        key={entry.rank}
                        className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
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
            )}

            {selectedTab === "activity" && (
              <div className="col-span-full">
                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-accent3 to-accent bg-clip-text text-transparent mystical-text">
                    Activity History
                  </h2>
                  <div className="space-y-4">
                    {transformedData.userActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                      >
                        <div className="p-2 rounded-lg bg-accent/20">
                          <ClockIcon className="w-6 h-6 text-accent" />
                        </div>
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
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
