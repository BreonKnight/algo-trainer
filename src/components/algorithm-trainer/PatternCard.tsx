import { Card } from "../ui/card";
import { pseudocodePatterns } from "@/lib/pseudocode-patterns";
import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "@/components/algorithm-trainer/types";
import { MonsterHunterGuide } from "./MonsterHunterGuide";
import { useState } from "react";
import { Button } from "../ui/button";
import { Book, Sword, ChevronDown, ChevronUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { AlgorithmSelector } from "./AlgorithmSelector";

interface PatternCardProps {
  currentPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
}

// Pattern category mapping
const patternCategories: Record<string, string[]> = {
  Sorting: [
    "Quick Sort",
    "Heap Sort",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Stack Sort",
  ],
  Searching: [
    "Binary Search",
    "Binary Search on Answer",
    "Linear Search",
    "Two Sum",
    "Two Sum Dict",
  ],
  "Graph Algorithms": [
    "DFS",
    "BFS",
    "Dijkstra",
    "Topological Sort",
    "Graph",
    "Floyd Cycle Detection",
  ],
  "String Algorithms": [
    "Rabin-Karp",
    "Knuth-Morris-Pratt",
    "Manacher's Algorithm",
    "Z-Algorithm",
  ],
  "Data Structures": [
    "Linked List",
    "Circular Linked List",
    "Binary Search Tree",
    "Heap Implementation",
    "Trie",
    "Hash Table",
    "Graph",
  ],
  "Dynamic Programming": [
    "Dynamic Programming",
    "Dynamic Programming Fibonacci",
    "Dynamic Programming Iterative",
    "Dynamic Programming Coin Change",
    "Kadane's Algorithm",
  ],
  Techniques: [
    "Greedy",
    "Backtracking",
    "Sliding Window",
    "Two Pointers",
    "Bit Manipulation",
    "Prefix Sum",
    "Matrix Traversal",
    "Matrix Spiral Traversal",
  ],
};

// Get category for a pattern
const getPatternCategory = (pattern: string): string => {
  for (const [category, patterns] of Object.entries(patternCategories)) {
    if (patterns.includes(pattern)) {
      return category;
    }
  }
  return "Other";
};

// Get color for a category
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    Sorting: "text-[#ff79c6]",
    Searching: "text-[#50fa7b]",
    "Graph Algorithms": "text-[#8be9fd]",
    "String Algorithms": "text-[#bd93f9]",
    "Data Structures": "text-[#ffb86c]",
    "Dynamic Programming": "text-[#ff5555]",
    Techniques: "text-[#f1fa8c]",
    Other: "text-[#6272a4]",
  };
  return colors[category] || colors["Other"];
};

export function PatternCard({
  currentPattern,
  onPatternChange,
}: PatternCardProps) {
  const [showMonsterGuide, setShowMonsterGuide] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const category = getPatternCategory(currentPattern);
  const categoryColor = getCategoryColor(category);

  return (
    <Card className="p-4 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex flex-col">
            <h2
              className={`text-base sm:text-lg font-semibold ${categoryColor} truncate flex-none`}
            >
              {currentPattern}
            </h2>
            <span className="text-xs text-[#6272a4]">{category}</span>
          </div>
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
          <Button
            variant="ghost"
            size="default"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#6272a4] hover:text-[#6272a4] hover:bg-[#6272a4]/20 p-2"
          >
            {isExpanded ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </Button>
        </div>
        <div className="w-full sm:w-auto">
          <AlgorithmSelector
            currentPattern={currentPattern}
            onPatternChange={onPatternChange}
          />
        </div>
      </div>

      <div className="flex-1 min-h-0 relative">
        {isExpanded &&
          (showMonsterGuide ? (
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
          ))}
      </div>
    </Card>
  );
}
