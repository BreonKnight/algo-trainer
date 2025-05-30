import { motion } from "framer-motion";
import React from "react";

interface AuthDividerProps {
  text: string;
}

export const AuthDivider: React.FC<AuthDividerProps> = ({ text }) => {
  return (
    <div className="relative py-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-accent/20"></div>
      </div>
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="px-6 py-2 bg-background/80 rounded-full border border-accent/20 shadow-lg shadow-accent/5"
        >
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm font-semibold bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              {text}
            </span>
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
