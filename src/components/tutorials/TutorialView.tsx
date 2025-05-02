import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useTheme } from "../theme/theme-context";
import { cn } from "../../lib/utils";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  content: string;
}

export function TutorialView() {
  const [currentTutorial, setCurrentTutorial] = useState<Tutorial | null>(null);
  const { theme } = useTheme();

  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Tutorials</h2>
        {currentTutorial ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-md font-medium">{currentTutorial.title}</h3>
            <p>{currentTutorial.description}</p>
            <div className="prose dark:prose-invert max-w-none">
              {currentTutorial.content}
            </div>
            <Button
              onClick={() => setCurrentTutorial(null)}
              className={cn(
                "self-start",
                theme === "nord" ? "text-white" : "text-background"
              )}
            >
              Back to Tutorials
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Tutorial list will be populated here */}
          </div>
        )}
      </div>
    </Card>
  );
}
