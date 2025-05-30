import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

import { FormInput } from "./FormInput";

interface LoginFormProps {
  formData: {
    email: string;
    password: string;
  };
  isLoading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  isLoading,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-6">
      <div className="rounded-md shadow-sm space-y-5">
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email address"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter your email"
          autoComplete="email"
          required
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        />

        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          value={formData.password}
          onChange={onChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          icon={
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          }
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-10 text-base font-semibold bg-gradient-to-r from-primary via-accent to-accent2 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/20"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              <span>Sign in</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
};
