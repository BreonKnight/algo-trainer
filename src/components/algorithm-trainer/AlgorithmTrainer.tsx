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

// interface TestCase {
//   input: string;
//   output: string;
// }

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
        <div
          className="mx-auto w-full max-w-6xl mb-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl shadow-lg p-4 glassy-gradient-bg"
          style={{
            background: "var(--pseudocode-gradient)",
            position: "relative",
            overflow: "hidden",
          }}
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
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-0">
          <div
            className="h-full min-h-[220px] max-h-[500px] md:min-h-[350px] md:max-h-[500px] rounded-xl shadow-lg p-3 flex flex-col justify-between border border-secondary bg-secondary"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))",
            }}
          >
            <PatternCard
              currentPattern={currentPattern}
              onPatternChange={setCurrentPattern}
            />
          </div>
          <div
            className="h-full min-h-[220px] max-h-[500px] md:min-h-[350px] md:max-h-[500px] rounded-xl shadow-lg p-3 flex flex-col border border-secondary bg-secondary"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))",
            }}
          >
            <div className="font-mono text-base flex-1">
              <CodeEditor userCode={userCode} setUserCode={setUserCode} />
            </div>
          </div>
          <div
            className="h-full min-h-[220px] max-h-[500px] md:min-h-[350px] md:max-h-[500px] rounded-xl shadow-lg p-3 flex flex-col border border-secondary bg-secondary"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))",
            }}
          >
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
          <div
            className="h-full min-h-[220px] max-h-[500px] md:min-h-[350px] md:max-h-[500px] rounded-xl shadow-lg p-3 flex flex-col border border-secondary bg-secondary md:col-span-2 xl:col-span-1"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))",
            }}
          >
            <div className="font-mono text-base flex-1">
              <ReplCard userCode={userCode} />
            </div>
          </div>
        </div>
        {/* 
        <div className="h-[250px]">
          <TestCases testCases={testCases} onTestCasesChange={setTestCases} />
        </div> */}
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
