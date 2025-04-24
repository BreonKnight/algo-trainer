import { Card } from "../ui/card";
import { pseudocodePatterns } from "@/lib/pseudocode-patterns";
import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "@/components/algorithm-trainer/types";
import { MonsterHunterGuide } from "./MonsterHunterGuide";
import { useState } from "react";
import { Button } from "../ui/button";
import { Book, Sword } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PatternCardProps {
  currentPattern: PatternKey;
}

export function PatternCard({ currentPattern }: PatternCardProps) {
  const [showMonsterGuide, setShowMonsterGuide] = useState(false);

  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-[#ff79c6] truncate flex-none">
          {currentPattern}
        </h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="default"
                onClick={() => setShowMonsterGuide(!showMonsterGuide)}
                className="text-[#ff79c6] hover:text-[#ff79c6] hover:bg-[#6272a4]/20 p-2"
              >
                {showMonsterGuide ? (
                  <Book className="w-6 h-6" />
                ) : (
                  <Sword className="w-6 h-6" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {showMonsterGuide ? "Show Pseudocode" : "Show Monster Guide"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="flex-1 min-h-0 relative">
        {showMonsterGuide ? (
          <MonsterHunterGuide currentPattern={currentPattern} />
        ) : (
          <div className="absolute inset-0 overflow-y-auto">
            <div className={`${styles.pseudocodeContainer} w-full`}>
              <div
                className={`${styles.pseudocodeContent} text-sm sm:text-base w-full`}
                dangerouslySetInnerHTML={{
                  __html:
                    pseudocodePatterns.get(currentPattern) ||
                    "Pseudocode coming soon...",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
