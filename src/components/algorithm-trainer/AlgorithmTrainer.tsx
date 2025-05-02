import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { AudioPlayer, Timer } from "../audio/AudioPlayer";
import { PatternCard } from "./PatternCard";
import { CodeEditor } from "./CodeEditor";
// import { TestCases } from "./TestCases";
import { AnswerCard } from "./AnswerCard";
import { ReplCard } from "./ReplCard";
import { PatternKey, PATTERN_KEYS } from "./types";
import { HelpModal } from "../help/HelpModal";
import {
  FaRandom,
  FaChevronRight,
  FaChevronLeft,
  FaBars,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import { useTheme } from "../theme/theme-context";
import { GamificationButton } from "../gamification/GamificationButton";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
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
import GamificationService from "../../lib/gamification";

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
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>(() => {
    const savedPattern = localStorage.getItem("selectedPattern");
    return savedPattern && PATTERN_KEYS.includes(savedPattern as PatternKey)
      ? (savedPattern as PatternKey)
      : (PATTERN_KEYS[0] as PatternKey);
  });
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePatternChange = (pattern: PatternKey) => {
    if (PATTERN_KEYS.includes(pattern)) {
      setSelectedPattern(pattern);
      localStorage.setItem("selectedPattern", pattern);
    }
  };

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    const nextPattern = PATTERN_KEYS[randomIndex] as PatternKey;

    if (selectedPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(
          0,
          currentIndexRef.current + 1
        );
      }
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      handlePatternChange(nextPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern = patternHistoryRef.current[
        currentIndexRef.current
      ] as PatternKey;
      handlePatternChange(previousPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  // Track algorithm pattern changes
  useEffect(() => {
    if (selectedPattern) {
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordAlgorithmAttempt(selectedPattern, true);
    }
  }, [selectedPattern]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // dnd-kit sensors
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setPanelOrder((items) => {
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[100rem] px-6">
        <TooltipProvider>
          {/* Title and Pattern Count */}
          <div className="flex flex-col items-center justify-center mt-6 mb-2 relative w-full">
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
              Pattern {PATTERN_KEYS.indexOf(selectedPattern) + 1} of{" "}
              {PATTERN_KEYS.length}
            </span>

            {/* Navigation Hamburger */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    ref={buttonRef}
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className={cn(
                      "h-10 w-10 rounded-full transition-colors",
                      theme === "nord"
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-secondary/20 hover:bg-secondary/40 text-main"
                    )}
                  >
                    <FaBars className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Navigation Menu</TooltipContent>
              </Tooltip>

              {/* Navigation Dropdown */}
              {isNavOpen && (
                <div
                  ref={navRef}
                  className={cn(
                    "absolute left-0 mt-2 w-48 rounded-md shadow-lg border z-50 glassy-gradient-bg backdrop-blur-md",
                    theme === "nord" ? "border-white/30" : "border-secondary/40"
                  )}
                >
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
                      borderRadius: "0.375rem",
                    }}
                  />
                  <div className="py-1 relative z-10">
                    <Link
                      to="/progress"
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors font-medium",
                        theme === "nord"
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-main hover:bg-secondary/20"
                      )}
                      onClick={() => setIsNavOpen(false)}
                    >
                      Progress
                    </Link>
                    <Link
                      to="/tutorials"
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors font-medium",
                        theme === "nord"
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-main hover:bg-secondary/20"
                      )}
                      onClick={() => setIsNavOpen(false)}
                    >
                      Tutorials
                    </Link>
                    <Link
                      to="/python-techniques"
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors font-medium",
                        theme === "nord"
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-main hover:bg-secondary/20"
                      )}
                      onClick={() => setIsNavOpen(false)}
                    >
                      Python Techniques
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Unified Top Bar */}
          <div className="w-full mb-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl shadow-lg p-4 glassy-gradient-bg relative">
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
                    className={cn(
                      "h-9 px-4 text-base bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50 active:scale-95",
                      theme === "nord" ? "text-white" : "text-background"
                    )}
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
                    className={cn(
                      "h-9 px-4 text-base bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:from-[var(--accent2)] hover:to-[var(--accent3)] whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent/50 active:scale-95",
                      theme === "nord" ? "text-white" : "text-background"
                    )}
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
                    className={cn(
                      "h-9 px-4 text-base bg-gradient-to-r from-[var(--accent3)] to-[var(--accent2)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50 active:scale-95",
                      theme === "nord" ? "text-white" : "text-background"
                    )}
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
              <div
                className={cn(
                  "flex flex-col gap-y-10 p-4 rounded-xl shadow-md border w-full md:w-auto max-w-md",
                  theme === "nord"
                    ? "bg-white/10 border-white/20"
                    : "bg-secondary/20 border-secondary/40"
                )}
              >
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

          {/* Main content area */}
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
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 auto-rows-fr">
                  {panelOrder.map((panel) => (
                    <SortablePanel key={panel} id={panel}>
                      <div className="h-[549px]">
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
                                  onPatternChange={handlePatternChange}
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
                                        replCard.querySelector(
                                          "button[onClick]"
                                        );
                                      if (runButton) {
                                        (
                                          runButton as HTMLButtonElement
                                        ).click();
                                      }
                                    }
                                  }}
                                  onShowAnswer={() =>
                                    setShowAnswer(!showAnswer)
                                  }
                                  onNextPattern={nextPattern}
                                  onPrevPattern={previousPattern}
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
                                  onNextPattern={nextPattern}
                                  onPatternChange={handlePatternChange}
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
            <div className="mt-4">
              <ReplCard userCode={userCode} />
            </div>
            <div className="fixed bottom-4 right-4">
              <GamificationButton />
            </div>
          </div>
        </TooltipProvider>
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
      </div>
    </div>
  );
}
