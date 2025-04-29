import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useState, useEffect, useRef } from "react";
import { loadPyodide } from "pyodide";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import { useTheme } from "../ThemeProvider";
import GamificationService from "../../lib/gamification";

interface ReplCardProps {
  userCode: string;
}

export function ReplCard({ userCode }: ReplCardProps) {
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const isLight = theme === "light" || theme === "solarized";
  const [replHeight, setReplHeight] = useState(300);
  const replRef = useRef<HTMLDivElement>(null);
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  useEffect(() => {
    let mounted = true;

    async function initPyodide() {
      if (!mounted) return;

      setIsLoading(true);
      setError(null);
      try {
        // Try loading from CDN first
        const pyodideInstance = await loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/",
          stdout: (text: string) => {
            if (mounted) {
              setOutput((prev) => prev + text);
            }
          },
          stderr: (text: string) => {
            if (mounted) {
              setError((prev) => (prev ? prev + "\n" : "") + text);
            }
          },
        });

        if (mounted) {
          setPyodide(pyodideInstance);
          setOutput("Python environment ready! You can now run your code.");
        }
      } catch (error: any) {
        console.error("Failed to load Pyodide:", error);
        if (mounted) {
          setError(
            `Failed to initialize Python environment: ${error.message}\nPlease check your internet connection and refresh the page.`
          );
          setOutput("");
        }
      }

      if (mounted) {
        setIsLoading(false);
      }
    }

    initPyodide();

    return () => {
      mounted = false;
    };
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput("Python environment is not ready yet. Please wait...");
      toast.error("Python environment is not ready yet. Please wait...", {
        duration: 5000,
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setOutput("");

    const startTime = performance.now();

    try {
      // Create a wrapper to capture print statements and return values
      const wrappedCode = `
import sys
from io import StringIO
sys.stdout = StringIO()
try:
${userCode
  .split("\n")
  .map((line) => "    " + line)
  .join("\n")}
    result = sys.stdout.getvalue()
    sys.stdout = sys.__stdout__
    print(result)
except Exception as e:
    sys.stdout = sys.__stdout__
    print(f"Error: {str(e)}")
`;
      await pyodide.runPythonAsync(wrappedCode);

      // Calculate execution time
      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Record code execution in gamification service
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordCodeExecution(
        userCode.split("\n").length, // Lines of code
        executionTime, // Execution time in ms
        false // No error
      );

      toast.success("Code ran successfully!", {
        duration: 3000,
      });

      // Trigger confetti animation
      triggerConfetti();
    } catch (error: any) {
      let errorMessage = error.message;
      let errorType = "Error";

      // Handle browser-specific errors
      if (error.message.includes("Pyodide failed to load")) {
        errorType = "Environment Error";
        errorMessage =
          "Failed to load Python environment. Please check your internet connection and refresh the page.";
      } else if (error.message.includes("out of memory")) {
        errorType = "Memory Error";
        errorMessage =
          "Your code used too much memory. Try optimizing your solution.";
      } else if (error.message.includes("timeout")) {
        errorType = "Timeout Error";
        errorMessage =
          "Your code took too long to execute. Try optimizing your solution.";
      } else if (error.message.includes("syntax error")) {
        errorType = "Syntax Error";
        errorMessage =
          error.message.split("SyntaxError:")[1]?.trim() || error.message;

        // Check for common syntax errors and provide helpful suggestions
        if (errorMessage.includes("sdef")) {
          errorMessage +=
            "\n\nSuggestion: Did you mean to use 'def' instead of 'sdef'?";
        } else if (errorMessage.includes("indent")) {
          errorMessage +=
            "\n\nSuggestion: Check your indentation. Python is sensitive to proper indentation.";
        } else if (errorMessage.includes("colon")) {
          errorMessage +=
            "\n\nSuggestion: Make sure you have a colon (:) after your function definition, if statement, or loop.";
        }
      } else if (error.message.includes("NameError")) {
        errorType = "Name Error";
        errorMessage =
          error.message.split("NameError:")[1]?.trim() || error.message;
      } else if (error.message.includes("TypeError")) {
        errorType = "Type Error";
        errorMessage =
          error.message.split("TypeError:")[1]?.trim() || error.message;
      } else if (error.message.includes("IndentationError")) {
        errorType = "Indentation Error";
        errorMessage =
          error.message.split("IndentationError:")[1]?.trim() || error.message;
      } else if (error.message.includes("ZeroDivisionError")) {
        errorType = "Division Error";
        errorMessage = "Division by zero is not allowed.";
      }

      const formattedError = `${errorType}: ${errorMessage}`;
      setError(formattedError);
      toast.error(formattedError, {
        duration: 6000,
      });

      // Record code execution with error in gamification service
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordCodeExecution(
        userCode.split("\n").length, // Lines of code
        executionTime, // Execution time in ms
        true // Has error
      );
    }

    setIsLoading(false);
  };

  // Function to trigger confetti animation
  const triggerConfetti = () => {
    // Create a more dynamic confetti animation with multiple bursts

    // First burst - from the left
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x: 0, y: 0.6 },
      colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
      ticks: 200,
    });

    // Second burst - from the right
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { x: 1, y: 0.6 },
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        ticks: 200,
      });
    }, 100);

    // Third burst - from the bottom center
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { x: 0.5, y: 1 },
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        ticks: 250,
      });
    }, 200);

    // Fourth burst - a small burst from the top center
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { x: 0.5, y: 0.3 },
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        ticks: 150,
      });
    }, 300);

    // Final burst - a large burst from the center
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        ticks: 300,
      });
    }, 400);
  };

  const clearOutput = () => {
    setOutput("");
    setError(null);
  };

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden">
      <div className="flex-none flex justify-between items-center mb-4">
        <h2 className="text-main text-base sm:text-lg md:text-xl font-semibold truncate leading-relaxed">
          Output
        </h2>
        <div className="flex gap-2">
          <Button
            onClick={clearOutput}
            variant="ghost"
            className="text-main text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
          >
            Clear
          </Button>
          <Button
            onClick={runCode}
            disabled={isLoading}
            className="bg-accent3 hover:bg-accent3/90 text-main text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
          >
            {isLoading ? "Running..." : "Run Code"}
          </Button>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <div
          ref={replRef}
          className="flex-1 min-h-[300px] overflow-hidden rounded-xl bg-main/90"
          style={{
            height: isDesktop ? replHeight : "300px",
            minHeight: "300px",
          }}
        >
          <div className="h-full w-full overflow-auto p-4">
            <pre className="whitespace-pre-wrap text-main break-words text-xs sm:text-sm md:text-base leading-relaxed">
              {error ? (
                <span className="text-red-500">{error}</span>
              ) : (
                <span>
                  {output || "Run your code to see the output here..."}
                </span>
              )}
            </pre>
          </div>
        </div>
        {/* Vertical resize handle */}
        <div
          className="flex-none w-full h-3 cursor-row-resize flex items-center justify-center group"
          style={{ userSelect: "none" }}
          onMouseDown={(e) => {
            if (!isDesktop) return;
            const startY = e.clientY;
            const startHeight = replRef.current?.offsetHeight || 0;
            const maxHeight = 800; // Increased max height for REPL
            const onMove = (moveEvent: MouseEvent) => {
              const delta = moveEvent.clientY - startY;
              const newHeight = Math.max(
                300,
                Math.min(startHeight + delta, maxHeight)
              );
              setReplHeight(newHeight);
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
