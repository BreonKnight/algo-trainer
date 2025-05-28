import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

import { useGamification } from "@/hooks/useGamification";

interface TokenPayload {
  sub: string;
  exp: number;
}

export function GamificationTest() {
  const [userId, setUserId] = useState<number | null>(null);
  const { data, isLoading, error } = useGamification(userId ?? 0, {
    enabled: userId !== null,
  });

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token);
        setUserId(parseInt(decoded.sub));
      } catch (e) {
        console.error("Failed to decode token:", e);
      }
    }
  }, []);

  if (!userId) return <div>Please log in to view your gamification status</div>;
  if (isLoading) return <div>Loading gamification data...</div>;
  if (error) return <div>Error loading gamification data: {error.message}</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Your Gamification Status</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Points</p>
            <p className="text-2xl font-bold">{data?.total_points}</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Achievement Progress</p>
            <p className="text-2xl font-bold">
              {data?.achieved_count}/{data?.total_achievements}
            </p>
            <p className="text-sm text-gray-500">
              {data?.completion_percentage.toFixed(1)}% Complete
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Recent Achievements</h3>
          <div className="space-y-2">
            {data?.recent_achievements.map((userAchievement) => (
              <div key={userAchievement.id} className="p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold">{userAchievement.achievement.name}</p>
                <p className="text-sm text-gray-600">{userAchievement.achievement.description}</p>
                <p className="text-sm text-gray-500">
                  Achieved: {new Date(userAchievement.achieved_at).toLocaleDateString()}
                </p>
                <p className="text-sm text-green-600">
                  +{userAchievement.achievement.points} points
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
