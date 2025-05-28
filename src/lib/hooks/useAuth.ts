import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { AUTH_ENDPOINTS } from "@/lib/config/api/auth.config";
import { setAuthToken, getAuthToken, removeAuthToken } from "@/lib/services/authService";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { data: isAuthenticated = false } = useQuery({
    queryKey: ["auth"],
    queryFn: () => !!getAuthToken(),
  });

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      const response = await fetch(AUTH_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Login failed");
      }

      const data = await response.json();
      setAuthToken(data.access_token);
      return data;
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth"], true);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async ({
      email,
      password,
      name,
    }: {
      email: string;
      password: string;
      name: string;
    }) => {
      const response = await fetch(AUTH_ENDPOINTS.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || "Registration failed");
      }

      const data = await response.json();
      setAuthToken(data.access_token);
      return data;
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth"], true);
    },
  });

  const logout = () => {
    removeAuthToken();
    queryClient.setQueryData(["auth"], false);
  };

  return {
    isAuthenticated,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isLoading: loginMutation.isPending || registerMutation.isPending,
    error: loginMutation.error || registerMutation.error,
  };
};
