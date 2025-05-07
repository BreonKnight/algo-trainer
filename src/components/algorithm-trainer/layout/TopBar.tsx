import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { Timer } from "@/components/timer/Timer";
import { MediaCard } from "@/components/ui/media-card";
import { CenterInformaticsWidget } from "@/components/algorithm-trainer/layout/CenterInformaticsWidget";
import { RightControls } from "@/components/algorithm-trainer/layout/RightControls";
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
import { GripVertical } from "lucide-react";

interface TopBarProps {
  className?: string;
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

function SortableItem({ id, children }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn("relative group", isDragging && "shadow-lg scale-105")}
    >
      <button
        className={cn(
          "absolute -left-6 top-1/2 -translate-y-1/2 p-1.5 rounded-full",
          "bg-card",
          "hover:bg-card/90",
          "hover:scale-110 transition-all duration-300 ease-out",
          "cursor-grab active:cursor-grabbing active:scale-95",
          "opacity-0 group-hover:opacity-100",
          "focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring/50",
          "backdrop-blur-sm",
          "border border-border/20",
          "shadow-sm hover:shadow-md",
          "shadow-[inset_0_2px_8px_0_rgba(0,0,0,0.10)]"
        )}
        {...attributes}
        {...listeners}
      >
        <GripVertical className="w-3.5 h-3.5 text-muted-foreground/80 hover:text-foreground transition-all duration-300 ease-out" />
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

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
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
        "shadow-md border border-border/50 backdrop-blur-sm",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50 z-10" />
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                <div className="w-full flex justify-center">
                  <MediaCard className="w-full min-h-[180px] hover:shadow-lg transition-shadow duration-200">
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
