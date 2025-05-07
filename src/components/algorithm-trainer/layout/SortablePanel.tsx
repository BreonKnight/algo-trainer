import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import type { ReactNode } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { cn } from "@/lib/utils";

interface SortablePanelProps {
  id: UniqueIdentifier;
  children: ReactNode;
}

export function SortablePanel({ id, children }: SortablePanelProps) {
  const { theme } = useTheme();
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.7 : 1,
    zIndex: isDragging ? 50 : "auto",
    touchAction: "none",
    position: "relative" as const,
    width: "100%",
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={cn(
        "group relative",
        "hover:ring-2 hover:ring-accent/50",
        "transition-all duration-200",
        "isolate",
        "w-full"
      )}
    >
      {/* Drag handle for both mobile and desktop */}
      <div
        {...listeners}
        className={cn(
          "absolute -left-2 top-1/2 -translate-y-1/2",
          "p-1.5 rounded-full cursor-grab active:cursor-grabbing",
          "opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity",
          "hover:bg-secondary/20",
          "z-10",
          "touch-manipulation",
          theme === "nord" ? "text-white/70" : "text-secondary"
        )}
      >
        <GripVertical className="h-4 w-4" />
      </div>
      {children}
    </div>
  );
}
