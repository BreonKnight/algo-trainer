import React, { useEffect, useState } from "react";
import { useAnalytics } from "../hooks/useAnalytics";
import {
  ActivitySummary,
  AchievementTrends,
  UserEngagementMetrics,
} from "../lib/services/analyticsService";
import "./AnalyticsDashboard.css";

export const AnalyticsDashboard: React.FC = () => {
  const { getActivitySummary, getAchievementTrends, getEngagementMetrics, loading, error } =
    useAnalytics();

  const [activitySummary, setActivitySummary] = useState<ActivitySummary | null>(null);
  const [achievementTrends, setAchievementTrends] = useState<AchievementTrends | null>(null);
  const [engagementMetrics, setEngagementMetrics] = useState<UserEngagementMetrics | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [summary, trends, metrics] = await Promise.all([
          getActivitySummary(),
          getAchievementTrends(),
          getEngagementMetrics(),
        ]);
        setActivitySummary(summary);
        setAchievementTrends(trends);
        setEngagementMetrics(metrics);
      } catch (err) {
        console.error("Error fetching analytics data:", err);
      }
    };

    fetchData();
  }, [getActivitySummary, getAchievementTrends, getEngagementMetrics]);

  if (loading) {
    return <div className="analytics-dashboard loading">Loading analytics data...</div>;
  }

  if (error) {
    return (
      <div className="analytics-dashboard error">
        {error instanceof Error ? error.message : "An error occurred while loading analytics data"}
      </div>
    );
  }

  return (
    <div className="analytics-dashboard">
      <h1>Analytics Dashboard</h1>

      {/* Activity Summary Section */}
      <section className="activity-summary">
        <h2>Activity Summary</h2>
        {activitySummary && (
          <>
            <h3>Last 30 Days</h3>
            <ul>
              <li>
                <span>Total Activities:</span>
                <span>{activitySummary.total_activities}</span>
              </li>
              <li>
                <span>Most Active Day:</span>
                <span>{activitySummary.most_active_day}</span>
              </li>
              <li>
                <span>Average Daily Activities:</span>
                <span>{activitySummary.average_daily_activities.toFixed(1)}</span>
              </li>
            </ul>
          </>
        )}
      </section>

      {/* Achievement Trends Section */}
      <section className="achievement-trends">
        <h2>Achievement Trends</h2>
        {achievementTrends && (
          <>
            <h3>Completion Rates</h3>
            <ul>
              {Object.entries(achievementTrends.completion_rates).map(([category, rate]) => (
                <li key={category}>
                  <span>{category}:</span>
                  <span>{((rate as number) * 100).toFixed(1)}%</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Engagement Metrics Section */}
      <section className="engagement-metrics">
        <h2>Engagement Metrics</h2>
        {engagementMetrics && (
          <>
            <h3>Daily Engagement</h3>
            <ul>
              <li>
                <span>Average Session Duration:</span>
                <span>{engagementMetrics.average_session_duration} minutes</span>
              </li>
              <li>
                <span>Daily Active Users:</span>
                <span>{engagementMetrics.daily_active_users}</span>
              </li>
              <li>
                <span>User Retention Rate:</span>
                <span>{(engagementMetrics.user_retention_rate * 100).toFixed(1)}%</span>
              </li>
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default AnalyticsDashboard;
