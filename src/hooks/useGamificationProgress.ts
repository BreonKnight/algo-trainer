import { useQuery } from "@tanstack/react-query";

export function useGamificationProgress() {
  return useQuery({
    queryKey: ["gamification-progress"],
    queryFn: async () => {
      const res = await fetch("/api/gamification/progress/", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch progress");
      return res.json();
    },
  });
}
