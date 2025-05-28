import { HelpModal } from "@/components/layouts/help/HelpModal";
import ThemeSelectorDropdown from "@/components/theme/ThemeSelectorDropdown";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useSessionProgress } from "@/hooks/useSessionProgress";

export function RightControls() {
  const { sessionProgress } = useSessionProgress();

  return (
    <div className="w-full p-4 space-y-4 bg-background/80 backdrop-blur-md border border-border/30 rounded-xl shadow-xl">
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full justify-center items-center">
        <div className="w-full sm:w-auto min-w-[120px] flex-1">
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
        </div>
        <div className="w-full sm:w-auto min-w-[120px] flex-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex-1 min-w-0 w-full">
                  <ThemeSelectorDropdown />
                </div>
              </TooltipTrigger>
              <TooltipContent>Change theme</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
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
