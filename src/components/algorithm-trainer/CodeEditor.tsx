import { Card } from "../ui/card";
import Editor, { Monaco } from "@monaco-editor/react";
import { useRef } from "react";
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
import { useTheme } from "@/components/ThemeProvider";

interface CodeEditorProps {
  userCode: string;
  setUserCode: (code: string) => void;
}

export function CodeEditor({ userCode, setUserCode }: CodeEditorProps) {
  const monacoRef = useRef<Monaco | null>(null);
  const { theme } = useTheme();
  const isLight = theme === "light" || theme === "solarized";

  const handleEditorDidMount = (_editor: unknown, monaco: Monaco) => {
    monacoRef.current = monaco;
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

  // Update Monaco theme when app theme changes
  if (monacoRef.current) {
    monacoRef.current.editor.setTheme(theme);
  }

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col">
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
      <div className="flex-1 overflow-hidden">
        <div className="h-full w-full">
          <Editor
            height="100%"
            defaultLanguage="python"
            theme={theme}
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
