import { ComponentProps } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { Card } from "@/components/ui/card";

import { cn } from "@algo-trainer/shared/utils/common";

export function ThemedCard({ className, ...props }: ComponentProps<typeof Card>) {
  const { theme } = useTheme();

  return (
    <Card
      className={cn(
        theme === "snes"
          ? "p-4 bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] rounded-xl shadow-[0_4px_24px_rgba(52,152,219,0.08)] transition-all duration-300 hover:shadow-lg hover:border-[#3498db]"
          : "p-4 bg-secondary/50 backdrop-blur-sm border border-secondary/20 transition-all duration-300 hover:shadow-lg hover:border-secondary/30",
        className
      )}
      {...props}
    />
  );
}
