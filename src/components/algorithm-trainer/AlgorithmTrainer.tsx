import { useState, useRef } from "react";
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

  return (
    <div className="container w-full mx-auto p-2 min-h-screen flex flex-col bg-main relative">
      <h1
        className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text text-center flex-none animate-gradient-x drop-shadow-lg tracking-tight select-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
        }}
      >
        Algorithm Trainer
      </h1>
      {/* Pattern Progress Indicator */}
      <div className="text-center mb-2 text-base font-semibold text-accent2 drop-shadow-sm">
        Pattern {PATTERN_KEYS.indexOf(currentPattern) + 1} of{" "}
        {PATTERN_KEYS.length}
      </div>
      <TooltipProvider>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 flex-none gap-4">
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={nextPattern}
                  className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:from-[var(--accent2)] hover:to-[var(--accent3)] text-main text-base whitespace-nowrap h-10 px-4 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent/50"
                >
                  <FaChevronRight className="inline-block" /> Next Pattern
                </Button>
              </TooltipTrigger>
              <TooltipContent>Go to a new random pattern</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={previousPattern}
                  className="bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] text-main text-base whitespace-nowrap h-10 px-4 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50"
                >
                  <FaChevronLeft className="inline-block" /> Previous Pattern
                </Button>
              </TooltipTrigger>
              <TooltipContent>Go back to the previous pattern</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={nextPattern}
                  className="bg-gradient-to-r from-[var(--accent3)] to-[var(--accent2)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] text-main text-base whitespace-nowrap h-10 px-4 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50"
                >
                  <FaRandom className="inline-block" /> Random Pattern
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Jump to a completely random pattern
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <HelpModal />
                </span>
              </TooltipTrigger>
              <TooltipContent>How to use this app</TooltipContent>
            </Tooltip>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3">
            <Timer />
            <AudioPlayer />
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={useTheme().toggleTheme}
                  className="bg-gradient-to-r from-accent3 to-accent2 hover:from-accent2 hover:to-accent text-main font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 focus:ring-2 focus:ring-accent2/50"
                  aria-label="Switch theme"
                >
                  Theme:{" "}
                  {useTheme().theme.charAt(0).toUpperCase() +
                    useTheme().theme.slice(1)}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                Switch between Dracula, Solarized, and Light themes
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </TooltipProvider>
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-0 flex-1">
          <div
            className="min-h-[300px] md:min-h-0 h-full rounded-xl shadow-lg p-4 flex flex-col justify-between border border-text-secondary/30"
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
            className="min-h-[300px] md:min-h-0 h-full rounded-xl shadow-lg p-4 flex flex-col border border-text-secondary/30"
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
            className="min-h-[300px] md:min-h-0 h-full rounded-xl shadow-lg p-4 flex flex-col border border-text-secondary/30"
            style={{
              background:
                "linear-gradient(135deg, var(--bg-secondary), var(--bg-main))",
            }}
          >
            <div className="font-mono text-base flex-1">
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
            className="min-h-[300px] md:min-h-0 h-full md:col-span-2 xl:col-span-1 rounded-xl shadow-lg p-4 flex flex-col border border-text-secondary/30"
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
    </div>
  );
}
