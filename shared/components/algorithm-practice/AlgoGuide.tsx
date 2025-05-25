import { cn } from "@algo-trainer/shared/utils/common";
import { motion, AnimatePresence } from "framer-motion";
import {
  ListChecks,
  Brain,
  Code2,
  GraduationCap,
  Target,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Clock,
  Database,
} from "lucide-react";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";

import { useTheme } from "@/components/theme/use-theme";
import { AnimatedHeader } from "@/components/ui/AnimatedHeader";
import { Background } from "@/components/ui/background";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { ThemedButton } from "@/components/ui/themed-button";
import { ThemedCard } from "@/components/ui/themed-card";
import GamificationService, { UserProgress } from "@/lib/gamification";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

interface LeetCodeProblem {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
}

interface Algorithm {
  name: string;
  what: string;
  why: string;
  keywords?: string[];
  implementation: {
    explanation: string;
    code: string;
    timeComplexity: string;
    spaceComplexity: string;
  };
  leetCodeProblems: LeetCodeProblem[];
}

interface Category {
  name: string;
  keywords?: string[];
  algorithms: Algorithm[];
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
        implementation: {
          explanation:
            "QuickSort works by selecting a 'pivot' element and partitioning the array around it. Elements smaller than the pivot go to the left, larger to the right. This process is repeated recursively for the subarrays.",
          code: `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)`,
          timeComplexity: "Average: O(n log n), Worst: O(n²)",
          spaceComplexity: "O(log n) for recursion stack",
        },
        leetCodeProblems: [
          {
            title: "Sort an Array",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/sort-an-array/",
          },
          {
            title: "Kth Largest Element in an Array",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
          },
        ],
      },
      {
        name: "MergeSort",
        what: "Recursively split, then merge sorted halves.",
        why: "Stable sort, guaranteed O(n log n), great for linked lists.",
        keywords: ["merge", "divide and conquer", "recursion", "stable", "auxiliary array"],
        implementation: {
          explanation:
            "MergeSort works by recursively splitting the array into two halves, sorting each half, and then merging the two sorted halves. The merging process involves comparing elements from the two halves and placing them in the correct order.",
          code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]
    
    return merge(merge_sort(left), merge_sort(right))

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
          timeComplexity: "O(n log n)",
          spaceComplexity: "O(n) for the merge function",
        },
        leetCodeProblems: [
          {
            title: "Merge Sorted Array",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/merge-sorted-array/",
          },
          {
            title: "Count of Range Sum",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/count-of-range-sum/",
          },
        ],
      },
      {
        name: "Binary Search",
        what: "Search a sorted array by halving the search space.",
        why: "Prerequisite for a ton of problems; O(log n).",
        keywords: ["sorted", "O(log n)", "midpoint", "search", "left/right", "bounds"],
        implementation: {
          explanation:
            "Binary Search works by repeatedly halving the search space until the target element is found or determined to be absent.",
          code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
          timeComplexity: "O(log n)",
          spaceComplexity: "O(1)",
        },
        leetCodeProblems: [
          {
            title: "Binary Search",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/binary-search/",
          },
          {
            title: "Search in Rotated Sorted Array",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
          },
        ],
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
        implementation: {
          explanation:
            "Binary Tree Traversals involve visiting nodes in a tree structure. Pre-order traversal visits nodes in the order: root, left, right. In-order traversal visits nodes in the order: left, root, right. Post-order traversal visits nodes in the order: left, right, root.",
          code: `def preorder_traversal(root):
    result = []
    stack = [root]
    
    while stack:
        node = stack.pop()
        if node:
            result.append(node.val)
            stack.append(node.right)
            stack.append(node.left)
    
    return result

def inorder_traversal(root):
    result = []
    stack = []
    current = root
    
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        if current:
            result.append(current.val)
            current = current.right
    
    return result

def postorder_traversal(root):
    result = []
    stack = [root]
    visited = set()
    
    while stack:
        node = stack[-1]
        if node and node not in visited:
            visited.add(node)
            stack.append(node.right)
            stack.append(node.left)
        else:
            popped = stack.pop()
            if popped:
                result.append(popped.val)
    
    return result`,
          timeComplexity: "O(n) for all traversals",
          spaceComplexity: "O(n) for the stack in pre-order and in-order traversals",
        },
        leetCodeProblems: [
          {
            title: "Binary Tree Preorder Traversal",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
          },
          {
            title: "Binary Tree Inorder Traversal",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
          },
          {
            title: "Binary Tree Postorder Traversal",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
          },
        ],
      },
      {
        name: "Graph Traversals (DFS & BFS)",
        what: "Explore nodes layer by layer (BFS) or branch-by-branch (DFS).",
        why: "Build to shortest paths, connectivity, cycles.",
        keywords: ["graph", "BFS", "DFS", "visited", "queue", "stack", "cycle", "connected"],
        implementation: {
          explanation:
            "Graph Traversals involve visiting all nodes in a graph structure. BFS uses a queue to explore nodes level by level, while DFS uses a stack to explore nodes branch by branch.",
          code: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            queue.extend(n for n in graph[node] if n not in visited)
    
    return visited

def dfs(graph, start):
    visited = set()
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            stack.extend(n for n in graph[node] if n not in visited)
    
    return visited`,
          timeComplexity: "O(V + E) for both BFS and DFS",
          spaceComplexity: "O(V) for visited set and queue/stack",
        },
        leetCodeProblems: [
          {
            title: "All Paths from Source to Target",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
          },
          {
            title: "Number of Islands",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/number-of-islands/",
          },
        ],
      },
      {
        name: "Union-Find (Disjoint Set)",
        what: "Track connectivity components with path compression.",
        why: "Essential for Kruskal's Algorithm's MST, cycle detection.",
        keywords: ["union", "find", "connected components", "path compression", "parent", "set"],
        implementation: {
          explanation:
            "Union-Find works by maintaining a parent array where each element points to its parent. Path compression optimizes future queries by making nodes point directly to the root.",
          code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        
        if root_x != root_y:
            if self.rank[root_x] > self.rank[root_y]:
                self.parent[root_y] = root_x
            elif self.rank[root_x] < self.rank[root_y]:
                self.parent[root_x] = root_y
            else:
                self.parent[root_y] = root_x
                self.rank[root_x] += 1`,
          timeComplexity: "O(α(n)) for find and union operations",
          spaceComplexity: "O(n) for parent and rank arrays",
        },
        leetCodeProblems: [
          {
            title: "Number of Connected Components in an Undirected Graph",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
          },
          {
            title: "Graph Valid Tree",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/graph-valid-tree/",
          },
        ],
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
        implementation: {
          explanation:
            "Interval Scheduling involves selecting the maximum number of non-overlapping intervals from a given set.",
          code: `def interval_scheduling(intervals):
    intervals.sort(key=lambda x: x[1])  # Sort by end time
    count = 0
    end = float('-inf')
    
    for start, finish in intervals:
        if start >= end:
            end = finish
            count += 1
    
    return count`,
          timeComplexity: "O(n log n) for sorting and O(n) for the greedy algorithm",
          spaceComplexity: "O(n) for sorting",
        },
        leetCodeProblems: [
          {
            title: "Meeting Rooms",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/meeting-rooms/",
          },
          {
            title: "Non-overlapping Intervals",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/non-overlapping-intervals/",
          },
        ],
      },
      {
        name: "Huffman Coding",
        what: "Build a variable-length prefix code using a min-heap.",
        why: "Classic example of greedy optimality.",
        keywords: ["prefix code", "min-heap", "frequency", "tree", "encoding", "compression"],
        implementation: {
          explanation:
            "Huffman Coding works by building a Huffman tree from the character frequencies and then using the tree to encode and decode messages.",
          code: `function huffmanCoding(data) {
  const frequencyMap = {};
  for (const char of data) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }
  
  const priorityQueue = new MinHeap();
  for (const char in frequencyMap) {
    priorityQueue.insert(new HuffmanNode(char, frequencyMap[char]));
  }
  
  while (priorityQueue.size() > 1) {
    const left = priorityQueue.extractMin();
    const right = priorityQueue.extractMin();
    const merged = new HuffmanNode(null, left.freq + right.freq, left, right);
    priorityQueue.insert(merged);
  }
  
  const root = priorityQueue.extractMin();
  const codeMap = {};
  buildCodeMap(root, '', codeMap);
  
  return { codeMap, root };
}

function buildCodeMap(node, prefix, codeMap) {
  if (node.isLeaf()) {
    codeMap[node.char] = prefix;
  } else {
    buildCodeMap(node.left, prefix + '0', codeMap);
    buildCodeMap(node.right, prefix + '1', codeMap);
  }
}`,
          timeComplexity: "O(n log n) for building the Huffman tree",
          spaceComplexity: "O(n) for the priority queue and code map",
        },
        leetCodeProblems: [
          {
            title: "Huffman Coding",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/huffman-coding/",
          },
          {
            title: "Encode and Decode Strings",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/encode-and-decode-strings/",
          },
        ],
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
        implementation: {
          explanation:
            "Longest Increasing Subsequence involves finding the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order.",
          code: `def lis(nums):
    dp = [1] * len(nums)
    max_length = 1
    
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
                max_length = max(max_length, dp[i])
    
    return max_length`,
          timeComplexity: "O(n²) for the nested loop",
          spaceComplexity: "O(n) for the dp array",
        },
        leetCodeProblems: [
          {
            title: "Longest Increasing Subsequence",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/longest-increasing-subsequence/",
          },
          {
            title: "Russian Doll Envelopes",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/russian-doll-envelopes/",
          },
        ],
      },
      {
        name: "0/1 Knapsack",
        what: "Decide include/exclude items for max value.",
        why: "Core DP pattern for bounded choices.",
        keywords: ["knapsack", "weight", "value", "DP", "include/exclude", "capacity"],
        implementation: {
          explanation:
            "0/1 Knapsack involves selecting items with given weights and values to maximize the total value while staying within a weight capacity.",
          code: `def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]`,
          timeComplexity: "O(nW) where n is number of items and W is capacity",
          spaceComplexity: "O(nW) for the dp array",
        },
        leetCodeProblems: [
          {
            title: "0/1 Knapsack",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/0-1-knapsack/",
          },
          {
            title: "Partition Equal Subset Sum",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/partition-equal-subset-sum/",
          },
        ],
      },
      {
        name: "Coin Change / Minimum Path Sum",
        what: "Build up solutions from smaller subproblems.",
        why: "Frequent 'DP form' practice.",
        keywords: ["coin", "change", "min coins", "DP", "ways", "sum", "grid"],
        implementation: {
          explanation:
            "Coin Change involves finding the minimum number of coins needed to make a given amount, while Minimum Path Sum involves finding the minimum sum path from the top-left to the bottom-right of a grid.",
          code: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1

def min_path_sum(grid):
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = grid[0][0]
    
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] + grid[i][0]
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] + grid[0][j]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    
    return dp[m-1][n-1]`,
          timeComplexity: "O(amount * len(coins)) for coin change, O(mn) for min path sum",
          spaceComplexity: "O(amount) for coin change, O(mn) for min path sum",
        },
        leetCodeProblems: [
          {
            title: "Coin Change",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/coin-change/",
          },
          {
            title: "Minimum Path Sum",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/minimum-path-sum/",
          },
        ],
      },
      {
        name: "Edit Distance",
        what: "Minimum edits (insert/delete/replace) between strings.",
        why: "String DP classic.",
        keywords: ["edit", "distance", "insert", "delete", "replace", "DP", "string"],
        implementation: {
          explanation:
            "Edit Distance (Levenshtein Distance) calculates the minimum number of single-character edits required to change one string into another.",
          code: `def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = min(
                    dp[i-1][j] + 1,    # delete
                    dp[i][j-1] + 1,    # insert
                    dp[i-1][j-1] + 1   # replace
                )
    
    return dp[m][n]`,
          timeComplexity: "O(mn) where m and n are the lengths of the input strings",
          spaceComplexity: "O(mn) for the dp array",
        },
        leetCodeProblems: [
          {
            title: "Edit Distance",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/edit-distance/",
          },
          {
            title: "One Edit Distance",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/one-edit-distance/",
          },
        ],
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
        implementation: {
          explanation:
            "Permutations and Combinations involve generating all possible arrangements or selections of elements from a set.",
          code: `def permutations(nums):
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    
    result = []
    backtrack(0)
    return result

