import Editor, { Monaco } from "@monaco-editor/react";
import { Code, TestTube, Sword, Book, Copy, Check } from "lucide-react";
import * as monaco from "monaco-editor";
import { useState, useRef, useEffect, useMemo } from "react";

import { monsterHunterPatterns } from "@/components/features/algorithm-trainer/data/monster-hunter/monsterHunterPatterns";
import { monsterHunterTestData } from "@/components/features/algorithm-trainer/data/monster-hunter/monsterHunterTestData";
import { patterns as algorithmPatterns } from "@/components/features/algorithm-trainer/patterns/index";
import { PatternKey, AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";
import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  draculaTheme,
  solarizedTheme,
  lightTheme,
  snesTheme,
  nordTheme,
  ps2Theme,
  re2Theme,
  mhTheme,
  kingdomHeartsTheme,
  fortniteTheme,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

interface AnswerCardProps {
  currentPattern: PatternKey;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
  onPatternChange: (pattern: PatternKey) => void;
}

// Type guard to check if value is AlgorithmPattern

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

// Hook to detect scroll position for shadows

export function AnswerCard({ currentPattern, showAnswer, setShowAnswer }: AnswerCardProps) {
  const [showTestData, setShowTestData] = useState(false);
  const [showMonsterHunter, setShowMonsterHunter] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState<string | number>("300px");
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  // Update editor height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      setEditorHeight(isDesktop ? "100%" : "300px");
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isDesktop]);

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

  // Editor mount
  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    monacoRef.current = monaco;
    editorRef.current = editor;
    monaco.editor.defineTheme("dracula", draculaTheme);
    monaco.editor.defineTheme("solarized", solarizedTheme);
    monaco.editor.defineTheme("light", lightTheme);
    monaco.editor.defineTheme("snes", snesTheme);
    monaco.editor.defineTheme("nord", nordTheme);
    monaco.editor.defineTheme("ps2", ps2Theme);
    monaco.editor.defineTheme("re2", re2Theme);
    monaco.editor.defineTheme("mh", mhTheme);
    monaco.editor.defineTheme("kingdom-hearts", kingdomHeartsTheme);
    monaco.editor.defineTheme("fortnite", fortniteTheme);
    monaco.editor.setTheme(theme);

    // Force layout update
    setTimeout(() => {
      editor.layout();
    }, 100);
  };

  const handleCopyCode = () => {
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Memoize the transformed code
  const transformedCode = useMemo(() => {
    try {
      if (showMonsterHunter) {
        const val = monsterHunterPatterns.get(currentPattern);
        if (val && typeof val === "object" && "implementation" in val) {
          return (val as { implementation: string }).implementation;
        }
        if (typeof val === "string") {
          return val;
        }
        return `# Monster Hunter Python implementation for ${currentPattern}\n# Coming soon!`;
      } else {
        const val = (algorithmPatterns as Record<PatternKey, AlgorithmPattern | undefined>)[
          currentPattern
        ];
        if (typeof val === "string") {
          return val;
        }
        if (val && typeof val === "object" && "implementation" in val) {
          return (val as { implementation: string }).implementation;
        }
        return `# Python implementation for ${currentPattern}\n# Coming soon!`;
      }
    } catch (error) {
      console.error("Error transforming code:", error);
      return `# Error transforming code. Please try again.`;
    }
  }, [currentPattern, showMonsterHunter]);

  // Add touch event handling for resize
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isDesktop) return;
    const touch = e.touches[0];
    const startY = touch.clientY;
    const startHeight = scrollRef.current?.offsetHeight || 0;
    const maxHeight = 500;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touch = moveEvent.touches[0];
      const delta = touch.clientY - startY;
      const newHeight = Math.max(120, Math.min(startHeight + delta, maxHeight));
      setEditorHeight(newHeight);
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <Card
      className={cn(
        theme === "snes"
          ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] rounded-xl shadow-[0_4px_24px_rgba(52,152,219,0.08)]"
          : "bg-secondary border border-secondary/20",
        "p-4 w-full h-full flex flex-col overflow-hidden"
      )}
      ref={cardRef}
    >
      <div className="flex-none flex justify-start items-center mb-4">
        <Button
          onClick={() => setShowAnswer(!showAnswer)}
          className={cn(
            "bg-accent3 hover:bg-accent3/90 text-main text-sm sm:text-base whitespace-nowrap h-9 px-4 rounded-md flex items-center justify-center transition-all",
            showAnswer && "ring-2 ring-accent3/50"
          )}
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
      </div>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {showAnswer && (
          <>
            <div className="flex-none flex justify-between items-center mb-3">
              <h3 className="text-main text-base sm:text-lg font-semibold truncate leading-relaxed flex items-center">
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
                        className={cn(
                          "h-8 px-2.5 text-accent hover:text-accent hover:bg-secondary/20 text-xs transition-all",
                          showMonsterHunter && "bg-secondary/20"
                        )}
                      >
                        {showMonsterHunter ? (
                          <>
                            <Book className="h-3.5 w-3.5 mr-1" />
                            <span className="hidden sm:inline">Regular</span>
                          </>
                        ) : (
                          <>
                            <Sword className="h-3.5 w-3.5 mr-1" />
                            <span className="hidden sm:inline">Hunter</span>
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
                        className={cn(
                          "h-8 px-2.5 text-accent hover:text-accent hover:bg-secondary/20 text-xs transition-all",
                          showTestData && "bg-secondary/20"
                        )}
                      >
                        {showTestData ? (
                          <>
                            <Code className="h-3.5 w-3.5 mr-1" />
                            <span className="hidden sm:inline">Code</span>
                          </>
                        ) : (
                          <>
                            <TestTube className="h-3.5 w-3.5 mr-1" />
                            <span className="hidden sm:inline">Guide</span>
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

            <div className="flex-1 min-h-0 flex flex-col">
              {showTestData ? (
                <div className="flex-1 min-h-0 overflow-hidden">
                  <div
                    ref={scrollRef}
                    className="h-full overflow-y-auto text-sm p-4 bg-main/90 rounded-md leading-relaxed"
                    style={{
                      minHeight: isDesktop ? "0" : "300px",
                    }}
                  >
                    {showMonsterHunter ? (
                      <Editor
                        height={editorHeight}
                        defaultLanguage="python"
                        theme={theme}
                        onMount={handleEditorDidMount}
                        value={(() => {
                          const testData = monsterHunterTestData.get(currentPattern);
                          if (testData) {
                            return testData;
                          }
                          return `# Monster Hunter Example/Test Data for ${currentPattern}\n# Coming soon!`;
                        })()}
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
                    ) : (
                      <pre className="whitespace-pre-wrap text-main break-words text-xs sm:text-sm md:text-base leading-relaxed">
                        {(() => {
                          const val = (
                            algorithmPatterns as Record<PatternKey, AlgorithmPattern | undefined>
                          )[currentPattern];
                          if (val && typeof val === "object" && "example" in val) {
                            const ex = (val as { example?: string }).example;
                            if (ex) return ex;
                          }
                          return `# Example/Test Data for ${currentPattern}\n# (No regular example/test data available yet.)`;
                        })()}
                      </pre>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
                  <div className="flex justify-end mb-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleCopyCode}
                            className="h-8 px-2.5 text-accent hover:text-accent hover:bg-secondary/20 text-xs transition-all"
                          >
                            {copied ? (
                              <>
                                <Check className="h-3.5 w-3.5 mr-1" />
                                <span>Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5 mr-1" />
                                <span>Copy</span>
                              </>
                            )}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy code to clipboard</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div
                    ref={scrollRef}
                    className="flex-1 min-h-[300px] overflow-hidden rounded-xl"
                    style={{
                      height: editorHeight,
                      minHeight: isDesktop ? "0" : "300px",
                    }}
                  >
                    <Editor
                      height={editorHeight}
                      defaultLanguage="python"
                      theme={theme}
                      onMount={handleEditorDidMount}
                      value={transformedCode}
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
                  {/* Vertical resize handle */}
                  <div
                    className="flex-none w-full h-4 cursor-row-resize flex items-center justify-center group"
                    style={{ userSelect: "none", touchAction: "none" }}
                    onMouseDown={(e) => {
                      if (!isDesktop) return;
                      const startY = e.clientY;
                      const startHeight = scrollRef.current?.offsetHeight || 0;
                      const maxHeight = 500;
                      const onMove = (moveEvent: MouseEvent) => {
                        const delta = moveEvent.clientY - startY;
                        const newHeight = Math.max(120, Math.min(startHeight + delta, maxHeight));
                        setEditorHeight(newHeight);
                      };
                      const onUp = () => {
                        window.removeEventListener("mousemove", onMove);
                        window.removeEventListener("mouseup", onUp);
                      };
                      window.addEventListener("mousemove", onMove);
                      window.addEventListener("mouseup", onUp);
                    }}
                    onTouchStart={handleTouchStart}
                  >
                    <div className="w-16 h-1.5 rounded-full bg-accent2/40 group-hover:bg-accent2/70 transition-all" />
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
