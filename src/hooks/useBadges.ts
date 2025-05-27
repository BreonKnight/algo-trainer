import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type BadgeProgress = {
  badgeId: string;
  progress: number;
};

export function useBadges() {
  return useQuery({
    queryKey: ["badges"],
    queryFn: async () => {
      const res = await fetch("/api/gamification/badges", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch badges");
      return res.json();
    },
  });
}

export function useUpdateBadgeProgress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: BadgeProgress) => {
      const res = await fetch("/api/gamification/badge-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update badge progress");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["badges"] });
      queryClient.invalidateQueries({ queryKey: ["gamification-progress"] });
    },
  });
}
