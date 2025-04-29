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
import { useTheme } from "@/components/ThemeProvider";

// Define the type for pseudocodePatterns
type PseudocodePatterns = Record<string, string | (() => JSX.Element)>;

// Type assertion for the imported pseudocodePatterns
const typedPseudocodePatterns =
  pseudocodePatterns as unknown as PseudocodePatterns;

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
    "Tree",
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
    Sorting: "text-accent",
    Searching: "text-accent2",
    "Graph Algorithms": "text-accent2",
    "String Algorithms": "text-accent3",
    "Data Structures": "text-accent",
    "Dynamic Programming": "text-accent",
    Techniques: "text-accent3",
    Other: "text-secondary",
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
  const { theme } = useTheme();
  const isLight = theme === "light" || theme === "solarized";

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col">
      <div className="mb-2">
        <h2
          className={`text-base sm:text-lg font-semibold truncate flex-none ${
            theme === "nord"
              ? "text-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
          }`}
          style={
            theme === "nord"
              ? undefined
              : {
                  backgroundImage:
                    "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                }
          }
        >
          {currentPattern}
        </h2>
        <span className={theme === "nord" ? "text-white/70" : "text-secondary"}>
          {category}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="default"
                  onClick={() => setShowMonsterGuide(!showMonsterGuide)}
                  className="text-accent hover:text-accent hover:bg-secondary/20 p-2"
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
            className="text-secondary hover:text-secondary hover:bg-secondary/20 p-2"
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

      <div className="flex-1 min-h-0 relative overflow-hidden">
        {isExpanded &&
          (showMonsterGuide ? (
            <div className="absolute inset-0 overflow-y-auto">
              <MonsterHunterGuide currentPattern={currentPattern} />
            </div>
          ) : (
            <div className="absolute inset-0 overflow-y-auto">
              <div className={`${styles.pseudocodeContainer} w-full`}>
                <div
                  className={`${styles.pseudocodeContent} text-sm sm:text-base w-full text-main`}
                >
                  {(() => {
                    const pseudo = typedPseudocodePatterns[currentPattern];
                    if (typeof pseudo === "function") {
                      return pseudo();
                    } else {
                      return (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: pseudo || "Pseudocode coming soon...",
                          }}
                        />
                      );
                    }
                  })()}
                </div>
              </div>
            </div>
          ))}
      </div>
    </Card>
  );
}
