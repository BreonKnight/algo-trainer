import styles from "@/styles/pseudocode.module.css";
import { PatternKey } from "./types";
import { monsterHunterExplanations } from "./monsterHunterExplanations";

interface MonsterHunterGuideProps {
  currentPattern: PatternKey;
}

export function MonsterHunterGuide({
  currentPattern,
}: MonsterHunterGuideProps) {
  const explanation = monsterHunterExplanations[currentPattern] || {
    title: "Monster Hunter Guide",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  };

  return (
    <div
      className={`${styles.pseudocodeContainer} w-full h-full overflow-hidden`}
    >
      <div
        className={`${styles.pseudocodeContent} text-sm sm:text-base w-full h-full overflow-y-auto`}
      >
        <div className="space-y-4 p-2">
          <div>
            <h3 className="text-lg font-semibold text-accent">
              {explanation.title}
            </h3>
            <p className="mt-1 text-main">{explanation.description}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-accent2">
              Hunting Example:
            </h4>
            <p className="mt-1 italic text-main">{explanation.example}</p>
          </div>

          <div>
            <h4 className="text-md font-medium text-accent2">Hunter's Tips:</h4>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {explanation.tips.map((tip, index) => (
                <li key={index} className="text-main">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

  "A Star Search": {
    title: "A Star Search (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Activity Selection": {
    title: "Activity Selection (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Articulation Points": {
    title: "Articulation Points (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Avl Tree": {
    title: "Avl Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "B Tree": {
    title: "B Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Backtracking": {
    title: "Backtracking (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Bellman Ford": {
    title: "Bellman Ford (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Bfs Linked List": {
    title: "Bfs Linked List (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Bfs": {
    title: "Bfs (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Binary Indexed Tree": {
    title: "Binary Indexed Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Binary Search On Answer": {
    title: "Binary Search On Answer (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Binary Search Tree": {
    title: "Binary Search Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Binary Search": {
    title: "Binary Search (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Bit Manipulation": {
    title: "Bit Manipulation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Bubble Sort": {
    title: "Bubble Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Bucket Sort": {
    title: "Bucket Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Chinese Remainder Theorem": {
    title: "Chinese Remainder Theorem (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Circular Linked List": {
    title: "Circular Linked List (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Counting Sort": {
    title: "Counting Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dfs Binary Tree": {
    title: "Dfs Binary Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dfs Linked List": {
    title: "Dfs Linked List (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dfs": {
    title: "Dfs (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Digit Dp": {
    title: "Digit Dp (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dijkstra": {
    title: "Dijkstra (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Divide And Conquer": {
    title: "Divide And Conquer (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dynamic Programming Coin Change": {
    title: "Dynamic Programming Coin Change (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dynamic Programming Fibonacci": {
    title: "Dynamic Programming Fibonacci (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dynamic Programming Iterative": {
    title: "Dynamic Programming Iterative (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dynamic Programming Pattern": {
    title: "Dynamic Programming Pattern (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Dynamic Programming": {
    title: "Dynamic Programming (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Exponential Search": {
    title: "Exponential Search (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Extended Euclidean Algorithm": {
    title: "Extended Euclidean Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Fast Fourier Transform": {
    title: "Fast Fourier Transform (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Fenwick Tree": {
    title: "Fenwick Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Floyd Cycle Detection": {
    title: "Floyd Cycle Detection (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Fractional Knapsack": {
    title: "Fractional Knapsack (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Articulation Points": {
    title: "Graph Articulation Points (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Basics": {
    title: "Graph Basics (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Bellman Ford": {
    title: "Graph Bellman Ford (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Bridges": {
    title: "Graph Bridges (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Dijkstra": {
    title: "Graph Dijkstra (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Floyd Warshall": {
    title: "Graph Floyd Warshall (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Implementation": {
    title: "Graph Implementation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Kosaraju": {
    title: "Graph Kosaraju (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Prim": {
    title: "Graph Prim (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Scc": {
    title: "Graph Scc (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph Topological Sort": {
    title: "Graph Topological Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Graph": {
    title: "Graph (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Activity Selection": {
    title: "Greedy Activity Selection (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Dinic": {
    title: "Greedy Dinic (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Edmonds Karp": {
    title: "Greedy Edmonds Karp (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Ford Fulkerson": {
    title: "Greedy Ford Fulkerson (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Fractional Knapsack": {
    title: "Greedy Fractional Knapsack (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Huffman Coding": {
    title: "Greedy Huffman Coding (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Hungarian": {
    title: "Greedy Hungarian (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Job Scheduling": {
    title: "Greedy Job Scheduling (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Kruskal": {
    title: "Greedy Kruskal (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy Prim": {
    title: "Greedy Prim (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Greedy": {
    title: "Greedy (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Grid Traversal": {
    title: "Grid Traversal (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Hash Table": {
    title: "Hash Table (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Heap Implementation": {
    title: "Heap Implementation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Heap Sort": {
    title: "Heap Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Heap": {
    title: "Heap (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Heavy Light Decomposition": {
    title: "Heavy Light Decomposition (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Huffman Coding": {
    title: "Huffman Coding (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Hungarian": {
    title: "Hungarian (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Insertion Sort": {
    title: "Insertion Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Interpolation Search": {
    title: "Interpolation Search (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Job Scheduling": {
    title: "Job Scheduling (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Jump Search Algorithm": {
    title: "Jump Search Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Kadanes Algorithm": {
    title: "Kadanes Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Knuth-Morris-Pratt": {
    title: "Knuth-Morris-Pratt (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Kruskals Algorithm": {
    title: "Kruskals Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Lca": {
    title: "Lca (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Linear Search": {
    title: "Linear Search (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Linked List": {
    title: "Linked List (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Manachers Algorithm": {
    title: "Manachers Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Chain Multiplication": {
    title: "Matrix Chain Multiplication (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Exponentiation": {
    title: "Matrix Exponentiation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Operations": {
    title: "Matrix Operations (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Spiral Recursive": {
    title: "Matrix Spiral Recursive (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Spiral Traversal": {
    title: "Matrix Spiral Traversal (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Traversal Recursive": {
    title: "Matrix Traversal Recursive (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Matrix Traversal": {
    title: "Matrix Traversal (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Maximum Bipartite Matching": {
    title: "Maximum Bipartite Matching (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Memoization": {
    title: "Memoization (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Merge Sort": {
    title: "Merge Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Miller Rabin Primality Test": {
    title: "Miller Rabin Primality Test (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Monotonic Queue": {
    title: "Monotonic Queue (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Monotonic Stack": {
    title: "Monotonic Stack (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Network Flow": {
    title: "Network Flow (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Null Pattern": {
    title: "Null Pattern (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Prefix Sum": {
    title: "Prefix Sum (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Prefix Sums": {
    title: "Prefix Sums (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Prime Factorization": {
    title: "Prime Factorization (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Prims Algorithm": {
    title: "Prims Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Probability Dp": {
    title: "Probability Dp (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Queue Implementation": {
    title: "Queue Implementation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Queue": {
    title: "Queue (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Quick Sort": {
    title: "Quick Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Quickselect": {
    title: "Quickselect (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Rabin Karp": {
    title: "Rabin Karp (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Radix Sort": {
    title: "Radix Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Recursion": {
    title: "Recursion (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Red Black Tree": {
    title: "Red Black Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Rotate Matrix": {
    title: "Rotate Matrix (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Segment Tree": {
    title: "Segment Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Selection Sort": {
    title: "Selection Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Sieve Of Atkin": {
    title: "Sieve Of Atkin (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Sieve Of Eratosthenes": {
    title: "Sieve Of Eratosthenes (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Sieve Of Sundaram": {
    title: "Sieve Of Sundaram (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Sliding Window": {
    title: "Sliding Window (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Stack Implementation": {
    title: "Stack Implementation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Stack Sort": {
    title: "Stack Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Stack": {
    title: "Stack (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "State Compression Dp": {
    title: "State Compression Dp (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "String": {
    title: "String (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Strongly Connected Components": {
    title: "Strongly Connected Components (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Suffix Array": {
    title: "Suffix Array (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Suffix Tree": {
    title: "Suffix Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Ternary Search Algorithm": {
    title: "Ternary Search Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Topological Sort": {
    title: "Topological Sort (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Tree Dp": {
    title: "Tree Dp (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Tree Implementation": {
    title: "Tree Implementation (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Tree": {
    title: "Tree (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Trie Operations": {
    title: "Trie Operations (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Trie": {
    title: "Trie (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Two Pointers": {
    title: "Two Pointers (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Two Sum Dict": {
    title: "Two Sum Dict (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Two Sum Two Pointers": {
    title: "Two Sum Two Pointers (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Two Sum": {
    title: "Two Sum (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Union Find": {
    title: "Union Find (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },

  "Z Algorithm": {
    title: "Z Algorithm (Monster Hunter Guide)",
    description: "No monster hunting guide available for this algorithm yet.",
    example: "Check back later for a monster-themed explanation!",
    tips: ["More monster hunting tips coming soon!"],
  },
