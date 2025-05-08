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
import { BookOpen, ChevronDown, GripVertical, HelpCircle } from "lucide-react";
import { useState } from "react";

import { CenterInformaticsWidget } from "@/components/algorithm-trainer/layout/CenterInformaticsWidget";
import { RightControls } from "@/components/algorithm-trainer/layout/RightControls";
import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { Timer } from "@/components/timer/Timer";
import { Button } from "@/components/ui/button";
import { MediaCard } from "@/components/ui/media-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ClickableNotation } from "./ClickableNotation";

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

  const [isExpanded, setIsExpanded] = useState(false);

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
        "z-10 pointer-events-auto",
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

      {/* Mathematical Notation Legend */}
      <TooltipProvider>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-background/30 backdrop-blur-sm border border-border/20 shadow-sm hover:bg-background/40 transition-colors w-fit">
            <div className="flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-muted-foreground/60" />
              <span className="text-xs font-medium text-muted-foreground/60">Notation</span>
            </div>
            <div className="h-3 w-px bg-border/20" />
            <div className="flex items-center gap-1.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <ClickableNotation
                      notationKey="elementOf"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="subset"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Set Theory</p>
                </TooltipContent>
              </Tooltip>
              <div className="h-3 w-px bg-border/20" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <ClickableNotation
                      notationKey="union"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="intersection"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Set Operations</p>
                </TooltipContent>
              </Tooltip>
              <div className="h-3 w-px bg-border/20" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1">
                    <ClickableNotation
                      notationKey="forAll"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="exists"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Quantifiers</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 px-2 ml-1 text-muted-foreground/60 hover:text-foreground"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ChevronDown
                className={cn("w-3 h-3 transition-transform", isExpanded && "rotate-180")}
              />
            </Button>
          </div>

          {/* Expanded Notation Categories */}
          {isExpanded && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-2">
                <BookOpen className="w-3.5 h-3.5 text-muted-foreground/60" />
                <span className="text-xs text-muted-foreground/60">
                  Learn more about these notations in{" "}
                  <a
                    href="/algo-guide"
                    className="text-accent hover:text-accent/80 underline underline-offset-2"
                  >
                    AlgoGuide
                  </a>
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-3 rounded-md bg-background/20 backdrop-blur-sm border border-border/20">
                {/* Logic */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Logic
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="forAll"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="exists"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="notElementOf"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Set Theory */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Set Theory
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="elementOf"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="subset"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="emptySet"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Set Operations */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Set Operations
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="union"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="intersection"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Number Theory */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Number Theory
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="forAll"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="exists"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="elementOf"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Relations */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Relations
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="subset"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="elementOf"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Functions */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Functions
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="forAll"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="exists"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Graph Theory */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Graph Theory
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="elementOf"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="subset"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>

                {/* Complexity */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-medium text-muted-foreground/60 px-1 pb-1 border-b border-accent/20">
                    Complexity
                  </h4>
                  <div className="flex flex-wrap gap-1.5 p-1.5 rounded bg-background/30">
                    <ClickableNotation
                      notationKey="forAll"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                    <ClickableNotation
                      notationKey="exists"
                      className="text-muted-foreground/60 hover:text-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </TooltipProvider>

      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl z-0" />
    </div>
  );
}
