import * as React from "react";

import { useTheme } from "@/components/theme/use-theme";
import { cn } from '@algo-trainer/shared/utils/common';

type CardVariant = "default" | "secondary" | "destructive" | "outline" | "glass";
type CardSize = "sm" | "md" | "lg";

const variants: Record<CardVariant, string> = {
  default: "bg-[var(--card-bg)] text-[var(--card-text)] shadow-sm",
  secondary: "bg-[var(--bg-secondary)] text-[var(--text-secondary)]",
  destructive: "bg-[var(--error)] text-[var(--text-main)]",
  outline: "border-2 border-[var(--border)] bg-[var(--bg-main)]",
  glass: "bg-[var(--bg-secondary)]/50 backdrop-blur-sm border-[var(--border)]/20",
};

const sizes: Record<CardSize, string> = {
  sm: "rounded-[var(--radius)] p-2",
  md: "rounded-[var(--radius)] p-4",
  lg: "rounded-[var(--radius)] p-8",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  bordered?: boolean;
  elevated?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    className,
    variant = "default",
    size = "md",
    bordered = true,
    elevated = false,
    ...rest
  } = props;
  const { theme } = useTheme();

  const getThemeStyles = () => {
    if (theme === "snes") {
      return "bg-[var(--card-bg)] border-2 border-[var(--accent)] text-[var(--card-text)] hover:shadow-[var(--card-shadow)]";
    }
    if (theme === "nord") {
      return "border-[var(--card-border)] hover:border-[var(--accent)]/30";
    }
    return "";
  };

  return (
    <div
      ref={ref}
      className={cn(
        variants[variant],
        sizes[size],
        bordered && "border",
        elevated && "transition-all duration-300 hover:shadow-lg",
        getThemeStyles(),
        className
      )}
      {...rest}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
