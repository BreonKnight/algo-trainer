import { useState } from "react";
import { useTheme } from "@/components/theme/use-theme";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { NotationModal } from "./NotationModal";
import { notationData } from "./notation-data";
import { cn } from "@/lib/utils";

interface ClickableNotationProps {
  notationKey: keyof typeof notationData;
  className?: string;
  showName?: boolean;
  snesColorIndex?: number;
}

export function ClickableNotation({
  notationKey,
  className,
  showName = false,
  snesColorIndex,
}: ClickableNotationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notation = notationData[notationKey];
  const { theme } = useTheme();

  // Super Famicom button colors (scoped to SNES theme via CSS variables)
  const famicomColors = [
    "bg-[var(--sfc-blue)] text-white border-[var(--sfc-dark)]",
    "bg-[var(--sfc-green)] text-white border-[var(--sfc-dark)]",
    "bg-[var(--sfc-red)] text-white border-[var(--sfc-dark)]",
    "bg-[var(--sfc-yellow)] text-black border-[var(--sfc-dark)]",
  ];
  const famicomClass =
    theme === "snes" && typeof snesColorIndex === "number"
      ? famicomColors[snesColorIndex % famicomColors.length]
      : "";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <DialogPrimitive.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <div className="relative pointer-events-auto" style={{ zIndex: 100 }}>
        <DialogPrimitive.Trigger asChild>
          <button
            onClick={handleClick}
            className={cn(
              "inline-flex items-center gap-1 px-2 py-1 rounded-full font-semibold shadow-sm border transition-colors focus:outline-none",
              theme === "snes"
                ? famicomClass
                : theme === "light" || theme === "solarized"
                  ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
                  : theme === "nord"
                    ? "bg-background/30 text-white hover:bg-background/50"
                    : "bg-background/30 text-accent2 hover:bg-background/50",
              className
            )}
          >
            <span className="text-lg font-mono">{notation.symbol}</span>
            {showName && <span className="text-sm">{notation.name}</span>}
          </button>
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <NotationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            notation={notation}
          />
        </DialogPrimitive.Portal>
      </div>
    </DialogPrimitive.Root>
  );
}
