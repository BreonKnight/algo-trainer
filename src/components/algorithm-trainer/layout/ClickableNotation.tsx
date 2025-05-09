import { useState } from "react";
import { useTheme } from "@/components/theme/use-theme";

import { NotationModal } from "./NotationModal";
import { notationData } from "./notation-data";
import { cn } from "@/lib/utils";

interface ClickableNotationProps {
  notationKey: keyof typeof notationData;
  className?: string;
  showName?: boolean;
}

export function ClickableNotation({
  notationKey,
  className,
  showName = false,
}: ClickableNotationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notation = notationData[notationKey];
  const { theme } = useTheme();

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={cn(
          "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring/50",
          theme === "light" || theme === "solarized"
            ? "bg-white text-accent border border-accent shadow-sm hover:bg-accent/10"
            : theme === "nord"
              ? "bg-background/30 text-white hover:bg-background/50"
              : "bg-background/30 text-accent2 hover:bg-background/50",
          className
        )}
      >
        <span className="text-lg font-mono">{notation.symbol}</span>
        {showName && <span className="text-sm text-muted-foreground">{notation.name}</span>}
      </button>

      <NotationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notation={notation}
      />
    </>
  );
}
