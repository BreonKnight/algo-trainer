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
import { Monaco } from "@monaco-editor/react";

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
    const check = () =>
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

// Hook to detect scroll position for shadows

export function AnswerCard({
  currentPattern,
  showAnswer,
  setShowAnswer,
}: AnswerCardProps) {
  const [showTestData, setShowTestData] = useState(false);
  const [showMonsterHunter, setShowMonsterHunter] = useState(false);
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState<string | number>("300px");
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<any>(null);

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
  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
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
    monaco.editor.setTheme(theme);

    // Force layout update
    setTimeout(() => {
      editor.layout();
    }, 100);
  };

  return (
    <Card
      className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden"
      ref={cardRef}
    >
      <div className="flex-none flex justify-between items-center mb-4">
        <h2 className="text-main text-base sm:text-lg md:text-xl font-semibold truncate leading-relaxed">
          Solution
        </h2>
        <div className="flex items-center gap-2 mr-10 mt-0.5">
          <Button
            onClick={() => setShowAnswer(!showAnswer)}
            className="bg-accent3 hover:bg-accent3/90 text-main text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md flex items-center justify-center"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </Button>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {showAnswer && (
          <>
            <div className="flex-none flex justify-between items-center mb-2">
              <h3 className="text-main text-base sm:text-lg font-semibold truncate flex leading-relaxed">
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
                    <pre className="whitespace-pre-wrap text-main break-words text-xs sm:text-sm md:text-base leading-relaxed">
                      {(() => {
                        if (showMonsterHunter) {
                          // Monster Hunter themed example/test data
                          if (monsterHunterTestData[currentPattern]) {
                            return monsterHunterTestData[currentPattern];
                          }
                          return `# Monster Hunter Example/Test Data for ${currentPattern}\n# Coming soon!`;
                        } else {
                          // Regular example/test data
                          const val = algorithmPatterns[currentPattern];
                          if (
                            val &&
                            typeof val === "object" &&
                            "example" in val
                          ) {
                            const ex = (val as { example?: string }).example;
                            if (ex) return ex;
                          }
                          return `# Example/Test Data for ${currentPattern}\n# (No regular example/test data available yet.)`;
                        }
                      })()}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
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
                      value={(() => {
                        if (showMonsterHunter) {
                          // Monster Hunter themed Python implementation
                          const val = monsterHunterPatterns.get(currentPattern);
                          if (
                            val &&
                            typeof val === "object" &&
                            "implementation" in val
                          ) {
                            return (val as { implementation: string })
                              .implementation;
                          }
                          if (typeof val === "string") {
                            return val;
                          }
                          return `# Monster Hunter Python implementation for ${currentPattern}\n# Coming soon!`;
                        } else {
                          // Regular Python implementation
                          const val = algorithmPatterns[currentPattern];
                          if (typeof val === "string") {
                            return val;
                          }
                          if (
                            val &&
                            typeof val === "object" &&
                            "implementation" in val
                          ) {
                            return (val as { implementation: string })
                              .implementation;
                          }
                          return `# Python implementation for ${currentPattern}\n# Coming soon!`;
                        }
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
                  </div>
                  {/* Vertical resize handle */}
                  <div
                    className="flex-none w-full h-3 cursor-row-resize flex items-center justify-center group"
                    style={{ userSelect: "none" }}
                    onMouseDown={(e) => {
                      if (!isDesktop) return;
                      const startY = e.clientY;
                      const startHeight = scrollRef.current?.offsetHeight || 0;
                      const maxHeight = 500;
                      const onMove = (moveEvent: MouseEvent) => {
                        const delta = moveEvent.clientY - startY;
                        const newHeight = Math.max(
                          120,
                          Math.min(startHeight + delta, maxHeight)
                        );
                        setEditorHeight(newHeight);
                      };
                      const onUp = () => {
                        window.removeEventListener("mousemove", onMove);
                        window.removeEventListener("mouseup", onUp);
                      };
                      window.addEventListener("mousemove", onMove);
                      window.addEventListener("mouseup", onUp);
                    }}
                  >
                    <div className="w-12 h-1.5 rounded bg-accent2/40 group-hover:bg-accent2/70 transition" />
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
