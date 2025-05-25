import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useState } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { cn } from '@algo-trainer/shared/utils/common';

import { notationData } from "./notation-data";
import { NotationModal } from "./NotationModal";

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

  // Color palettes for each theme (solid, high-contrast, no transparency)
  const famicomColors = [
    "bg-[#4040e0] text-white border-[#2d2d2d]", // Blue
    "bg-[#00a800] text-white border-[#2d2d2d]", // Green
    "bg-[#e40058] text-white border-[#2d2d2d]", // Red
    "bg-[#ffd700] text-black border-[#2d2d2d]", // Yellow
  ];
  const lightColors = [
    "bg-accent text-white border-accent",
    "bg-accent2 text-white border-accent2",
    "bg-accent3 text-white border-accent3",
    "bg-accent4 text-black border-accent4",
  ];
  const nordColors = [
    "bg-nord10 text-white border-nord7",
    "bg-nord7 text-nord3 border-nord10",
    "bg-nord9 text-white border-nord3",
    "bg-nord11 text-nord0 border-nord3",
  ];
  const darkColors = [
    "bg-accent text-white border-accent",
    "bg-accent2 text-white border-accent2",
    "bg-accent3 text-white border-accent3",
    "bg-accent4 text-black border-accent4",
  ];

  let colorClass = "";
  const idx = typeof snesColorIndex === "number" ? snesColorIndex : 0;
  if (theme === "snes") {
    colorClass = famicomColors[idx % famicomColors.length];
  } else if (theme === "light" || theme === "solarized") {
    colorClass = lightColors[idx % lightColors.length];
  } else if (theme === "nord") {
    colorClass = nordColors[idx % nordColors.length];
  } else {
    colorClass = darkColors[idx % darkColors.length];
  }

  return (
    <DialogPrimitive.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <div className="relative pointer-events-auto" style={{ zIndex: 100 }}>
        <DialogPrimitive.Trigger asChild>
          <button
            className={cn(
              "inline-flex items-center gap-1 px-2 py-1 rounded-full font-semibold shadow-sm border transition-colors focus:outline-none",
              colorClass,
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
