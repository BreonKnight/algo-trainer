import { Button } from "../../ui/button";
import { FaChevronRight, FaChevronLeft, FaRandom } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip";
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
  return (
    <div
      className={cn(
        "fixed bottom-24 right-4 flex flex-col gap-2 z-50",
        className
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onPreviousPattern}
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg bg-background/80 backdrop-blur-sm"
            >
              <FaChevronLeft className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Previous pattern</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onNextPattern}
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg bg-background/80 backdrop-blur-sm"
            >
              <FaChevronRight className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Next pattern</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onRandomPattern}
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg bg-background/80 backdrop-blur-sm"
            >
              <FaRandom className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Random pattern</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
