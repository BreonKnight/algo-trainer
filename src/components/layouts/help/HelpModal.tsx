import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

import { useTheme } from "@/components/theme/use-theme";
import { Button } from "@/components/ui/button";
import { ThemedButton } from "@/components/ui/themed-button";

import { cn } from "@algo-trainer/shared/utils/common";

export const HelpModal = React.forwardRef<HTMLButtonElement, {}>((_props, ref) => {
  const { theme } = useTheme();

  const buttonClass = (() => {
    if (theme === "dracula")
      return "bg-gradient-to-r from-[var(--accent2)] via-[var(--accent3)] to-[var(--accent)] text-main";
    if (theme === "kingdom-hearts")
      return "bg-gradient-to-r from-[var(--bg-main)] via-[var(--bg-secondary)] to-[var(--bg-main)] text-main border-2 border-[var(--accent)] shadow-md";
    if (theme === "fortnite")
      return "bg-gradient-to-r from-[var(--accent2)] via-[var(--accent)] via-[var(--accent3)] to-[var(--accent4)] text-main border-2 border-[var(--accent)] shadow-md";
    if (theme === "light")
      return "bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 text-black";
    if (theme === "solarized")
      return "bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 text-black";
    return "bg-gradient-to-r from-gray-200 to-gray-400 text-black";
  })();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ThemedButton
          ref={ref}
          variant="ghost"
          size="sm"
          className={cn(
            buttonClass,
            "font-medium text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20 hover:scale-105 hover:opacity-90 min-w-[100px]"
          )}
        >
          <span className="font-medium whitespace-nowrap">How to Use</span>
        </ThemedButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-md translate-x-[-50%] translate-y-[-50%] gap-3 border border-secondary bg-main p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <div className="flex justify-between items-start w-full">
            <Dialog.Title className="text-lg font-semibold text-accent">
              How to Use Algorithm Trainer
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 border border-secondary/20 bg-secondary/10 hover:bg-secondary/20 text-main/70 hover:text-accent2 transition-all duration-200 hover:scale-105 focus-visible:ring-1 focus-visible:ring-accent2 flex items-center justify-center ml-2"
              >
                <span className="sr-only">Close</span>
                <span className="h-5 w-5 block" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            A guide to using the Algorithm Trainer application, including quick start instructions,
            features, and keyboard shortcuts.
          </Dialog.Description>
          <div className="space-y-3 text-main">
            <p className="text-main/80 text-sm leading-relaxed">
              Master algorithms, systems design, and computer science through interactive learning.
              Choose from various topics, practice with real code, and track your progress.
            </p>
            <div className="space-y-2">
              <h3 className="font-medium text-accent3">Available Topics:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-accent2 font-medium">📚 Learning</span>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1 text-main">
                    <li>Algorithm Trainer</li>
                    <li>Algorithm Guide</li>
                    <li>Python Techniques</li>
                    <li>Systems Design</li>
                    <li>CS Math</li>
                  </ul>
                </div>
                <div>
                  <span className="text-accent2 font-medium">🎯 Practice</span>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1 text-main">
                    <li>Interactive Practice</li>
                    <li>Algorithm Comparison</li>
                    <li>Progress Tracking</li>
                    <li>Tutorials</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-accent3">Features:</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-accent2 font-medium">🏆 Progress System</span>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1 text-main">
                    <li>Track learning progress</li>
                    <li>View achievements</li>
                    <li>Daily practice streaks</li>
                    <li>Pattern completion</li>
                  </ul>
                </div>
                <div>
                  <span className="text-accent2 font-medium">🎮 Learning Tools</span>
                  <ul className="list-disc pl-4 space-y-0.5 mt-1 text-main">
                    <li>Interactive Python REPL</li>
                    <li>Focus timer</li>
                    <li>Multiple themes</li>
                    <li>Keyboard shortcuts</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-accent3">Editor Shortcuts:</h3>
              <ul className="list-disc pl-4 space-y-0.5 text-main/90 text-sm">
                <li>
                  <b>Ctrl+Enter</b>: Run code
                </li>
                <li>
                  <b>Ctrl+Shift+A</b>: Show answer
                </li>
                <li>
                  <b>Ctrl+Shift+[</b>: Previous pattern
                </li>
                <li>
                  <b>Ctrl+Shift+]</b>: Next pattern
                </li>
                <li>
                  <b>Ctrl+Shift+R</b>: Random pattern
                </li>
                <li>
                  <b>Ctrl+Shift+C</b>: Copy code
                </li>
                <li>
                  <b>Ctrl++</b> / <b>Ctrl+-</b>: Font size
                </li>
              </ul>
            </div>
            <div className="text-xs text-main/70 mt-2 flex items-center justify-between">
              <span>
                Questions or feedback?{" "}
                <a
                  href="mailto:sadlusive@protonmail.me"
                  className="text-accent2 hover:text-accent transition-colors underline"
                >
                  Contact me
                </a>
              </span>
              <span className="text-main/60">Version 1.0.0</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});

HelpModal.displayName = "HelpModal";
