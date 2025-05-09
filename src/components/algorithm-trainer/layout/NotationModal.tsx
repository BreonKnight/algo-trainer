import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTheme } from "@/components/theme/use-theme";
import { cn } from "@/lib/utils";

interface NotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notation: {
    symbol: string;
    name: string;
    description: string;
    examples?: string[];
    latex?: string;
  };
}

export function NotationModal({ isOpen, onClose, notation }: NotationModalProps) {
  const { theme } = useTheme();
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent
        className={cn(
          "sm:max-w-[425px] pointer-events-auto font-sans",
          theme === "light" || theme === "solarized"
            ? "bg-white text-main"
            : theme === "nord"
              ? "bg-nord0 text-white"
              : "bg-background text-accent2"
        )}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-sans">
            <span className="text-2xl font-mono">{notation.symbol}</span>
            <span>{notation.name}</span>
          </DialogTitle>
          <DialogDescription className="font-sans">{notation.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 font-sans">
          {notation.latex && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">LaTeX Representation</h4>
              <code className="block p-2 bg-muted rounded-md text-sm font-mono">
                {notation.latex}
              </code>
            </div>
          )}
          {notation.examples && notation.examples.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Examples</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {notation.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
