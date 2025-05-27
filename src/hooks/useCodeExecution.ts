import { useMutation, useQueryClient } from "@tanstack/react-query";

export type CodeExecution = {
  linesOfCode: number;
  executionTime: number;
  hasError: boolean;
};

export function useRecordCodeExecution() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CodeExecution) => {
      const res = await fetch("/api/gamification/code-execution", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to record code execution");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gamification-progress"] });
    },
  });
}
