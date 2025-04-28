import { Card } from "../ui/card";
import Editor, { Monaco } from "@monaco-editor/react";
import { useRef } from "react";
import {
  draculaTheme,
  solarizedTheme,
  lightTheme,
} from "@/components/algorithm-trainer/theme";
import { useTheme } from "@/components/ThemeProvider";

interface CodeEditorProps {
  userCode: string;
  setUserCode: (code: string) => void;
}

export function CodeEditor({ userCode, setUserCode }: CodeEditorProps) {
  const monacoRef = useRef<Monaco | null>(null);
  const { theme } = useTheme();

  const handleEditorDidMount = (_editor: unknown, monaco: Monaco) => {
    monacoRef.current = monaco;
    monaco.editor.defineTheme("dracula", draculaTheme);
    monaco.editor.defineTheme("solarized", solarizedTheme);
    monaco.editor.defineTheme("lightTheme", lightTheme);
    if (theme === "dracula") {
      monaco.editor.setTheme("dracula");
    } else if (theme === "solarized") {
      monaco.editor.setTheme("solarized");
    } else {
      monaco.editor.setTheme("lightTheme");
    }
  };

  // Update Monaco theme when app theme changes
  if (monacoRef.current) {
    if (theme === "dracula") {
      monacoRef.current.editor.setTheme("dracula");
    } else if (theme === "solarized") {
      monacoRef.current.editor.setTheme("solarized");
    } else {
      monacoRef.current.editor.setTheme("lightTheme");
    }
  }

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col">
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-accent2 truncate flex-none">
        Your Implementation
      </h2>
      <div className="flex-1 overflow-hidden">
        <div className="h-full w-full">
          <Editor
            height="100%"
            defaultLanguage="python"
            theme={
              theme === "dracula"
                ? "dracula"
                : theme === "solarized"
                ? "solarized"
                : "lightTheme"
            }
            value={userCode}
            onChange={(value: string | undefined) => setUserCode(value || "")}
            onMount={handleEditorDidMount}
            options={{
              fontSize: 14,
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
      </div>
    </Card>
  );
}
