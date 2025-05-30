import { motion } from "framer-motion";
import React from "react";

interface AuthContainerProps {
  children: React.ReactNode;
  key: string;
}

export const AuthContainer: React.FC<AuthContainerProps> = ({ children, key }) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md p-10 space-y-10 glassmorphism unique-border shadow-2xl relative"
      style={{
        fontFamily: "Inter, ui-sans-serif, system-ui",
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.25), 0 0 20px 0 #a5b4fc33",
        borderRadius: "1.2rem",
        borderWidth: "1.5px",
        borderStyle: "solid",
        borderImage: "linear-gradient(90deg, #a5b4fc, #f472b6, #facc15) 1",
        background: "rgba(30, 30, 60, 0.7)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ maxHeight: "90%" }}>
        <svg
          width="100%"
          height="100%"
          className="absolute inset-0 animate-pulse"
          style={{ filter: "blur(2px)" }}
        >
          <circle cx="20%" cy="30%" r="18" fill="#a5b4fc55">
            <animate attributeName="cy" values="30%;40%;30%" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="60%" r="12" fill="#f472b655">
            <animate attributeName="cy" values="60%;50%;60%" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="80%" r="10" fill="#facc1555">
            <animate attributeName="cy" values="80%;70%;80%" dur="8s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
