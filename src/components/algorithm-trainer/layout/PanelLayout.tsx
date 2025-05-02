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
import { ChevronDown, ChevronUp, LayoutGrid } from "lucide-react";
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

interface PanelLayoutProps {
  selectedPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
  userCode: string;
  setUserCode: (code: string) => void;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
}

const PRESET_LAYOUTS = {
  "Code Focus": ["editor", "pattern", "answer"],
  "Pattern Focus": ["pattern", "editor", "answer"],
  "Answer Focus": ["answer", "editor", "pattern"],
};

export function PanelLayout({
  selectedPattern,
  onPatternChange,
  userCode,
  setUserCode,
  showAnswer,
  setShowAnswer,
  onNextPattern,
}: PanelLayoutProps) {
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
    MIN_PANEL_WIDTH,
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
            <Button variant="ghost" size="sm" className="gap-2">
              <LayoutGrid className="h-4 w-4" />
              Layout
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.entries(PRESET_LAYOUTS).map(([name, layout]) => (
              <DropdownMenuItem key={name} onClick={() => setLayout(layout)}>
                {name}
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
            className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full"
            style={{
              gridTemplateColumns:
                "minmax(300px, 400px) minmax(400px, 1fr) minmax(300px, 400px)",
            }}
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
                    minWidth: `${
                      MIN_PANEL_WIDTH[panel as keyof typeof MIN_PANEL_WIDTH]
                    }px`,
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
