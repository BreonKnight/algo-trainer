import { useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (email: string, password: string, name: string) => {
    // TODO: Implement actual registration logic
    setIsAuthenticated(true);
  };

  return {
    isAuthenticated,
    register,
  };
};
