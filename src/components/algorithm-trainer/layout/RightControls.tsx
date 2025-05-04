import { Button } from "../../ui/button";
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
import { Progress } from "../../ui/progress";

export function RightControls() {
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
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        <HelpModal />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "h-10 px-4 rounded-lg transition-all duration-300 group",
                theme === "light" || theme === "solarized"
                  ? "bg-accent/10 hover:bg-accent/20 text-accent"
                  : "bg-accent2/10 hover:bg-accent2/20 text-accent2",
                "hover:scale-105 hover:shadow-lg"
              )}
            >
              {theme === "light" || theme === "solarized" ? (
                <Moon className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              ) : (
                <Sun className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              )}
              <span className="font-medium truncate max-w-[120px]">
                {formatThemeName(theme)}
              </span>
              <ChevronDown className="h-4 w-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={cn(
              "backdrop-blur-md min-w-[160px] sm:min-w-[180px] md:min-w-[200px] p-1 sm:p-1.5 md:p-2 max-h-[80vh] overflow-y-auto bg-popover border border-border text-popover-foreground"
            )}
            side="bottom"
            align="end"
          >
            {THEMES.map((t) => (
              <DropdownMenuItem
                key={t}
                onClick={() => setTheme(t)}
                className={cn(
                  "flex items-center gap-1 sm:gap-1.5 md:gap-2 cursor-pointer rounded-md px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-1 md:py-1.5 text-[10px] sm:text-xs md:text-sm transition-all duration-150 border-l-4 border-transparent",
                  t === theme
                    ? "bg-accent text-foreground border-l-accent shadow-md"
                    : "hover:bg-accent hover:text-foreground focus:bg-accent focus:text-foreground"
                )}
              >
                {t === "kingdom-hearts" ? (
                  <Heart className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-pink-500" />
                ) : t === "re2" ? (
                  <Skull className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-red-500" />
                ) : t === "mh" ? (
                  <Flame className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-orange-500" />
                ) : t === "ps2" ? (
                  <Gamepad2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-blue-500" />
                ) : t === "nord" ? (
                  <Snowflake className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-cyan-500" />
                ) : t === "snes" ? (
                  <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-yellow-500" />
                ) : t === "dracula" ? (
                  <Droplet className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-purple-500" />
                ) : t === "solarized" ? (
                  <Sun className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                ) : (
                  <Moon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                )}
                <span className="flex-1 truncate">{formatThemeName(t)}</span>
                {t === theme && (
                  <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-accent2 ml-1 sm:ml-1.5 md:ml-2 shrink-0" />
                )}
                {t === theme && (
                  <span className="ml-auto text-[8px] sm:text-[10px] md:text-xs opacity-50 shrink-0">
                    Current
                  </span>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full mt-3 px-4">
        <Progress value={60} />
        <div className="text-xs text-muted-foreground text-center mt-1">
          Session Progress: 60%
        </div>
      </div>
    </div>
  );
}
