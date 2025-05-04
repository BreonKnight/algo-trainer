import { AudioPlayer } from "../../audio/AudioPlayer";
import { Timer } from "../../timer/Timer";
import { MediaCard } from "../../ui/media-card";
import { CenterInformaticsWidget } from "./CenterInformaticsWidget";
import { RightControls } from "./RightControls";
import { cn } from "@/lib/utils";

interface TopBarProps {
  className?: string;
}

export function TopBar({ className }: TopBarProps) {
  return (
    <div
      className={cn(
        "w-full mb-2 sm:mb-3 flex flex-col items-center justify-between gap-4 sm:gap-6 rounded-xl shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2),0_-8px_16px_-2px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4),0_-8px_16px_-2px_rgba(0,0,0,0.4)] p-3 sm:p-4 relative overflow-x-auto",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:via-transparent before:to-accent2/5 before:opacity-50",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] after:opacity-20",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50" />
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 relative z-10 min-w-0">
        {/* Left: Informatics Widget */}
        <div className="lg:w-auto min-w-0 p-1">
          <MediaCard className="w-full sm:w-auto max-w-md">
            <CenterInformaticsWidget />
          </MediaCard>
        </div>
        {/* Center: Timer & AudioPlayer */}
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-1 max-w-full">
          <MediaCard className="w-full sm:w-auto">
            <Timer />
          </MediaCard>
          <MediaCard className="w-full sm:w-auto">
            <AudioPlayer />
          </MediaCard>
        </div>
        {/* Right: Help & Theme Toggle */}
        <div className="lg:w-auto min-w-0">
          <RightControls />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl" />
    </div>
  );
}
