import fs from "fs";
import path from "path";

type AlgorithmCategory =
  | "sorting"
  | "searching"
  | "graph"
  | "dynamic-programming"
  | "string"
  | "data-structures";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  prerequisites: string[];
  implementations: {
    python: string;
    javascript: string;
  };
  quiz: QuizQuestion[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const algorithmList: Record<AlgorithmCategory, string[]> = {
  sorting: [
    "Bubble Sort",
    "Quick Sort",
    "Merge Sort",
    "Insertion Sort",
    "Selection Sort",
    "Heap Sort",
    "Counting Sort",
    "Radix Sort",
    "Bucket Sort",
    "Shell Sort",
    "Tim Sort",
  ],
  searching: [
    "Binary Search",
    "Linear Search",
    "Jump Search",
    "Interpolation Search",
    "Exponential Search",
    "Fibonacci Search",
  ],
  graph: [
    "Breadth-First Search",
    "Depth-First Search",
    "Dijkstra's Algorithm",
    "Bellman-Ford Algorithm",
    "Floyd-Warshall Algorithm",
    "Kruskal's Algorithm",
    "Prim's Algorithm",
    "Topological Sort",
    "Kosaraju's Algorithm",
    "Tarjan's Algorithm",
    "Articulation Points",
    "Bridges",
    "Strongly Connected Components",
    "Biconnected Components",
    "Eulerian Path",
    "Hamiltonian Path",
    "Johnson's Algorithm",
    "Ford-Fulkerson Algorithm",
    "Edmonds-Karp Algorithm",
    "Dinic's Algorithm",
    "Push-Relabel Algorithm",
    "Hopcroft-Karp Algorithm",
    "Kuhn's Algorithm",
    "Hungarian Algorithm",
    "Gale-Shapley Algorithm",
  ],
  "dynamic-programming": [
    "Knapsack Problem",
    "Longest Common Subsequence",
    "Longest Increasing Subsequence",
    "Matrix Chain Multiplication",
    "Coin Change Problem",
    "Edit Distance",
    "Rod Cutting",
    "Subset Sum Problem",
    "Partition Problem",
    "Word Break Problem",
    "Palindrome Partitioning",
    "Optimal Binary Search Tree",
    "Activity Selection",
    "Job Sequencing Problem",
    "Fractional Knapsack",
  ],
  string: [
    "KMP Algorithm",
    "Rabin-Karp Algorithm",
    "Boyer-Moore Algorithm",
    "Z Algorithm",
    "Manacher's Algorithm",
    "Aho-Corasick Algorithm",
    "Suffix Automaton",
  ],
  "data-structures": [
    "Trie",
    "Suffix Array",
    "Suffix Tree",
    "Fenwick Tree",
    "Segment Tree",
    "Binary Indexed Tree",
    "Sparse Table",
    "Disjoint Set Union",
    "Union Find",
    "Huffman Coding",
  ],
};

function generateTutorial(
  algorithm: string,
  category: AlgorithmCategory
): Tutorial {
  const id = algorithm.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const difficulty = getDifficulty(algorithm, category);
  const duration = getDuration(difficulty);
  const prerequisites = getPrerequisites(algorithm, category);

  return {
    id,
    title: algorithm,
    description: generateDescription(algorithm, category),
    videoUrl: `https://www.youtube.com/embed/${generateVideoId(algorithm)}`,
    difficulty,
    duration,
    prerequisites,
    implementations: {
      python: generatePythonImplementation(algorithm),
      javascript: generateJavaScriptImplementation(algorithm),
    },
    quiz: generateQuiz(algorithm, category),
  };
}

function getDifficulty(
  algorithm: string,
  category: AlgorithmCategory
): "beginner" | "intermediate" | "advanced" {
  // Basic sorting and searching algorithms are beginner level
  if (
    category === "sorting" &&
    ["Bubble Sort", "Insertion Sort", "Selection Sort"].includes(algorithm)
  ) {
    return "beginner";
  }
  if (
    category === "searching" &&
    ["Linear Search", "Binary Search"].includes(algorithm)
  ) {
    return "beginner";
  }

  // Most graph algorithms and advanced sorting are intermediate
  if (
    category === "graph" ||
    (category === "sorting" &&
      ["Quick Sort", "Merge Sort", "Heap Sort"].includes(algorithm))
  ) {
    return "intermediate";
  }

  // Everything else is advanced
  return "advanced";
}

function getDuration(difficulty: string): number {
  switch (difficulty) {
    case "beginner":
      return 15;
    case "intermediate":
      return 25;
    case "advanced":
      return 35;
    default:
      return 20;
  }
}

function getPrerequisites(
  algorithm: string,
  category: AlgorithmCategory
): string[] {
  const prereqs: string[] = [];

  // Add category-specific prerequisites
  if (category === "graph") {
    prereqs.push("breadth-first-search", "depth-first-search");
  }

  if (category === "dynamic-programming") {
    prereqs.push("knapsack-problem");
  }

  // Add algorithm-specific prerequisites
  if (algorithm === "Quick Sort") {
    prereqs.push("bubble-sort");
  }

  if (algorithm === "Merge Sort") {
    prereqs.push("quick-sort");
  }

  return prereqs;
}

function generateDescription(
  algorithm: string,
  category: AlgorithmCategory
): string {
  return `${algorithm} is a ${category} algorithm that ${getAlgorithmPurpose(
    algorithm,
    category
  )}. This tutorial will cover the theory, implementation, and applications of ${algorithm}.`;
}

function getAlgorithmPurpose(
  algorithm: string,
  category: AlgorithmCategory
): string {
  switch (category) {
    case "sorting":
      return "efficiently organizes data in a specific order";
    case "searching":
      return "finds the position of a target value within a sorted array";
    case "graph":
      return "solves problems related to graph traversal and optimization";
    case "dynamic-programming":
      return "solves complex problems by breaking them down into simpler subproblems";
    case "string":
      return "performs efficient string matching and manipulation";
    case "data-structures":
      return "provides efficient data organization and retrieval";
    default:
      return "solves a specific computational problem";
  }
}

function generateVideoId(algorithm: string): string {
  // This is a placeholder - in a real implementation, you would have actual video IDs
  return `video-${algorithm.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function generatePythonImplementation(algorithm: string): string {
  // This is a placeholder - in a real implementation, you would have actual implementations
  return `def ${algorithm.toLowerCase().replace(/[^a-z0-9]+/g, "_")}(input):
    # Implementation of ${algorithm}
    pass`;
}

function generateJavaScriptImplementation(algorithm: string): string {
  // This is a placeholder - in a real implementation, you would have actual implementations
  return `function ${algorithm
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")}(input) {
    // Implementation of ${algorithm}
}`;
}

function generateQuiz(
  algorithm: string,
  category: AlgorithmCategory
): QuizQuestion[] {
  return [
    {
      id: "time-complexity",
      question: `What is the time complexity of ${algorithm}?`,
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
      correctAnswer: getTimeComplexityAnswer(algorithm),
      explanation: `The time complexity of ${algorithm} is ${getTimeComplexityExplanation(
        algorithm
      )}.`,
    },
    {
      id: "space-complexity",
      question: `What is the space complexity of ${algorithm}?`,
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
      correctAnswer: getSpaceComplexityAnswer(algorithm),
      explanation: `The space complexity of ${algorithm} is ${getSpaceComplexityExplanation(
        algorithm
      )}.`,
    },
    {
      id: "application",
      question: `Which of the following is a common application of ${algorithm}?`,
      options: getApplicationOptions(algorithm, category),
      correctAnswer: 0,
      explanation: getApplicationExplanation(algorithm, category),
    },
  ];
}

function getTimeComplexityAnswer(algorithm: string): number {
  // This is a simplified version - in a real implementation, you would have accurate answers
  if (algorithm.includes("Sort")) return 3; // O(n log n)
  if (algorithm.includes("Search")) return 2; // O(n)
  return 4; // O(n²)
}

function getSpaceComplexityAnswer(algorithm: string): number {
  // This is a simplified version - in a real implementation, you would have accurate answers
  if (algorithm.includes("Sort")) return 2; // O(n)
  if (algorithm.includes("Search")) return 0; // O(1)
  return 2; // O(n)
}

function getTimeComplexityExplanation(algorithm: string): string {
  // This is a simplified version - in a real implementation, you would have accurate explanations
  if (algorithm.includes("Sort")) return "O(n log n) in the average case";
  if (algorithm.includes("Search")) return "O(n) in the worst case";
  return "O(n²) in the worst case";
}

function getSpaceComplexityExplanation(algorithm: string): string {
  // This is a simplified version - in a real implementation, you would have accurate explanations
  if (algorithm.includes("Sort")) return "O(n) for auxiliary space";
  if (algorithm.includes("Search")) return "O(1) as it uses constant space";
  return "O(n) for storing intermediate results";
}

function getApplicationOptions(
  algorithm: string,
  category: AlgorithmCategory
): string[] {
  const options = [
    "Database indexing",
    "Network routing",
    "Image processing",
    "Data compression",
    "Game development",
    "Web search engines",
  ];

  // Shuffle and return first 4 options
  return options.sort(() => Math.random() - 0.5).slice(0, 4);
}

function getApplicationExplanation(
  algorithm: string,
  category: AlgorithmCategory
): string {
  return `${algorithm} is commonly used in ${getApplicationContext(
    category
  )} due to its ${getAlgorithmStrength(algorithm)}.`;
}

function getApplicationContext(category: AlgorithmCategory): string {
  switch (category) {
    case "sorting":
      return "database systems and data processing";
    case "searching":
      return "search engines and data retrieval systems";
    case "graph":
      return "network routing and social network analysis";
    case "dynamic-programming":
      return "optimization problems and resource allocation";
    case "string":
      return "text processing and pattern matching";
    case "data-structures":
      return "data organization and retrieval systems";
    default:
      return "various computational problems";
  }
}

function getAlgorithmStrength(algorithm: string): string {
  if (algorithm.includes("Sort"))
    return "efficient data organization capabilities";
  if (algorithm.includes("Search")) return "fast search performance";
  return "optimal solution finding capabilities";
}

function main() {
  const tutorials: Record<AlgorithmCategory, Tutorial[]> = {} as Record<
    AlgorithmCategory,
    Tutorial[]
  >;

  // Generate tutorials for each category
  for (const [category, algorithms] of Object.entries(algorithmList)) {
    tutorials[category as AlgorithmCategory] = algorithms.map((algorithm) =>
      generateTutorial(algorithm, category as AlgorithmCategory)
    );
  }

  // Write tutorials to file
  const outputPath = path.join(__dirname, "../src/data/tutorials.json");
  fs.writeFileSync(outputPath, JSON.stringify(tutorials, null, 2));

  console.log(
    `Generated tutorials for ${
      Object.values(algorithmList).flat().length
    } algorithms`
  );
  console.log(`Output written to ${outputPath}`);
}

main();
