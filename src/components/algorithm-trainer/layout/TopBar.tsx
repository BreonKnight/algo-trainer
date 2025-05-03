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
import { MediaCard } from "../../ui/media-card";
import { CenterInformaticsWidget } from "./CenterInformaticsWidget";

interface TopBarProps {
  className?: string;
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
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10">
        {/* Left: Informatics Widget */}
        <div className="w-full lg:w-auto flex-1 min-w-[260px] max-w-sm p-1 lg:max-w-[400px]">
          <CenterInformaticsWidget />
        </div>
        {/* Center: Timer & AudioPlayer */}
        <div className="w-full lg:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 min-w-[260px] max-w-2xl p-1 lg:max-w-[500px]">
          <MediaCard className="w-full sm:w-auto">
            <Timer />
          </MediaCard>
          <MediaCard className="w-full sm:w-auto">
            <AudioPlayer />
          </MediaCard>
        </div>
        {/* Right: Help & Theme Toggle */}
        <div className="w-full lg:w-auto flex-1 flex flex-col lg:flex-row items-center justify-end gap-2 min-w-[260px] max-w-sm p-1 lg:max-w-[300px]">
          <div className="w-full flex items-center justify-end gap-2">
            <HelpModal />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-8 sm:h-9 px-2 sm:px-3 gap-1.5 sm:gap-2 rounded-lg transition-all duration-300 group shrink-0 w-full lg:w-auto",
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
                  <span className="text-xs sm:text-sm font-medium sm:inline truncate max-w-[120px] sm:max-w-[140px]">
                    {formatThemeName(theme)}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
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
                    <span className="flex-1 truncate">
                      {formatThemeName(t)}
                    </span>
                    {t === theme && (
                      <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent2 ml-1.5 sm:ml-2 shrink-0" />
                    )}
                    {t === theme && (
                      <span className="ml-auto text-[10px] sm:text-xs opacity-50 shrink-0">
                        Current
                      </span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl" />
    </div>
  );
}
