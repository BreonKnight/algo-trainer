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
        "w-full mb-2 sm:mb-3 rounded-xl bg-background/95 p-3 sm:p-4 relative",
        "shadow-md border border-border/50",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-accent2 to-accent opacity-50 z-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        {/* Informatics Widget */}
        <div className="w-full flex justify-center">
          <MediaCard className="w-full max-w-md">
            <CenterInformaticsWidget />
          </MediaCard>
        </div>
        {/* Timer */}
        <div className="w-full flex justify-center">
          <MediaCard className="w-full max-w-md">
            <Timer />
          </MediaCard>
        </div>
        {/* Audio Player */}
        <div className="w-full flex justify-center">
          <MediaCard className="w-full max-w-md">
            <AudioPlayer />
          </MediaCard>
        </div>
        {/* Controls */}
        <div className="w-full flex justify-center">
          <MediaCard className="w-full max-w-md">
            <RightControls />
          </MediaCard>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl z-0" />
    </div>
  );
}
