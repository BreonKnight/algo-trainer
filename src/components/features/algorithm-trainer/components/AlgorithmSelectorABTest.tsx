import { PatternKey } from '@algo-trainer/shared/types/algorithm-types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AlgorithmSelectorABTestProps {
  currentPattern: PatternKey;
  onPatternChange: (pattern: PatternKey) => void;
}

const algorithmCategories = {
  "Sorting Algorithms": [
    "Quick Sort",
    "Merge Sort",
    "Stack Sort",
    "Heap Sort",
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
  ],
  "Search Algorithms": ["Binary Search", "Binary Search on Answer", "Linear Search"],
  "Dynamic Programming": [
    "Dynamic Programming",
    "Dynamic Programming Fibonacci",
    "Dynamic Programming Iterative",
    "Coin Change",
  ],
  "Greedy Algorithms": [
    "Greedy",
    "Greedy Activity Selection",
    "Greedy Fractional Knapsack",
    "Greedy Job Scheduling",
    "Greedy Huffman Coding",
    "Greedy Dijkstra",
  ],
  "Graph Algorithms": [
    "DFS",
    "DFS Linked List",
    "DFS (Binary Tree)",
    "BFS",
    "BFS Linked List",
    "Topological Sort",
  ],
  "Data Structures": [
    "Stack Implementation",
    "Queue Implementation",
    "Linked List",
    "Circular Linked List",
    "Hash Table",
    "Graph",
    "Tree",
    "Binary Search Tree",
    "Heap Implementation",
    "Trie",
  ],
  "Array Techniques": [
    "Two Sum",
    "Two Sum Dictionary",
    "Two Sum Two Pointers",
    "Sliding Window",
    "Two Pointers",
    "Prefix Sum",
    "Kadane's Algorithm",
  ],
  "String Algorithms": ["Rabin-Karp", "KMP Algorithm", "Manacher's Algorithm", "Z Algorithm"],
  "Matrix Operations": [
    "Matrix Traversal",
    "Matrix Traversal Recursive",
    "Matrix Spiral Traversal",
    "Matrix Spiral Recursive",
  ],
  "Other Algorithms": [
    "Backtracking",
    "Bit Manipulation",
    "Monotonic Stack",
    "Monotonic Queue",
    "Floyd Cycle Detection",
    "Recursion",
    "Divide and Conquer",
  ],
};

export function AlgorithmSelectorABTest({
  currentPattern,
  onPatternChange,
}: AlgorithmSelectorABTestProps) {
  //const patterns = oldPatterns; // or newPatterns

  return (
    <Select value={currentPattern} onValueChange={onPatternChange}>
      <SelectTrigger className="w-full bg-main border-secondary text-main hover:bg-main/80">
        <SelectValue placeholder="Select an algorithm" />
      </SelectTrigger>
      <SelectContent
        className="bg-main border-secondary text-main max-h-[300px] overflow-y-auto w-[var(--radix-select-trigger-width)] p-1"
        position="popper"
        side="bottom"
        align="start"
        sideOffset={4}
        alignOffset={0}
        avoidCollisions={true}
      >
        {Object.entries(algorithmCategories).map(([category, algorithms]) => (
          <SelectGroup key={category} className="px-1">
            <SelectLabel className="text-accent sticky top-0 bg-main/80 backdrop-blur-sm py-2 z-10 px-2">
              {category}
            </SelectLabel>
            {algorithms.map((algorithm) => (
              <SelectItem
                key={algorithm}
                value={algorithm}
                className="text-main hover:bg-[color:var(--accent3)]/20 focus:bg-[color:var(--accent3)]/20 hover:text-[color:var(--text-selected-dark)] focus:text-[color:var(--text-selected-dark)] data-[state=selected]:bg-[color:var(--accent3)]/40 data-[state=selected]:text-[color:var(--text-selected-dark)] data-[state=selected]:font-bold truncate px-2 py-1.5 rounded-sm cursor-pointer"
              >
                {algorithm}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
