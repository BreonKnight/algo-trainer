import { forwardRef } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ThemedDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  showClose?: boolean;
}

const maxWidthClasses = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
  full: "sm:max-w-full",
};

export const ThemedDialog = forwardRef<HTMLDivElement, ThemedDialogProps>(
  ({ isOpen, onClose, children, maxWidth = "md" }, ref) => {
    return (
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
      >
        <DialogContent
          ref={ref}
          className={cn(
            maxWidthClasses[maxWidth],
            "pointer-events-auto font-sans border shadow-xl",
            "bg-[var(--bg-main)] text-[var(--text-main)]",
            "border-[var(--card-border)]",
            "transition-all duration-200"
          )}
          style={{
            backdropFilter: "blur(12px)",
            animation: "modalSlideIn 0.3s ease-out",
          }}
        >
          {children}
        </DialogContent>
      </Dialog>
    );
  }
);

ThemedDialog.displayName = "ThemedDialog";

export const ThemedDialogHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref}>
      <DialogHeader className={cn("border-b border-[var(--border)] pb-4", className)} {...props}>
        {children}
      </DialogHeader>
    </div>
  )
);

ThemedDialogHeader.displayName = "ThemedDialogHeader";

export const ThemedDialogTitle = forwardRef<
  React.ElementRef<typeof DialogTitle>,
  React.ComponentPropsWithoutRef<typeof DialogTitle>
>(({ className, children, ...props }, ref) => (
  <DialogTitle
    ref={ref}
    className={cn(
      "flex items-center gap-3 font-sans text-3xl font-bold tracking-tight mb-2 text-[var(--accent)]",
      className
    )}
    {...props}
  >
    {children}
  </DialogTitle>
));

ThemedDialogTitle.displayName = "ThemedDialogTitle";

export const ThemedDialogDescription = forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, children, ...props }, ref) => (
  <DialogDescription
    ref={ref}
    className={cn("font-sans text-lg mb-2 text-[var(--text-secondary)]", className)}
    {...props}
  >
    {children}
  </DialogDescription>
));

ThemedDialogDescription.displayName = "ThemedDialogDescription";

export const ThemedDialogBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("grid gap-6 py-4 font-sans", className)} {...props}>
      {children}
    </div>
  )
);

ThemedDialogBody.displayName = "ThemedDialogBody";
