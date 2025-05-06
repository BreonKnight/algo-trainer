import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import GamificationService, { UserProgress } from "../../lib/gamification";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import {
  ListChecks,
  Brain,
  Code2,
  GraduationCap,
  Target,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  name: string;
  keywords?: string[];
  algorithms: {
    name: string;
    what: string;
    why: string;
    keywords?: string[];
  }[];
}

const categories: Category[] = [
  {
    name: "Sorting & Searching",
    keywords: ["sort", "order", "search", "find", "binary", "sorted"],
    algorithms: [
      {
        name: "QuickSort",
        what: "Divide-and-conquer, partition around a pivot.",
        why: "It's the go-to 'fast sort,' average O(n log n).",
        keywords: ["partition", "pivot", "divide and conquer", "recursion", "in-place"],
      },
      {
        name: "MergeSort",
        what: "Recursively split, then merge sorted halves.",
        why: "Stable sort, guaranteed O(n log n), great for linked lists.",
        keywords: ["merge", "divide and conquer", "recursion", "stable", "auxiliary array"],
      },
      {
        name: "HeapSort",
        what: "Build a max-heap, then extract max repeatedly.",
        why: "In-place O(n log n) with no recursion.",
        keywords: ["heap", "max-heap", "extract", "in-place", "heapify"],
      },
      {
        name: "Binary Search",
        what: "Search a sorted array by halving the search space.",
        why: "Prerequisite for a ton of problems; O(log n).",
        keywords: ["sorted", "O(log n)", "midpoint", "search", "left/right", "bounds"],
      },
    ],
  },
  {
    name: "Data Structures & Traversals",
    keywords: ["tree", "graph", "BFS", "DFS", "traverse", "connected"],
    algorithms: [
      {
        name: "Binary Tree Traversals (DFS/BFS)",
        what: "Pre-/In-/Post-order and Level-order.",
        why: "Foundation for any tree/graph problem.",
        keywords: [
          "tree",
          "preorder",
          "inorder",
          "postorder",
          "level order",
          "recursion",
          "queue",
          "stack",
        ],
      },
      {
        name: "Graph Traversals (DFS & BFS)",
        what: "Explore nodes layer by layer (BFS) or branch-by-branch (DFS).",
        why: "Build to shortest paths, connectivity, cycles.",
        keywords: ["graph", "BFS", "DFS", "visited", "queue", "stack", "cycle", "connected"],
      },
      {
        name: "Union-Find (Disjoint Set)",
        what: "Track connectivity components with path compression.",
        why: "Essential for Kruskal's MST, cycle detection.",
        keywords: ["union", "find", "connected components", "path compression", "parent", "set"],
      },
    ],
  },
  {
    name: "Greedy Algorithms",
    keywords: ["minimum", "maximum", "earliest", "latest", "schedule", "optimal"],
    algorithms: [
      {
        name: "Interval Scheduling / Activity Selection",
        what: "Pick the next job that finishes earliest.",
        why: "Simple greedy choice proof, often in scheduling problems.",
        keywords: ["interval", "schedule", "earliest finish", "greedy", "overlap", "sort by end"],
      },
      {
        name: "Huffman Coding",
        what: "Build a variable-length prefix code using a min-heap.",
        why: "Classic example of greedy optimality.",
        keywords: ["prefix code", "min-heap", "frequency", "tree", "encoding", "compression"],
      },
    ],
  },
  {
    name: "Dynamic Programming",
    keywords: ["subproblem", "overlap", "memo", "cache", "ways", "min/max"],
    algorithms: [
      {
        name: "Longest Increasing Subsequence (LIS)",
        what: "O(n log n) patience-sorting approach.",
        why: "Teaches patience sorting + binary search synergy.",
        keywords: ["increasing", "subsequence", "DP", "binary search", "patience sorting"],
      },
      {
        name: "0/1 Knapsack",
        what: "Decide include/exclude items for max value.",
        why: "Core DP pattern for bounded choices.",
        keywords: ["knapsack", "weight", "value", "DP", "include/exclude", "capacity"],
      },
      {
        name: "Coin Change / Minimum Path Sum",
        what: "Build up solutions from smaller subproblems.",
        why: "Frequent 'DP form' practice.",
        keywords: ["coin", "change", "min coins", "DP", "ways", "sum", "grid"],
      },
      {
        name: "Edit Distance",
        what: "Minimum edits (insert/delete/replace) between strings.",
        why: "String DP classic.",
        keywords: ["edit", "distance", "insert", "delete", "replace", "DP", "string"],
      },
    ],
  },
  {
    name: "Backtracking & Recursion",
    keywords: ["all combinations", "all permutations", "choices", "backtrack", "recursively"],
    algorithms: [
      {
        name: "Permutations & Combinations",
        what: "Generate all orderings/subsets.",
        why: "Base for many constraint problems.",
        keywords: [
          "permutation",
          "combination",
          "backtrack",
          "choices",
          "recursion",
          "all possible",
        ],
      },
      {
        name: "N-Queens",
        what: "Place queens safely via recursion + pruning.",
        why: "Teaches board representations and pruning heuristics.",
        keywords: ["n-queens", "board", "backtrack", "prune", "row/col/diag", "recursion"],
      },
      {
        name: "Sudoku Solver",
        what: "Recursively fill cells, backtrack on conflicts.",
        why: "Real-world–style constraint satisfaction.",
        keywords: ["sudoku", "backtrack", "constraint", "fill", "recursion", "prune"],
      },
    ],
  },
  {
    name: "Advanced Structures & Algorithms",
    keywords: ["prefix", "range", "interval", "shortest path", "heap", "priority queue"],
    algorithms: [
      {
        name: "Trie (Prefix Tree)",
        what: "Character-by-character tree for strings.",
        why: "Fast prefix searches, autocomplete.",
        keywords: ["trie", "prefix", "tree", "insert", "search", "autocomplete"],
      },
      {
        name: "Segment Tree / Fenwick (BIT)",
        what: "Range queries & updates in O(log n).",
        why: "Key for interval and prefix-sum problems.",
        keywords: ["segment tree", "fenwick", "range query", "update", "prefix sum", "log n"],
      },
      {
        name: "Dijkstra's & A* Search",
        what: "Shortest paths with priority queues (and heuristics).",
        why: "Graph weights / heuristics—common in 'hard' tier.",
        keywords: [
          "shortest path",
          "priority queue",
          "dijkstra",
          "A*",
          "heuristic",
          "graph",
          "weights",
        ],
      },
    ],
  },
];

