import { useMutation } from "@tanstack/react-query";

import { API_ENDPOINTS, API_CONFIG } from "@/lib/config/api";

interface ExecuteCodeResponse {
  output: string;
  error: string | null;
  variables: Record<string, string>;
}

interface ExecuteCodeRequest {
  code: string;
  user_id?: string;
}

export function useCodeExecution() {
  return useMutation<ExecuteCodeResponse, Error, ExecuteCodeRequest>({
    mutationFn: async ({ code, user_id }) => {
      const response = await fetch(API_ENDPOINTS.CODE_EXECUTION.EXECUTE, {
        ...API_CONFIG,
        method: "POST",
        body: JSON.stringify({ code, user_id }),
      });

      if (!response.ok) {
        throw new Error("Failed to execute code");
      }

      return response.json();
    },
  });
}
