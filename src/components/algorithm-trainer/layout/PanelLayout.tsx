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
import { ChevronDown, ChevronUp } from "lucide-react";
import { PatternCard } from "../PatternCard";
import { CodeEditor } from "../CodeEditor";
import { AnswerCard } from "../AnswerCard";
import { SortablePanel } from "./SortablePanel";
import { usePanelManager } from "../hooks/usePanelManager";
import { PatternKey } from "../types";

interface PanelLayoutProps {
  selectedPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
  userCode: string;
  setUserCode: (code: string) => void;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
}

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
  } = usePanelManager();

  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <div className="w-full flex-1">
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
            className="grid grid-cols-1 xl:grid-cols-3 gap-2 auto-rows-fr"
            ref={(el) => {
              if (el) {
                validatePanelSizes(el.clientWidth);
              }
            }}
          >
            {panelOrder.map((panel) => (
              <SortablePanel key={panel} id={panel}>
                <div
                  className="h-[549px]"
                  style={{
                    minWidth: `${
                      MIN_PANEL_WIDTH[panel as keyof typeof MIN_PANEL_WIDTH]
                    }px`,
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
