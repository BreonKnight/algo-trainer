import Editor, { Monaco } from "@monaco-editor/react";
import { Copy, Check, Type, Maximize2, Minimize2 } from "lucide-react";
import * as monaco from "monaco-editor";
import { useRef, useEffect, useState, useMemo } from "react";

import { useTheme } from "@/components/theme/use-theme";
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
  forniteTheme,
} from "@/lib/theme";
import { cn } from "@/lib/utils";

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

  // Handle error line highlighting
  useEffect(() => {
    if (monacoRef.current && editorRef.current && errorLine) {
      setDecorations(
        editorRef.current.deltaDecorations(decorations, [
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
        ])
      );
    }
    // eslint-disable-next-line
  }, [errorLine]);

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
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "n") {
        onNextPattern && onNextPattern();
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") {
        onPrevPattern && onPrevPattern();
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
    // eslint-disable-next-line
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
      fornite: "fornite",
    };
    return () => themeMap[theme] || "dracula";
  }, [theme]);

  // Update theme when it changes
  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(getMonacoTheme());
    }
  }, [getMonacoTheme]);

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
    monaco.editor.defineTheme("fornite", forniteTheme);
    monaco.editor.setTheme(getMonacoTheme());
    editor.focus();

    // Force layout update
    setTimeout(() => {
      editor.layout();
    }, 100);
  };

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

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden">
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
          <Editor
            height={editorHeight}
            defaultLanguage="python"
            theme={getMonacoTheme()}
            value={userCode}
            onChange={(value: string | undefined) => setUserCode(value || "")}
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
            }}
          />
        </div>
        {/* Vertical resize handle */}
        <div
          className="flex-none w-full h-4 cursor-row-resize flex items-center justify-center group"
          style={{ userSelect: "none" }}
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
        >
          <div className="w-16 h-1.5 rounded-full bg-accent2/40 group-hover:bg-accent2/70 transition-all" />
        </div>
      </div>
    </Card>
  );
}
