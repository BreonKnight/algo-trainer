import { PatternKey } from "./types";

export const monsterHunterExplanations: Partial<
  Record<
    PatternKey,
    {
      title: string;
      description: string;
      example: string;
      tips: string[];
    }
  >
> = {
  "Sliding Window": {
    title: "Sliding Window Monster Hunter",
    description:
      "The Sliding Window Monster Hunter is a master of tracking and maintaining a window of monsters. It uses a fixed-size window to efficiently hunt monsters in a sequence, perfect for problems where you need to find a subarray or substring that meets certain criteria.",
    example:
      "When hunting for the maximum number of monsters you can capture in a sequence without repeating any monster types, the Sliding Window Monster Hunter keeps track of the monsters in its current window and expands or contracts the window based on the monster types it encounters.",
    tips: [
      "Use two pointers to represent the window boundaries",
      "Keep track of the monsters in the current window using a map or set",
      "Expand the window when you find a new unique monster",
      "Contract the window when you encounter a duplicate monster",
      "Update your maximum count whenever you find a valid window",
    ],
  },
  "Two Pointers": {
    title: "Two Pointers Monster Hunter",
    description:
      "The Two Pointers Monster Hunter is an expert at using two pointers to efficiently track and hunt monsters in a sequence. It's particularly effective when you need to find pairs of monsters that meet certain criteria or when you need to manipulate a sequence of monsters in place.",
    example:
      "When hunting for pairs of monsters that sum to a specific value, the Two Pointers Monster Hunter starts with one pointer at the beginning and one at the end of the sequence, moving them inward based on the sum of the monsters they're pointing to.",
    tips: [
      "Use two pointers to traverse the sequence from different ends",
      "Move the pointers based on the comparison of their values",
      "Keep track of the best solution found so far",
      "Consider sorting the sequence first if order doesn't matter",
      "Be careful with pointer movement to avoid missing valid pairs",
    ],
  },
  "Floyd Cycle Detection": {
    title: "Fast and Slow Pointers Monster Hunter",
    description:
      "The Fast and Slow Pointers Monster Hunter is a master of detecting cycles and finding middle points in monster sequences. It uses two pointers moving at different speeds to efficiently solve problems involving cycles, palindromes, or finding middle elements.",
    example:
      "When hunting for a cycle in a sequence of monsters where each monster points to another monster, the Fast and Slow Pointers Monster Hunter uses a fast pointer that moves two steps at a time and a slow pointer that moves one step at a time. If they meet, there's a cycle!",
    tips: [
      "Use a fast pointer that moves two steps and a slow pointer that moves one step",
      "Initialize both pointers at the start of the sequence",
      "Check if the pointers meet to detect cycles",
      "Use the meeting point to find the start of the cycle",
      "Be careful with null checks when moving pointers",
    ],
  },
  "Topological Sort": {
    title: "Topological Sort Monster Hunter",
    description:
      "The Topological Sort Monster Hunter is an expert at ordering monsters based on their dependencies. It's perfect for problems involving task scheduling or course prerequisites.",
    example:
      "When hunting for a valid order to complete monster training courses with prerequisites, the Topological Sort Monster Hunter builds a graph of dependencies and uses DFS or BFS to find a valid order.",
    tips: [
      "Build an adjacency list and in-degree count",
      "Use a queue for BFS or recursion for DFS",
      "Start with nodes that have no incoming edges",
      "Remove edges as you process nodes",
      "Check for cycles that would make sorting impossible",
    ],
  },
};
