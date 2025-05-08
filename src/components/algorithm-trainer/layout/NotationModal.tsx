import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-2xl font-mono">{notation.symbol}</span>
            <span>{notation.name}</span>
          </DialogTitle>
          <DialogDescription>{notation.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {notation.latex && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium">LaTeX Representation</h4>
              <code className="block p-2 bg-muted rounded-md text-sm">{notation.latex}</code>
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
        <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}
