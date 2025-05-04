export type Pattern = {
  name: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
};

export type PatternCategory =
  | "Sorting"
  | "Graph"
  | "Dynamic Programming"
  | "Greedy";
