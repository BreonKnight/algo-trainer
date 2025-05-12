import { ReactNode } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SolutionCardProps {
  children: ReactNode;
  [key: string]: unknown;
}

export function SolutionCard({ children, ...props }: SolutionCardProps) {
  const { theme } = useTheme();
  return (
    <Card
      className={cn(
        theme === "snes"
          ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] rounded-xl shadow-[0_4px_24px_rgba(52,152,219,0.08)]"
          : "bg-secondary border-text-secondary",
        "p-4 w-full h-full flex flex-col overflow-hidden"
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
