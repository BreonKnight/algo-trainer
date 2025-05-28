import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@algo-trainer/shared/utils/common";

type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function Toast({ title, description, variant = "default" }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-lg p-4 shadow-lg",
        variant === "default"
          ? "bg-background text-foreground"
          : "bg-destructive text-destructive-foreground"
      )}
    >
      {title && <div className="font-semibold">{title}</div>}
      {description && <div className="text-sm">{description}</div>}
    </motion.div>
  );
}

export function ToastContainer({ toasts }: { toasts: ToastProps[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {toasts.map((toast, index) => (
          <Toast key={index} {...toast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
