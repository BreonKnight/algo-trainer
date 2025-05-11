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

import { HelpModal } from "@/components/help/HelpModal";
import { THEMES } from "@/components/theme/theme-constants";
import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useSessionProgress } from "@/hooks/useSessionProgress";
import { cn } from "@/lib/utils";

export function RightControls() {
  const { theme, setTheme } = useTheme();
  const { sessionProgress } = useSessionProgress();

  // Format theme name for display
  const formatThemeName = (themeName: string) => {
    return themeName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const fortniteTheme = theme === "fornite";

  return (
    <div className="w-full p-4 space-y-4 bg-background/80 backdrop-blur-md border border-border/30 rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full min-w-0 flex-wrap">
        <span className="text-xs text-muted-foreground block mb-2 text-center w-full hidden sm:block">
          Personalize your experience!
        </span>
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
                        "h-10 w-full rounded-lg transition-all duration-300 group flex items-center justify-center gap-2 px-3 truncate scale-105 shadow-lg border-2",
                        theme === "light" || theme === "solarized"
                          ? "bg-white border border-accent text-accent shadow hover:bg-accent/10"
                          : theme === "dracula"
                            ? "bg-purple-900 text-white border-purple-400"
                            : theme === "kingdom-hearts"
                              ? "bg-gradient-to-r from-[#0a1633] via-[#1a2747] to-[#0a1633] text-white border-[#ffe066] shadow-md"
                              : theme === "re2"
                                ? "bg-red-900 text-white border-red-500"
                                : theme === "mh"
                                  ? "bg-orange-900 text-white border-orange-500"
                                  : theme === "ps2"
                                    ? "bg-blue-900 text-white border-blue-400"
                                    : theme === "nord"
                                      ? "bg-gradient-to-r from-[#2e3440] via-[#3b4252] to-[#2e3440] text-[#81a1c1] font-bold border-[#88c0d0] shadow-[0_0_15px_rgba(136,192,208,0.3)] hover:shadow-[0_0_20px_rgba(136,192,208,0.5)]"
                                      : theme === "snes"
                                        ? "bg-gradient-to-r from-[#ff0000] via-[#ffff00] to-[#00ff00] text-[#1a237e] font-bold border-[#ffa500] shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] animate-pulse [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]"
                                        : fortniteTheme
                                          ? "bg-gradient-to-r from-[#2ecc71] via-[#3498db] via-[#9b59b6] to-[#f1c40f] text-black border-[#3498db] shadow-md"
                                          : "bg-gray-800 text-white border-gray-400"
                      )}
                    >
                      {theme === "fornite" ? (
                        <Star className="h-4 w-4 text-yellow-400" />
                      ) : theme === "light" || theme === "solarized" ? (
                        <Moon className="h-4 w-4 group-hover:animate-pulse" />
                      ) : theme === "nord" ? (
                        <Snowflake className="h-4 w-4 text-[#88c0d0] group-hover:animate-spin" />
                      ) : theme === "snes" ? (
                        <Star className="h-4 w-4 text-[#ffa500] group-hover:animate-bounce" />
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
                            ? fortniteTheme
                              ? "bg-accent/80 text-black border-l-accent shadow-lg"
                              : "bg-accent/80 text-foreground border-l-accent shadow-lg"
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
          <span className="font-medium">{Math.round(sessionProgress)}%</span>
        </div>
        <Progress value={sessionProgress} className="h-2 bg-background/50" />
      </div>
    </div>
  );
}
