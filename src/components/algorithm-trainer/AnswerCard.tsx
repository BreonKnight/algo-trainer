import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Editor from "@monaco-editor/react";
import { PatternKey } from "./types";
import { patterns } from "@/components/algorithm-trainer/patterns";
import { monsterHunterPatterns } from "@/components/algorithm-trainer/monsterHunterPatterns";
import { useState } from "react";
import { Code, TestTube, Sword, Book } from "lucide-react";
import { monsterHunterTestData } from "@/components/algorithm-trainer/monsterHunterTestData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AnswerCardProps {
  currentPattern: PatternKey;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
  onPatternChange: (pattern: PatternKey) => void;
}

export function AnswerCard({
  currentPattern,
  showAnswer,
  setShowAnswer,
}: AnswerCardProps) {
  const [showTestData, setShowTestData] = useState(false);
  const [showMonsterHunter, setShowMonsterHunter] = useState(false);

  const getCurrentImplementation = (): string => {
    if (showMonsterHunter) {
      return (
        monsterHunterPatterns.get(currentPattern) ??
        `# Monster Hunter implementation coming soon for ${currentPattern}!
# Check back later for a hunting-themed version of this algorithm.`
      );
    }
    return (
      patterns.get(currentPattern) ??
      `# Implementation coming soon for ${currentPattern}!`
    );
  };

  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] truncate">
          Solution
        </h2>
        <Button
          onClick={() => setShowAnswer(!showAnswer)}
          className="bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#282a36] text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        {showAnswer && (
          <>
            <div className="flex justify-between items-center mb-2 flex-shrink-0">
              <h3 className="text-base sm:text-lg font-semibold text-[#ff79c6] truncate flex-none">
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
                        className="h-6 px-1.5 text-[#ff79c6] hover:text-[#ff79c6] hover:bg-[#6272a4]/20 text-xs"
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
                        className="h-6 px-1.5 text-[#ff79c6] hover:text-[#ff79c6] hover:bg-[#6272a4]/20 text-xs"
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

            <div className="flex-1 flex flex-col min-h-0 w-full rounded-md">
              {showTestData ? (
                <div className="w-full p-4 overflow-y-auto text-sm">
                  <pre className="whitespace-pre-wrap text-[#f8f8f2]">
                    {monsterHunterTestData[currentPattern] ??
                      `# Monster Hunter Guide for ${currentPattern}
# Coming soon! This algorithm will be themed with Monster Hunter examples.`}
                  </pre>
                </div>
              ) : (
                <div className="flex-1 overflow-hidden">
                  <div className="h-full w-full">
                    <Editor
                      height="100%"
                      defaultLanguage="python"
                      theme="dracula"
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
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
