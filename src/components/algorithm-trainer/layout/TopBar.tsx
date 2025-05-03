import { Button } from "../../ui/button";
import { AudioPlayer } from "../../audio/AudioPlayer";
import { Timer } from "../../timer/Timer";
import { HelpModal } from "../../help/HelpModal";
import {
  Sun,
  Moon,
  ChevronDown,
  Heart,
  Skull,
  Flame,
  Gamepad2,
  Snowflake,
  Star,
  Droplet,
  Check,
  Lightbulb,
  Info,
  RefreshCw,
} from "lucide-react";
import { useTheme } from "../../theme/theme-context";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { THEMES } from "../../theme/theme-constants";
import { useState, useEffect } from "react";
import { MediaCard } from "../../ui/media-card";

interface TopBarProps {
  className?: string;
}

// Center Informatics Widget
const TIPS = [
  "Use two pointers for many array problems.",
  "Binary search only works on sorted arrays.",
  "Greedy algorithms don't always give the optimal solution.",
  "Divide and conquer is a powerful technique for sorting and searching.",
  "Hash maps are great for quick lookups.",
];
const FACTS = [
  "The word 'algorithm' comes from the Persian mathematician Al-Khwarizmi.",
  "Dijkstra's algorithm was invented in 1956 and is still widely used today.",
  "The first computer bug was an actual moth found in a relay.",
  "The Big-O notation describes the upper bound of an algorithm's running time.",
  "Merge sort was invented by John von Neumann in 1945.",
];
function CenterInformaticsWidget() {
  const [showTip, setShowTip] = useState(true);
  const [tipIdx, setTipIdx] = useState(0);
  const [factIdx, setFactIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTip((prev) => !prev);
      if (showTip) {
        setFactIdx((i) => (i + 1) % FACTS.length);
      } else {
        setTipIdx((i) => (i + 1) % TIPS.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [showTip]);

  const handleNext = () => {
    setShowTip((prev) => !prev);
    if (showTip) {
      setFactIdx((i) => (i + 1) % FACTS.length);
    } else {
      setTipIdx((i) => (i + 1) % TIPS.length);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 rounded-lg bg-background/90 border-2 border-accent/30 shadow-lg w-full transition-transform duration-200 hover:scale-[1.025] group cursor-pointer">
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/20 shadow animate-pulse-slow">
          {showTip ? (
            <Lightbulb className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 drop-shadow" />
          ) : (
            <Info className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400 drop-shadow" />
          )}
        </div>
        <div className="h-8 sm:h-10 w-px bg-accent/10 rounded-full mx-1 sm:mx-2" />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm sm:text-base text-accent mb-0.5 sm:mb-1 tracking-wide">
            {showTip ? "Tip of the Day" : "Fun Informatics"}
          </div>
          <div
            className="text-xs sm:text-sm text-main/90 leading-snug line-clamp-2"
            title={showTip ? TIPS[tipIdx] : FACTS[factIdx]}
          >
            {showTip ? TIPS[tipIdx] : FACTS[factIdx]}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="ml-2 p-1.5 sm:p-2 rounded-full hover:bg-accent/20 transition-colors shadow border border-accent/10"
          title="Next tip or fact"
        >
          <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-accent group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export function TopBar({ className }: TopBarProps) {
  const { theme, setTheme } = useTheme();
  const isDarkTheme =
    theme === "dracula" ||
    theme === "solarized" ||
    theme === "nord" ||
    theme === "snes" ||
    theme === "ps2" ||
    theme === "re2" ||
    theme === "mh" ||
    theme === "kingdom-hearts";

  // Format theme name for display
  const formatThemeName = (themeName: string) => {
    return themeName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      className={cn(
        "w-full mb-2 sm:mb-3 flex flex-col items-center justify-between gap-4 sm:gap-6 rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_-8px_16px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_-8px_16px_-2px_rgba(0,0,0,0.4)] p-3 sm:p-4 relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:via-transparent before:to-accent2/5 before:opacity-50",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] after:opacity-20",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50" />
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
        {/* Left: Informatics Widget */}
        <div className="flex-1 min-w-[260px] max-w-sm">
          <CenterInformaticsWidget />
        </div>
        {/* Center: Timer & AudioPlayer */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 min-w-[260px] max-w-2xl">
          <MediaCard className="w-full sm:w-auto">
            <Timer />
          </MediaCard>
          <MediaCard className="w-full sm:w-auto">
            <AudioPlayer />
          </MediaCard>
        </div>
        {/* Right: Help & Theme Toggle */}
        <div className="flex-1 flex items-center justify-end gap-2 min-w-[260px] max-w-sm">
          <HelpModal />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-8 sm:h-9 px-2 sm:px-3 gap-1.5 sm:gap-2 rounded-lg transition-all duration-300 group",
                  theme === "light" || theme === "solarized"
                    ? "bg-accent/10 hover:bg-accent/20 text-accent"
                    : "bg-accent2/10 hover:bg-accent2/20 text-accent2",
                  "hover:scale-105 hover:shadow-lg"
                )}
              >
                {theme === "light" || theme === "solarized" ? (
                  <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:animate-pulse" />
                ) : (
                  <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:animate-pulse" />
                )}
                <span className="text-xs sm:text-sm font-medium sm:inline">
                  {formatThemeName(theme)}
                </span>
                <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={cn(
                "min-w-[180px] sm:min-w-[200px] p-1.5 sm:p-2 max-h-[80vh] overflow-y-auto",
                isDarkTheme
                  ? "bg-background/95 border-accent2/20"
                  : "bg-background/95 border-accent/20"
              )}
              side="bottom"
              align="end"
            >
              {THEMES.map((t) => (
                <DropdownMenuItem
                  key={t}
                  onClick={() => setTheme(t)}
                  className={cn(
                    "flex items-center gap-1.5 sm:gap-2 cursor-pointer rounded-md px-1.5 sm:px-2 py-1 sm:py-1.5 text-xs sm:text-sm transition-all duration-150 border-l-4 border-transparent",
                    t === theme
                      ? isDarkTheme
                        ? "bg-accent2/20 text-accent2 border-l-accent2/80 shadow-md"
                        : "bg-accent/20 text-accent border-l-accent/80 shadow-md"
                      : "hover:bg-accent/10 hover:border-l-accent/40 focus:bg-accent/10 focus:border-l-accent/60"
                  )}
                >
                  {t === "kingdom-hearts" ? (
                    <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-pink-500" />
                  ) : t === "re2" ? (
                    <Skull className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500" />
                  ) : t === "mh" ? (
                    <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-orange-500" />
                  ) : t === "ps2" ? (
                    <Gamepad2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                  ) : t === "nord" ? (
                    <Snowflake className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-500" />
                  ) : t === "snes" ? (
                    <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-500" />
                  ) : t === "dracula" ? (
                    <Droplet className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-500" />
                  ) : t === "solarized" ? (
                    <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  ) : (
                    <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  )}
                  <span className="flex-1">{formatThemeName(t)}</span>
                  {t === theme && (
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent2 ml-1.5 sm:ml-2" />
                  )}
                  {t === theme && (
                    <span className="ml-auto text-[10px] sm:text-xs opacity-50">
                      Current
                    </span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl" />
    </div>
  );
}
