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
  // SNES accent palette for alternating example colors
  const snesAccentPalette = [
    "#4040e0", // blue
    "#e40058", // red
    "#00a800", // green
    "#ffd700", // yellow
  ];
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
          "sm:max-w-[425px] pointer-events-auto font-sans",
          theme === "snes"
            ? "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)]"
            : theme === "light" || theme === "solarized"
              ? "bg-white text-main"
              : theme === "nord"
                ? "bg-nord0 text-white"
                : "bg-background text-accent2"
        )}
      >
        <DialogHeader>
          <DialogTitle
            className={cn(
              "flex items-center gap-2 font-sans",
              theme === "snes" && "text-[var(--accent)]"
            )}
          >
            <span
              className={cn(
                "text-3xl font-mono font-extrabold",
                theme === "snes" ? "text-[#4040e0] drop-shadow-[0_1px_0_rgba(0,0,0,0.12)]" : ""
              )}
            >
              {notation.symbol}
            </span>
            <span>{notation.name}</span>
          </DialogTitle>
          <DialogDescription
            className={cn("font-sans", theme === "snes" && "text-[var(--card-text)]")}
          >
            {notation.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 font-sans">
          {notation.latex && (
            <div className="space-y-2">
              <h4 className={cn("text-sm font-medium", theme === "snes" && "text-[var(--accent)]")}>
                LaTeX Representation
              </h4>
              <code
                className={cn(
                  "block p-2 rounded-md text-sm font-mono",
                  theme === "snes"
                    ? "bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--accent2)]"
                    : "bg-muted"
                )}
              >
                {notation.latex}
              </code>
            </div>
          )}
          {notation.examples && notation.examples.length > 0 && (
            <div className="space-y-2">
              <h4 className={cn("text-sm font-medium", theme === "snes" && "text-[var(--accent)]")}>
                Examples
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {notation.examples.map((example, index) => (
                  <li
                    key={index}
                    className={cn(
                      "px-2 py-1 rounded font-bold",
                      theme === "snes"
                        ? index % 2 === 0
                          ? "bg-[var(--card-bg)] border border-[var(--card-border)]"
                          : "bg-[var(--card-hover)] border border-[var(--accent)]"
                        : index % 2 === 0
                          ? "bg-muted text-main"
                          : "bg-background text-main"
                    )}
                    style={
                      theme === "snes"
                        ? { color: snesAccentPalette[index % snesAccentPalette.length] }
                        : undefined
                    }
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
