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
  LucideProps,
} from "lucide-react";

import { THEMES } from "@/components/theme/theme-constants";
import { useTheme } from "@/components/theme/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemedButton } from "@/components/ui/themed-button";

import { cn } from "@algo-trainer/shared/utils/common";

// Format theme name for display
const formatThemeName = (themeName: string) => {
  return themeName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

interface IconConfig {
  IconComponent: React.FC<LucideProps>;
  props?: LucideProps;
}

const themeTriggerStyles: Record<string, string> = {
  light: "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow hover:shadow-xl",
  solarized: "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow hover:shadow-xl",
  dracula: "bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow hover:shadow-xl",
  "kingdom-hearts":
    "bg-gradient-to-r from-[#0a1633] via-[#1a2747] to-[#0a1633] text-white border-[#ffe066] shadow-md",
  re2: "bg-red-900 text-white border-red-500",
  mh: "bg-orange-900 text-white border-orange-500",
  ps2: "bg-blue-900 text-white border-blue-400",
  nord: "bg-gradient-to-r from-[#2e3440] via-[#3b4252] to-[#2e3440] text-[#81a1c1] font-bold border-[#88c0d0] shadow-[0_0_15px_rgba(136,192,208,0.3)] hover:shadow-[0_0_20px_rgba(136,192,208,0.5)]",
  snes: "bg-gradient-to-r from-[#ff0000] via-[#ffff00] to-[#00ff00] text-[#4040e0] font-bold border-[#ffa500] shadow-[0_0_15px_rgba(255,165,0,0.3)] hover:shadow-[0_0_20px_rgba(255,165,0,0.5)] animate-pulse [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]",
  fortnite:
    "bg-gradient-to-r from-[#2ecc71] via-[#3498db] via-[#9b59b6] to-[#f1c40f] text-black border-[#3498db] shadow-md",
  default: "bg-gray-800 text-white border-gray-400",
};

const themeTriggerIcons: Record<string, IconConfig> = {
  fortnite: { IconComponent: Star, props: { className: "h-4 w-4 text-yellow-400" } },
  light: { IconComponent: Moon, props: { className: "h-4 w-4 group-hover:animate-pulse" } },
  solarized: { IconComponent: Moon, props: { className: "h-4 w-4 group-hover:animate-pulse" } },
  nord: {
    IconComponent: Snowflake,
    props: { className: "h-4 w-4 text-[#88c0d0] group-hover:animate-spin" },
  },
  snes: {
    IconComponent: Star,
    props: { className: "h-4 w-4 text-[#ffa500] group-hover:animate-bounce" },
  },
  default: { IconComponent: Sun, props: { className: "h-4 w-4 group-hover:animate-pulse" } },
};

const themeItemIcons: Record<string, IconConfig> = {
  "kingdom-hearts": { IconComponent: Heart, props: { className: "h-4 w-4 text-pink-500" } },
  re2: { IconComponent: Skull, props: { className: "h-4 w-4 text-red-500" } },
  mh: { IconComponent: Flame, props: { className: "h-4 w-4 text-orange-500" } },
  ps2: { IconComponent: Gamepad2, props: { className: "h-4 w-4 text-blue-500" } },
  nord: { IconComponent: Snowflake, props: { className: "h-4 w-4 text-cyan-500" } },
  snes: { IconComponent: Star, props: { className: "h-4 w-4 text-yellow-500" } },
  dracula: { IconComponent: Droplet, props: { className: "h-4 w-4 text-purple-500" } },
  solarized: { IconComponent: Sun, props: { className: "h-4 w-4" } },
  fortnite: { IconComponent: Star, props: { className: "h-4 w-4 text-yellow-400" } },
  default: { IconComponent: Moon, props: { className: "h-4 w-4" } }, // Default for items, e.g., for 'light' theme
};

export function ThemeSelectorDropdown() {
  const { theme, setTheme } = useTheme();

  const currentTriggerStyles = themeTriggerStyles[theme] || themeTriggerStyles.default;
  const { IconComponent: TriggerIcon, props: triggerIconProps = {} } =
    themeTriggerIcons[theme] || themeTriggerIcons.default;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ThemedButton
          variant="ghost"
          className={cn(
            "h-10 w-full rounded-lg transition-all duration-300 group flex items-center justify-center gap-2 px-3 truncate scale-105 shadow-lg border-2",
            currentTriggerStyles
          )}
        >
          <TriggerIcon {...triggerIconProps} />
          <span className={cn("font-medium", theme === "snes" ? "text-[#4040e0]" : "")}>
            {formatThemeName(theme)}
          </span>
          <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        </ThemedButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "glassmorphism border border-border/40 shadow-2xl rounded-xl p-2 min-w-[180px] max-h-[60vh] overflow-y-auto backdrop-blur-lg bg-background/80"
        )}
        side="bottom"
        align="end"
      >
        {THEMES.map((t) => {
          const { IconComponent: ItemIcon, props: itemIconProps = {} } =
            themeItemIcons[t] || themeItemIcons.default;
          const isCurrentTheme = t === theme;
          // Use theme directly for fortnite check in item specific styles
          const fortniteSelectedItem = theme === "fortnite" && isCurrentTheme;

          return (
            <DropdownMenuItem
              key={t}
              onClick={() => setTheme(t)}
              className={cn(
                "flex items-center gap-2 cursor-pointer rounded-lg px-2 py-2 text-sm transition-all duration-150 border-l-4 border-transparent",
                isCurrentTheme
                  ? fortniteSelectedItem // Use specific check for fortnite when selected
                    ? "bg-accent/80 text-black border-l-accent shadow-lg"
                    : "bg-accent/80 text-foreground border-l-accent shadow-lg"
                  : "hover:bg-accent/30 hover:text-foreground focus:bg-accent/30 focus:text-foreground"
              )}
            >
              <ItemIcon {...itemIconProps} />
              <span className="flex-1 truncate">{formatThemeName(t)}</span>
              {isCurrentTheme && <Check className="h-4 w-4 text-accent2 ml-2 shrink-0" />}
              {isCurrentTheme && (
                <span className="ml-auto text-xs opacity-50 shrink-0">Current</span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
