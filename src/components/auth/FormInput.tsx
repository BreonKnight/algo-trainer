import { motion } from "framer-motion";
import React from "react";

import { Input } from "@/components/ui/input";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  icon: React.ReactNode;
  delay?: number;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
  required = false,
  icon,
  delay = 0.5,
}) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
      className="space-y-2 group"
    >
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-foreground/90 group-hover:text-accent transition-colors tracking-wide"
      >
        {label}
      </label>
      <div className="relative">
        <Input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-10 mt-1 bg-background/50 border-accent/20 focus:border-accent/50 transition-all duration-300 pl-10 text-base group-hover:shadow-lg group-hover:shadow-accent/10"
        />
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <div className="h-5 w-5 text-accent/50 group-hover:text-accent transition-colors">
            {icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
