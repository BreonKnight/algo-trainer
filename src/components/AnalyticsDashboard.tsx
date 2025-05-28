import { useQuery } from "@tanstack/react-query";
import React from "react";

import { useTheme } from "@/components/theme/use-theme";
import { ThemedCard } from "@/components/ui/themed-card";
import { analyticsService } from "@/lib/services/analyticsService";
import {
  ActivitySummary,
  AchievementTrends,
  UserEngagementMetrics,
} from "@/lib/services/analyticsService";

import { cn } from "@algo-trainer/shared/utils/common";
import "./AnalyticsDashboard.css";

export const AnalyticsDashboard: React.FC = () => {
  const { theme } = useTheme();
  const { data: activitySummary, isLoading: isLoadingSummary } = useQuery<ActivitySummary>({
    queryKey: ["activitySummary"],
    queryFn: () => analyticsService.getActivitySummary(),
  });

  const { data: achievementTrends, isLoading: isLoadingTrends } = useQuery<AchievementTrends>({
    queryKey: ["achievementTrends"],
    queryFn: () => analyticsService.getAchievementTrends(),
  });

  const { data: engagementMetrics, isLoading: isLoadingMetrics } = useQuery<UserEngagementMetrics>({
    queryKey: ["engagementMetrics"],
    queryFn: () => analyticsService.getEngagementMetrics(),
  });

  const isLoading = isLoadingSummary || isLoadingTrends || isLoadingMetrics;

  if (isLoading) {
    return <div className="analytics-dashboard loading">Loading analytics data...</div>;
  }

  return (
    <div className="analytics-dashboard">
      <h1
        className={cn(
          "text-2xl font-bold mb-6",
          theme === "snes" ? "text-[var(--accent)]" : "text-accent"
        )}
      >
        Analytics Dashboard
      </h1>

      {/* Activity Summary Section */}
      <ThemedCard className={cn("mb-6", theme !== "snes" ? "border-accent/10" : "")}>
        <h2
          className={cn(
            "text-xl font-semibold mb-4",
            theme === "snes" ? "text-[var(--accent)]" : "text-accent"
          )}
        >
          Activity Summary
        </h2>
        {activitySummary && (
          <>
            <h3 className="text-lg mb-3">Last 30 Days</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Total Activities:</span>
                <span>{activitySummary.total_activities}</span>
              </li>
              <li className="flex justify-between">
                <span>Most Active Day:</span>
                <span>{activitySummary.most_active_day}</span>
              </li>
              <li className="flex justify-between">
                <span>Average Daily Activities:</span>
                <span>{activitySummary.average_daily_activities.toFixed(1)}</span>
              </li>
            </ul>
          </>
        )}
      </ThemedCard>

      {/* Achievement Trends Section */}
      <ThemedCard className={cn("mb-6", theme !== "snes" ? "border-accent/10" : "")}>
        <h2
          className={cn(
            "text-xl font-semibold mb-4",
            theme === "snes" ? "text-[var(--accent)]" : "text-accent"
          )}
        >
          Achievement Trends
        </h2>
        {achievementTrends && (
          <>
            <h3 className="text-lg mb-3">Completion Rates</h3>
            <ul className="space-y-2">
              {Object.entries(achievementTrends.completion_rates).map(([category, rate]) => (
                <li key={category} className="flex justify-between">
                  <span>{category}:</span>
                  <span>{((rate as number) * 100).toFixed(1)}%</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </ThemedCard>

      {/* Engagement Metrics Section */}
      <ThemedCard className={cn(theme !== "snes" ? "border-accent/10" : "")}>
        <h2
          className={cn(
            "text-xl font-semibold mb-4",
            theme === "snes" ? "text-[var(--accent)]" : "text-accent"
          )}
        >
          Engagement Metrics
        </h2>
        {engagementMetrics && (
          <>
            <h3 className="text-lg mb-3">Daily Engagement</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Average Session Duration:</span>
                <span>{engagementMetrics.average_session_duration} minutes</span>
              </li>
              <li className="flex justify-between">
                <span>Daily Active Users:</span>
                <span>{engagementMetrics.daily_active_users}</span>
              </li>
              <li className="flex justify-between">
                <span>User Retention Rate:</span>
                <span>{(engagementMetrics.user_retention_rate * 100).toFixed(1)}%</span>
              </li>
            </ul>
          </>
        )}
      </ThemedCard>
    </div>
  );
};

export default AnalyticsDashboard;
