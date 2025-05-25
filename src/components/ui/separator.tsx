import * as React from "react";

import { cn } from '@algo-trainer/shared/utils/common';

const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("h-px w-full bg-border", className)} {...props} />
  )
);
Separator.displayName = "Separator";

export { Separator };
