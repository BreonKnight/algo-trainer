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
import { useTheme } from "../../theme/use-theme";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { THEMES } from "../../theme/theme-constants";
import { Progress } from "../../ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";

export function RightControls() {
  const { theme, setTheme } = useTheme();

  // Format theme name for display
  const formatThemeName = (themeName: string) => {
    return themeName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="w-full p-4 space-y-4 bg-background/80 backdrop-blur-md border border-border/30 rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full min-w-0 flex-wrap">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex-1 min-w-0 w-full">
                <HelpModal />
              </div>
            </TooltipTrigger>
            <TooltipContent>How to use the app</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex-1 min-w-0 w-full">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={cn(
                        "h-10 w-full rounded-lg transition-all duration-300 group flex items-center justify-center gap-2 px-3 truncate",
                        theme === "light" || theme === "solarized"
                          ? "bg-accent/10 hover:bg-accent/20 text-accent"
                          : theme === "dracula"
                            ? "bg-purple-900/80 hover:bg-purple-900 text-white"
                            : theme === "kingdom-hearts"
                              ? "bg-gradient-to-r from-[#0a1633] via-[#1a2747] to-[#0a1633] text-white border-2 border-[#ffe066] shadow-md"
                              : theme === "re2"
                                ? "bg-red-900/80 hover:bg-red-900 text-white"
                                : theme === "mh"
                                  ? "bg-orange-900/80 hover:bg-orange-900 text-white"
                                  : theme === "ps2"
                                    ? "bg-blue-900/80 hover:bg-blue-900 text-white"
                                    : theme === "nord"
                                      ? "bg-cyan-900/80 hover:bg-cyan-900 text-white"
                                      : theme === "snes"
                                        ? "bg-yellow-700/80 hover:bg-yellow-700 text-gray-900"
                                        : theme === "fornite"
                                          ? "bg-gradient-to-r from-[#349a3a] via-[#4a5afd] via-[#9652b8] to-[#f7b227] text-white border-2 border-[#4a5afd] shadow-md"
                                          : "bg-gray-800/80 hover:bg-gray-800 text-white",
                        "hover:scale-105 hover:shadow-lg"
                      )}
                    >
                      {theme === "fornite" ? (
                        <Star className="h-4 w-4 text-yellow-400" />
                      ) : theme === "light" || theme === "solarized" ? (
                        <Moon className="h-4 w-4 group-hover:animate-pulse" />
                      ) : (
                        <Sun className="h-4 w-4 group-hover:animate-pulse" />
                      )}
                      <span className="font-medium truncate">{formatThemeName(theme)}</span>
                      <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className={cn(
                      "glassmorphism border border-border/40 shadow-2xl rounded-xl p-2 min-w-[180px] max-h-[60vh] overflow-y-auto backdrop-blur-lg bg-background/80"
                    )}
                    side="bottom"
                    align="end"
                  >
                    {THEMES.map((t) => (
                      <DropdownMenuItem
                        key={t}
                        onClick={() => setTheme(t)}
                        className={cn(
                          "flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2 text-sm transition-all duration-150 border-l-4 border-transparent",
                          t === theme
                            ? "bg-accent/80 text-foreground border-l-accent shadow-lg"
                            : "hover:bg-accent/30 hover:text-foreground focus:bg-accent/30 focus:text-foreground"
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
                        ) : t === "fornite" ? (
                          <Star className="h-4 w-4 text-yellow-400" />
                        ) : (
                          <Moon className="h-4 w-4" />
                        )}
                        <span className="flex-1 truncate">{formatThemeName(t)}</span>
                        {t === theme && <Check className="h-4 w-4 text-accent2 ml-2 shrink-0" />}
                        {t === theme && (
                          <span className="ml-auto text-xs opacity-50 shrink-0">Current</span>
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TooltipTrigger>
            <TooltipContent>Change theme</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="my-2 border-t border-border/30" />
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Session Progress</span>
          <span className="font-medium">60%</span>
        </div>
        <Progress value={60} className="h-2 bg-background/50" />
      </div>
    </div>
  );
}
