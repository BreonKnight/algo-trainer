import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--accent)] text-[var(--text-main)] hover:bg-[var(--accent2)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[var(--border)] bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-[var(--accent)] hover:text-[var(--text-main)]",
        secondary: "bg-[var(--accent2)] text-[var(--text-main)] hover:bg-[var(--accent3)]",
        ghost:
          "bg-transparent text-[var(--accent)] hover:bg-[var(--accent2)] hover:text-[var(--text-main)]",
        link: "text-[var(--accent)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