export default function AlgoGuide() {
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
  const [hoveredAlgorithm, setHoveredAlgorithm] = useState<string | null>(null);

  useEffect(() => {
    const gamificationService = GamificationService.getInstance();
    setUserProgress(gamificationService.getUserProgress());

    const handleProgressUpdate = (progress: UserProgress) => {
      setUserProgress(progress);
    };

    gamificationService.addListener(handleProgressUpdate);
    return () => gamificationService.removeListener(handleProgressUpdate);
  }, []);

  const selectedCategoryData = categories.find((cat) => cat.name === selectedCategory);

  return (
    <div className={cn("min-h-screen", "bg-background")}>
      <div className="container mx-auto p-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="space-y-2">
              <h1
                className={cn(
                  "text-4xl font-bold bg-clip-text text-transparent",
                  "bg-gradient-to-r from-accent to-accent2"
                )}
              >
                Algorithm Practice Guide
              </h1>
              <p className="text-base md:text-lg font-semibold text-accent tracking-wide drop-shadow-sm mt-1">
                Master algorithms through structured practice and gamified learning
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Level {userProgress?.level}</span>
            </div>
          </motion.div>

          {/* Progress Section */}
          {userProgress && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <Card
                className={cn(
                  "backdrop-blur-sm transition-all duration-300 hover:scale-105",
                  "bg-background/50 border-accent/10 hover:border-accent/20"
                )}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProgress.level}</div>
                  <Progress value={(userProgress.experience % 1000) / 10} className="mt-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    {1000 - (userProgress.experience % 1000)} XP to next level
                  </div>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "backdrop-blur-sm transition-all duration-300 hover:scale-105",
                  "bg-background/50 border-accent/10 hover:border-accent/20"
                )}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Day Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProgress.streak}</div>
                  <div className="text-sm text-muted-foreground mt-1">Keep it up!</div>
                  <div className="text-xs text-accent mt-1">
                    🔥 {userProgress.streak} days strong
                  </div>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "backdrop-blur-sm transition-all duration-300 hover:scale-105",
                  "bg-background/50 border-accent/10 hover:border-accent/20"
                )}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProgress.points}</div>
                  <div className="text-sm text-muted-foreground mt-1">Total earned</div>
                  <div className="text-xs text-accent mt-1">
                    ⭐ {userProgress.points} points collected
                  </div>
                </CardContent>
              </Card>

              <Card
                className={cn(
                  "backdrop-blur-sm transition-all duration-300 hover:scale-105",
                  "bg-background/50 border-accent/10 hover:border-accent/20"
                )}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Algorithms Mastered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {userProgress.completedAlgorithms.length}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Out of {categories.reduce((acc, cat) => acc + cat.algorithms.length, 0)}
                  </div>
                  <div className="text-xs text-accent mt-1">
                    🏆{" "}
                    {Math.round(
                      (userProgress.completedAlgorithms.length /
                        categories.reduce((acc, cat) => acc + cat.algorithms.length, 0)) *
                        100
                    )}
                    % complete
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-200",
                  "flex items-center gap-2",
                  selectedCategory === category.name
                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                    : "bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-accent/10 hover:scale-105"
                )}
              >
                {category.name}
                {selectedCategory === category.name && <ChevronRight className="h-4 w-4" />}
              </button>
            ))}
          </motion.div>

          {/* Selected Category Content */}
          <AnimatePresence mode="wait">
            {selectedCategoryData && (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      {selectedCategoryData.name}
                    </CardTitle>
                    {selectedCategoryData.keywords && (
                      <div className="mt-4">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Key Words to Look For:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedCategoryData.keywords.map((kw) => (
                            <span
                              key={kw}
                              className="px-3 py-1 rounded-full border border-accent bg-accent/10 text-accent font-medium text-xs shadow-sm transition-colors hover:bg-accent/20"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {selectedCategoryData.algorithms.map((algorithm) => (
                        <motion.div
                          key={algorithm.name}
                          className={cn(
                            "p-4 rounded-lg transition-all duration-200",
                            "hover:bg-accent/5 cursor-pointer",
                            "border border-transparent hover:border-accent/10"
                          )}
                          onHoverStart={() => setHoveredAlgorithm(algorithm.name)}
                          onHoverEnd={() => setHoveredAlgorithm(null)}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold mb-2">{algorithm.name}</h3>
                            {hoveredAlgorithm === algorithm.name && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-accent"
                              >
                                <ChevronRight className="h-5 w-5" />
                              </motion.div>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                              <Target className="h-5 w-5 text-accent mt-0.5" />
                              <div>
                                <span className="font-medium">What: </span>
                                {algorithm.what}
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Brain className="h-5 w-5 text-accent2 mt-0.5" />
                              <div>
                                <span className="font-medium">Why: </span>
                                {algorithm.why}
                              </div>
                            </div>
                          </div>
                          {algorithm.keywords && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mr-2">
                                Keywords:
                              </span>
                              {algorithm.keywords.map((kw) => (
                                <span
                                  key={kw}
                                  className="px-2 py-0.5 rounded-full border border-accent bg-accent/10 text-accent font-medium text-xs shadow-sm transition-colors hover:bg-accent/20"
                                >
                                  {kw}
                                </span>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Practice Tips */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card
              className={cn(
                "backdrop-blur-sm rounded-2xl shadow-lg max-w-4xl mx-auto my-8",
                "bg-background/50 border-accent/10"
              )}
            >
              <CardHeader>
                <div className="space-y-1 text-center">
                  <CardTitle className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    How to Practice
                  </CardTitle>
                  <p className="text-muted-foreground text-base md:text-lg">
                    Follow these structured approaches to master algorithms effectively
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ol className="grid gap-6 md:gap-8 list-decimal list-inside pl-0">
                  {[
                    {
                      icon: <Code2 className="h-7 w-7 md:h-9 md:w-9 text-accent" />,
                      title: "Implement & Analyze",
                      desc: "Master algorithms through hands-on implementation and analysis",
                      items: [
                        "Code each algorithm in JavaScript; write down time/space complexity",
                        "Add a brief Python snippet to your Anki deck so you see both flavors",
                      ],
                      accent: "bg-accent",
                    },
                    {
                      icon: <Brain className="h-7 w-7 md:h-9 md:w-9 text-accent2" />,
                      title: "Pattern Matching",
                      desc: "Develop the ability to recognize algorithm patterns in problems",
                      items: [
                        'Tag LeetCode problems by algorithm: once you see "matrix + BFS," you\'ll know exactly which traversal to reach for',
                      ],
                      accent: "bg-accent2",
                    },
                    {
                      icon: <ListChecks className="h-7 w-7 md:h-9 md:w-9 text-accent" />,
                      title: "Flashcards & Quizzes",
                      desc: "Reinforce your understanding through active recall",
                      items: [
                        'For each algorithm, create flashcards with prompts like "Describe QuickSort\'s divide step"',
                        'Answer with concise explanations like "Choose pivot, partition into pivot"',
                      ],
                      accent: "bg-accent",
                    },
                    {
                      icon: <GraduationCap className="h-7 w-7 md:h-9 md:w-9 text-accent2" />,
                      title: "Mock Interviews",
                      desc: "Simulate real interview scenarios to build confidence",
                      items: [
                        "Walk through problems out loud, narrate your thought process",
                        "Practice with a friend or record yourself",
                      ],
                      accent: "bg-accent2",
                    },
                  ].map((step) => (
                    <motion.li
                      key={step.title}
                      className="relative flex items-start gap-4 md:gap-6 p-3 md:p-6 rounded-2xl border border-accent/10 bg-background/90 shadow-md hover:shadow-xl transition-all duration-200"
                      whileHover={{ scale: 1.015 }}
                    >
                      {/* Accent bar for desktop, dot for mobile */}
                      <span
                        className={cn(
                          "hidden md:block absolute left-0 top-6 bottom-6 w-1 rounded-full",
                          step.accent
                        )}
                      />
                      <span
                        className={cn(
                          "block md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
                          step.accent
                        )}
                      />
                      <div className="relative z-10 flex items-center justify-center shrink-0 ml-0 md:ml-4">
                        {step.icon}
                      </div>
                      <div className="space-y-2 w-full pl-2 md:pl-0 text-left">
                        <h3 className="text-lg md:text-xl font-bold tracking-tight mb-0.5">
                          {step.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-1">
                          {step.desc}
                        </p>
                        <ul className="space-y-1 text-sm md:text-base list-disc list-inside ml-4">
                          {step.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
