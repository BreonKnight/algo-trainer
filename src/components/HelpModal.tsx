import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

export function HelpModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="bg-gradient-to-r from-[#50fa7b] via-[#bd93f9] to-[#ff79c6] hover:opacity-90 text-white font-bold px-4 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/20 hover:scale-105"
        >
          How to Use :)
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#6272a4] bg-[#282a36] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          <Dialog.Title className="text-lg font-semibold text-accent">
            How to Use Algorithm Trainer
          </Dialog.Title>
          <div className="space-y-4 text-main">
            <p>
              Algorithm Trainer is designed to help you practice and understand
              common algorithm patterns through interactive coding exercises.
            </p>
            <div className="space-y-2">
              <h3 className="font-medium text-accent3">Key Features:</h3>
              <ul className="list-disc pl-4 space-y-1">
                <li>Practice with real Python code in the built-in editor</li>
                <li>Test your solutions with the Python REPL</li>
                <li>View detailed pseudocode explanations</li>
                <li>
                  Switch between standard and Monster Hunter themed explanations
                </li>
                <li>Use the timer for timeboxed practice sessions</li>
                <li>Enjoy background music while coding</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-accent3">Getting Started:</h3>
              <ol className="list-decimal pl-4 space-y-1">
                <li>Select an algorithm pattern from the list</li>
                <li>Read the pseudocode explanation or Monster Hunter guide</li>
                <li>Implement your solution in the code editor</li>
                <li>Test your code using the Python REPL</li>
                <li>Check the solution when you're ready</li>
                <li>Please have fun and take things slow :)</li>
                <li>
                  If you have any questions or feedback, please contact me at{" "}
                  <a
                    href="mailto:sadlusive@protonmail.me"
                    className="text-accent2 hover:text-accent transition-colors underline"
                  >
                    sadlusive@protonmail.me
                  </a>
                </li>
              </ol>
            </div>
          </div>
          <Dialog.Close asChild>
            <Button
              variant="ghost"
              className="absolute right-4 top-4 text-secondary hover:text-main hover:bg-secondary/20"
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