def combinations(n, k):
    def backtrack(start, curr):
        if len(curr) == k:
            result.append(curr[:])
            return
        
        for i in range(start, n + 1):
            curr.append(i)
            backtrack(i + 1, curr)
            curr.pop()
    
    result = []
    backtrack(1, [])
    return result`,
          timeComplexity: "O(n!) for permutations, O(C(n,k)) for combinations",
          spaceComplexity: "O(n) for recursion stack",
        },
        leetCodeProblems: [
          {
            title: "Permutations",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/permutations/",
          },
          {
            title: "Combinations",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/combinations/",
          },
        ],
      },
      {
        name: "N-Queens",
        what: "Place queens safely via recursion + pruning.",
        why: "Teaches board representations and pruning heuristics.",
        keywords: ["n-queens", "board", "backtrack", "prune", "row/col/diag", "recursion"],
        implementation: {
          explanation:
            "N-Queens involves placing N queens on an NxN chessboard such that no two queens threaten each other.",
          code: `def solve_n_queens(n):
    def is_safe(board, row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 'Q':
                return False
        
        # Check upper-left diagonal
        for i, j in zip(range(row-1, -1, -1), range(col-1, -1, -1)):
            if board[i][j] == 'Q':
                return False
        
        # Check upper-right diagonal
        for i, j in zip(range(row-1, -1, -1), range(col+1, n)):
            if board[i][j] == 'Q':
                return False
        
        return True
    
    def backtrack(row):
        if row == n:
            result.append([''.join(row) for row in board])
            return
        
        for col in range(n):
            if is_safe(board, row, col):
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'
    
    board = [['.'] * n for _ in range(n)]
    result = []
    backtrack(0)
    return result`,
          timeComplexity: "O(N!) where N is the board size",
          spaceComplexity: "O(N²) for the board",
        },
        leetCodeProblems: [
          {
            title: "N-Queens",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/n-queens/",
          },
          {
            title: "N-Queens II",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/n-queens-ii/",
          },
        ],
      },
      {
        name: "Sudoku Solver",
        what: "Recursively fill cells, backtrack on conflicts.",
        why: "Real-world–style constraint satisfaction.",
        keywords: ["sudoku", "backtrack", "constraint", "fill", "recursion", "prune"],
        implementation: {
          explanation:
            "Sudoku Solver involves filling a 9x9 grid with digits 1-9 such that each row, column, and 3x3 subgrid contains all digits exactly once.",
          code: `def solve_sudoku(board):
    def is_valid(num, row, col):
        # Check row
        for x in range(9):
            if board[row][x] == num:
                return False
        
        # Check column
        for x in range(9):
            if board[x][col] == num:
                return False
        
        # Check 3x3 box
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if board[i + start_row][j + start_col] == num:
                    return False
        
        return True
    
    def solve():
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for num in '123456789':
                        if is_valid(num, i, j):
                            board[i][j] = num
                            if solve():
                                return True
                            board[i][j] = '.'
                    return False
        return True
    
    solve()`,
          timeComplexity: "O(9^(n²)) where n is the board size",
          spaceComplexity: "O(n²) for the board",
        },
        leetCodeProblems: [
          {
            title: "Sudoku Solver",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/sudoku-solver/",
          },
          {
            title: "Valid Sudoku",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/valid-sudoku/",
          },
        ],
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
        implementation: {
          explanation:
            "A Trie is a tree-like data structure used to store and retrieve strings efficiently. It's particularly useful for prefix-based operations like autocomplete.",
          code: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end
    
    def starts_with(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True`,
          timeComplexity: "O(m) for insert/search/prefix where m is the word length",
          spaceComplexity:
            "O(ALPHABET_SIZE * N * M) where N is number of words and M is average word length",
        },
        leetCodeProblems: [
          {
            title: "Implement Trie (Prefix Tree)",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
          },
          {
            title: "Word Search II",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/word-search-ii/",
          },
        ],
      },
      {
        name: "Segment Tree / Fenwick (BIT)",
        what: "Range queries & updates in O(log n).",
        why: "Key for interval and prefix-sum problems.",
        keywords: ["segment tree", "fenwick", "range query", "update", "prefix sum", "log n"],
        implementation: {
          explanation:
            "Segment Tree and Fenwick Tree (Binary Indexed Tree) are data structures that efficiently handle range queries and updates.",
          code: `class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (2 * self.n)
        self.build(arr)
    
    def build(self, arr):
        for i in range(self.n):
            self.tree[self.n + i] = arr[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2 * i] + self.tree[2 * i + 1]
    
    def update(self, pos, value):
        pos += self.n
        self.tree[pos] = value
        while pos > 1:
            pos //= 2
            self.tree[pos] = self.tree[2 * pos] + self.tree[2 * pos + 1]
    
    def query(self, l, r):
        res = 0
        l += self.n
        r += self.n
        while l < r:
            if l % 2 == 1:
                res += self.tree[l]
                l += 1
            if r % 2 == 1:
                r -= 1
                res += self.tree[r]
            l //= 2
            r //= 2
        return res

class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i
    
    def query(self, i):
        res = 0
        while i > 0:
            res += self.tree[i]
            i -= i & -i
        return res`,
          timeComplexity: "O(log n) for both update and query operations",
          spaceComplexity: "O(n) for the tree array",
        },
        leetCodeProblems: [
          {
            title: "Range Sum Query - Mutable",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/range-sum-query-mutable/",
          },
          {
            title: "Count of Smaller Numbers After Self",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
          },
        ],
      },
      {
        name: "Dijkstra's Algorithm & A* Search",
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
        implementation: {
          explanation:
            "Dijkstra's Algorithm finds the shortest path between nodes in a weighted graph, while A* Search uses heuristics to guide the search towards the goal.",
          code: `import heapq

def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_distance, current_node = heapq.heappop(pq)
        
        if current_distance > distances[current_node]:
            continue
        
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    
    return distances

def a_star(graph, start, goal, heuristic):
    pq = [(0, start)]
    came_from = {start: None}
    cost_so_far = {start: 0}
    
    while pq:
        current = heapq.heappop(pq)[1]
        
        if current == goal:
            break
        
        for next_node in graph[current]:
            new_cost = cost_so_far[current] + graph[current][next_node]
            
            if next_node not in cost_so_far or new_cost < cost_so_far[next_node]:
                cost_so_far[next_node] = new_cost
                priority = new_cost + heuristic(next_node, goal)
                heapq.heappush(pq, (priority, next_node))
                came_from[next_node] = current
    
    return came_from, cost_so_far`,
          timeComplexity:
            "O((V + E)log V) for Dijkstra's Algorithm, O(b^d) for A* where b is branching factor and d is depth",
          spaceComplexity: "O(V) for both algorithms",
        },
        leetCodeProblems: [
          {
            title: "Network Delay Time",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/network-delay-time/",
          },
          {
            title: "Cheapest Flights Within K Stops",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
          },
        ],
      },
    ],
  },
];

