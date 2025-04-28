import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { loadPyodide } from "pyodide";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";
import { useTheme } from "../ThemeProvider";

interface ReplCardProps {
  userCode: string;
}

export function ReplCard({ userCode }: ReplCardProps) {
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

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
      toast.error("Python environment is not ready yet. Please wait...");
      return;
    }

    setIsLoading(true);
    setError(null);
    setOutput("");

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
      toast.success("Code ran successfully!");
    } catch (error: any) {
      setError(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }

    setIsLoading(false);
  };

  const clearOutput = () => {
    setOutput("");
    setError(null);
  };

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        {(() => {
          const { theme } = useTheme();
          const isLight = theme === "light" || theme === "solarized";
          return (
            <h2
              className={
                "text-base sm:text-lg font-semibold truncate " +
                (isLight
                  ? "text-main"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]")
              }
            >
              Python REPL
            </h2>
          );
        })()}
        <TooltipProvider>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={runCode}
                  disabled={isLoading || !pyodide}
                  className="bg-accent2 hover:bg-accent2/90 text-main text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
                >
                  {isLoading ? "Running..." : "Run Code"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Run your Python code in the REPL</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={clearOutput}
                  disabled={isLoading}
                  className="bg-secondary hover:bg-secondary/80 text-main text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
                >
                  Clear
                </Button>
              </TooltipTrigger>
              <TooltipContent>Clear the REPL output</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full w-full bg-main rounded-md p-4 font-mono text-sm overflow-auto">
          {error ? (
            <pre className="whitespace-pre-wrap text-accent">{error}</pre>
          ) : (
            <pre className="whitespace-pre-wrap text-main">
              {output ||
                "You can do it! make sure to run code with a print fn to see output. Make sure to put prints everywhere to debug efficiently."}
            </pre>
          )}
        </div>
      </div>
    </Card>
  );
}
