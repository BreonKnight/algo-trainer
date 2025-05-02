import { Card } from "../ui/card";
import Editor, { Monaco } from "@monaco-editor/react";
import { useRef, useEffect, useState } from "react";
import * as monaco from "monaco-editor";
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
import { useTheme } from "@/components/theme/theme-context";
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
    const check = () =>
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
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
              className: "bg-red-200/60",
              glyphMarginClassName: "bg-red-500",
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

  // Editor mount
  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
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
    editor.focus();

    // Force layout update
    setTimeout(() => {
      editor.layout();
    }, 100);
  };

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden">
      <h2
        className={
          "text-base sm:text-lg font-semibold mb-2 truncate flex-none " +
          (theme === "nord"
            ? "text-white"
            : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]")
        }
      >
        Your Implementation
      </h2>
      {/* Font size controls and copy button */}
      <div className="flex-none flex items-center gap-2 mb-2">
        <button
          className={cn(
            "px-2 py-1 rounded bg-accent2/20 hover:bg-accent2/40 text-xs",
            theme === "nord" ? "text-white" : "text-background"
          )}
          onClick={() => setFontSize((f) => Math.max(minFont, f - 1))}
          title="Decrease font size (Ctrl+-)"
        >
          A-
        </button>
        <span className="text-xs text-secondary">{fontSize}px</span>
        <button
          className={cn(
            "px-2 py-1 rounded bg-accent2/20 hover:bg-accent2/40 text-xs",
            theme === "nord" ? "text-white" : "text-background"
          )}
          onClick={() => setFontSize((f) => Math.min(maxFont, f + 1))}
          title="Increase font size (Ctrl++)"
        >
          A+
        </button>
        <button
          className={cn(
            "ml-4 px-2 py-1 rounded bg-accent3/20 hover:bg-accent3/40 text-xs",
            theme === "nord" ? "text-white" : "text-background"
          )}
          onClick={() => navigator.clipboard.writeText(userCode)}
          title="Copy code (Ctrl+Shift+C)"
        >
          Copy
        </button>
      </div>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <div
          ref={scrollRef}
          className="flex-1 min-h-[300px] overflow-hidden rounded-xl"
          style={{
            height: isDesktop ? "100%" : "300px",
            minHeight: isDesktop ? "0" : "300px",
          }}
        >
          <Editor
            height={editorHeight}
            defaultLanguage="python"
            theme={theme}
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
          className="flex-none w-full h-3 cursor-row-resize flex items-center justify-center group"
          style={{ userSelect: "none" }}
          onMouseDown={(e) => {
            if (!isDesktop) return;
            const startY = e.clientY;
            const maxHeight = 500;
            const startHeight = scrollRef.current?.offsetHeight || 0;
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
    </Card>
  );
}
