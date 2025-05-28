import { useState, useCallback } from "react";

import { ToastContainer } from "./toast";

export type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback(({ title, description, variant = "default" }: ToastProps) => {
    const newToast = { title, description, variant };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== newToast));
    }, 3000);
  }, []);

  return { toast, toasts, ToastContainer };
}
