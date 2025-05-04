import { AudioPlayer } from "../../audio/AudioPlayer";
import { Timer } from "../../timer/Timer";
import { MediaCard } from "../../ui/media-card";
import { CenterInformaticsWidget } from "./CenterInformaticsWidget";
import { RightControls } from "./RightControls";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  className?: string;
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

function SortableItem({ id, children }: SortableItemProps) {
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
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      <button
        className="absolute -left-6 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-accent/10 transition-all duration-200 cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100"
        {...attributes}
        {...listeners}
      >
        <GripVertical className="w-3.5 h-3.5 text-accent/60 hover:text-accent transition-colors" />
      </button>
      {children}
    </div>
  );
}

export function TopBar({ className }: TopBarProps) {
  const [items, setItems] = useState([
    { id: "informatics", component: <CenterInformaticsWidget /> },
    { id: "timer", component: <Timer /> },
    { id: "audio", component: <AudioPlayer /> },
    { id: "controls", component: <RightControls /> },
  ]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div
      className={cn(
        "w-full mb-2 sm:mb-3 rounded-xl bg-background/95 p-3 sm:p-4 relative",
        "shadow-md border border-border/50 transition-all duration-300",
        isCollapsed ? "w-0 p-0 overflow-hidden" : "w-full",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50 z-10" />
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 p-1 h-auto"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronDown className="w-4 h-4 rotate-90" />
        ) : (
          <ChevronUp className="w-4 h-4 rotate-90" />
        )}
      </Button>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-row gap-4 w-full">
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <div className="w-full flex justify-center">
                  <MediaCard className="w-full max-w-md">
                    {item.component}
                  </MediaCard>
                </div>
              </SortableItem>
            ))}
          </SortableContext>
        </div>
      </DndContext>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl z-0" />
    </div>
  );
}
