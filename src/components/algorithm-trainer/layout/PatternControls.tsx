import { Button } from "../../ui/button";
import { ChevronRight, ChevronLeft, Shuffle } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../ui/tooltip";
import { cn } from "../../../lib/utils";
import { useTheme } from "../../../components/theme/use-theme";
import { useEffect } from "react";

interface PatternControlsProps {
  onPreviousPattern: () => void;
  onNextPattern: () => void;
  onRandomPattern: () => void;
  className?: string;
  currentPattern: string;
  totalPatterns: number;
}

export function PatternControls({
  onPreviousPattern,
  onNextPattern,
  onRandomPattern,
  className,
  currentPattern,
  totalPatterns,
}: PatternControlsProps) {
  const { theme } = useTheme();

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPreviousPattern();
      if (e.key === "ArrowRight") onNextPattern();
      if (e.key === "r") onRandomPattern();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onPreviousPattern, onNextPattern, onRandomPattern]);

  return (
    <div
      className={cn(
        "fixed bottom-24 right-4 flex flex-col gap-3 z-50",
        "md:bottom-8 md:right-8", // Better positioning on desktop
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <span
          className={cn(
            "text-xs font-medium",
            theme === "nord" ? "text-white/70" : "text-secondary"
          )}
        >
          {currentPattern} ({totalPatterns})
        </span>
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={onPreviousPattern}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-11 w-11 rounded-full transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    "shadow-lg backdrop-blur-sm",
                    "focus:ring-2 focus:ring-offset-2 focus:ring-accent",
                    theme === "nord"
                      ? "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white"
                      : "bg-background/80 hover:bg-background text-secondary hover:text-main"
                  )}
                  aria-label="Previous pattern"
                >
                  <ChevronLeft className="h-5.5 w-5.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous pattern (←)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={onNextPattern}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-11 w-11 rounded-full transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    "shadow-lg backdrop-blur-sm",
                    "focus:ring-2 focus:ring-offset-2 focus:ring-accent",
                    theme === "nord"
                      ? "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white"
                      : "bg-background/80 hover:bg-background text-secondary hover:text-main"
                  )}
                  aria-label="Next pattern"
                >
                  <ChevronRight className="h-5.5 w-5.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Next pattern (→)</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={onRandomPattern}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-11 w-11 rounded-full transition-all duration-300",
                    "hover:scale-110 active:scale-95",
                    "shadow-lg backdrop-blur-sm",
                    "focus:ring-2 focus:ring-offset-2 focus:ring-accent",
                    theme === "nord"
                      ? "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white"
                      : "bg-background/80 hover:bg-background text-secondary hover:text-main"
                  )}
                  aria-label="Random pattern"
                >
                  <Shuffle className="h-5.5 w-5.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Random pattern (R)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
