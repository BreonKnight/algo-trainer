import { ComponentProps, forwardRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ThemedButton = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn("transition-all duration-300 hover:scale-105", className)}
        {...props}
      />
    );
  }
);
