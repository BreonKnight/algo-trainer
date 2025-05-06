import { useMutation, useQueryClient } from "@tanstack/react-query";

export type GamificationProgressUpdate = {
  points?: number;
  experience?: number;
  level?: number;
  completedAlgorithms?: string[];
  streak?: number;
  // Add other fields as needed
};

export function useUpdateGamificationProgress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: GamificationProgressUpdate) => {
      const res = await fetch("/api/gamification/progress/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update progress");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gamification-progress"] });
    },
  });
}
