import { ReactNode } from "react";

import { cn } from '@algo-trainer/shared/utils/common';

export function MediaCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("bg-background rounded-2xl shadow-xl border-2 border-accent/30 p-6", className)}
    >
      {children}
    </div>
  );
}
