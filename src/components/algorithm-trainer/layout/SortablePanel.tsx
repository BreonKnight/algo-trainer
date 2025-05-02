import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ReactNode } from "react";
import type { UniqueIdentifier } from "@dnd-kit/core";

interface SortablePanelProps {
  id: UniqueIdentifier;
  children: ReactNode;
}

export function SortablePanel({ id, children }: SortablePanelProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.7 : 1,
    zIndex: isDragging ? 50 : 1,
    touchAction: "none",
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} className="">
      {/* Drag handle only on mobile */}
      <div className="md:hidden flex items-center cursor-grab select-none mb-1">
        <span {...listeners} className="mr-2 text-main text-xl">
          ☰
        </span>
        <span className="text-xs text-secondary">Drag to reorder</span>
      </div>
      {children}
    </div>
  );
}
