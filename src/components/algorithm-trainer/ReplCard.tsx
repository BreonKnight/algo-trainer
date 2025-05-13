import confetti from "canvas-confetti";
import { Code } from "lucide-react";
import { loadPyodide, PyodideInterface } from "pyodide";
import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import GamificationService from "@/lib/gamification";
import { PythonCodeHandler } from "@/lib/python/codeHandler";
import { cn } from "@/lib/utils";

interface ReplCardProps {
  userCode: string;
  setUserCode: (code: string) => void;
}

// Custom hook for media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

export function ReplCard({ userCode, setUserCode }: ReplCardProps) {
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const [replHeight, setReplHeight] = useState(300);
  const replRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Theme-specific terminal styles
  const terminalStyles = {
    dracula: {
      bg: "bg-[#282a36]",
      text: "text-[#f8f8f2]",
      error: "text-[#ff5555]",
    },
    solarized: {
      bg: "bg-[#002b36]",
      text: "text-[#839496]",
      error: "text-[#dc322f]",
    },
    light: {
      bg: "bg-[#f8f8f8]",
      text: "text-[#2d3748]",
      error: "text-red-600",
    },
    nord: {
      bg: "bg-[#2e3440]",
      text: "text-[#d8dee9]",
      error: "text-[#bf616a]",
    },
    snes: {
      bg: "bg-[#2c2c2c]",
      text: "text-[#c7c7c7]",
      error: "text-[#ff6b6b]",
    },
    ps2: {
      bg: "bg-[#1a1a1a]",
      text: "text-[#e0e0e0]",
      error: "text-[#ff4757]",
    },
    re2: {
      bg: "bg-[#1e1e1e]",
      text: "text-[#d4d4d4]",
      error: "text-[#ff3333]",
    },
    mh: {
      bg: "bg-[#2d2d2d]",
      text: "text-[#e6e6e6]",
      error: "text-[#ff6b6b]",
    },
  };

  const currentStyle =
    terminalStyles[theme as keyof typeof terminalStyles] || terminalStyles.dracula;

  useEffect(() => {
    let mounted = true;

    async function initPyodide() {
      if (!mounted) return;

      setIsLoading(true);
      setError(null);
      try {
        // Determine if we're in Electron
        const isElectron = window.navigator.userAgent.toLowerCase().includes("electron");

        // Load Pyodide with appropriate configuration
        const pyodideInstance = await loadPyodide({
          indexURL: isElectron
            ? "./pyodide" // Local path in Electron
            : "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/", // CDN for web
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
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
        if (mounted) {
          setError(
            `Failed to initialize Python environment: ${
              error instanceof Error ? error.message : "Unknown error"
            }\nPlease check your internet connection and refresh the page.`
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

  const handleFormat = useCallback(() => {
    const formattedCode = PythonCodeHandler.formatCode(userCode);
    setUserCode(formattedCode);
  }, [userCode, setUserCode]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Format code with Ctrl+Shift+F
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "f") {
        e.preventDefault();
        handleFormat();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleFormat]);

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
      // Validate code before execution
      const validation = PythonCodeHandler.validateCode(userCode);
      if (!validation.isValid && validation.error) {
        setError(validation.error);
        toast.error(validation.error, {
          duration: 5000,
        });
        return;
      }

      // Wrap and execute code
      const wrappedCode = PythonCodeHandler.wrapCodeForExecution(userCode);
      await pyodide.runPythonAsync(wrappedCode);

      // Calculate execution time
      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Record code execution
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordCodeExecution(userCode.split("\n").length, executionTime, false);

      toast.success("Code ran successfully!", {
        duration: 3000,
      });

      triggerConfetti();
    } catch (error) {
      const errorMessage = PythonCodeHandler.handlePythonError(
        error instanceof Error ? error : String(error)
      );
      setError(errorMessage);
      setOutput("");

      // Record error in gamification service
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordCodeExecution(
        userCode.split("\n").length,
        performance.now() - startTime,
        true
      );

      toast.error(errorMessage, {
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
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

  // Add touch event handling for resize
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isDesktop) return;
    const touch = e.touches[0];
    const startY = touch.clientY;
    const startHeight = replRef.current?.offsetHeight || 0;
    const maxHeight = 800;

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const touch = moveEvent.touches[0];
      const delta = touch.clientY - startY;
      const newHeight = Math.max(300, Math.min(startHeight + delta, maxHeight));
      setReplHeight(newHeight);
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <Card className="p-4 bg-[var(--card-bg)] border-text-secondary w-full h-full flex flex-col overflow-hidden">
      <div className="flex-none flex justify-between items-center mb-4">
        <h2 className="text-main text-base sm:text-lg md:text-xl font-semibold truncate leading-relaxed">
          Output
        </h2>
        <div className="flex gap-2">
          <Button
            onClick={clearOutput}
            variant="ghost"
            className={cn(
              "text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md",
              theme === "nord"
                ? "text-white hover:text-white"
                : "text-background hover:text-background"
            )}
          >
            Clear
          </Button>
          <Button
            onClick={runCode}
            disabled={isLoading}
            className={cn(
              "bg-accent3 hover:bg-accent3/90 text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md",
              theme === "nord" ? "text-white" : "text-background"
            )}
          >
            {isLoading ? "Running..." : "Run Code"}
          </Button>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <div
          ref={replRef}
          className={`flex-1 min-h-[300px] overflow-hidden rounded-xl ${currentStyle.bg}`}
          style={{
            height: isDesktop ? replHeight : "300px",
            minHeight: "300px",
          }}
        >
          <div className="h-full w-full overflow-auto p-4">
            <pre
              className={`whitespace-pre-wrap break-words text-xs sm:text-sm md:text-base leading-relaxed ${currentStyle.text}`}
            >
              {error ? (
                <span className={currentStyle.error}>{error}</span>
              ) : (
                <span>{output || "Run your code to see the output here..."}</span>
              )}
            </pre>
          </div>
        </div>
        {/* Vertical resize handle */}
        <div
          className="flex-none w-full h-3 cursor-row-resize flex items-center justify-center group"
          style={{ userSelect: "none", touchAction: "none" }}
          onMouseDown={(e) => {
            if (!isDesktop) return;
            const startY = e.clientY;
            const startHeight = replRef.current?.offsetHeight || 0;
            const maxHeight = 800;
            const onMove = (moveEvent: MouseEvent) => {
              const delta = moveEvent.clientY - startY;
              const newHeight = Math.max(300, Math.min(startHeight + delta, maxHeight));
              setReplHeight(newHeight);
            };
            const onUp = () => {
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
          onTouchStart={handleTouchStart}
        >
          <div className="w-12 h-1.5 rounded bg-accent2/40 group-hover:bg-accent2/70 transition" />
        </div>
      </div>
      {/* Editor controls */}
      <div className="flex-none flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {/* Add format button */}
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
                  onClick={handleFormat}
                >
                  <Code className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Format code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Card>
  );
}
