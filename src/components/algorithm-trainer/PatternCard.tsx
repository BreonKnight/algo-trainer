import { Card } from "../ui/card";
import { pseudocodePatterns } from "@/lib/pseudocode";
import { patternNameMapping } from "@/lib/pseudocode/utils/pattern-mapping";
import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "@/components/algorithm-trainer/types";
import { MonsterHunterGuide } from "./MonsterHunterGuide";
import { useState, useEffect, useRef } from "react";
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
    "Ternary Search",
    "Jump Search",
    "Exponential Search",
    "Interpolation Search",
    "Fibonacci Search",
  ],
  "Graph Algorithms": [
    "DFS",
    "BFS",
    "Dijkstra",
    "Topological Sort",
    "Graph",
    "Floyd Cycle Detection",
    "Articulation Points",
    "Graph Dijkstra",
    "Graph Kosaraju",
    "Network Flow",
    "Strongly Connected Components",
    "Graph Articulation Points",
    "Graph Bridges",
    "Prim's Algorithm",
    "Kruskal's Algorithm",
    "Floyd-Warshall",
    "Bellman-Ford",
    "A* Search",
    "A Star Search",
  ],
  "String Algorithms": [
    "Rabin-Karp",
    "Knuth-Morris-Pratt",
    "Manacher's Algorithm",
    "Z Algorithm",
    "KMP Algorithm",
    "Suffix Tree",
    "Suffix Array",
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
    "Stack Implementation",
    "Queue Implementation",
    "Monotonic Stack",
    "Monotonic Queue",
    "B Tree",
    "AVL Tree",
    "Red Black Tree",
    "Union Find",
    "Fenwick Tree",
    "Segment Tree",
  ],
  "Dynamic Programming": [
    "Dynamic Programming",
    "Dynamic Programming Fibonacci",
    "Dynamic Programming Iterative",
    "Dynamic Programming Coin Change",
    "Kadane's Algorithm",
    "State Compression DP",
    "Digit DP",
    "Tree DP",
    "Probability DP",
    "Knapsack",
    "Matrix Chain Multiplication",
    "Matrix Exponentiation",
    "Memoization",
  ],
  "Tree Algorithms": ["Heavy Light Decomposition", "LCA"],
  "Matrix Algorithms": [
    "Matrix Operations",
    "Matrix Traversal",
    "Matrix Traversal Recursive",
    "Matrix Spiral Traversal",
    "Matrix Spiral Recursive",
    "Grid Traversal",
  ],
  "Number Theory": [
    "Extended Euclidean",
    "Chinese Remainder Theorem",
    "Sieve of Eratosthenes",
  ],
  Techniques: [
    "Greedy",
    "Backtracking",
    "Sliding Window",
    "Two Pointers",
    "Bit Manipulation",
    "Prefix Sum",
    "Prefix Sums",
    "Divide and Conquer",
    "Quickselect",
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

export function PatternCard({
  currentPattern,
  onPatternChange,
}: PatternCardProps) {
  const [showMonsterGuide, setShowMonsterGuide] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const category = getPatternCategory(currentPattern);
  const { theme } = useTheme();
  const [descHeight, setDescHeight] = useState(300);
  const descRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setDescHeight(300);
  }, [currentPattern]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPseudocodePattern = (patternName: string) => {
    const mappedName = patternNameMapping[patternName] || patternName;
    return typedPseudocodePatterns[mappedName];
  };

  const pseudo = getPseudocodePattern(currentPattern);

  return (
    <Card className="p-4 bg-secondary border-text-secondary w-full h-full flex flex-col overflow-hidden">
      <div className="flex-none mb-2">
        <h2
          className={
            `text-main text-base sm:text-lg md:text-xl font-semibold truncate flex-none leading-relaxed` +
            (theme === "nord"
              ? " text-white"
              : " text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]")
          }
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
        <span
          className={
            theme === "nord"
              ? "text-white/70"
              : "text-secondary text-sm sm:text-base"
          }
        >
          {category}
        </span>
      </div>
      <div className="flex-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
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

      <div className="flex-1 min-h-0 overflow-hidden">
        {isExpanded &&
          (showMonsterGuide ? (
            <div className="h-full overflow-hidden">
              <MonsterHunterGuide currentPattern={currentPattern} />
            </div>
          ) : (
            <div className="h-full flex flex-col overflow-hidden">
              <div
                ref={descRef}
                className={`${styles.pseudocodeContainer} flex-1 w-full bg-main/90 rounded-xl`}
                style={{
                  height: isDesktop ? descHeight : "300px",
                  minHeight: isDesktop ? "0" : "300px",
                }}
              >
                <div className="h-full w-full overflow-y-auto">
                  <div
                    className={`${styles.pseudocodeContent} text-sm sm:text-base w-full text-main leading-relaxed p-4`}
                  >
                    {(() => {
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
              {/* Vertical resize handle */}
              <div
                className="flex-none w-full h-3 cursor-row-resize flex items-center justify-center group"
                style={{ userSelect: "none" }}
                onMouseDown={(e) => {
                  if (!isDesktop) return;
                  const startY = e.clientY;
                  const startHeight = descRef.current?.offsetHeight || 0;
                  const maxHeight = 800; // Increased max height
                  const onMove = (moveEvent: MouseEvent) => {
                    const delta = moveEvent.clientY - startY;
                    const newHeight = Math.max(
                      300,
                      Math.min(startHeight + delta, maxHeight)
                    );
                    setDescHeight(newHeight);
                  };
                  const onUp = () => {
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("mouseup", onUp);
                  };
                  window.addEventListener("mousemove", onMove);
                  window.addEventListener("mouseup", onUp);
                }}
              >
                <div className="w-12 h-1.5 rounded bg-accent2/40 group-hover:bg-accent2/70 transition" />
              </div>
            </div>
          ))}
      </div>
    </Card>
  );
}
