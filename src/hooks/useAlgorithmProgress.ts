import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type AlgorithmAttempt = {
  algorithmId: string;
  success: boolean;
};

export function useAlgorithmProgress(algorithmId: string) {
  return useQuery({
    queryKey: ["algorithm-progress", algorithmId],
    queryFn: async () => {
      const res = await fetch(`/api/gamification/algorithm-progress/${algorithmId}`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch algorithm progress");
      return res.json();
    },
  });
}

export function useRecordAlgorithmAttempt() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: AlgorithmAttempt) => {
      const res = await fetch("/api/gamification/algorithm-attempt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to record algorithm attempt");
      return res.json();
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["algorithm-progress", variables.algorithmId] });
      queryClient.invalidateQueries({ queryKey: ["gamification-progress"] });
    },
  });
}
