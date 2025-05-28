import { useState } from "react";
import { toast } from "react-hot-toast";

import { useAuth } from "@/lib/hooks/useAuth";

const SignupForm3D: React.FC = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Starting registration process with data:", {
      ...formData,
      password: "[REDACTED]",
    });

    try {
      console.log("Calling register function...");
      await register(formData.email, formData.password, formData.name);
      console.log("Registration successful!");
      toast.success("Registration successful! Please log in.");
      setFormData({ email: "", password: "", name: "" });
    } catch (error) {
      console.error("Registration error details:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export { SignupForm3D };
