import { Card } from "../ui/card";
import { pseudocodePatterns } from "@/lib/pseudocode-patterns";
import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "@/components/algorithm-trainer/types";

interface PatternCardProps {
  currentPattern: PatternKey;
}

export function PatternCard({ currentPattern }: PatternCardProps) {
  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#ff79c6] truncate flex-none">
        {currentPattern}
      </h2>
      <div className="flex-1 min-h-0 relative">
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
      </div>
    </Card>
  );
}
