import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Editor from "@monaco-editor/react";
import { PatternKey } from "./types";
import { algorithmPatterns } from "./patterns/index";
import { monsterHunterPatterns } from "@/components/algorithm-trainer/monsterHunterPatterns";
import { useState, useRef, useEffect } from "react";
import { Code, TestTube, Sword, Book } from "lucide-react";
import { monsterHunterTestData } from "@/components/algorithm-trainer/monsterHunterTestData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/components/ThemeProvider";
import {
  draculaTheme,
  solarizedTheme,
  lightTheme,
  snesTheme,
  nordTheme,
  ps2Theme,
  re2Theme,
  mhTheme,
} from "@/lib/theme";

interface AnswerCardProps {
  currentPattern: PatternKey;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
  onPatternChange: (pattern: PatternKey) => void;
}

// Type guard to check if value is AlgorithmPattern
function hasImplementation(obj: any): obj is { implementation: string } {
  return obj && typeof obj === "object" && "implementation" in obj;
}

export function AnswerCard({
  currentPattern,
  showAnswer,
  setShowAnswer,
  onNextPattern,
  onPatternChange,
}: AnswerCardProps) {
  const [showTestData, setShowTestData] = useState(false);
  const [showMonsterHunter, setShowMonsterHunter] = useState(false);
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);

  const isLight = theme === "light" || theme === "solarized";

  // Prevent scrolling when showing answer
  useEffect(() => {
    if (showAnswer && cardRef.current) {
      // Store the current scroll position
      const scrollPosition = window.scrollY;

      // Set a timeout to restore the scroll position after the component updates
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    }
  }, [showAnswer]);

  const getCurrentImplementation = (): string => {
    if (showMonsterHunter) {
      const val = monsterHunterPatterns.get(currentPattern);
      if (hasImplementation(val)) {
        return val.implementation;
      }
      return (
        val ??
        `# Monster Hunter implementation coming soon for ${currentPattern}!
# Check back later for a hunting-themed version of this algorithm.`
      );
    }
    const val = algorithmPatterns[currentPattern];
    console.log("algorithmPatterns[currentPattern]:", val);
    if (typeof val === "string") {
      return val;
    }
    if (val && typeof val === "object" && "implementation" in val) {
      return (val as { implementation: string }).implementation;
    }
    return `# Implementation coming soon for ${currentPattern}!`;
  };

  const handleEditorDidMount = (_editor: unknown, monaco: any) => {
    monaco.editor.defineTheme("dracula", draculaTheme);
    monaco.editor.defineTheme("solarized", solarizedTheme);
    monaco.editor.defineTheme("light", lightTheme);
    monaco.editor.defineTheme("snes", snesTheme);
    monaco.editor.defineTheme("nord", nordTheme);
    monaco.editor.defineTheme("ps2", ps2Theme);
    monaco.editor.defineTheme("re2", re2Theme);
    monaco.editor.defineTheme("mh", mhTheme);

    monaco.editor.setTheme(theme);
  };

  return (
    <Card
      className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden"
      ref={cardRef}
    >
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h2
          className={
            "text-base sm:text-lg font-semibold truncate " +
            (theme === "nord"
              ? "text-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]")
          }
        >
          Solution
        </h2>
        <Button
          onClick={() => setShowAnswer(!showAnswer)}
          className="bg-accent3 hover:bg-accent3/90 text-main text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
      </div>
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        {showAnswer && (
          <>
            <div className="flex justify-between items-center mb-2 flex-shrink-0">
              <h3
                className={
                  "text-base sm:text-lg font-semibold truncate flex " +
                  (theme === "nord"
                    ? "text-white"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]")
                }
              >
                {showTestData ? "Monster Hunter Guide:" : "Implementation:"}
              </h3>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowMonsterHunter((prev) => !prev)}
                        className="h-6 px-1.5 text-accent hover:text-accent hover:bg-secondary/20 text-xs"
                      >
                        {showMonsterHunter ? (
                          <>
                            <Book className="h-3.5 w-3.5 mr-0.5" />
                            <span>Regular</span>
                          </>
                        ) : (
                          <>
                            <Sword className="h-3.5 w-3.5 mr-0.5" />
                            <span>Hunter</span>
                          </>
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {showMonsterHunter
                          ? "Switch to standard algorithm implementation"
                          : "Switch to Monster Hunter themed implementation with hunting analogies"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowTestData((prev) => !prev)}
                        className="h-6 px-1.5 text-accent hover:text-accent hover:bg-secondary/20 text-xs"
                      >
                        {showTestData ? (
                          <>
                            <Code className="h-3.5 w-3.5 mr-0.5" />
                            <span>Code</span>
                          </>
                        ) : (
                          <>
                            <TestTube className="h-3.5 w-3.5 mr-0.5" />
                            <span>Guide</span>
                          </>
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        {showTestData
                          ? "Show algorithm implementation code"
                          : "Show Monster Hunter themed examples and test cases"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex flex-col w-full rounded-md overflow-hidden">
              {showTestData ? (
                <div className="flex-1 min-h-0 overflow-y-auto text-sm p-4 bg-secondary/60 rounded-md">
                  <pre className="whitespace-pre-wrap text-main break-words">
                    {monsterHunterTestData[currentPattern] ??
                      `# Monster Hunter Guide for ${currentPattern}
# Coming soon! This algorithm will be themed with Monster Hunter examples.`}
                  </pre>
                </div>
              ) : (
                <div className="flex-1 overflow-hidden">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0">
                      <Editor
                        height="100%"
                        defaultLanguage="python"
                        theme={theme}
                        onMount={handleEditorDidMount}
                        value={getCurrentImplementation()}
                        options={{
                          fontSize: 14,
                          minimap: { enabled: false },
                          scrollBeyondLastLine: false,
                          lineNumbers: "on",
                          readOnly: true,
                          roundedSelection: false,
                          padding: { top: 8, bottom: 8 },
                          cursorStyle: "line",
                          automaticLayout: true,
                          wordWrap: "on",
                          tabSize: 4,
                          insertSpaces: true,
                          overviewRulerBorder: false,
                          hideCursorInOverviewRuler: true,
                          renderLineHighlight: "line",
                          lineDecorationsWidth: 0,
                          renderLineHighlightOnlyWhenFocus: true,
                          fixedOverflowWidgets: true,
                        }}
                      />
                    </div>
                    {(() => {
                      const val = algorithmPatterns[currentPattern];
                      if (
                        val &&
                        typeof val === "object" &&
                        "example" in val &&
                        (val as any).example
                      ) {
                        return (
                          <div className="mt-3">
                            <div className="font-semibold text-xs text-accent mb-1">
                              Example:
                            </div>
                            <pre className="bg-secondary/60 rounded p-2 text-xs whitespace-pre-wrap text-main">
                              {(val as any).example}
                            </pre>
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
