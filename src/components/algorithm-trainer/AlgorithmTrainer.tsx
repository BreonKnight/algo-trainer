import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { AudioPlayer, Timer } from "../AudioPlayer";
import { PatternCard } from "./PatternCard";
import { CodeEditor } from "./CodeEditor";
// import { TestCases } from "./TestCases";
import { AnswerCard } from "./AnswerCard";
import { ReplCard } from "./ReplCard";
import { PatternKey, PATTERN_KEYS } from "./types";
import { HelpModal } from "../HelpModal";
import { FaRandom, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import { useTheme } from "../ThemeProvider";
import { GamificationButton } from "../GamificationButton";
import GamificationService from "../../lib/gamification";
import { ChevronDown, ChevronUp } from "lucide-react";
// dnd-kit imports
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { ReactNode } from "react";
import type { UniqueIdentifier, DragEndEvent } from "@dnd-kit/core";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

// interface TestCase {
//   input: string;
//   output: string;
// }

function SortablePanel({
  id,
  children,
}: {
  id: UniqueIdentifier;
  children: ReactNode;
}) {
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
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="mb-2 last:mb-0"
    >
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

export default function AlgorithmTrainer() {
  const [currentPattern, setCurrentPattern] = useState<PatternKey>(
    PATTERN_KEYS[0]
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");
  // const [testCases, setTestCases] = useState<TestCase[]>([]);
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);
  const theme = useTheme().theme;
  const [panelOrder, setPanelOrder] = useState(["pattern", "editor", "answer"]);
  const [patternOpen, setPatternOpen] = useState(true);
  const [editorOpen, setEditorOpen] = useState(true);
  const [answerOpen, setAnswerOpen] = useState(true);

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    const nextPattern = PATTERN_KEYS[randomIndex];

    if (currentPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(
          0,
          currentIndexRef.current + 1
        );
      }

      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      setCurrentPattern(nextPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern =
        patternHistoryRef.current[currentIndexRef.current];
      setCurrentPattern(previousPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  // Track algorithm pattern changes
  useEffect(() => {
    if (currentPattern) {
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordAlgorithmAttempt(currentPattern, true);
    }
  }, [currentPattern]);

  // dnd-kit sensors
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setPanelOrder((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over!.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="container w-full mx-auto p-2 min-h-screen flex flex-col bg-main relative">
      <TooltipProvider>
        {/* Title and Pattern Count */}
        <div className="flex flex-col items-center justify-center mt-6 mb-2">
          <h1
            className="text-2xl font-extrabold text-transparent bg-clip-text text-center animate-gradient-x drop-shadow-lg tracking-tight select-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
            }}
          >
            Algorithm Trainer
          </h1>
          <span className="text-xs font-semibold text-accent2 mt-1">
            Pattern {PATTERN_KEYS.indexOf(currentPattern) + 1} of{" "}
            {PATTERN_KEYS.length}
          </span>
        </div>
        {/* Unified Top Bar */}
        <div className="mx-auto w-full max-w-[90rem] mb-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl shadow-lg p-4 glassy-gradient-bg relative">
          {/* Glass overlay for extra effect */}
          <div
            style={{
              content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "var(--pseudocode-gradient-overlay)",
              zIndex: 0,
              pointerEvents: "none",
              opacity: 0.7,
            }}
          />
          {/* Left: Navigation Group */}
          <div className="flex flex-col gap-2 z-10 bg-gradient-to-br from-[var(--accent2)/20] to-[var(--accent3)/20] rounded-xl p-2 shadow-md border border-secondary/40">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={previousPattern}
                  className="h-9 px-4 text-base bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] text-main whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50 active:scale-95"
                >
                  <FaChevronLeft className="inline-block" /> Previous
                </Button>
              </TooltipTrigger>
              <TooltipContent>Go back to the previous pattern</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={nextPattern}
                  className="h-9 px-4 text-base bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:from-[var(--accent2)] hover:to-[var(--accent3)] text-main whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent/50 active:scale-95"
                >
                  <FaChevronRight className="inline-block" /> Next
                </Button>
              </TooltipTrigger>
              <TooltipContent>Go to a new random pattern</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={nextPattern}
                  className="h-9 px-4 text-base bg-gradient-to-r from-[var(--accent3)] to-[var(--accent2)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] text-main whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50 active:scale-95"
                >
                  <FaRandom className="inline-block" /> Random
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Jump to a completely random pattern
              </TooltipContent>
            </Tooltip>
          </div>
          {/* Middle: Timer & AudioPlayer */}
          <div className="flex flex-col md:flex-row items-center gap-6 z-10 flex-1 justify-center min-w-0">
            <div className="w-full md:w-auto">
              <Timer />
            </div>
            <div className="w-full md:w-auto min-w-0">
              <AudioPlayer />
            </div>
          </div>
          {/* Right: How to Use (top), Theme (bottom) */}
          <div className="flex flex-col items-end z-10 w-full md:w-auto max-w-md overflow-x-auto">
            <div className="flex flex-col gap-y-10 p-4 bg-secondary/70 rounded-xl shadow-md border border-secondary/40 w-full md:w-auto max-w-md">
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpModal />
                </TooltipTrigger>
                <TooltipContent>How to use this app</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={useTheme().toggleTheme}
                    className={`h-9 px-4 rounded-lg shadow-lg font-semibold bg-secondary border border-accent ${
                      theme === "solarized" ? "text-accent" : "text-main"
                    } transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-accent2/50 flex items-center justify-center`}
                    aria-label="Switch theme"
                  >
                    <span className="truncate max-w-[60px] md:max-w-[120px] w-full text-center">
                      <span className="block md:hidden">Theme</span>
                      <span className="hidden md:block">
                        {" "}
                        {useTheme().theme.charAt(0).toUpperCase() +
                          useTheme().theme.slice(1)}
                      </span>
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  Theme:{" "}
                  {useTheme().theme.charAt(0).toUpperCase() +
                    useTheme().theme.slice(1)}
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </TooltipProvider>
      <div className="flex-1 flex flex-col min-h-0 max-w-[90rem] mx-auto w-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-1 min-h-0 flex-col">
          <PanelGroup direction="vertical" className="flex flex-1">
            <Panel minSize={50} defaultSize={70} className="flex flex-col">
              <PanelGroup direction="horizontal" className="flex-1 min-h-0">
                <Panel minSize={25} defaultSize={30} className="min-w-0">
                  <div className="h-full rounded-xl shadow-xl p-3 flex flex-col justify-between border border-accent2/30 bg-secondary overflow-hidden">
                    <PatternCard
                      currentPattern={currentPattern}
                      onPatternChange={setCurrentPattern}
                    />
                  </div>
                </Panel>
                <PanelResizeHandle className="flex items-center justify-center px-0 w-8 cursor-col-resize select-none group">
                  <div className="w-2 h-4/5 bg-accent2/40 rounded-full flex flex-col items-center justify-center transition-opacity duration-150 group-hover:bg-accent2/70">
                    {/* Grip SVG */}
                    <svg
                      width="8"
                      height="32"
                      viewBox="0 0 8 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <circle
                        cx="4"
                        cy="6"
                        r="1.5"
                        fill="currentColor"
                        className="text-accent"
                      />
                      <circle
                        cx="4"
                        cy="16"
                        r="1.5"
                        fill="currentColor"
                        className="text-accent"
                      />
                      <circle
                        cx="4"
                        cy="26"
                        r="1.5"
                        fill="currentColor"
                        className="text-accent"
                      />
                    </svg>
                  </div>
                </PanelResizeHandle>
                <Panel minSize={30} defaultSize={40} className="min-w-0">
                  <div className="h-full rounded-xl shadow-xl p-3 flex flex-col border border-accent2/30 bg-secondary overflow-hidden">
                    <div className="font-mono text-base flex-1">
                      <CodeEditor
                        userCode={userCode}
                        setUserCode={setUserCode}
                      />
                    </div>
                  </div>
                </Panel>
                <PanelResizeHandle className="flex items-center justify-center px-0 w-8 cursor-col-resize select-none group">
                  <div className="w-2 h-4/5 bg-accent2/40 rounded-full flex flex-col items-center justify-center transition-opacity duration-150 group-hover:bg-accent2/70">
                    {/* Grip SVG */}
                    <svg
                      width="8"
                      height="32"
                      viewBox="0 0 8 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <circle
                        cx="4"
                        cy="6"
                        r="1.5"
                        fill="currentColor"
                        className="text-accent"
                      />
                      <circle
                        cx="4"
                        cy="16"
                        r="1.5"
                        fill="currentColor"
                        className="text-accent"
                      />
                      <circle
                        cx="4"
                        cy="26"
                        r="1.5"
                        fill="currentColor"
                        className="text-accent"
                      />
                    </svg>
                  </div>
                </PanelResizeHandle>
                <Panel minSize={25} defaultSize={30} className="min-w-0">
                  <div className="h-full rounded-xl shadow-xl p-3 flex flex-col border border-accent2/30 bg-secondary overflow-hidden">
                    <div className="h-full flex flex-col min-h-0">
                      <AnswerCard
                        currentPattern={currentPattern}
                        showAnswer={showAnswer}
                        setShowAnswer={setShowAnswer}
                        onNextPattern={nextPattern}
                        onPatternChange={setCurrentPattern}
                      />
                    </div>
                  </div>
                </Panel>
              </PanelGroup>
            </Panel>
            <PanelResizeHandle className="flex items-center justify-center h-8 cursor-row-resize select-none group">
              <div className="h-2 w-4/5 bg-accent2/40 rounded-full flex items-center justify-center transition-opacity duration-150 group-hover:bg-accent2/70">
                {/* Horizontal Grip SVG */}
                <svg
                  width="32"
                  height="8"
                  viewBox="0 0 32 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="6"
                    cy="4"
                    r="1.5"
                    fill="currentColor"
                    className="text-accent"
                  />
                  <circle
                    cx="16"
                    cy="4"
                    r="1.5"
                    fill="currentColor"
                    className="text-accent"
                  />
                  <circle
                    cx="26"
                    cy="4"
                    r="1.5"
                    fill="currentColor"
                    className="text-accent"
                  />
                </svg>
              </div>
            </PanelResizeHandle>
            <Panel minSize={20} defaultSize={30} className="flex flex-col">
              <div
                className="flex-1 rounded-xl shadow-xl p-3 flex flex-col border border-accent2/30 bg-secondary overflow-hidden mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))",
                }}
              >
                <div className="font-mono text-base flex-1 min-h-0 rounded-xl">
                  <ReplCard userCode={userCode} />
                </div>
              </div>
            </Panel>
          </PanelGroup>
        </div>
        {/* Mobile layout remains unchanged */}
        <div className="block md:hidden flex-1 min-h-0">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={panelOrder}
              strategy={verticalListSortingStrategy}
            >
              {panelOrder.map((panel) => (
                <SortablePanel key={panel} id={panel}>
                  {panel === "pattern" && (
                    <div className="h-full min-h-[220px] max-h-none md:min-h-[500px] md:max-h-[900px] rounded-xl shadow-xl p-3 flex flex-col justify-between border border-accent2/30 bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-main text-base">
                          Pattern
                        </span>
                        <button
                          onClick={() => setPatternOpen((v) => !v)}
                          className="p-1 text-main"
                        >
                          {patternOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {patternOpen && (
                        <PatternCard
                          currentPattern={currentPattern}
                          onPatternChange={setCurrentPattern}
                        />
                      )}
                    </div>
                  )}
                  {panel === "editor" && (
                    <div className="h-full min-h-[220px] max-h-none md:min-h-[500px] md:max-h-[900px] rounded-xl shadow-xl p-3 flex flex-col border border-accent2/30 bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-main text-base">
                          Editor
                        </span>
                        <button
                          onClick={() => setEditorOpen((v) => !v)}
                          className="p-1 text-main"
                        >
                          {editorOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {editorOpen && (
                        <div className="font-mono text-base flex-1">
                          <CodeEditor
                            userCode={userCode}
                            setUserCode={setUserCode}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {panel === "answer" && (
                    <div className="h-full min-h-[220px] max-h-none md:min-h-[500px] md:max-h-[900px] rounded-xl shadow-xl p-3 flex flex-col border border-accent2/30 bg-secondary">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-main text-base">
                          Answer
                        </span>
                        <button
                          onClick={() => setAnswerOpen((v) => !v)}
                          className="p-1 text-main"
                        >
                          {answerOpen ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      {answerOpen && (
                        <div className="h-full flex flex-col min-h-0">
                          <AnswerCard
                            currentPattern={currentPattern}
                            showAnswer={showAnswer}
                            setShowAnswer={setShowAnswer}
                            onNextPattern={nextPattern}
                            onPatternChange={setCurrentPattern}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </SortablePanel>
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-secondary flex-none">
        Created by{" "}
        <a
          href="https://breon.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent3 hover:text-accent transition-colors"
        >
          Breon
        </a>
      </div>

      {/* Add the GamificationButton */}
      <GamificationButton />
    </div>
  );
}
