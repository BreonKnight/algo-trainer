import { ReactNode } from "react";

export function MediaCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-background rounded-2xl shadow-xl border-2 border-accent/30 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
