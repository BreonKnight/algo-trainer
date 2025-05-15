import Editor, { Monaco } from "@monaco-editor/react";
import { Copy, Check, Type, Maximize2, Minimize2 } from "lucide-react";
import * as monacoAPI from "monaco-editor";
import { useState, useRef, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { create } from "zustand";

import { ReplCard } from "@/components/algorithm-trainer/ReplCard";
import { useTheme } from "@/components/theme/use-theme";
import { Background } from "@/components/ui/background";
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

// Zustand store for practice code
const usePracticeStore = create<{ code: string; setCode: (c: string) => void }>((set) => ({
  code: '# Write your Python code here\n\ndef main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()',
  setCode: (c) => set({ code: c }),
}));

const Practice = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const minFont = 12;
  const maxFont = 28;
  const code = usePracticeStore((s) => s.code);
  const setCode = usePracticeStore((s) => s.setCode);
  const editorRef = useRef<monacoAPI.editor.IStandaloneCodeEditor | null>(null);
  const monacoInstanceRef = useRef<Monaco | null>(null);
  const [isMonacoReady, setIsMonacoReady] = useState(false);

  const themeMap: Record<string, string> = useMemo(
    () => ({
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
    }),
    []
  );

  const monacoTheme = useMemo(() => themeMap[theme] || "dracula", [theme, themeMap]);

  // Define and register Monaco themes once the monaco instance is available
  useEffect(() => {
    if (isMonacoReady && monacoInstanceRef.current) {
      // @ts-ignore
      if (window.__monacoThemesRegisteredPractice) return;

      const themesToDefine = {
        dracula: draculaTheme,
        solarized: solarizedTheme,
        light: lightTheme,
        snes: snesTheme,
        nord: nordTheme,
        ps2: ps2Theme,
        re2: re2Theme,
        mh: mhTheme,
        "kingdom-hearts": kingdomHeartsTheme,
        fornite: forniteTheme,
      };
      Object.entries(themesToDefine).forEach(([name, themeData]) => {
        try {
          monacoInstanceRef.current!.editor.defineTheme(name, themeData);
        } catch (e) {
          if (e instanceof Error && e.name !== "Canceled") {
            console.error(`Practice: Failed to define theme ${name}:`, e);
          }
        }
      });
      // @ts-ignore
      window.__monacoThemesRegisteredPractice = true;
    }
  }, [isMonacoReady]);

  // Update editor theme when our application theme or monaco instance changes
  useEffect(() => {
    if (isMonacoReady && monacoInstanceRef.current) {
      try {
        monacoInstanceRef.current.editor.setTheme(monacoTheme);
      } catch (e) {
        if (e instanceof Error && e.name !== "Canceled") {
          console.error("Practice: Failed to set theme:", e);
        }
      }
    }
  }, [monacoTheme, isMonacoReady]);

  const handleEditorDidMount = (
    editor: monacoAPI.editor.IStandaloneCodeEditor,
    mountedMonaco: Monaco
  ) => {
    editorRef.current = editor;
    monacoInstanceRef.current = mountedMonaco;
    setIsMonacoReady(true);

    // console.log("Debug: mountedMonaco object:", mountedMonaco); // Kept for reference
    // console.log("Debug: window.monaco object:", (window as any).monaco); // Kept for reference

    // Attempt to set the global error handler via window.monaco
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const globalMonaco = (window as any).monaco;
      let handlerSet = false;

      if (globalMonaco) {
        if (
          globalMonaco.ErrorHandling &&
          typeof globalMonaco.ErrorHandling.setUnexpectedErrorHandler === "function"
        ) {
          globalMonaco.ErrorHandling.setUnexpectedErrorHandler((error: Error) => {
            if (error && error.name !== "Canceled") {
              console.error(
                "Monaco Global Unexpected Error (Practice - via window.monaco.ErrorHandling):",
                error
              );
            }
          });
          handlerSet = true;
          console.log("Unexpected error handler set via window.monaco.ErrorHandling");
        } else if (typeof globalMonaco.setUnexpectedErrorHandler === "function") {
          globalMonaco.setUnexpectedErrorHandler((error: Error) => {
            if (error && error.name !== "Canceled") {
              console.error(
                "Monaco Global Unexpected Error (Practice - via window.monaco root):",
                error
              );
            }
          });
          handlerSet = true;
          console.log("Unexpected error handler set via window.monaco root");
        }
      }

      if (!handlerSet) {
        console.error(
          "Could not set Monaco unexpected error handler via window.monaco: API not found or not a function."
        );
      }
    } catch (e) {
      console.error(
        "Error while trying to set Monaco unexpected error handler via window.monaco:",
        e
      );
    }

    editor.focus();
    setTimeout(() => {
      try {
        editor.layout();
      } catch (e) {
        if (e instanceof Error && e.name !== "Canceled") {
          console.error("Practice: Editor layout error:", e);
        }
      }
    }, 100);
  };

  const handleCopy = async () => {
    if (!editorRef.current) return;
    const codeToCopy = editorRef.current.getValue();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(codeToCopy);
        setCopied(true);
        toast.success("Code copied to clipboard!");
      } catch (err) {
        console.warn("Clipboard API writeText failed, falling back:", err);
        copyFallback(codeToCopy);
      }
    } else {
      copyFallback(codeToCopy);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const copyFallback = (codeToCopy: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = codeToCopy;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      toast.success("Code copied (fallback method)!");
    } catch (fallbackErr) {
      console.error("Fallback copy method failed:", fallbackErr);
      toast.error("Failed to copy code.");
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setTimeout(() => {
      if (editorRef.current) {
        try {
          editorRef.current.layout();
        } catch (e) {
          if (e instanceof Error && e.name !== "Canceled") {
            console.error("Practice: Editor layout error on toggleExpand:", e);
          }
        }
      }
    }, 0);
  };

  return (
    <Background>
      <div className="container mx-auto p-4 h-[calc(100vh-4rem)]">
        <div className="flex flex-col h-full gap-4">
          <div className="flex justify-between items-center">
            <h1
              className={cn(
                "text-2xl font-bold",
                theme === "nord"
                  ? "text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
              )}
            >
              Practice some Python 🐍
            </h1>
          </div>

          <div
            className={cn(
              "flex-1 grid grid-cols-1 gap-4",
              isExpanded ? "lg:grid-cols-1" : "lg:grid-cols-2"
            )}
          >
            <Card
              className={cn(
                "p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden",
                isExpanded && "lg:col-span-1"
              )}
            >
              <div className="flex-none flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          aria-label="Copy code"
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
                          {copied ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">{copied ? "Copied!" : "Copy code"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <div className="flex items-center gap-1.5 bg-accent2/20 rounded-md p-0.5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            aria-label="Decrease font size"
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
                          <p className="text-xs">Decrease font size</p>
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
                            aria-label="Increase font size"
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
                          <p className="text-xs">Increase font size</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        aria-label={isExpanded ? "Minimize editor" : "Maximize editor"}
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
                      <p className="text-xs">
                        {isExpanded ? "Minimize editor" : "Maximize editor"}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <div className="h-full w-full flex-1 min-h-[300px] overflow-hidden rounded-xl">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  theme={monacoTheme}
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  onMount={handleEditorDidMount}
                  options={{
                    fontSize,
                    fontFamily: "Menlo",
                    minimap: { enabled: true },
                    scrollBeyondLastLine: true,
                    lineNumbers: "on",
                    roundedSelection: true,
                    padding: { top: 8, bottom: 8 },
                    cursorStyle: "underline",
                    automaticLayout: true,
                    wordWrap: "off",
                    tabSize: 4,
                    insertSpaces: true,
                    overviewRulerBorder: false,
                    hideCursorInOverviewRuler: true,
                    renderLineHighlight: "line",
                    lineDecorationsWidth: 0,
                    fixedOverflowWidgets: true,
                    glyphMargin: false,
                    folding: false,
                    renderWhitespace: "none",
                    quickSuggestions: { other: false, comments: false, strings: false },
                    suggest: { showWords: false },
                  }}
                />
              </div>
            </Card>

            {!isExpanded && <ReplCard userCode={code} />}
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Practice;
