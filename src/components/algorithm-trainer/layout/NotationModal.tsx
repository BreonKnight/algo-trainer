import { forwardRef } from "react";

import { useTheme } from "@/components/theme/use-theme";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface NotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notation: {
    symbol: string;
    name: string;
    description: string;
    examples?: string[];
    latex?: string;
  };
}

export const NotationModal = forwardRef<HTMLDivElement, NotationModalProps>(function NotationModal(
  { isOpen, onClose, notation },
  ref
) {
  const { theme } = useTheme();
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
          "sm:max-w-[425px] pointer-events-auto font-sans border border-[var(--card-border)] shadow-xl",
          theme === "light" || theme === "solarized" || theme === undefined
            ? "bg-white text-zinc-900"
            : "bg-zinc-900 text-white"
        )}
      >
        <DialogHeader>
          <DialogTitle
            className={cn(
              "flex items-center gap-3 font-sans text-3xl font-extrabold tracking-tight mb-2",
              theme === "light" || theme === "solarized" || theme === undefined
                ? "text-accent2"
                : "text-accent"
            )}
          >
            <span
              className={cn(
                "text-4xl font-mono font-extrabold mr-2",
                theme === "light" || theme === "solarized" || theme === undefined
                  ? "text-accent"
                  : "text-accent2"
              )}
            >
              {notation.symbol}
            </span>
            <span>{notation.name}</span>
          </DialogTitle>
          <DialogDescription
            className={cn(
              "font-sans text-lg mb-2",
              theme === "light" || theme === "solarized" || theme === undefined
                ? "text-zinc-700"
                : "text-zinc-200"
            )}
          >
            {notation.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4 font-sans">
          {notation.latex && (
            <div className="space-y-2">
              <h4
                className={cn(
                  "text-base font-semibold mb-1",
                  theme === "light" || theme === "solarized" || theme === undefined
                    ? "text-accent"
                    : "text-accent2"
                )}
              >
                LaTeX Representation
              </h4>
              <code
                className={cn(
                  "block p-3 rounded-md text-base font-mono border",
                  theme === "light" || theme === "solarized" || theme === undefined
                    ? "bg-gray-100 border-gray-300 text-accent2"
                    : "bg-zinc-800 border-zinc-700 text-accent"
                )}
              >
                {notation.latex}
              </code>
            </div>
          )}
          {notation.examples && notation.examples.length > 0 && (
            <div className="space-y-2">
              <h4
                className={cn(
                  "text-base font-semibold mb-1",
                  theme === "light" || theme === "solarized" || theme === undefined
                    ? "text-accent"
                    : "text-accent2"
                )}
              >
                Examples
              </h4>
              <ul
                className={cn(
                  "list-disc list-inside space-y-2 text-base",
                  theme === "light" || theme === "solarized" || theme === undefined
                    ? "text-zinc-900"
                    : "text-zinc-100"
                )}
              >
                {notation.examples.map((example, index) => (
                  <li
                    key={index}
                    className={cn(
                      "px-3 py-2 rounded-md font-medium border",
                      theme === "light" || theme === "solarized" || theme === undefined
                        ? "bg-gray-50 border-gray-200 text-zinc-900"
                        : "bg-zinc-800 border-zinc-700 text-zinc-100"
                    )}
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
});
