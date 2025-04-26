import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Editor, { Monaco } from "@monaco-editor/react";
import { pseudocodePatterns } from "@/lib/pseudocode-patterns";
import styles from "@/styles/pseudocode.module.css";
import { AudioPlayer } from "./AudioPlayer";
import { ReplCard } from "./algorithm-trainer/ReplCard";
import { AnswerCard } from "./algorithm-trainer/AnswerCard";
import { PatternKey, PATTERN_KEYS } from "./algorithm-trainer/types";

// Define Dracula theme
const draculaTheme = {
  base: "vs-dark" as const,
  inherit: true,
  rules: [
    { token: "", foreground: "f8f8f2" },
    { token: "comment", foreground: "6272a4" },
    { token: "keyword", foreground: "ff79c6" },
    { token: "string", foreground: "f1fa8c" },
    { token: "number", foreground: "bd93f9" },
    { token: "regexp", foreground: "ff5555" },
    { token: "type", foreground: "8be9fd" },
    { token: "class", foreground: "50fa7b" },
    { token: "function", foreground: "50fa7b" },
    { token: "variable", foreground: "f8f8f2" },
    { token: "constant", foreground: "bd93f9" },
    { token: "operator", foreground: "ff79c6" },
    { token: "delimiter", foreground: "f8f8f2" },
    { token: "tag", foreground: "ff79c6" },
    { token: "attribute.name", foreground: "50fa7b" },
    { token: "attribute.value", foreground: "f1fa8c" },
  ],
  colors: {
    "editor.background": "#282a36",
    "editor.foreground": "#f8f8f2",
    "editor.lineHighlightBackground": "#44475a",
    "editor.selectionBackground": "#44475a",
    "editor.inactiveSelectionBackground": "#44475a80",
    "editorCursor.foreground": "#f8f8f2",
    "editorWhitespace.foreground": "#6272a480",
    "editorIndentGuide.background": "#6272a440",
    "editorIndentGuide.activeBackground": "#6272a480",
    "editor.selectionHighlightBackground": "#44475a80",
    "editor.wordHighlightBackground": "#44475a80",
    "editorBracketMatch.background": "#44475a80",
    "editorBracketMatch.border": "#6272a4",
    "editorOverviewRuler.border": "#282a36",
    "editorGutter.background": "#282a36",
    "editorError.foreground": "#ff5555",
    "editorWarning.foreground": "#ffb86c",
    "editorInfo.foreground": "#8be9fd",
    "editorHint.foreground": "#6272a4",
  },
};

export function AlgorithmTrainer() {
  const [currentPattern, setCurrentPattern] = useState<PatternKey | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");
  const monacoRef = useRef<Monaco | null>(null);
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);

  // Add a wrapper function for setCurrentPattern
  const handlePatternChange = (pattern: PatternKey) => {
    setCurrentPattern(pattern);
  };

  const handleEditorDidMount = (_editor: unknown, monaco: Monaco) => {
    monacoRef.current = monaco;
    monaco.editor.defineTheme("dracula", draculaTheme);
    monaco.editor.setTheme("dracula");
  };

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    const nextPattern = PATTERN_KEYS[randomIndex];

    // Add to history if it's a new pattern
    if (currentPattern !== nextPattern) {
      // If we're not at the end of the history, remove all patterns after current index
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(
          0,
          currentIndexRef.current + 1
        );
      }

      // Add the new pattern to history
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      setCurrentPattern(nextPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern =
        patternHistoryRef.current[currentIndexRef.current];
      setCurrentPattern(previousPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  return (
    <div className="min-h-screen w-[100vw] flex flex-col bg-gradient-to-br from-[#282a36] via-[#44475a] to-[#282a36] text-[#f8f8f2] overflow-x-hidden">
      <div className="bg-gradient-to-r from-dracula-purple via-dracula-pink to-dracula-purple animate-gradient-x py-1 px-3 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
          Algorithm Trainer
        </h1>
      </div>

      <main className="flex-1 px-2 py-1 w-full mt-[40px] mb-[32px] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mb-1 sticky top-0 bg-[#282a36] z-10 py-1">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              onClick={nextPattern}
              className="bg-[#bd93f9] hover:bg-[#bd93f9]/90 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap h-8 px-3"
            >
              {currentPattern ? "Next Pattern" : "Start Training"}
            </Button>
            {currentPattern && (
              <Button
                onClick={previousPattern}
                className="bg-[#6272a4] hover:bg-[#6272a4]/90 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap h-8 px-3"
                disabled={currentIndexRef.current <= 0}
              >
                Previous Pattern
              </Button>
            )}
          </div>
          <AudioPlayer />
        </div>

        {currentPattern && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 min-h-[calc(100vh-7.5rem)]">
            {/* Left side: Pattern/Pseudocode */}
            <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full min-h-[400px] flex flex-col order-1 md:min-h-[500px]">
              <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#ff79c6] truncate flex-shrink-0">
                {currentPattern}
              </h2>
              <div className="flex-1 min-h-0 overflow-hidden">
                <div
                  className={`${styles.pseudocodeContainer} h-full overflow-y-auto`}
                >
                  <div
                    className={`${styles.pseudocodeContent} text-sm sm:text-base`}
                    dangerouslySetInnerHTML={{
                      __html:
                        pseudocodePatterns.get(currentPattern) ||
                        "Pseudocode coming soon...",
                    }}
                  />
                </div>
              </div>
            </Card>

            {/* Middle: Code Editor - Always in the middle */}
            <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full min-h-[400px] flex flex-col xl:col-start-2 xl:col-span-1 order-2 md:order-1 md:col-span-2 xl:order-2 md:min-h-[500px]">
              <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#50fa7b] truncate flex-shrink-0">
                Your Implementation
              </h2>
              <div className="flex-1 min-h-0 overflow-hidden">
                <div className="flex flex-col h-full w-full">
                  <Editor
                    height="100%"
                    defaultLanguage="python"
                    theme="dracula"
                    value={userCode}
                    onChange={(value: string | undefined) =>
                      setUserCode(value || "")
                    }
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

            {/* Right side: Answer and REPL */}
            <div className="flex flex-col gap-4 order-3 md:order-2 xl:order-3">
              <AnswerCard
                currentPattern={currentPattern}
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
                onNextPattern={nextPattern}
                onPatternChange={handlePatternChange}
              />
              <ReplCard userCode={userCode} />
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#1e1f29]/80 backdrop-blur-md py-1 px-3 text-center fixed bottom-0 left-0 right-0 z-10">
        <p className="text-[#6272a4] text-sm sm:text-base">
          Created by{" "}
          <a
            href="https://breon.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bd93f9] hover:text-[#ff79c6] transition-colors"
          >
            Breon
          </a>
        </p>
      </footer>
    </div>
  );
}

export default AlgorithmTrainer;
