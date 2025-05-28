import { useQuery } from "@tanstack/react-query";

import { getGamificationData } from "@/lib/api";

export const useGamification = (userId: number, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: ["gamification", userId],
    queryFn: () => getGamificationData(userId),
    enabled: options?.enabled ?? true,
  });
};
