import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Editor from "@monaco-editor/react";
import { PatternKey } from "./types";
import { patterns } from "@/components/algorithm-trainer/patterns";

interface AnswerCardProps {
  currentPattern: PatternKey;
  showAnswer: boolean;
  setShowAnswer: (show: boolean) => void;
  onNextPattern: () => void;
}

export function AnswerCard({
  currentPattern,
  showAnswer,
  setShowAnswer,
  onNextPattern,
}: AnswerCardProps) {
  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] truncate flex-none">
        Solution
      </h2>
      <div className="flex justify-between gap-2 mb-2 flex-none">
        <Button
          onClick={() => setShowAnswer(!showAnswer)}
          className="bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#282a36] text-sm sm:text-base whitespace-nowrap h-8 px-3"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </Button>
        <Button
          onClick={onNextPattern}
          className="bg-[#ff79c6] hover:bg-[#ff79c6]/90 text-sm sm:text-base whitespace-nowrap h-8 px-3"
        >
          Next Pattern
        </Button>
      </div>
      <div
        className={`flex-1 min-h-0 transition-all duration-200 ${
          showAnswer ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#ff79c6] truncate flex-none">
          Implementation:
        </h3>
        <div className="h-[calc(100%-2.5rem)] w-full rounded-md overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="python"
            theme="dracula"
            value={patterns.get(currentPattern)}
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
      </div>
    </Card>
  );
}
