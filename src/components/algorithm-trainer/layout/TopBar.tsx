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
        "w-full mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_-8px_16px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_-8px_16px_-2px_rgba(0,0,0,0.4)] p-3 sm:p-4 relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:via-transparent before:to-accent2/5 before:opacity-50",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] after:opacity-20",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50" />

      {/* Left: Timer & AudioPlayer */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 w-full sm:w-auto relative z-10">
        <div className="flex flex-row items-center bg-background/70 dark:bg-accent2/10 rounded-lg px-3 py-2 gap-2 shadow-sm border border-accent/10">
          <Timer />
          <div className="hidden sm:block w-px h-8 bg-accent/20 mx-2" />
          <AudioPlayer />
        </div>
      </div>

      {/* Right: Help & Theme Toggle */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end relative z-10">
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
                  "flex items-center gap-2 cursor-pointer rounded-md px-2 py-1.5 text-sm",
                  t === theme
                    ? isDarkTheme
                      ? "bg-accent2/20 text-accent2"
                      : "bg-accent/20 text-accent"
                    : "hover:bg-accent/10"
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
                  <span className="ml-auto text-xs opacity-50">Current</span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl" />
    </div>
  );
}
