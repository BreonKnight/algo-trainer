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
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-4 px-3 py-2 sm:px-6 sm:py-4 rounded-lg bg-background/90 border-2 border-accent/30 shadow-lg w-full max-w-full sm:min-w-[320px] sm:max-w-[400px] transition-transform duration-200 hover:scale-[1.025] group cursor-pointer">
        <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-accent/20 shadow animate-pulse-slow">
          {showTip ? (
            <Lightbulb className="w-6 h-6 text-yellow-400 drop-shadow" />
          ) : (
            <Info className="w-6 h-6 text-blue-400 drop-shadow" />
          )}
        </div>
        <div className="h-10 w-px bg-accent/10 rounded-full mx-2" />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-base text-accent mb-1 tracking-wide">
            {showTip ? "Tip of the Day" : "Fun Informatics"}
          </div>
          <div
            className="text-sm text-main/90 leading-snug"
            title={showTip ? TIPS[tipIdx] : FACTS[factIdx]}
          >
            {showTip ? TIPS[tipIdx] : FACTS[factIdx]}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="ml-3 p-2 rounded-full hover:bg-accent/20 transition-colors shadow border border-accent/10"
          title="Next tip or fact"
        >
          <RefreshCw className="w-5 h-5 text-accent group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}

export function TopBar({ className }: TopBarProps) {
  const { theme, setTheme } = useTheme();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
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
        "w-full mb-4 sm:mb-6 flex flex-col items-center justify-between gap-3 sm:gap-4 rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_-8px_16px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_-8px_16px_-2px_rgba(0,0,0,0.4)] p-3 sm:p-4 relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:via-transparent before:to-accent2/5 before:opacity-50",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] after:opacity-20",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50" />
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 relative z-10">
        {/* Left: Informatics Widget */}
        <div className="flex items-center min-w-0 sm:min-w-[200px] justify-start w-full sm:w-auto mb-2 sm:mb-0">
          <CenterInformaticsWidget />
        </div>
        {/* Center: Timer & AudioPlayer */}
        <div className="flex-1 flex justify-center w-full sm:w-auto mb-2 sm:mb-0">
          <div className="flex flex-row items-center bg-background/70 dark:bg-accent2/10 rounded-lg px-3 py-2 gap-2 shadow-sm border border-accent/10 min-w-[320px] mx-auto">
            <Timer />
            <div className="hidden sm:block w-px h-8 bg-accent/20 mx-2" />
            <AudioPlayer onPlayStateChange={setIsMusicPlaying} />
          </div>
        </div>
        {/* Right: Help & Theme Toggle */}
        <div className="flex items-center gap-2 min-w-0 sm:min-w-[220px] justify-end w-full sm:w-auto">
          <HelpModal />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-9 px-3 gap-2 rounded-lg transition-all duration-300 group",
                  theme === "light" || theme === "solarized"
                    ? "bg-accent/10 hover:bg-accent/20 text-accent"
                    : "bg-accent2/10 hover:bg-accent2/20 text-accent2",
                  "hover:scale-105 hover:shadow-lg"
                )}
              >
                {theme === "light" || theme === "solarized" ? (
                  <Moon className="h-4 w-4 group-hover:animate-pulse" />
                ) : (
                  <Sun className="h-4 w-4 group-hover:animate-pulse" />
                )}
                <span className="text-sm font-medium sm:inline">
                  {formatThemeName(theme)}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className={cn(
                "min-w-[200px] p-2 max-h-[80vh] overflow-y-auto",
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
                    "flex items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 text-sm transition-all duration-150 border-l-4 border-transparent",
                    t === theme
                      ? isDarkTheme
                        ? "bg-accent2/20 text-accent2 border-l-accent2/80 shadow-md"
                        : "bg-accent/20 text-accent border-l-accent/80 shadow-md"
                      : "hover:bg-accent/10 hover:border-l-accent/40 focus:bg-accent/10 focus:border-l-accent/60"
                  )}
                >
                  {t === "kingdom-hearts" ? (
                    <Heart className="h-4 w-4 text-pink-500" />
                  ) : t === "re2" ? (
                    <Skull className="h-4 w-4 text-red-500" />
                  ) : t === "mh" ? (
                    <Flame className="h-4 w-4 text-orange-500" />
                  ) : t === "ps2" ? (
                    <Gamepad2 className="h-4 w-4 text-blue-500" />
                  ) : t === "nord" ? (
                    <Snowflake className="h-4 w-4 text-cyan-500" />
                  ) : t === "snes" ? (
                    <Star className="h-4 w-4 text-yellow-500" />
                  ) : t === "dracula" ? (
                    <Droplet className="h-4 w-4 text-purple-500" />
                  ) : t === "solarized" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span className="flex-1">{formatThemeName(t)}</span>
                  {t === theme && (
                    <Check className="h-4 w-4 text-accent2 ml-2" />
                  )}
                  {t === theme && (
                    <span className="ml-auto text-xs opacity-50">Current</span>
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
