import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ChevronDown, ChevronUp, LayoutGridIcon } from "lucide-react";
import { PatternCard } from "../PatternCard";
import { CodeEditor } from "../CodeEditor";
import { AnswerCard } from "../AnswerCard";
import { SortablePanel } from "./SortablePanel";
import { usePanelManager } from "../hooks/usePanelManager";
import { PatternKey } from "../types";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { useTheme } from "../../theme/theme-context";
import { cn } from "@/lib/utils";

interface PanelLayoutProps {
  selectedPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
  userCode: string;
  setUserCode: (code: string) => void;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
  patternNumber?: number;
}

const PRESET_LAYOUTS = {
  "Pattern First": ["pattern", "editor", "answer"],
  "Editor First": ["editor", "pattern", "answer"],
  "Pattern Middle": ["editor", "pattern", "answer"],
  "Editor Middle": ["pattern", "editor", "answer"],
  "Answer First": ["answer", "pattern", "editor"],
  "Answer Middle": ["pattern", "answer", "editor"],
};

export function PanelLayout({
  selectedPattern,
  onPatternChange,
  userCode,
  setUserCode,
  showAnswer,
  setShowAnswer,
  onNextPattern,
  patternNumber,
}: PanelLayoutProps) {
  const { theme } = useTheme();
  const {
    panelOrder,
    patternOpen,
    editorOpen,
    answerOpen,
    setPatternOpen,
    setEditorOpen,
    setAnswerOpen,
    handleDragEnd,
    validatePanelSizes,
    setPanelOrder,
  } = usePanelManager();

  const sensors = useSensors(useSensor(PointerSensor));

  const setLayout = (layout: string[]) => {
    // Validate the layout
    const isValidLayout = Object.values(PRESET_LAYOUTS).some(
      (validLayout) => JSON.stringify(validLayout) === JSON.stringify(layout)
    );
    if (isValidLayout) {
      setPanelOrder(layout);
    }
  };

  return (
    <div className="w-full flex-1">
      <div className="flex justify-end mb-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2 transition-all duration-200",
                theme === "nord"
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-secondary hover:text-main hover:bg-secondary/20"
              )}
            >
              <LayoutGridIcon
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  theme === "nord" ? "text-white/90" : "text-secondary"
                )}
              />
              <span className="text-sm font-medium">Layout</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(
              "min-w-[200px]",
              theme === "nord" ? "bg-nord0 border-nord3" : "bg-background"
            )}
          >
            {Object.entries(PRESET_LAYOUTS).map(([name, layout]) => (
              <DropdownMenuItem
                key={name}
                onClick={() => setLayout(layout)}
                className={cn(
                  "cursor-pointer transition-colors",
                  "flex items-center justify-between",
                  theme === "nord"
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-secondary hover:text-main hover:bg-secondary/20",
                  JSON.stringify(layout) === JSON.stringify(panelOrder) &&
                    "bg-accent/10"
                )}
              >
                <span>{name}</span>
                <span className="text-xs opacity-70">
                  {layout.map((p) => p[0]).join(" → ")}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={panelOrder}
          strategy={verticalListSortingStrategy}
        >
          <div
            className="flex flex-col md:grid md:grid-cols-3 gap-4 w-full"
            ref={(el) => {
              if (el) {
                validatePanelSizes(el.clientWidth);
              }
            }}
          >
            {panelOrder.map((panel) => (
              <SortablePanel key={panel} id={panel}>
                <div
                  className="h-[549px] w-full"
                  style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    width: "100%",
                  }}
                >
                  {panel === "pattern" && (
                    <div className="relative h-full">
                      <button
                        onClick={() => setPatternOpen(!patternOpen)}
                        className="absolute top-[18px] right-2 z-10 p-1.5 rounded-md hover:bg-secondary/20 transition-colors"
                      >
                        {patternOpen ? (
                          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary hover:text-main" />
                        ) : (
                          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary hover:text-main" />
                        )}
                      </button>
                      {patternOpen && (
                        <div className="h-full">
                          <PatternCard
                            currentPattern={selectedPattern}
                            onPatternChange={onPatternChange}
                            patternNumber={patternNumber}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {panel === "editor" && (
                    <div className="relative h-full">
                      <button
                        onClick={() => setEditorOpen(!editorOpen)}
                        className="absolute top-[18px] right-2 z-10 p-1.5 rounded-md hover:bg-secondary/20 transition-colors"
                      >
                        {editorOpen ? (
                          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary hover:text-main" />
                        ) : (
                          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary hover:text-main" />
                        )}
                      </button>
                      {editorOpen && (
                        <div className="h-full">
                          <CodeEditor
                            userCode={userCode}
                            setUserCode={setUserCode}
                            onRunCode={() => {
                              // Run code in REPL
                              const replCard =
                                document.querySelector(".repl-card");
                              if (replCard) {
                                const runButton =
                                  replCard.querySelector("button[onClick]");
                                if (runButton) {
                                  (runButton as HTMLButtonElement).click();
                                }
                              }
                            }}
                            onShowAnswer={() => setShowAnswer(!showAnswer)}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {panel === "answer" && (
                    <div className="relative h-full">
                      <button
                        onClick={() => setAnswerOpen(!answerOpen)}
                        className="absolute top-[18px] right-2 z-10 p-1.5 rounded-md hover:bg-secondary/20 transition-colors"
                      >
                        {answerOpen ? (
                          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary hover:text-main" />
                        ) : (
                          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary hover:text-main" />
                        )}
                      </button>
                      {answerOpen && (
                        <div className="h-full">
                          <AnswerCard
                            currentPattern={selectedPattern}
                            showAnswer={showAnswer}
                            setShowAnswer={setShowAnswer}
                            onNextPattern={onNextPattern}
                            onPatternChange={onPatternChange}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </SortablePanel>
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
