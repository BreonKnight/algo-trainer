import { Card } from "../ui/card";
import Editor, { Monaco } from "@monaco-editor/react";
import { useRef } from "react";
import { draculaTheme } from "@/components/algorithm-trainer/theme";

interface CodeEditorProps {
  userCode: string;
  setUserCode: (code: string) => void;
}

export function CodeEditor({ userCode, setUserCode }: CodeEditorProps) {
  const monacoRef = useRef<Monaco | null>(null);

  const handleEditorDidMount = (_editor: unknown, monaco: Monaco) => {
    monacoRef.current = monaco;
    monaco.editor.defineTheme("dracula", draculaTheme);
    monaco.editor.setTheme("dracula");
  };

  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#50fa7b] truncate flex-none">
        Your Implementation
      </h2>
      <div className="flex-1 overflow-hidden">
        <div className="h-full w-full">
          <Editor
            height="100%"
            defaultLanguage="python"
            theme="dracula"
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
