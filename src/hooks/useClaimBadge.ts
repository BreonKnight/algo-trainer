import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useClaimBadge() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (badgeId: string) => {
      const res = await fetch("/api/gamification/badges/claim/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ badge_id: badgeId }),
      });
      if (!res.ok) throw new Error("Failed to claim badge");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gamification-badges"] });
    },
  });
}
