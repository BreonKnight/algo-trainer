import { Copy, Check, Type, Maximize2, Minimize2 } from "lucide-react";
import * as monaco from "monaco-editor";
import { lazy, Suspense } from "react";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";

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

// Lazy load Monaco editor
const Editor = lazy(() => import("@monaco-editor/react"));

type Monaco = typeof monaco;

interface CodeEditorProps {
  userCode: string;
  setUserCode: (code: string) => void;
  errorLine?: number;
  onRunCode?: () => void;
  onShowAnswer?: () => void;
  onNextPattern?: () => void;
  onPrevPattern?: () => void;
}

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

export function CodeEditor({
  userCode,
  setUserCode,
  errorLine,
  onRunCode,
  onShowAnswer,
  onNextPattern,
  onPrevPattern,
}: CodeEditorProps) {
  const monacoRef = useRef<Monaco | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const { theme } = useTheme();
  const isDesktop = useIsDesktop();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [editorHeight, setEditorHeight] = useState<string | number>("300px");
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Persistent user code
  useEffect(() => {
    const saved = localStorage.getItem("algo-trainer-user-code");
    if (saved && saved !== userCode) setUserCode(saved);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem("algo-trainer-user-code", userCode);
  }, [userCode]);

  // Font size state
  const [fontSize, setFontSize] = useState(14);
  const minFont = 12,
    maxFont = 28;

  // Decorations for error highlighting
  const [decorations, setDecorations] = useState<string[]>([]);

  // Auto-focus editor
  useEffect(() => {
    if (editorRef.current) {
      requestAnimationFrame(() => {
        editorRef.current?.focus();
      });
    }
  }, [userCode]);

  // Handle keyboard shortcuts through Monaco's editor configuration
  useEffect(() => {
    if (!monacoRef.current || !editorRef.current) return;

    const editor = editorRef.current;
    const runAction = editor.addAction({
      id: "algo-trainer.runCode",
      label: "Run Code",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter],
      contextMenuGroupId: "navigation",
      contextMenuOrder: 1.5,
      run: function () {
        onRunCode?.();
      },
    });

    // Update editor options
    editor.updateOptions({
      extraEditorClassName: "algo-trainer-editor",
      automaticLayout: true,
      minimap: { enabled: false },
      quickSuggestions: false,
      parameterHints: { enabled: false },
      suggestOnTriggerCharacters: false,
      acceptSuggestionOnEnter: "off",
      tabCompletion: "off",
    });

    return () => {
      // Clean up by removing the action
      runAction.dispose();
    };
  }, [onRunCode]); // monacoRef and editorRef are mutable, so we don't include them in deps

  // Handle error line highlighting
  useEffect(() => {
    if (monacoRef.current && editorRef.current && errorLine) {
      try {
        const newDecorations = editorRef.current.deltaDecorations(decorations, [
          {
            range: new monacoRef.current.Range(errorLine, 1, errorLine, 1),
            options: {
              isWholeLine: true,
              className: "bg-red-500/20",
              glyphMarginClassName: "bg-red-500",
              overviewRuler: {
                color: "rgba(239, 68, 68, 0.5)",
                position: monaco.editor.OverviewRulerLane.Full,
              },
            },
          },
        ]);
        setDecorations(newDecorations);
      } catch (e) {
        if (e instanceof Error && e.name !== "Canceled") {
          console.error("Error applying decorations:", e);
        }
        // If it's a 'Canceled' error, we intentionally swallow it.
      }
    }
  }, [errorLine, decorations]); // Added 'decorations' to dependency array

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "Enter") {
        onRunCode && onRunCode();
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        onShowAnswer && onShowAnswer();
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "[") {
        onPrevPattern && onPrevPattern();
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key === "]") {
        onNextPattern && onNextPattern();
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
        navigator.clipboard.writeText(userCode);
        e.preventDefault();
      }
      if (e.ctrlKey && (e.key === "+" || e.key === "=")) {
        setFontSize((f) => Math.min(maxFont, f + 1));
        e.preventDefault();
      }
      if (e.ctrlKey && e.key === "-") {
        setFontSize((f) => Math.max(minFont, f - 1));
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [userCode, onRunCode, onShowAnswer, onNextPattern, onPrevPattern]);

  // Update editor height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      setEditorHeight(isDesktop ? "100%" : "300px");
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isDesktop]);

  const getMonacoTheme = useMemo(() => {
    const themeMap: Record<string, string> = {
      dracula: "dracula",
      solarized: "solarized",
      light: "light",
      snes: "snes",
      nord: "nord",
      ps2: "ps2",
      re2: "re2",
      mh: "mh",
      "kingdom-hearts": "kingdom-hearts",
      fortnite: "fortnite",
    };
    return () => themeMap[theme] || "dracula";
  }, [theme]);

  // Update theme when it changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(getMonacoTheme());
    }
  }, [getMonacoTheme]);

  // Handle editor value changes with debounce
  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      try {
        setUserCode(value || "");
      } catch (e) {
        if (e instanceof Error && e.name !== "Canceled") {
          console.error("Editor error:", e);
        }
      }
    },
    [setUserCode]
  );

  // Editor mount with cancellation handling
  const handleEditorDidMount = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
      try {
        monacoRef.current = monaco;
        editorRef.current = editor;

        // Define themes
        const themes = {
          dracula: draculaTheme,
          solarized: solarizedTheme,
          light: lightTheme,
          snes: snesTheme,
          nord: nordTheme,
          ps2: ps2Theme,
          re2: re2Theme,
          mh: mhTheme,
          "kingdom-hearts": kingdomHeartsTheme,
          fortnite: fortniteTheme,
        };

        Object.entries(themes).forEach(([name, theme]) => {
          try {
            monaco.editor.defineTheme(name, theme);
          } catch (e) {
            if (e instanceof Error && e.name !== "Canceled") {
              console.error(`Failed to define theme ${name}:`, e);
            }
          }
        });

        monaco.editor.setTheme(getMonacoTheme());
        editor.focus();

        // Force layout update with cancellation handling
        const layoutTimeout = setTimeout(() => {
          try {
            editor.layout();
          } catch (e) {
            if (e instanceof Error && e.name !== "Canceled") {
              console.error("Layout error:", e);
            }
          }
        }, 100);

        return () => clearTimeout(layoutTimeout);
      } catch (e) {
        if (e instanceof Error && e.name !== "Canceled") {
          console.error("Editor mount error:", e);
        }
      }
    },
    [getMonacoTheme]
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(userCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setEditorHeight("300px");
    } else {
      setEditorHeight("500px");
    }
  };

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

    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <Card
      className={cn(
        "p-4 w-full h-full flex flex-col overflow-hidden",
        theme === "snes"
          ? "bg-[#fffbe6] border-2 border-[#3498db] text-[#1a237e] rounded-xl shadow-[0_4px_24px_rgba(52,152,219,0.08)]"
          : "bg-secondary border-text-secondary"
      )}
    >
      <div className="flex-none flex justify-between items-center mb-3">
        <h2
          className={cn(
            "text-main text-lg sm:text-xl md:text-2xl font-semibold truncate leading-relaxed",
            theme === "nord"
              ? "text-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
          )}
        >
          Your Implementation
        </h2>
      </div>

      {/* Editor controls */}
      <div className="flex-none flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={cn(
                    "p-1 rounded-md transition-colors border",
                    theme === "light" || theme === "solarized"
                      ? "bg-white border-accent text-accent shadow"
                      : theme === "nord"
                        ? "text-white border-none"
                        : "text-background hover:bg-accent3/20 border-none"
                  )}
                  onClick={handleCopy}
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">{copied ? "Copied!" : "Copy code (Ctrl+Shift+C)"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex items-center gap-1.5 bg-accent2/20 rounded-md p-0.5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={cn(
                      "p-1 rounded transition-colors border",
                      theme === "light" || theme === "solarized"
                        ? "bg-white border-accent text-accent shadow"
                        : theme === "nord"
                          ? "text-white border-none"
                          : "text-background hover:bg-accent2/40 border-none"
                    )}
                    onClick={() => setFontSize((f) => Math.max(minFont, f - 1))}
                  >
                    <Type className="h-3.5 w-3.5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Decrease font size (Ctrl+-)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span
              className={cn(
                "text-xs min-w-[2rem] text-center",
                theme === "nord" ? "text-white" : "text-background"
              )}
            >
              {fontSize}px
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={cn(
                      "p-1 rounded transition-colors border",
                      theme === "light" || theme === "solarized"
                        ? "bg-white border-accent text-accent shadow"
                        : theme === "nord"
                          ? "text-white border-none"
                          : "text-background hover:bg-accent2/40 border-none"
                    )}
                    onClick={() => setFontSize((f) => Math.min(maxFont, f + 1))}
                  >
                    <Type className="h-3.5 w-3.5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Increase font size (Ctrl++)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  "p-1.5 rounded-md transition-colors border",
                  theme === "light" || theme === "solarized"
                    ? "bg-white border-accent text-accent shadow"
                    : theme === "nord"
                      ? "text-white border-none"
                      : "text-background hover:bg-accent2/20 border-none"
                )}
                onClick={toggleExpand}
              >
                {isExpanded ? (
                  <Minimize2 className="h-3.5 w-3.5" />
                ) : (
                  <Maximize2 className="h-3.5 w-3.5" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">{isExpanded ? "Minimize" : "Maximize"} editor</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="ml-2" onClick={() => onRunCode?.()}>
                Run (Ctrl+Enter)
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Run code (Ctrl+Enter)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <div
          ref={scrollRef}
          className="flex-1 min-h-[300px] overflow-hidden rounded-xl"
          style={{
            height: editorHeight,
            minHeight: isDesktop ? "0" : "300px",
          }}
        >
          <Suspense
            fallback={
              <div className="h-full w-full flex items-center justify-center">
                Loading editor...
              </div>
            }
          >
            <Editor
              height={editorHeight}
              defaultLanguage="python"
              theme={getMonacoTheme()}
              value={userCode}
              onChange={handleEditorChange}
              onMount={handleEditorDidMount}
              options={{
                fontSize,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                lineNumbers: "on",
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
                quickSuggestions: {
                  other: false,
                  comments: false,
                  strings: false,
                },
                suggest: {
                  showWords: false,
                },
              }}
            />
          </Suspense>
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
    </Card>
  );
}
