import { forwardRef } from "react";

import {
  ThemedDialog,
  ThemedDialogBody,
  ThemedDialogDescription,
  ThemedDialogHeader,
  ThemedDialogTitle,
} from "@/components/ui/themed-dialog";

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

export const NotationModal = forwardRef<HTMLDivElement, NotationModalProps>(function NotationModal(
  { isOpen, onClose, notation },
  ref
) {
  return (
    <ThemedDialog ref={ref} isOpen={isOpen} onClose={onClose} maxWidth="sm">
      <ThemedDialogHeader>
        <ThemedDialogTitle>
          <span className="text-4xl font-mono font-extrabold mr-2 text-[var(--accent2)]">
            {notation.symbol}
          </span>
          <span>{notation.name}</span>
        </ThemedDialogTitle>
        <ThemedDialogDescription>{notation.description}</ThemedDialogDescription>
      </ThemedDialogHeader>
      <ThemedDialogBody>
        {notation.latex && (
          <div className="space-y-2">
            <h4 className="text-base font-semibold mb-1 text-[var(--accent)]">
              LaTeX Representation
            </h4>
            <code className="block p-3 rounded-[var(--radius)] text-base font-mono border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--accent2)]">
              {notation.latex}
            </code>
          </div>
        )}
        {notation.examples && notation.examples.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-base font-semibold mb-1 text-[var(--accent)]">Examples</h4>
            <ul className="space-y-2">
              {notation.examples.map((example, index) => (
                <li
                  key={index}
                  className="px-3 py-2 rounded-[var(--radius)] font-medium border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-main)]"
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
        )}
      </ThemedDialogBody>
    </ThemedDialog>
  );
});
