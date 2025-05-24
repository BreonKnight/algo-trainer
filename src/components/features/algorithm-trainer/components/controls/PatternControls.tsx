import { ChevronRight, ChevronLeft, Shuffle } from "lucide-react";
import { useEffect } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface PatternControlsProps {
  onPreviousPattern: () => void;
  onNextPattern: () => void;
  onRandomPattern: () => void;
  className?: string;
  currentIndex?: number;
  totalPatterns?: number;
}

export function PatternControls({
  onPreviousPattern,
  onNextPattern,
  onRandomPattern,
  className,
  currentIndex,
  totalPatterns,
}: PatternControlsProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPreviousPattern();
      } else if (e.key === "ArrowRight") {
        onNextPattern();
      } else if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "r") {
        e.preventDefault(); // Prevent browser refresh
        onRandomPattern();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onPreviousPattern, onNextPattern, onRandomPattern]);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
        "flex flex-col items-center gap-4",
        "px-6 py-4 rounded-full",
        "backdrop-blur-md bg-background/80 shadow-lg border",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-xl hover:bg-background/90",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={onPreviousPattern}
                className={cn(
                  "h-12 w-12 transition-all duration-200 hover:scale-110",
                  theme === "snes"
                    ? "bg-[#fffbe6] text-[#1a237e] border-2 border-[#3498db] hover:bg-[#fffbe6]/90"
                    : "hover:bg-secondary/80"
                )}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-sm font-medium">Previous pattern (←)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={onRandomPattern}
                className={cn(
                  "h-12 w-12 transition-all duration-200 hover:scale-110",
                  theme === "snes"
                    ? "bg-[#fffbe6] text-[#1a237e] border-2 border-[#3498db] hover:bg-[#fffbe6]/90"
                    : "hover:bg-secondary/80"
                )}
              >
                <Shuffle className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-sm font-medium">Random pattern (⌘⇧R / Ctrl+Shift+R)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={onNextPattern}
                className={cn(
                  "h-12 w-12 transition-all duration-200 hover:scale-110",
                  theme === "snes"
                    ? "bg-[#fffbe6] text-[#1a237e] border-2 border-[#3498db] hover:bg-[#fffbe6]/90"
                    : "hover:bg-secondary/80"
                )}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-sm font-medium">Next pattern (→)</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {currentIndex !== undefined && totalPatterns !== undefined && (
        <div
          className={cn(
            "text-sm font-medium px-3 py-1 rounded-full",
            theme === "snes"
              ? "bg-[#fffbe6] text-[#1a237e] border border-[#3498db]"
              : "bg-secondary/50 text-secondary-foreground"
          )}
        >
          Pattern {currentIndex + 1} of {totalPatterns}
        </div>
      )}
    </div>
  );
}
