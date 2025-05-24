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

interface ReplCardProps {
  userCode: string;
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

export function ReplCard({ userCode }: ReplCardProps) {
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
      text: "text-[#f8f8f2] font-mono",
      error: "text-[#ff5555] font-mono",
      container: "border border-[#bd93f9]/30 shadow-[0_0_10px_rgba(189,147,249,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#bd93f9]/5 after:pointer-events-none",
    },
    solarized: {
      bg: "bg-[#002b36]",
      text: "text-[#839496] font-mono",
      error: "text-[#dc322f] font-mono",
      container: "border border-[#2aa198]/30 shadow-[0_0_10px_rgba(42,161,152,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#2aa198]/5 after:pointer-events-none",
    },
    light: {
      bg: "bg-[#1a1a1a]",
      text: "text-[#e0e0e0] font-mono",
      error: "text-[#ff4444] font-mono",
      container: "border border-[#4a9eff]/30 shadow-[0_0_10px_rgba(74,158,255,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#4a9eff]/5 after:pointer-events-none",
    },
    nord: {
      bg: "bg-[#2e3440]",
      text: "text-[#d8dee9] font-mono",
      error: "text-[#bf616a] font-mono",
      container: "border border-[#88c0d0]/30 shadow-[0_0_10px_rgba(136,192,208,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#88c0d0]/5 after:pointer-events-none",
    },
    snes: {
      bg: "bg-[#2c2c2c]",
      text: "text-[#00ff00] font-mono",
      error: "text-[#ff6b6b] font-mono",
      container: "border border-[#00ff00]/30 shadow-[0_0_10px_rgba(0,255,0,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#00ff00]/5 after:pointer-events-none",
    },
    ps2: {
      bg: "bg-[#1a1a1a]",
      text: "text-[#4a9eff] font-mono",
      error: "text-[#ff4757] font-mono",
      container: "border border-[#4a9eff]/30 shadow-[0_0_10px_rgba(74,158,255,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#4a9eff]/5 after:pointer-events-none",
    },
    re2: {
      bg: "bg-[#1e1e1e]",
      text: "text-[#d4d4d4] font-mono",
      error: "text-[#ff3333] font-mono",
      container: "border border-[#569cd6]/30 shadow-[0_0_10px_rgba(86,156,214,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#569cd6]/5 after:pointer-events-none",
    },
    mh: {
      bg: "bg-[#2d2d2d]",
      text: "text-[#e6e6e6] font-mono",
      error: "text-[#ff6b6b] font-mono",
      container: "border border-[#ffd700]/30 shadow-[0_0_10px_rgba(255,215,0,0.3)]",
      glow: "after:content-[''] after:absolute after:inset-0 after:bg-[#ffd700]/5 after:pointer-events-none",
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleFormat = useCallback(() => {}, []);

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

    document.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <Card className="repl-card p-4 w-full h-full flex flex-col overflow-hidden bg-transparent backdrop-blur-sm border border-[var(--border)]/20">
      <div className="flex-none flex justify-between items-center mb-4">
        <h2 className="text-main text-base sm:text-lg md:text-xl font-semibold truncate leading-relaxed">
          Output
        </h2>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={handleFormat}>
                  <Code className="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Format code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={runCode} disabled={isLoading}>
                  {isLoading ? "Running..." : "Run"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Run code</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={clearOutput}>
                  Clear
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Clear output</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        <div
          ref={replRef}
          className={`flex-1 min-h-[300px] overflow-hidden rounded-xl relative ${currentStyle.bg} ${currentStyle.container} ${currentStyle.glow} flex flex-col`}
          style={{
            height: isDesktop ? replHeight : "300px",
            minHeight: "300px",
          }}
        >
          <div className={`absolute inset-0 overflow-auto ${currentStyle.bg}`}>
            <pre
              className={`whitespace-pre-line break-all text-xs sm:text-sm md:text-base leading-relaxed p-2 ${currentStyle.text} ${currentStyle.bg}`}
              style={{ tabSize: 4 }}
            >
              {error ? (
                <span className={currentStyle.error}>{error}</span>
              ) : (
                <span>{output || ":)"}</span>
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
    </Card>
  );
}
