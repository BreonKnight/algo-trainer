import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-bg,var(--accent))] text-[var(--button-text,var(--text-main))] hover:bg-[var(--accent2)] shadow-[var(--button-shadow)]",
        destructive: "bg-[var(--error)] text-[var(--text-main)] hover:bg-[var(--error)]/90",
        outline:
          "border-2 border-[var(--button-border,var(--border))] bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-[var(--button-text,var(--text-main))]",
        secondary:
          "bg-[var(--accent2)] text-[var(--button-text,var(--text-main))] hover:bg-[var(--accent3)] shadow-[var(--button-shadow)]",
        ghost:
          "bg-transparent text-[var(--accent)] hover:bg-[var(--accent2)]/10 hover:text-[var(--accent2)]",
        link: "text-[var(--accent)] underline-offset-4 hover:text-[var(--accent2)] hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        standard: "min-w-[120px] px-6 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
