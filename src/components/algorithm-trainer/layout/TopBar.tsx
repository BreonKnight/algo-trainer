import { Button } from "../../ui/button";
import { AudioPlayer, Timer } from "../../audio/AudioPlayer";
import { HelpModal } from "../../help/HelpModal";
import { FaCog } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../../ui/tooltip";
import { useTheme } from "../../theme/theme-context";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  const theme = useTheme().theme;

  return (
    <div
      className={cn(
        "w-full mb-6 flex items-center justify-between gap-4 rounded-xl shadow-lg p-4 glassy-gradient-bg relative",
        className
      )}
    >
      {/* Left: Timer & AudioPlayer */}
      <div className="flex items-center gap-4">
        <Timer />
        <AudioPlayer />
      </div>

      {/* Right: Settings */}
      <div className="flex items-center gap-2">
        <HelpModal />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <FaCog className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={useTheme().toggleTheme}>
              Switch Theme
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
