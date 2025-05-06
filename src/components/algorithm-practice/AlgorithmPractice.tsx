import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { useTheme } from "../theme/use-theme";
import GamificationService, { UserProgress } from "../../lib/gamification";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { ListChecks, Brain, Code2, GraduationCap, Trophy, Target } from "lucide-react";

interface Category {
  name: string;
  algorithms: {
    name: string;
    what: string;
    why: string;
  }[];
}

const categories: Category[] = [
  {
    name: "Sorting & Searching",
    algorithms: [
      {
        name: "QuickSort",
        what: "Divide-and-conquer, partition around a pivot.",
        why: "It's the go-to 'fast sort,' average O(n log n).",
      },
      {
        name: "MergeSort",
        what: "Recursively split, then merge sorted halves.",
        why: "Stable sort, guaranteed O(n log n), great for linked lists.",
      },
      {
        name: "HeapSort",
        what: "Build a max-heap, then extract max repeatedly.",
        why: "In-place O(n log n) with no recursion.",
      },
      {
        name: "Binary Search",
        what: "Search a sorted array by halving the search space.",
        why: "Prerequisite for a ton of problems; O(log n).",
      },
    ],
  },
  {
    name: "Data Structures & Traversals",
    algorithms: [
      {
        name: "Binary Tree Traversals (DFS/BFS)",
        what: "Pre-/In-/Post-order and Level-order.",
        why: "Foundation for any tree/graph problem.",
      },
      {
        name: "Graph Traversals (DFS & BFS)",
        what: "Explore nodes layer by layer (BFS) or branch-by-branch (DFS).",
        why: "Build to shortest paths, connectivity, cycles.",
      },
      {
        name: "Union-Find (Disjoint Set)",
        what: "Track connectivity components with path compression.",
        why: "Essential for Kruskal's MST, cycle detection.",
      },
    ],
  },
  {
    name: "Greedy Algorithms",
    algorithms: [
      {
        name: "Interval Scheduling / Activity Selection",
        what: "Pick the next job that finishes earliest.",
        why: "Simple greedy choice proof, often in scheduling problems.",
      },
      {
        name: "Huffman Coding",
        what: "Build a variable-length prefix code using a min-heap.",
        why: "Classic example of greedy optimality.",
      },
    ],
  },
  {
    name: "Dynamic Programming",
    algorithms: [
      {
        name: "Longest Increasing Subsequence (LIS)",
        what: "O(n log n) patience-sorting approach.",
        why: "Teaches patience sorting + binary search synergy.",
      },
      {
        name: "0/1 Knapsack",
        what: "Decide include/exclude items for max value.",
        why: "Core DP pattern for bounded choices.",
      },
      {
        name: "Coin Change / Minimum Path Sum",
        what: "Build up solutions from smaller subproblems.",
        why: "Frequent 'DP form' practice.",
      },
      {
        name: "Edit Distance",
        what: "Minimum edits (insert/delete/replace) between strings.",
        why: "String DP classic.",
      },
    ],
  },
  {
    name: "Backtracking & Recursion",
    algorithms: [
      {
        name: "Permutations & Combinations",
        what: "Generate all orderings/subsets.",
        why: "Base for many constraint problems.",
      },
      {
        name: "N-Queens",
        what: "Place queens safely via recursion + pruning.",
        why: "Teaches board representations and pruning heuristics.",
      },
      {
        name: "Sudoku Solver",
        what: "Recursively fill cells, backtrack on conflicts.",
        why: "Real-world–style constraint satisfaction.",
      },
    ],
  },
  {
    name: "Advanced Structures & Algorithms",
    algorithms: [
      {
        name: "Trie (Prefix Tree)",
        what: "Character-by-character tree for strings.",
        why: "Fast prefix searches, autocomplete.",
      },
      {
        name: "Segment Tree / Fenwick (BIT)",
        what: "Range queries & updates in O(log n).",
        why: "Key for interval and prefix-sum problems.",
      },
      {
        name: "Dijkstra's & A* Search",
        what: "Shortest paths with priority queues (and heuristics).",
        why: "Graph weights / heuristics—common in 'hard' tier.",
      },
    ],
  },
];

export default function AlgorithmPractice() {
  const { theme } = useTheme();
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);

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
          <div className="flex items-center justify-between">
            <h1
              className={cn(
                "text-4xl font-bold bg-clip-text text-transparent",
                "bg-gradient-to-r from-accent to-accent2"
              )}
            >
              Algorithm Practice Guide
            </h1>
          </div>

          {/* Progress Section */}
          {userProgress && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProgress.level}</div>
                  <Progress value={(userProgress.experience % 1000) / 10} className="mt-2" />
                </CardContent>
              </Card>

              <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Day Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProgress.streak}</div>
                  <div className="text-sm text-muted-foreground mt-1">Keep it up!</div>
                </CardContent>
              </Card>

              <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userProgress.points}</div>
                  <div className="text-sm text-muted-foreground mt-1">Total earned</div>
                </CardContent>
              </Card>

              <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
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
                </CardContent>
              </Card>
            </div>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-200",
                  selectedCategory === category.name
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-background/50 backdrop-blur-sm hover:bg-background/80 border border-accent/10"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Selected Category Content */}
          {selectedCategoryData && (
            <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{selectedCategoryData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {selectedCategoryData.algorithms.map((algorithm) => (
                    <div
                      key={algorithm.name}
                      className={cn(
                        "p-4 rounded-lg transition-all duration-200",
                        "hover:bg-accent/5"
                      )}
                    >
                      <h3 className="text-lg font-semibold mb-2">{algorithm.name}</h3>
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
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Practice Tips */}
          <Card className={cn("backdrop-blur-sm", "bg-background/50 border-accent/10")}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">How to Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <Code2 className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">1. Implement & Analyze</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Code each algorithm in JavaScript; write down time/space complexity</li>
                      <li>Add a brief Python snippet to your Anki deck so you see both flavors</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Brain className="h-6 w-6 text-accent2 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">2. Pattern Matching</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>
                        Tag LeetCode problems by algorithm: once you see "matrix + BFS," you'll know
                        exactly which traversal to reach for
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ListChecks className="h-6 w-6 text-accent mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">3. Flashcards & Quizzes</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>
                        For each algorithm, create flashcards with prompts like "Describe
                        QuickSort's divide step"
                      </li>
                      <li>
                        Answer with concise explanations like "Choose pivot, partition into pivot"
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-accent2 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">4. Mock Interviews</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Walk through problems out loud, narrate your thought process</li>
                      <li>Practice with a friend or record yourself</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