export default function AlgoGuide() {
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].name);
  const [hoveredAlgorithm, setHoveredAlgorithm] = useState<string | null>(null);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);
  const { theme } = useTheme();

  // Custom theme styles using our CSS variables
  const customTheme: Record<string, CSSProperties> = {
    'code[class*="language-"]': {
      color: theme === "ps2" ? "#f8f8f2" : "var(--text-main)",
      background: theme === "ps2" ? "#001b4d !important" : "transparent",
      textShadow: "none",
      fontFamily: "var(--font-mono)",
      fontSize: "0.95rem",
      lineHeight: 1.8,
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      tabSize: 4,
      MozTabSize: 4,
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      letterSpacing: "0.3px",
      borderRadius: theme === "ps2" ? "8px" : undefined,
      padding: theme === "ps2" ? "1.5rem" : undefined,
    },
    'pre[class*="language-"]': {
      color: theme === "ps2" ? "#f8f8f2" : "var(--text-main)",
      background: theme === "ps2" ? "#001b4d !important" : "transparent",
      textShadow: "none",
      fontFamily: "var(--font-mono)",
      fontSize: "0.95rem",
      lineHeight: 1.8,
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      tabSize: 4,
      MozTabSize: 4,
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      margin: 0,
      padding: theme === "ps2" ? "1.5rem" : "2rem 1.5rem",
      overflow: "auto",
      letterSpacing: "0.3px",
      borderRadius: theme === "ps2" ? "8px" : undefined,
    },
    comment: {
      color: "var(--text-secondary)",
      fontStyle: "italic",
      opacity: 0.8,
    },
    punctuation: {
      color: "var(--text-main)",
      opacity: 0.7,
    },
    property: {
      color: "var(--accent)",
    },
    tag: {
      color: "var(--accent)",
    },
    boolean: {
      color: "var(--accent2)",
    },
    number: {
      color: "var(--accent2)",
    },
    constant: {
      color: "var(--accent2)",
    },
    symbol: {
      color: "var(--accent2)",
    },
    selector: {
      color: "var(--accent3)",
    },
    "attr-name": {
      color: "var(--accent3)",
    },
    string: {
      color: "var(--accent3)",
    },
    char: {
      color: "var(--accent3)",
    },
    builtin: {
      color: "var(--accent3)",
    },
    operator: {
      color: "var(--accent)",
      opacity: 0.8,
    },
    entity: {
      color: "var(--accent)",
      cursor: "help",
    },
    url: {
      color: "var(--accent3)",
      textDecoration: "underline",
      opacity: 0.8,
    },
    variable: {
      color: "var(--text-main)",
    },
    function: {
      color: "var(--accent)",
    },
    keyword: {
      color: "var(--accent)",
      fontWeight: "500",
    },
    regex: {
      color: "var(--accent3)",
    },
    important: {
      color: "var(--accent)",
      fontWeight: "500",
    },
    bold: {
      fontWeight: "500",
    },
    italic: {
      fontStyle: "italic",
    },
    ".namespace": {
      opacity: 0.7,
    },
  };

  // Syntax tokens for ps2 theme
  if (theme === "ps2") {
    customTheme["comment"] = { color: "#6272a4", fontStyle: "italic" };
    customTheme["keyword"] = { color: "#ff79c6" };
    customTheme["string"] = { color: "#f1fa8c" };
    customTheme["function"] = { color: "#50fa7b" };
    customTheme["number"] = { color: "#bd93f9" };
    customTheme["operator"] = { color: "#ffb86c" };
    customTheme["property"] = { color: "#8be9fd" };
    customTheme["tag"] = { color: "#8be9fd" };
    customTheme["boolean"] = { color: "#bd93f9" };
    customTheme["constant"] = { color: "#bd93f9" };
    customTheme["symbol"] = { color: "#bd93f9" };
    customTheme["selector"] = { color: "#50fa7b" };
    customTheme['"attr-name"'] = { color: "#50fa7b" };
    customTheme["char"] = { color: "#f1fa8c" };
    customTheme["builtin"] = { color: "#50fa7b" };
    customTheme["entity"] = { color: "#ffb86c", cursor: "help" };
    customTheme["url"] = { color: "#8be9fd", textDecoration: "underline", opacity: 0.8 };
    customTheme["variable"] = { color: "#f8f8f2" };
    customTheme["regex"] = { color: "#f1fa8c" };
    customTheme["important"] = { color: "#ff79c6", fontWeight: "500" };
    customTheme["bold"] = { fontWeight: "500" };
    customTheme["italic"] = { fontStyle: "italic" };
    customTheme['".namespace"'] = { opacity: 0.7 };
  }

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
    <Background>
      <div className="container mx-auto p-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div className="space-y-2 flex-1">
              <AnimatedHeader
                title="Algorithm Practice Guide"
                subtitle="Master algorithms through structured practice and gamified learning"
                titleClassName="bg-gradient-to-r from-accent to-accent2 mb-0 md:mb-0"
                subtitleClassName="text-base md:text-lg font-semibold text-accent tracking-wide drop-shadow-sm mt-1"
              />
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
              <ThemedCard
                className={cn(
                  theme === "snes"
                    ? "hover:border-[#3498db]"
                    : "backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-background/50 border-accent/10 hover:border-accent/20"
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
              </ThemedCard>

              <ThemedCard
                className={cn(
                  theme === "snes"
                    ? "hover:border-[#3498db]"
                    : "backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-background/50 border-accent/10 hover:border-accent/20"
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
              </ThemedCard>

              <ThemedCard
                className={cn(
                  theme === "snes"
                    ? "hover:border-[#3498db]"
                    : "backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-background/50 border-accent/10 hover:border-accent/20"
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
              </ThemedCard>

              <ThemedCard
                className={cn(
                  theme === "snes"
                    ? "hover:border-[#3498db]"
                    : "backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-background/50 border-accent/10 hover:border-accent/20"
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
              </ThemedCard>
            </motion.div>
          )}

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <ThemedButton
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  "px-4 py-2 rounded-lg flex items-center gap-2 border",
                  theme === "snes"
                    ? selectedCategory === category.name
                      ? "bg-[#e40058] text-[#fffbe6] border-2 border-[#4040e0] shadow-lg scale-105 font-bold"
                      : "bg-[#4040e0] text-[#fffbe6] border-2 border-[#3498db] shadow font-bold hover:bg-[#e40058] hover:text-[#fffbe6]"
                    : selectedCategory === category.name
                      ? theme === "light"
                        ? "bg-accent/10 text-accent border-accent hover:bg-accent/20"
                        : "bg-accent text-accent-foreground border-accent shadow-lg scale-105"
                      : theme === "light"
                        ? "bg-white text-accent border-accent/20 hover:bg-accent/10 hover:text-accent"
                        : "bg-background/50 backdrop-blur-sm text-main/80 border-accent/10 hover:bg-background/80 hover:text-accent"
                )}
              >
                {category.name}
                {selectedCategory === category.name && <ChevronRight className="h-4 w-4" />}
              </ThemedButton>
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
                <ThemedCard
                  className={cn(theme !== "snes" ? "bg-background/50 border-accent/10" : "")}
                >
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
                            "p-4 rounded-lg transition-all duration-200 cursor-pointer",
                            theme === "snes"
                              ? "bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)] hover:border-[var(--accent)] hover:shadow-[0_0_0_2px_var(--accent)]"
                              : "hover:bg-accent/5 border border-transparent hover:border-accent/10"
                          )}
                          onHoverStart={() => setHoveredAlgorithm(algorithm.name)}
                          onHoverEnd={() => setHoveredAlgorithm(null)}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedAlgorithm(algorithm)}
                        >
                          <div className="flex items-start justify-between">
                            <h3
                              className={cn(
                                "text-lg font-semibold mb-2",
                                theme === "snes" && "group-hover:text-[var(--accent)]"
                              )}
                            >
                              {algorithm.name}
                            </h3>
                            {hoveredAlgorithm === algorithm.name && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={cn(
                                  "text-accent",
                                  theme === "snes" && "text-[var(--accent)]"
                                )}
                              >
                                <ChevronRight className="h-5 w-5" />
                              </motion.div>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-start space-x-2">
                              <Target
                                className={cn(
                                  "h-5 w-5 mt-0.5",
                                  theme === "snes" ? "text-[var(--accent)]" : "text-accent"
                                )}
                              />
                              <div>
                                <span
                                  className={cn(
                                    "font-medium",
                                    theme === "snes" && "text-[var(--accent)]"
                                  )}
                                >
                                  What:{" "}
                                </span>
                                {algorithm.what}
                              </div>
                            </div>
                            <div className="flex items-start space-x-2">
                              <Brain
                                className={cn(
                                  "h-5 w-5 mt-0.5",
                                  theme === "snes" ? "text-[var(--accent2)]" : "text-accent2"
                                )}
                              />
                              <div>
                                <span
                                  className={cn(
                                    "font-medium",
                                    theme === "snes" && "text-[var(--accent2)]"
                                  )}
                                >
                                  Why:{" "}
                                </span>
                                {algorithm.why}
                              </div>
                            </div>
                          </div>
                          {algorithm.keywords && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              <span
                                className={cn(
                                  "text-xs font-semibold uppercase tracking-wide",
                                  theme === "snes"
                                    ? "text-[var(--accent)]"
                                    : "text-muted-foreground"
                                )}
                              >
                                Keywords:
                              </span>
                              {algorithm.keywords.map((kw) => (
                                <span
                                  key={kw}
                                  className={cn(
                                    "px-2 py-0.5 rounded-full border font-medium text-xs shadow-sm transition-colors",
                                    theme === "snes"
                                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20"
                                      : "border-accent bg-accent/10 text-accent hover:bg-accent/20"
                                  )}
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
                </ThemedCard>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Algorithm Details Dialog */}
          <Dialog open={!!selectedAlgorithm} onOpenChange={() => setSelectedAlgorithm(null)}>
            {selectedAlgorithm && (
              <DialogContent
                className={cn(
                  "flex flex-col h-screen max-h-screen sm:max-h-[90vh] w-full max-w-full sm:max-w-4xl px-1 py-1 sm:px-8 sm:py-6 rounded-xl my-2 sm:my-4",
                  theme === "snes"
                    ? "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)]"
                    : theme === "light"
                      ? "bg-white text-main backdrop-blur-xl"
                      : theme === "nord"
                        ? "bg-nord-1 text-white backdrop-blur-xl"
                        : "bg-zinc-900 text-white backdrop-blur-xl"
                )}
              >
                <DialogHeader
                  className={cn(
                    "sticky top-0 rounded-t-xl px-1 py-1 sm:px-8 sm:py-6 z-10 pb-4 border-b",
                    theme === "snes"
                      ? "border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--card-text)]"
                      : "border-accent/10 bg-transparent"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      <DialogTitle className="text-2xl font-bold">
                        {selectedAlgorithm.name}
                      </DialogTitle>
                    </div>
                    <DialogClose
                      className={cn(
                        "p-2 rounded-full transition-all duration-300 ease-in-out",
                        "hover:scale-110 active:scale-95",
                        "flex items-center justify-center",
                        theme === "light" && "text-white"
                      )}
                    >
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </div>
                  <DialogDescription className="text-base mt-2">
                    {selectedAlgorithm.what}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex-1 min-h-0 overflow-y-auto space-y-8 py-4 pr-2">
                  {/* Implementation Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold">Implementation</h3>
                    </div>
                    <div
                      className={cn(
                        "p-6 rounded-lg border",
                        theme === "snes"
                          ? "bg-[var(--card-bg)] border-[var(--card-border)]"
                          : "bg-muted/50 border-accent/10"
                      )}
                    >
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {selectedAlgorithm.implementation.explanation}
                      </p>
                      <div className="relative">
                        <div
                          className={cn(
                            "absolute -left-4 top-0 bottom-0 w-1 rounded-full",
                            theme === "snes" ? "bg-[var(--accent)]" : "bg-accent/20"
                          )}
                        />
                        <PseudocodeDisplay code={selectedAlgorithm.implementation.code} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        className={cn(
                          "p-4 rounded-lg border",
                          theme === "snes"
                            ? "bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)]"
                            : "bg-muted/30 border-accent/10 hover:bg-muted/40"
                        )}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">Time Complexity</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {selectedAlgorithm.implementation.timeComplexity}
                        </p>
                      </div>
                      <div
                        className={cn(
                          "p-4 rounded-lg border",
                          theme === "snes"
                            ? "bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)]"
                            : "bg-muted/30 border-accent/10 hover:bg-muted/40"
                        )}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">Space Complexity</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {selectedAlgorithm.implementation.spaceComplexity}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* LeetCode Problems */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-accent" />
                      <h3 className="text-lg font-semibold">Practice Problems</h3>
                    </div>
                    <div className="grid gap-4">
                      {selectedAlgorithm.leetCodeProblems.map((problem) => (
                        <a
                          key={problem.title}
                          href={problem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "group flex items-center justify-between p-4 rounded-lg border transition-all duration-200",
                            theme === "snes"
                              ? "bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)] hover:border-[var(--accent)] hover:shadow-[0_0_0_2px_var(--accent)]"
                              : "border-accent/10 hover:bg-accent/5 hover:scale-[1.02] hover:shadow-md"
                          )}
                        >
                          <div className="space-y-1">
                            <h4
                              className={cn(
                                "font-medium transition-colors",
                                theme === "snes"
                                  ? "text-[var(--card-text)] group-hover:text-[var(--accent)]"
                                  : "group-hover:text-accent"
                              )}
                            >
                              {problem.title}
                            </h4>
                            <span
                              className={cn(
                                "text-xs font-medium px-2 py-1 rounded-full",
                                problem.difficulty === "Easy"
                                  ? theme === "snes"
                                    ? "bg-[var(--success)]/20 text-[var(--success)]"
                                    : "bg-green-500/10 text-green-500"
                                  : problem.difficulty === "Medium"
                                    ? theme === "snes"
                                      ? "bg-[var(--warning)]/20 text-[var(--warning)]"
                                      : "bg-yellow-500/10 text-yellow-500"
                                    : theme === "snes"
                                      ? "bg-[var(--error)]/20 text-[var(--error)]"
                                      : "bg-red-500/10 text-red-500"
                              )}
                            >
                              {problem.difficulty}
                            </span>
                          </div>
                          <ExternalLink
                            className={cn(
                              "h-4 w-4 transition-colors",
                              theme === "snes"
                                ? "text-[var(--card-text)] group-hover:text-[var(--accent)]"
                                : "text-muted-foreground group-hover:text-accent"
                            )}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>

          {/* Practice Tips */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <ThemedCard
              className={cn(
                "rounded-2xl shadow-lg max-w-4xl mx-auto my-8",
                theme !== "snes" ? "bg-background/50 border-accent/10" : ""
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
                      className={cn(
                        "relative flex items-start gap-4 md:gap-6 p-3 md:p-6 rounded-2xl border",
                        theme === "snes"
                          ? "bg-[var(--card-bg)] border-[var(--card-border)] hover:bg-[var(--card-hover)]"
                          : "bg-background/90 border-accent/10 shadow-md hover:shadow-xl"
                      )}
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
            </ThemedCard>
          </motion.div>
        </div>
      </div>
    </Background>
  );
}
