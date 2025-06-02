import { motion } from "framer-motion";
import React from "react";

interface AuthHeaderProps {
  subtitle: string;
  description: string;
  isLogin: boolean;
  onToggle: () => void;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({
  subtitle,
  description,
  isLogin,
  onToggle,
}) => {
  return (
    <div className="relative z-10 text-center space-y-3">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2
          className="text-3xl font-black tracking-widest bg-gradient-to-r from-primary via-accent to-accent2 bg-clip-text text-transparent uppercase flex items-center justify-center gap-2"
          style={{
            letterSpacing: "0.08em",
            fontFamily: "Inter, ui-sans-serif, system-ui",
          }}
        >
          🚀 AlgoTrainer
        </h2>
        <div className="mt-1 text-accent2 text-base font-mono tracking-wide">{subtitle}</div>
        <div className="mt-0.5 text-xs text-foreground/60 italic">{description}</div>
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-foreground/70 mt-2"
      >
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={onToggle}
          className="font-semibold text-primary hover:text-primary/80 transition-colors border border-primary rounded-lg px-3 py-1 ml-2 bg-background/60"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </motion.p>
    </div>
  );
};
