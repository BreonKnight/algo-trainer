import { Button } from "../../ui/button";
import { AudioPlayer, Timer } from "../../audio/AudioPlayer";
import { HelpModal } from "../../help/HelpModal";
import { FaChevronRight, FaChevronLeft, FaRandom } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip";
import { useTheme } from "../../theme/theme-context";
import { cn } from "@/lib/utils";

interface TopBarProps {
  onPreviousPattern: () => void;
  onNextPattern: () => void;
  onRandomPattern: () => void;
  className?: string;
}

export function TopBar({
  onPreviousPattern,
  onNextPattern,
  onRandomPattern,
  className,
}: TopBarProps) {
  const theme = useTheme().theme;

  return (
    <div
      className={cn(
        "w-full mb-6 flex flex-col md:flex-row items-center justify-between gap-4 rounded-xl shadow-lg p-4 glassy-gradient-bg relative",
        className
      )}
    >
      {/* Glass overlay for extra effect */}
      <div
        style={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "var(--pseudocode-gradient-overlay)",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />

      {/* Left: Navigation Group */}
      <div className="flex flex-col gap-2 z-10 bg-gradient-to-br from-[var(--accent2)/20] to-[var(--accent3)/20] rounded-xl p-2 shadow-md border border-secondary/40">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onPreviousPattern}
              className={cn(
                "h-9 px-4 text-base bg-gradient-to-r from-[var(--accent2)] to-[var(--accent3)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50 active:scale-95",
                theme === "nord" ? "text-white" : "text-background"
              )}
            >
              <FaChevronLeft className="inline-block" /> Previous
            </Button>
          </TooltipTrigger>
          <TooltipContent>Go back to the previous pattern</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onNextPattern}
              className={cn(
                "h-9 px-4 text-base bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:from-[var(--accent2)] hover:to-[var(--accent3)] whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent/50 active:scale-95",
                theme === "nord" ? "text-white" : "text-background"
              )}
            >
              <FaChevronRight className="inline-block" /> Next
            </Button>
          </TooltipTrigger>
          <TooltipContent>Go to a new random pattern</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onRandomPattern}
              className={cn(
                "h-9 px-4 text-base bg-gradient-to-r from-[var(--accent3)] to-[var(--accent2)] hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] whitespace-nowrap max-w-[160px] truncate rounded-lg shadow-lg flex items-center gap-2 transition-all duration-200 focus:ring-2 focus:ring-accent3/50 active:scale-95",
                theme === "nord" ? "text-white" : "text-background"
              )}
            >
              <FaRandom className="inline-block" /> Random
            </Button>
          </TooltipTrigger>
          <TooltipContent>Jump to a completely random pattern</TooltipContent>
        </Tooltip>
      </div>

      {/* Middle: Timer & AudioPlayer */}
      <div className="flex flex-col md:flex-row items-center gap-6 z-10 flex-1 justify-center min-w-0">
        <div className="w-full md:w-auto">
          <Timer />
        </div>
        <div className="w-full md:w-auto min-w-0">
          <AudioPlayer />
        </div>
      </div>

      {/* Right: How to Use (top), Theme (bottom) */}
      <div className="flex flex-col items-end z-10 w-full md:w-auto max-w-md overflow-x-auto">
        <div
          className={cn(
            "flex flex-col gap-y-10 p-4 rounded-xl shadow-md border w-full md:w-auto max-w-md",
            theme === "nord"
              ? "bg-white/10 border-white/20"
              : "bg-secondary/20 border-secondary/40"
          )}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpModal />
            </TooltipTrigger>
            <TooltipContent>How to use this app</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={useTheme().toggleTheme}
                className={`h-9 px-4 rounded-lg shadow-lg font-semibold bg-secondary border border-accent ${
                  theme === "solarized" ? "text-accent" : "text-main"
                } transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-accent2/50 flex items-center justify-center`}
                aria-label="Switch theme"
              >
                <span className="truncate max-w-[60px] md:max-w-[120px] w-full text-center">
                  <span className="block md:hidden">Theme</span>
                  <span className="hidden md:block">
                    {useTheme().theme.charAt(0).toUpperCase() +
                      useTheme().theme.slice(1)}
                  </span>
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              Theme:{" "}
              {useTheme().theme.charAt(0).toUpperCase() +
                useTheme().theme.slice(1)}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
