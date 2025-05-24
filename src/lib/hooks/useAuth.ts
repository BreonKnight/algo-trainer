import { useState } from "react";

import { AUTH_ENDPOINTS, API_CONFIG } from "@/lib/config/api";

interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
  };
  token: string;
}

interface AuthError {
  message: string;
  status: number;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const register = async (email: string, password: string, username: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(AUTH_ENDPOINTS.REGISTER, {
        ...API_CONFIG,
        method: "POST",
        body: JSON.stringify({ email, password, username }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data: AuthResponse = await response.json();
      return data;
    } catch (err) {
      setError(err as AuthError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(AUTH_ENDPOINTS.LOGIN, {
        ...API_CONFIG,
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data: AuthResponse = await response.json();
      return data;
    } catch (err) {
      setError(err as AuthError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(AUTH_ENDPOINTS.LOGOUT, {
        ...API_CONFIG,
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }
    } catch (err) {
      setError(err as AuthError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCurrentUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(AUTH_ENDPOINTS.ME, {
        ...API_CONFIG,
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data: AuthResponse = await response.json();
      return data;
    } catch (err) {
      setError(err as AuthError);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    login,
    logout,
    getCurrentUser,
    loading,
    error,
  };
};
