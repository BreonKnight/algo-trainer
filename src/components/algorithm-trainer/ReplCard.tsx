import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { loadPyodide } from "pyodide";

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
    } catch (error: any) {
      setError(`Error: ${error.message}`);
    }

    setIsLoading(false);
  };

  const clearOutput = () => {
    setOutput("");
    setError(null);
  };

  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#50fa7b] to-[#8be9fd] truncate">
          Python REPL
        </h2>
        <div className="flex gap-2">
          <Button
            onClick={runCode}
            disabled={isLoading || !pyodide}
            className="bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#282a36] text-sm sm:text-base whitespace-nowrap h-8 px-3"
          >
            {isLoading ? "Running..." : "Run Code"}
          </Button>
          <Button
            onClick={clearOutput}
            disabled={isLoading}
            className="bg-[#6272a4] hover:bg-[#6272a4]/90 text-sm sm:text-base whitespace-nowrap h-8 px-3"
          >
            Clear
          </Button>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full w-full bg-[#282a36] rounded-md p-4 font-mono text-sm overflow-auto">
          {error ? (
            <pre className="whitespace-pre-wrap text-[#ff5555]">{error}</pre>
          ) : (
            <pre className="whitespace-pre-wrap text-[#f8f8f2]">
              {output ||
                "You can do it! make sure to run code with a print fn to see output. Make sure to put prints everywhere to debug efficiently."}
            </pre>
          )}
        </div>
      </div>
    </Card>
  );
}
