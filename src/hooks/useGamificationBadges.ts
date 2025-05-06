import { useQuery } from "@tanstack/react-query";

export function useGamificationBadges() {
  return useQuery({
    queryKey: ["gamification-badges"],
    queryFn: async () => {
      const res = await fetch("/api/gamification/badges/", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch badges");
      return res.json();
    },
  });
}
