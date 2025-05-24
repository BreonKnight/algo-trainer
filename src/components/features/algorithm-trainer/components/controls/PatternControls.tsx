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
}

export function PatternControls({
  onPreviousPattern,
  onNextPattern,
  onRandomPattern,
  className,
}: PatternControlsProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPreviousPattern();
      } else if (e.key === "ArrowRight") {
        onNextPattern();
      } else if (e.key === "r") {
        onRandomPattern();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onPreviousPattern, onNextPattern, onRandomPattern]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={onPreviousPattern}
              className={cn(
                "h-8 w-8",
                theme === "snes" && "bg-[#fffbe6] text-[#1a237e] border-2 border-[#3498db]"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Previous pattern (←)</p>
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
                "h-8 w-8",
                theme === "snes" && "bg-[#fffbe6] text-[#1a237e] border-2 border-[#3498db]"
              )}
            >
              <Shuffle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Random pattern (R)</p>
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
                "h-8 w-8",
                theme === "snes" && "bg-[#fffbe6] text-[#1a237e] border-2 border-[#3498db]"
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Next pattern (→)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
