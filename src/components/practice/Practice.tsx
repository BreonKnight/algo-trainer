import Editor, { Monaco } from "@monaco-editor/react";
import { Copy, Check, Type, Maximize2, Minimize2 } from "lucide-react";
import * as monaco from "monaco-editor";
import { useState, useRef, useEffect, useMemo } from "react";

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

const Practice = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontSize, setFontSize] = useState(14);
  const minFont = 12;
  const maxFont = 28;
  const [code, setCode] = useState<string>(
    '# Write your Python code here\n\ndef main():\n    print("Hello, World!")\n\nif __name__ == "__main__":\n    main()'
  );
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<Monaco | null>(null);

  // Register Monaco themes before the editor mounts
  useEffect(() => {
    // @ts-ignore
    if (window.__monacoThemesRegistered) return;
    // @ts-ignore
    window.__monacoThemesRegistered = true;

    const defineThemes = (monaco: Monaco) => {
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
    };

    if (monacoRef.current) {
      defineThemes(monacoRef.current);
    }
  }, []);

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

  // Load code from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("practice-code");
    if (saved) setCode(saved);
    // eslint-disable-next-line
  }, []);

  // Save code to localStorage on change
  useEffect(() => {
    localStorage.setItem("practice-code", code);
  }, [code]);

  const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Define themes
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

    // Set initial theme
    monaco.editor.setTheme(getMonacoTheme());

    editor.focus();
    setTimeout(() => {
      editor.layout();
    }, 100);
  };

  const handleCopy = () => {
    if (!editorRef.current) return;
    navigator.clipboard.writeText(editorRef.current.getValue());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden">
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

              <div className="h-full w-full flex-1 min-h-[300px] overflow-hidden rounded-xl">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  theme={getMonacoTheme()}
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
                  }}
                />
              </div>
            </Card>

            <ReplCard userCode={code} setUserCode={setCode} />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Practice;
