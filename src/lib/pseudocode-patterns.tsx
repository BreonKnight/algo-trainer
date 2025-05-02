import { ChevronRight } from "lucide-react";

export const pseudocodePatterns: Record<string, string | (() => JSX.Element)> =
  {
    "Dynamic Programming": () => (
      <div className="pseudocode">
        <span className="algorithm-title">Dynamic Programming Template</span>
        <span className="algorithm-type">Algorithm Paradigm</span>
        <span className="algorithm-meta">
          Time: O(n * m) - depends on state space dimensions | Space: O(n * m) -
          for memoization table | Use: Optimization problems with overlapping
          subproblems
        </span>
        <ul>
          <li>
            <span className="step-number">1.</span>
            <span className="keyword">Define state parameters:</span>
            <span className="variable">
              Identify subproblem dimensions
            </span>,{" "}
            <span className="function">choose state representation</span>
          </li>
          <li>
            <span className="step-number">2.</span>
            <span className="keyword">Create memoization structure:</span>
            <span className="function">Initialize memo table/map</span>,{" "}
            <span className="variable">match dimensions to state</span>
          </li>
          <li>
            <span className="step-number">3.</span>
            <span className="keyword">Handle base cases:</span>
            <span className="function">
              Identify smallest subproblems
            </span>, <span className="variable">set their values directly</span>
          </li>
          <li>
            <span className="step-number">4.</span>
            <span className="keyword">Implement recurrence relation:</span>
            <span className="function">
              Define transition between states
            </span>, <span className="variable">use memoized values</span>
          </li>
          <li>
            <span className="step-number">5.</span>
            <span className="keyword">Return final solution:</span>
            <span className="function">
              Extract answer from memo table
            </span>, <span className="variable">handle edge cases</span>
          </li>
        </ul>
      </div>
    ),
    Greedy: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Greedy Algorithm Template
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Algorithm Paradigm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) or O(n log n) - typically requires sorting &nbsp;|&nbsp;
          Space: O(1) - usually constant &nbsp;|&nbsp; Use: Local optimal
          choices lead to global optimal solution
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize solution:
            </span>{" "}
            Set up initial state, prepare data structures
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While problem not solved:
            </span>{" "}
            Choose locally optimal move, update problem state, track current
            solution
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Return solution:</span>{" "}
            Validate final state, return optimal result
          </span>
        </div>
      </div>
    ),
    "Binary Search on Answer": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Binary Search on Answer Template
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Search Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(log n) * C - where C is time to check validity &nbsp;|&nbsp;
          Space: O(1) - constant &nbsp;|&nbsp; Use: Finding optimal value in
          monotonic search space
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Define search space:
            </span>{" "}
            Set left and right bounds, Identify valid range
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While search space valid:
            </span>{" "}
            Calculate mid point, Check if mid is valid:
          </span>
        </div>
      </div>
    ),
    "Bit Manipulation": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Bit Manipulation Template
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Algorithm Technique)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(2^n) - for generating all subsets &nbsp;|&nbsp; Space: O(1) -
          for bit operations &nbsp;|&nbsp; Use: Optimizing space and time using
          binary operations
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Setup:</span> Define n
            (number of elements), Initialize result variable
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Generate subsets:</span>{" "}
            Loop through 0 to 2^n:
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Process each subset:
            </span>{" "}
            Check each bit position, Include if bit is 1, Skip if bit is 0
          </span>
        </div>
      </div>
    ),
    "Sliding Window": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Sliding Window Template</span>
          <span className="ml-2 text-xs text-secondary">
            (Algorithm Pattern)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) - linear scan &nbsp;|&nbsp; Space: O(1) or O(k) - k is
          window size &nbsp;|&nbsp; Use: Array/string problems with consecutive
          elements
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize window:
            </span>{" "}
            Set window pointers (left, right), Initialize window sum/state, Set
            up result variable
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Expand window:</span>{" "}
            Move right pointer, Add new element to window, Update window state
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Contract if invalid:
            </span>{" "}
            While window invalid:
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Update result:</span>{" "}
            Check current window
          </span>
        </div>
      </div>
    ),
    DFS: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">DFS Template</span>
          <span className="ml-2 text-xs text-secondary">
            (Graph/Tree Traversal Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - vertices + edges &nbsp;|&nbsp; Space: O(V) -
          recursion stack &nbsp;|&nbsp; Use: Path finding, tree traversal, cycle
          detection
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Setup</span> Create
            visited set/map, Initialize result structure, Prepare recursion
            stack
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each unvisited node
            </span>{" "}
            Mark as visited, Process current node, For each neighbor: If not
            visited: Recursively visit
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Return result</span>
          </span>
        </div>
      </div>
    ),
    BFS: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">BFS Template</span>
          <span className="ml-2 text-xs text-secondary">
            (Graph/Tree Traversal Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - vertices + edges &nbsp;|&nbsp; Space: O(V) - queue
          size &nbsp;|&nbsp; Use: Shortest path, level order traversal
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create queue and visited set, Add start node to queue, Mark start as
            visited
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While queue not empty:
            </span>{" "}
            Get current node, Process current node, For each neighbor:
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Return result</span>{" "}
          </span>
        </div>
      </div>
    ),
    "Quick Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Quick Sort Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) avg, O(n²) worst &nbsp;|&nbsp; Space: O(log n)
          &nbsp;|&nbsp; Use: General purpose, in-place
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Choose pivot:</span>{" "}
            Select middle element or another strategy
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Partition array:</span>{" "}
            Elements &lt; pivot left, = pivot middle, &gt; pivot right
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive sort:</span>{" "}
            Sort left and right partitions
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Combine results</span>
          </span>
        </div>
      </div>
    ),
    "Merge Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Merge Sort Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) - all cases &nbsp;|&nbsp; Space: O(n) - requires
          auxiliary array &nbsp;|&nbsp; Use: Stable sorting, external sorting
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Divide array:</span>{" "}
            Find middle point, Split into two halves
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive sort:</span>{" "}
            Sort left half, Sort right half
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Merge sorted halves:
            </span>{" "}
            Compare elements, Place smaller first
          </span>
        </div>
      </div>
    ),
    "Stack Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Stack Sort Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n²) - worst and average case &nbsp;|&nbsp; Space: O(n) -
          auxiliary stack &nbsp;|&nbsp; Use: Sorting with stack data structure
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create empty stack, Prepare for sorting
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Process each number:
            </span>{" "}
            While stack top {">"} current:
          </span>
        </div>
      </div>
    ),
    "Heap Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Heap Sort Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) - all cases &nbsp;|&nbsp; Space: O(1) - in-place
          &nbsp;|&nbsp; Use: In-place sorting with guaranteed performance
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Build max heap:</span>{" "}
            Start from n/2 down to 1, Heapify each subtree
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Extract elements:</span>{" "}
            Swap root with last, Reduce heap size, Heapify root node
          </span>
        </div>
      </div>
    ),
    "Bubble Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bubble Sort Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n²) - worst and average case &nbsp;|&nbsp; Space: O(1) -
          in-place &nbsp;|&nbsp; Use: Simple sorting, nearly sorted data
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each pass i from 0 to n-1:
            </span>{" "}
            For each element j from 0 to n-i-1:
          </span>
        </div>
      </div>
    ),
    "Selection Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Selection Sort Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n²) - all cases &nbsp;|&nbsp; Space: O(1) - in-place
          &nbsp;|&nbsp; Use: Small arrays, minimal memory usage
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For i from 0 to n-1:
            </span>{" "}
            Find minimum element in arr[i:n], Swap with element at position i
          </span>
        </div>
      </div>
    ),
    "Insertion Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Insertion Sort Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Sorting Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n²) worst/avg, O(n) best &nbsp;|&nbsp; Space: O(1) - in-place
          &nbsp;|&nbsp; Use: Small arrays, nearly sorted data
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For i from 1 to n-1:
            </span>{" "}
            Store current element as key, Move elements {">"} key one position
            ahead, Insert key in correct position
          </span>
        </div>
      </div>
    ),
    "Binary Search": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Binary Search Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Search Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding
          element in sorted array
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize pointers:
            </span>{" "}
            left = 0, right = length - 1
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While left {"<="} right:
            </span>{" "}
            mid = (left + right) // 2, If arr[mid] == target:
          </span>
        </div>
      </div>
    ),
    "Linear Search": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Linear Search Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Search Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding
          element in unsorted array
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each element in array:
            </span>{" "}
            If element equals target:
          </span>
        </div>
      </div>
    ),
    "Two Sum": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Two Sum Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Array Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Finding pair
          of numbers that sum to target
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each number in array:
            </span>{" "}
            Calculate complement = target - num, If complement in hash map:
          </span>
        </div>
      </div>
    ),
    "Two Sum Two Pointers": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Two Sum Two Pointers Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">(Array Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding pair
          in sorted array that sums to target
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize pointers:
            </span>{" "}
            left = 0, right = length - 1
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While left {"<"} right:
            </span>{" "}
            sum = arr[left] + arr[right], If sum == target:
          </span>
        </div>
      </div>
    ),
    "Dynamic Programming Fibonacci": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Dynamic Programming Fibonacci
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Dynamic Programming)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Computing nth
          Fibonacci number
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize dp array:
            </span>{" "}
            dp[0] = 0, dp[1] = 1
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For i from 2 to n:
            </span>{" "}
            dp[i] = dp[i-1] + dp[i-2]
          </span>
        </div>
      </div>
    ),
    "Dynamic Programming Iterative": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Dynamic Programming Iterative
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Dynamic Programming)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) - linear scan &nbsp;|&nbsp; Space: O(n) - state array
          &nbsp;|&nbsp; Use: Bottom-up dynamic programming
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize state array:
            </span>{" "}
            Create array for storing results, Set base cases
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Iterate through states:
            </span>{" "}
            For i from smallest to largest:
          </span>
        </div>
      </div>
    ),
    "Dynamic Programming Coin Change": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Dynamic Programming Coin Change
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Dynamic Programming)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(amount * coins) &nbsp;|&nbsp; Space: O(amount) &nbsp;|&nbsp;
          Use: Finding minimum coins for amount
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize dp array:
            </span>{" "}
            dp[0] = 0, dp[1...amount] = infinity
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each amount i from 1 to target:
            </span>{" "}
            For each coin in coins:
          </span>
        </div>
      </div>
    ),
    "Greedy Activity Selection": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Greedy Activity Selection
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Greedy Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Maximum
          non-overlapping activities
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Select first activity, prev_end = first activity's end
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each remaining activity:
            </span>{" "}
            If start time {">="} prev_end:
          </span>
        </div>
      </div>
    ),
    "Greedy Fractional Knapsack": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Greedy Fractional Knapsack
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Greedy Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Maximize
          value with weight constraint
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each item:</span> If
            can take whole item:
          </span>
        </div>
      </div>
    ),
    "Greedy Job Scheduling": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Greedy Job Scheduling</span>
          <span className="ml-2 text-xs text-secondary">
            (Greedy Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Maximize
          profit with deadline constraints
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each job:</span>{" "}
            Find latest available slot {"<="} deadline, If found, assign job to
            slot
          </span>
        </div>
      </div>
    ),
    "Greedy Huffman Coding": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Greedy Huffman Coding</span>
          <span className="ml-2 text-xs text-secondary">
            (Greedy Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Data
          compression
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Build Huffman Tree:
            </span>{" "}
            While {">"} 1 node remains:
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Assign codes by traversing tree:
            </span>{" "}
            Left edge = 0, Right edge = 1
          </span>
        </div>
      </div>
    ),
    "Greedy Dijkstra": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Greedy Dijkstra's Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Greedy Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O((V + E) log V) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use:
          Shortest path in weighted graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            distances[start] = 0, distances[others] = infinity, priority queue
            with (0, start)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While queue not empty:
            </span>{" "}
            Get vertex with min distance, For each neighbor:
          </span>
        </div>
      </div>
    ),
    "DFS Linked List": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">DFS on Linked List</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Traversing
          linked list recursively
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base case:</span> If
            node is null, return
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Process current node:
            </span>{" "}
            Visit node, Mark as visited
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive call:</span>{" "}
            DFS(node.next)
          </span>
        </div>
      </div>
    ),
    "DFS Binary Tree": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">DFS on Binary Tree</span>
          <span className="ml-2 text-xs text-secondary">(Tree Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(h) - height of tree &nbsp;|&nbsp;
          Use: Tree traversal, path finding
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base case:</span> If
            node is null, return
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Process current node:
            </span>{" "}
            Visit node, Add to result
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive calls:</span>{" "}
            DFS(node.left), DFS(node.right)
          </span>
        </div>
      </div>
    ),
    "BFS Linked List": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">BFS on Linked List</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Level-wise
          traversal
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create queue, Add head to queue
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While queue not empty:
            </span>{" "}
            Get current node, Process node, Add next node to queue
          </span>
        </div>
      </div>
    ),
    "Stack Implementation": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Stack Implementation</span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: LIFO operations
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">push(item):</span> Add
            item to top
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">pop():</span> Remove and
            return top item
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">peek():</span> Return
            top item without removing
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">isEmpty():</span>{" "}
          </span>
        </div>
      </div>
    ),
    "Queue Implementation": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Queue Implementation</span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: FIFO operations
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">enqueue(item):</span>{" "}
            Add item to end
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">dequeue():</span> Remove
            and return front item
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">peek():</span> Return
            front item without removing
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">isEmpty():</span>{" "}
          </span>
        </div>
      </div>
    ),
    "Hash Table": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Hash Table Implementation
          </span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Fast key-value
          lookups
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">put(key, value):</span>{" "}
            Calculate hash, Handle collision, Store value
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">get(key):</span>{" "}
            Calculate hash, Return value
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">remove(key):</span>{" "}
            Calculate hash
          </span>
        </div>
      </div>
    ),
    "Monotonic Stack": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Monotonic Stack Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Data Structure Technique)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Next/previous
          greater/smaller element
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each element:</span>{" "}
            While stack not empty and condition met:
          </span>
        </div>
      </div>
    ),
    "Monotonic Queue": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Monotonic Queue Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Data Structure Technique)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(k) &nbsp;|&nbsp; Use: Sliding window
          maximum/minimum
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each element:</span>{" "}
            Remove elements outside window, Remove larger/smaller elements, Add
            current element, Update result
          </span>
        </div>
      </div>
    ),
    "Two Pointers": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Two Pointers Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Array Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Array
          manipulation, substring problems
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize pointers:
            </span>{" "}
            left = start position, right = end position
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While left {"<"} right:
            </span>{" "}
            Process elements at both pointers, Move pointers based on condition,
            Update result if needed
          </span>
        </div>
      </div>
    ),
    "Prefix Sum": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Prefix Sum Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Range sum
          queries
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Build prefix array:
            </span>{" "}
            prefix[0] = arr[0], For i from 1 to n:
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Range sum query(left, right):
            </span>{" "}
          </span>
        </div>
      </div>
    ),
    "Kadane's Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Kadane's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Maximum
          subarray sum
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            current_sum = 0, max_sum = -infinity
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each number:</span>{" "}
            current_sum = max(num, current_sum + num), max_sum = max(max_sum,
            current_sum)
          </span>
        </div>
      </div>
    ),
    "Floyd Cycle Detection": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Floyd Cycle Detection</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding cycles
          in linked structures
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize pointers:
            </span>{" "}
            slow = head, fast = head
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Detect cycle:</span>{" "}
            Move slow one step, Move fast two steps, If they meet, cycle exists
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Find cycle start:</span>{" "}
            Reset slow to head, Move both one step
          </span>
        </div>
      </div>
    ),
    "Rabin-Karp": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Rabin-Karp Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(String Matching)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n + m) average, O(n*m) worst &nbsp;|&nbsp; Space: O(1)
          &nbsp;|&nbsp; Use: Pattern matching with rolling hash
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Preprocessing:</span>{" "}
            Calculate pattern hash and first window hash, Set up rolling hash
            parameters
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Rolling hash:</span> For
            each window: Update hash by removing first char and adding last char
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Hash comparison:</span>{" "}
            If hashes match: Verify actual string match to avoid false positives
          </span>
        </div>
      </div>
    ),
    "Knuth-Morris-Pratt": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Knuth-Morris-Pratt Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">(String Matching)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n + m) &nbsp;|&nbsp; Space: O(m) &nbsp;|&nbsp; Use: Pattern
          matching with failure function
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Build failure array:
            </span>{" "}
            For each position i: Find longest proper prefix that is also suffix
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Pattern matching:</span>{" "}
            Use failure array to skip unnecessary comparisons
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Handle mismatches:
            </span>{" "}
            When mismatch occurs: Use failure array to determine next position
          </span>
        </div>
      </div>
    ),
    "Manacher's Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Manacher's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Palindrome Finding)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Finding
          longest palindromic substring
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Preprocessing:</span>{" "}
            Transform string by adding special characters, Initialize palindrome
            lengths array
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Center expansion:</span>{" "}
            For each center: Expand while characters match, Update palindrome
            lengths
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Optimization:</span> Use
            previously computed values to avoid redundant comparisons
          </span>
        </div>
      </div>
    ),
    "Z Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Z Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(String Matching)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Pattern
          matching and string similarity
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Build Z-array:</span>{" "}
            For each position i: Find longest prefix that matches substring
            starting at i
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Optimization:</span> Use
            previously computed values to avoid redundant comparisons
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Pattern matching:</span>{" "}
            Use Z-array to find all occurrences of pattern in text
          </span>
        </div>
      </div>
    ),
    "Matrix Traversal": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Matrix Traversal Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Matrix Operation)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(rows * cols) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Grid
          processing
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each row:</span> For
            each column:
          </span>
        </div>
      </div>
    ),
    "Matrix Traversal Recursive": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Matrix Traversal Recursive
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Matrix Operation)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(rows * cols) &nbsp;|&nbsp; Space: O(rows + cols) &nbsp;|&nbsp;
          Use: Complex grid patterns
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base cases:</span> Check
            boundaries, Check visited
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Process current cell:
            </span>{" "}
            Mark visited, Add to result
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive calls:</span>{" "}
            Visit neighbors
          </span>
        </div>
      </div>
    ),
    "Matrix Spiral Traversal": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Matrix Spiral Traversal</span>
          <span className="ml-2 text-xs text-secondary">
            (Matrix Operation)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(rows * cols) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use:
          Spiral order processing
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize boundaries:
            </span>{" "}
            top, bottom, left, right
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While boundaries valid:
            </span>{" "}
            Traverse right, Traverse down, Traverse left, Traverse up, Update
            boundaries
          </span>
        </div>
      </div>
    ),
    "Matrix Spiral Recursive": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Matrix Spiral Recursive</span>
          <span className="ml-2 text-xs text-secondary">
            (Matrix Operation)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(rows * cols) &nbsp;|&nbsp; Space: O(rows + cols) &nbsp;|&nbsp;
          Use: Recursive spiral patterns
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base cases:</span> Check
            boundaries, Check completion
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Process current layer:
            </span>{" "}
            Traverse perimeter, Add to result
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive call:</span>{" "}
          </span>
        </div>
      </div>
    ),
    Backtracking: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Backtracking Algorithm</span>
          <span className="ml-2 text-xs text-secondary">
            (Algorithm Paradigm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(b^d) - branching factor ^ depth &nbsp;|&nbsp; Space: O(d) -
          recursion depth &nbsp;|&nbsp; Use: Constraint satisfaction problems
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base cases:</span> Check
            if solution found, Check if invalid path
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">For each choice:</span>{" "}
            Make choice, Recursively solve, Undo choice (backtrack)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Return solutions</span>{" "}
          </span>
        </div>
      </div>
    ),
    "Topological Sort": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Topological Sort Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Ordering
          tasks with dependencies
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create indegree array, Create queue for nodes with 0 indegree
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Build graph:</span>{" "}
            Count indegree for each node, Add nodes with 0 indegree to queue
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Process nodes:</span>{" "}
            While queue not empty:
          </span>
        </div>
      </div>
    ),
    "Circular Linked List": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Circular Linked List Implementation
          </span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Circular buffer,
          round-robin scheduling
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">insert(data):</span>{" "}
            Create new node, If empty, point to self, Else, insert after head
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">delete(node):</span>{" "}
            Update next pointers, Handle head case
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">traverse():</span>{" "}
          </span>
        </div>
      </div>
    ),
    Graph: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Graph Implementation</span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use: Representing
          relationships
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">addVertex(v):</span> Add
            to adjacency list
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">addEdge(v1, v2):</span>{" "}
            Update adjacency lists
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">removeVertex(v):</span>{" "}
            Remove all edges, Remove vertex
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              removeEdge(v1, v2):
            </span>{" "}
            Update adjacency lists
          </span>
        </div>
      </div>
    ),
    Tree: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Tree Implementation</span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Hierarchical data
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">insert(data):</span>{" "}
            Find proper location, Create new node, Update parent/child links
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">delete(data):</span>{" "}
            Find node, Update structure, Handle children
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">search(data):</span>{" "}
            Traverse to find data
          </span>
        </div>
      </div>
    ),
    "Binary Search Tree": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Binary Search Tree Operations
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Tree Data Structure)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(h) average, O(n) worst &nbsp;|&nbsp; Space: O(1) for
          operations, O(n) for tree &nbsp;|&nbsp; Use: Ordered data storage and
          retrieval
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Insert:</span> Compare
            with root, Recursively insert in left/right subtree, Maintain
            balance if needed
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Delete:</span> Find
            node, Handle leaf/one-child/two-child cases, Update parent pointers
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Search:</span> Compare
            with root, Recursively search in left/right subtree
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Traversal:</span>{" "}
            Inorder (sorted), Preorder (root first), Postorder (root last)
          </span>
        </div>
      </div>
    ),
    "Trie Operations": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Trie (Prefix Tree) Operations
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Tree Data Structure)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(m) for operations &nbsp;|&nbsp; Space: O(ALPHABET_SIZE * m *
          n) &nbsp;|&nbsp; Use: String operations, prefix matching
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Insert:</span> For each
            character: Create node if needed, Move to next node, Mark end of
            word
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Search:</span> Follow
            path for each character, Check if word ends at last node
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Prefix search:</span>{" "}
            Follow path for prefix, Return all words in subtree
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Delete:</span> Find
            node, Remove end marker, Delete unused nodes bottom-up
          </span>
        </div>
      </div>
    ),
    "Ternary Search Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Ternary Search</span>
          <span className="ml-2 text-xs text-secondary">
            (Searching Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(log₃ n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding
          maximum/minimum in unimodal function
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Divide:</span> Split
            range into three parts
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Compare:</span> Evaluate
            function at two points
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Update:</span> Eliminate
            one-third of range
          </span>
        </div>
        <div>
          <h3 className="font-semibold">Variants:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Real-valued function optimization</li>
            <li>2D ternary search</li>
            <li>Parallel ternary search</li>
          </ol>
        </div>
      </div>
    ),
    "Jump Search Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Jump Search</span>
          <span className="ml-2 text-xs text-secondary">
            (Searching Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(√n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Searching in
          sorted arrays
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Jump size:</span>{" "}
            Calculate optimal jump size (√n)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Jump:</span> Jump fixed
            steps ahead until element is found or exceeded
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Linear search:</span>{" "}
            Search linearly in the found block
          </span>
        </div>
        <div>
          <h3 className="font-semibold">Variants:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Variable jump size</li>
            <li>Block jump search</li>
            <li>Bidirectional jump search</li>
          </ol>
        </div>
      </div>
    ),
    "Exponential Search": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Exponential Search</span>
          <span className="ml-2 text-xs text-secondary">
            (Searching Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Searching
          in unbounded arrays
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Find range:</span>{" "}
            Double index until element is exceeded
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Binary search:</span>{" "}
            Perform binary search in found range
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Return:</span> Return
            found index or -1
          </span>
        </div>
        <div>
          <h3 className="font-semibold">Variants:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Galloping search</li>
            <li>Strided exponential search</li>
            <li>Double exponential search</li>
          </ol>
        </div>
      </div>
    ),
    "Heap Implementation": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Heap Implementation</span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Priority queue
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">insert(data):</span> Add
            at end, Bubble up
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">extractTop():</span>{" "}
            Remove root, Move last to root, Bubble down
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">heapify():</span>{" "}
          </span>
        </div>
      </div>
    ),
    Trie: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Trie Implementation</span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: &nbsp;|&nbsp; Space: O(ALPHABET_SIZE * key_length * n)
          &nbsp;|&nbsp; Use: String dictionary
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">insert(word):</span>{" "}
            Create path of nodes, Mark last as end
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">search(word):</span>{" "}
            Follow path, Check end marker
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              startsWith(prefix):
            </span>{" "}
            Follow path, Return true if exists
          </span>
        </div>
      </div>
    ),
    "Two Sum Dict": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Two Sum Dictionary Pattern
          </span>
          <span className="ml-2 text-xs text-secondary">(Array Technique)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) - single pass through array &nbsp;|&nbsp; Space: O(n) -
          hash table storage &nbsp;|&nbsp; Use: Finding two numbers that sum to
          a target value
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize empty dictionary:
            </span>{" "}
            Create hash table to store numbers and indices
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each number in array:
            </span>{" "}
            Calculate complement = target - current_number, If complement exists
            in dictionary:
          </span>
        </div>
      </div>
    ),
    "Linked List": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Linked List Implementation
          </span>
          <span className="ml-2 text-xs text-secondary">(Data Structure)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: Access O(n), Insert/Delete at known position O(1) &nbsp;|&nbsp;
          Space: O(n) for n elements &nbsp;|&nbsp; Use: Dynamic data storage
          with efficient insertions/deletions
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Node structure:</span>{" "}
            data: value stored, next: pointer to next node
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Basic operations:</span>{" "}
            append(element): Add to end, prepend(element): Add to start,
            delete(element): Remove first occurrence, insert(element, position):
            Insert at specific position, search(element): Return position of
            element
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Implementation details:
            </span>{" "}
            Maintain head pointer, Handle empty list case, Update pointers
            correctly
          </span>
        </div>
      </div>
    ),
    "Divide and Conquer": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Divide and Conquer Pattern
          </span>
          <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log n) - divide and conquer approach &nbsp;|&nbsp; Space:
          O(n) - additional array storage &nbsp;|&nbsp; Use: Sorting, Searching,
          and more
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Divide the problem into smaller sub-problems:
            </span>{" "}
            Break the problem into two or more smaller sub-problems
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Solve each sub-problem recursively:
            </span>{" "}
            Recursively solve each sub-problem
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Combine solutions:
            </span>{" "}
            Combine solutions of sub-problems to solve the original problem
          </span>
        </div>
      </div>
    ),
    Recursion: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Recursion Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) - each recursive call &nbsp;|&nbsp; Space: O(n) - call
          stack storage &nbsp;|&nbsp; Use: Tree traversal, Backtracking,
          Sorting, Searching
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base case:</span> Define
            the condition that stops the recursion
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive case:</span>{" "}
            Call the function with a smaller problem
          </span>
        </div>
      </div>
    ),
    "Dynamic Programming Pattern": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Dynamic Programming Pattern
          </span>
          <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n^2) - nested loops &nbsp;|&nbsp; Space: O(n) - additional
          array storage &nbsp;|&nbsp; Use: Optimizing repetitive calculations
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize a DP array:
            </span>{" "}
            Create an array to store intermediate results
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Fill the DP array:
            </span>{" "}
            Iterate through the problem, Calculate optimal solutions
          </span>
        </div>
      </div>
    ),
    "Articulation Points": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Articulation Points Pattern
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - DFS traversal &nbsp;|&nbsp; Space: O(V) - visited
          array &nbsp;|&nbsp; Use: Finding critical points in a graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize visited array:
            </span>{" "}
            Create an array to track visited nodes
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS traversal:</span>{" "}
            Visit each node, Track discovery time, Check for articulation points
          </span>
        </div>
      </div>
    ),
    "Bellman-Ford": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bellman-Ford Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V * E) - vertex and edge count &nbsp;|&nbsp; Space: O(V) -
          distance array &nbsp;|&nbsp; Use: Shortest path in a weighted graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize distance array:
            </span>{" "}
            Create an array to store shortest distances
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Relax edges:</span>{" "}
            Update distances, Check for negative cycles
          </span>
        </div>
      </div>
    ),
    Bridges: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bridges Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - DFS traversal &nbsp;|&nbsp; Space: O(V) - visited
          array &nbsp;|&nbsp; Use: Finding critical edges in a graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize visited array:
            </span>{" "}
            Create an array to track visited nodes
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS traversal:</span>{" "}
            Track discovery time and low values
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Check conditions:</span>{" "}
            Edge (u,v) is bridge if low[v] {">"} discovery[u]
          </span>
        </div>
      </div>
    ),
    "Graph Dijkstra": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Dijkstra's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O((V+E)logV) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use:
          Finding shortest paths in weighted graphs
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Set
            distance[source] = 0, others = ∞
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Priority queue:</span>{" "}
            Add all vertices with their distances
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Process vertices:</span>{" "}
            Extract min, relax edges, update distances
          </span>
        </div>
      </div>
    ),
    "Graph Kosaraju": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Kosaraju's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V+E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          strongly connected components
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">First DFS:</span>{" "}
            Perform DFS on original graph, record finish times
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Reverse graph:</span>{" "}
            Create transpose of the graph
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Second DFS:</span>{" "}
            Process vertices in reverse order of finish times
          </span>
        </div>
      </div>
    ),
    "Floyd-Warshall": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Floyd-Warshall Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V³) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: Finding all
          pairs shortest paths
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create distance matrix with direct edges
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Relax paths:</span> For
            each intermediate vertex, update distances
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Check negative cycles:
            </span>{" "}
            If any diagonal entry is negative, negative cycle exists
          </span>
        </div>
      </div>
    ),
    Kruskal: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Kruskal Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(E log E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          minimum spanning tree
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Sort
            edges by weight, create disjoint set
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Process edges:</span>{" "}
            For each edge in sorted order
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Union-Find:</span> If
            edge connects different sets, add to MST
          </span>
        </div>
      </div>
    ),
    Prim: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Prim Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O((V+E)logV) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use:
          Finding minimum spanning tree
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Start
            with any vertex, set key[source] = 0
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Priority queue:</span>{" "}
            Add all vertices with their keys
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Process vertices:</span>{" "}
            Extract min, update keys of neighbors
          </span>
        </div>
      </div>
    ),
    Kosaraju: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Kosaraju's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V+E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          strongly connected components
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">First DFS:</span>{" "}
            Perform DFS on original graph, record finish times
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Reverse graph:</span>{" "}
            Create transpose of the graph
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Second DFS:</span>{" "}
            Process vertices in reverse order of finish times
          </span>
        </div>
      </div>
    ),
    "Graph Bellman-Ford": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bellman-Ford Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(VE) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          shortest paths with negative weights
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Set
            distance[source] = 0, others = ∞
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Relax edges:</span> For
            V-1 times, relax all edges
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Check negative cycles:
            </span>{" "}
            If any edge can be relaxed further, negative cycle exists
          </span>
        </div>
      </div>
    ),
    "Network Flow": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Network Flow</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V * E²) &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use:
          Maximum flow in a network
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create residual graph with forward and backward edges
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Find path:</span> Use
            BFS/DFS to find augmenting path
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Update flow:</span>{" "}
            Update residual capacities along path
          </span>
        </div>
        <div>
          <h3 className="font-semibold">Variants:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Dinic's Algorithm: O(V² * E)</li>
            <li>Push-Relabel: O(V² * √E)</li>
            <li>Min-Cost Max-Flow</li>
          </ol>
        </div>
      </div>
    ),
    "Maximum Bipartite Matching": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Maximum Bipartite Matching
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V * E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Maximum
          matching in bipartite graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create empty matching
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Find path:</span> Use
            DFS to find augmenting path
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Update:</span> Flip
            edges along augmenting path
          </span>
        </div>
        <div>
          <h3 className="font-semibold">Variants:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Hopcroft-Karp: O(√V * E)</li>
            <li>Hungarian Algorithm: O(V³)</li>
            <li>Online Bipartite Matching</li>
          </ol>
        </div>
      </div>
    ),
    "Extended Euclidean Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Extended Euclidean Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(log min(a,b)) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use:
          Finding GCD and coefficients
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base case:</span> If b =
            0, return (a, 1, 0)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Recursive step:</span>{" "}
            Compute (g, x, y) for (b, a mod b)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Update coefficients:
            </span>{" "}
            Return (g, y, x - (a/b)*y)
          </span>
        </div>
      </div>
    ),
    "Chinese Remainder Theorem": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Chinese Remainder Theorem
          </span>
          <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log M) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Solving
          simultaneous congruences
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Compute product:</span>{" "}
            M = product of all moduli
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Partial products:</span>{" "}
            For each modulus, compute M/mi
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Modular inverses:</span>{" "}
            Find inverse of M/mi modulo mi
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Combine results:</span>{" "}
            Sum (ai * (M/mi) * inv(M/mi)) mod M
          </span>
        </div>
      </div>
    ),
    "Sieve of Eratosthenes": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Sieve of Eratosthenes</span>
          <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n log log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use:
          Finding all primes up to n
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span>{" "}
            Create boolean array of size n+1
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Mark non-primes:</span>{" "}
            For each i from 2 to sqrt(n), mark multiples of i
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Collect primes:</span>{" "}
            All unmarked numbers are prime
          </span>
        </div>
      </div>
    ),
    "Graph Articulation Points": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Articulation Points</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          critical nodes in a graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS setup:</span>{" "}
            Initialize discovery and low arrays
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS traversal:</span>{" "}
            Track discovery time and low values
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Check conditions:</span>{" "}
            Root with multiple children or node with child's low {">"}=
            discovery time
          </span>
        </div>
      </div>
    ),
    "Graph Bridges": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bridges</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          critical edges in a graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS setup:</span>{" "}
            Initialize discovery and low arrays
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS traversal:</span>{" "}
            Track discovery time and low values
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Check conditions:</span>{" "}
            Edge (u,v) is bridge if low[v] {">"} discovery[u]
          </span>
        </div>
      </div>
    ),
    "A* Search": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">A* Search</span>
          <span className="ml-2 text-xs text-secondary">
            (Search Algorithm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(b^d) &nbsp;|&nbsp; Space: O(b^d) &nbsp;|&nbsp; Use: Finding
          optimal path in weighted graphs
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Set
            g(n) = 0, h(n) = heuristic estimate
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Priority queue:</span>{" "}
            Add start node with f(n) = g(n) + h(n)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Expand nodes:</span>{" "}
            Process node with lowest f(n), update neighbors
          </span>
        </div>
      </div>
    ),
    "Grid Traversal": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Grid Traversal</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n * m) &nbsp;|&nbsp; Space: O(n * m) &nbsp;|&nbsp; Use:
          Exploring 2D grid
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Set
            up visited array and queue
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">BFS/DFS:</span> Process
            cells in order, mark visited
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Neighbors:</span> Check
            all 4/8 directions, handle boundaries
          </span>
        </div>
      </div>
    ),
  };
