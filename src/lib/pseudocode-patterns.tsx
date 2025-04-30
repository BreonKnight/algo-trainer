import { ChevronRight } from "lucide-react";

export const patternNameMapping: Record<string, string> = {
  "State Compression DP": "State Compression Dynamic Programming",
  "Digit DP": "Digit Dynamic Programming",
  "Probability DP": "Probability Dynamic Programming",
  "Tree DP": "Tree Dynamic Programming",
  "Network Flow": "Network Flow Algorithm",
  "Strongly Connected Components": "Strongly Connected Components Algorithm",
  "Jump Search": "Jump Search Algorithm",
  "Ternary Search": "Ternary Search Algorithm",
  Trie: "Trie Data Structure",
};

export const pseudocodePatterns: Record<string, string | (() => JSX.Element)> =
  {
    "Dynamic Programming": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Dynamic Programming Template
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Algorithm Paradigm)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n * m) - depends on state space dimensions &nbsp;|&nbsp;
          Space: O(n * m) - for memoization table &nbsp;|&nbsp; Use:
          Optimization problems with overlapping subproblems
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Define state parameters:
            </span>{" "}
            Identify subproblem dimensions, choose state representation
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Create memoization structure:
            </span>{" "}
            Initialize memo table/map, match dimensions to state
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Handle base cases:
            </span>{" "}
            Identify smallest subproblems, set their values directly
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Define recurrence relation:
            </span>{" "}
            Try all possible choices, take minimum/maximum, store result in memo
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">5.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return optimal answer
            </span>
          </span>
        </div>
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
    "Z-Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Z-Algorithm</span>
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
    "Ternary Search": () => (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Time Complexity:</h3>
          <p>O(log3 n) - where n is the length of the array</p>
        </div>
        <div>
          <h3 className="font-semibold">Space Complexity:</h3>
          <p>O(1) - constant extra space</p>
        </div>
        <div>
          <h3 className="font-semibold">Steps:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Divide the search space into three parts</li>
            <li>
              Calculate two midpoints: mid1 = left + (right - left) / 3 and mid2
              = right - (right - left) / 3
            </li>
            <li>If target is found at either midpoint, return its index</li>
            <li>If target is less than arr[mid1], search in the left third</li>
            <li>
              If target is greater than arr[mid2], search in the right third
            </li>
            <li>Otherwise, search in the middle third</li>
            <li>Repeat until target is found or search space is exhausted</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">For Unimodal Functions:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Useful for finding maximum/minimum of a unimodal function</li>
            <li>Compare function values at two points in the search space</li>
            <li>Eliminate one-third of the search space based on comparison</li>
            <li>Repeat until the search space is small enough</li>
          </ol>
        </div>
      </div>
    ),
    "Jump Search": () => (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Time Complexity:</h3>
          <p>O(√n) - where n is the length of the array</p>
        </div>
        <div>
          <h3 className="font-semibold">Space Complexity:</h3>
          <p>O(1) - constant extra space</p>
        </div>
        <div>
          <h3 className="font-semibold">Steps:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Determine the optimal jump size: step = √n</li>
            <li>
              Jump ahead by step size until we find an element greater than the
              target
            </li>
            <li>Perform a linear search in the identified block</li>
            <li>Return the index if target is found, otherwise return -1</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">Optimized Version:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Same as basic version but with binary search in the identified
              block
            </li>
            <li>Reduces the number of comparisons in the final search phase</li>
            <li>
              Still maintains O(√n) time complexity but with better constants
            </li>
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
      </div>
    ),
    Dijkstra: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Dijkstra Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V^2) - vertex count &nbsp;|&nbsp; Space: O(V) - distance array
          &nbsp;|&nbsp; Use: Shortest path in a weighted graph
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
      </div>
    ),
    "Floyd-Warshall": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Floyd-Warshall Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V^3) - vertex count &nbsp;|&nbsp; Space: O(V^2) - distance
          array &nbsp;|&nbsp; Use: All-pairs shortest path in a weighted graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize distance array:
            </span>{" "}
            Create a 2D array to store shortest distances
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
          Time: O(E log E) - edge count &nbsp;|&nbsp; Space: O(V) - parent array
          &nbsp;|&nbsp; Use: Minimum spanning tree in a weighted graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize parent array:
            </span>{" "}
            Create an array to store parent nodes
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
          Time: O(V^2) - vertex count &nbsp;|&nbsp; Space: O(V) - parent array
          &nbsp;|&nbsp; Use: Minimum spanning tree in a weighted graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize parent array:
            </span>{" "}
            Create an array to store parent nodes
          </span>
        </div>
      </div>
    ),
    Kosaraju: () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Kosaraju Pattern</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - vertex and edge count &nbsp;|&nbsp; Space: O(V) -
          visited array &nbsp;|&nbsp; Use: Strongly connected components in a
          graph
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
      </div>
    ),
    "Graph Bellman-Ford": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bellman-Ford Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V * E) - vertex and edge count &nbsp;|&nbsp; Space: O(V) -
          distance array &nbsp;|&nbsp; Use: Shortest path in a weighted graph
          with negative edges
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize distance array:
            </span>{" "}
            Set distances[start] = 0, distances[others] = infinity
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Relax edges V-1 times:
            </span>{" "}
            For each edge (u, v) with weight w: If distance[u] + w {"<"}{" "}
            distance[v], update distance[v] = distance[u] + w
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Check for negative cycles:
            </span>{" "}
            For each edge (u, v) with weight w: If distance[u] + w {"<"}{" "}
            distance[v], negative cycle exists
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return shortest paths:
            </span>{" "}
            Return the distance array containing shortest paths from source to
            all vertices
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
          Time: O((V + E) log V) with priority queue &nbsp;|&nbsp; Space: O(V) -
          distance array &nbsp;|&nbsp; Use: Shortest path in a weighted graph
          with non-negative edges
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize data structures:
            </span>{" "}
            Set distances[start] = 0, distances[others] = infinity, Create
            priority queue with (0, start)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While queue not empty:
            </span>{" "}
            Extract vertex u with minimum distance, If u is destination, return
            distance[u]
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each neighbor v of u:
            </span>{" "}
            Calculate new distance = distance[u] + edge_weight(u, v), If new
            distance {"<"} distance[v], update distance[v] and add
            (new_distance, v) to queue
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return shortest paths:
            </span>{" "}
            Return the distance array containing shortest paths from source to
            all vertices
          </span>
        </div>
      </div>
    ),
    "Graph Floyd-Warshall": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Floyd-Warshall Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V^3) - vertex count &nbsp;|&nbsp; Space: O(V^2) - distance
          array &nbsp;|&nbsp; Use: All-pairs shortest path in a weighted graph,
          including negative edges
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize distance matrix:
            </span>{" "}
            Create a V×V matrix where dist[i][j] = weight of edge (i,j) if
            exists, 0 if i=j, infinity otherwise
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each intermediate vertex k:
            </span>{" "}
            For each source vertex i: For each destination vertex j: If
            dist[i][k] + dist[k][j] {"<"} dist[i][j], update dist[i][j] =
            dist[i][k] + dist[k][j]
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Check for negative cycles:
            </span>{" "}
            If dist[i][i] {"<"} 0 for any vertex i, negative cycle exists
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return all-pairs shortest paths:
            </span>{" "}
            Return the distance matrix containing shortest paths between all
            pairs of vertices
          </span>
        </div>
      </div>
    ),
    "Graph Kruskal": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Kruskal's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(E log E) - edge count &nbsp;|&nbsp; Space: O(V) - parent array
          &nbsp;|&nbsp; Use: Finding minimum spanning tree in a weighted,
          undirected graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize data structures:
            </span>{" "}
            Create a disjoint set for each vertex, Sort edges by weight in
            ascending order
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each edge (u, v) in sorted order:
            </span>{" "}
            If find(u) ≠ find(v): Union(u, v), Add edge to MST
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Check MST completion:
            </span>{" "}
            If number of edges in MST = V-1, MST is complete
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return minimum spanning tree:
            </span>{" "}
            Return the set of edges that form the minimum spanning tree
          </span>
        </div>
      </div>
    ),
    "Graph Prim": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Prim's Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O((V + E) log V) with priority queue &nbsp;|&nbsp; Space: O(V) -
          key array &nbsp;|&nbsp; Use: Finding minimum spanning tree in a
          weighted, undirected graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize data structures:
            </span>{" "}
            Set key[start] = 0, key[others] = infinity, parent[all] = null,
            Create priority queue with (0, start)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              While queue not empty:
            </span>{" "}
            Extract vertex u with minimum key, Mark u as included in MST
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              For each neighbor v of u:
            </span>{" "}
            If v not in MST and weight(u,v) {"<"} key[v]: Update key[v] =
            weight(u,v), parent[v] = u, Add (key[v], v) to queue
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return minimum spanning tree:
            </span>{" "}
            Return the set of edges (parent[v], v) for all vertices v
          </span>
        </div>
      </div>
    ),
    "Graph Articulation Points": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Articulation Points Algorithm
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - DFS traversal &nbsp;|&nbsp; Space: O(V) - visited
          array &nbsp;|&nbsp; Use: Finding critical points whose removal
          disconnects the graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize data structures:
            </span>{" "}
            Create arrays for discovery time, lowest reachable time, parent, and
            visited
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS traversal:</span>{" "}
            For each unvisited vertex u: Call DFS(u, parent, discovery, low,
            visited, time, articulation_points)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS function:</span>{" "}
            Mark u as visited, Set discovery[u] = low[u] = ++time, For each
            neighbor v: If v not visited: Set parent[v] = u, Recursively call
            DFS(v), Update low[u] = min(low[u], low[v]), If low[v] ≥
            discovery[u] and u is not root: Add u to articulation points
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Handle root vertex:
            </span>{" "}
            If root has more than one child in DFS tree: Add root to
            articulation points
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">5.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return articulation points:
            </span>{" "}
            Return the set of vertices identified as articulation points
          </span>
        </div>
      </div>
    ),
    "Graph Bridges": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Bridges Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) - DFS traversal &nbsp;|&nbsp; Space: O(V) - visited
          array &nbsp;|&nbsp; Use: Finding critical edges whose removal
          disconnects the graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize data structures:
            </span>{" "}
            Create arrays for discovery time, lowest reachable time, parent, and
            visited
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS traversal:</span>{" "}
            For each unvisited vertex u: Call DFS(u, parent, discovery, low,
            visited, time, bridges)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">DFS function:</span>{" "}
            Mark u as visited, Set discovery[u] = low[u] = ++time, For each
            neighbor v: If v not visited: Set parent[v] = u, Recursively call
            DFS(v), Update low[u] = min(low[u], low[v]), If low[v] {"<"}{" "}
            discovery[u]: Edge (u,v) is a bridge
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Return bridges:</span>{" "}
            Return the set of edges identified as bridges
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
          Time: O(V + E) - vertex and edge count &nbsp;|&nbsp; Space: O(V) -
          visited array &nbsp;|&nbsp; Use: Finding strongly connected components
          in a directed graph
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Initialize data structures:
            </span>{" "}
            Create visited array, stack for finishing times, and list for SCCs
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">First DFS pass:</span>{" "}
            For each unvisited vertex u: Call DFS(u, visited, stack), This fills
            stack with vertices in order of finishing times
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Transpose the graph:
            </span>{" "}
            Create a new graph with all edges reversed
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">4.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Second DFS pass:</span>{" "}
            Reset visited array, While stack not empty: Pop vertex u, If u not
            visited: Create new SCC, Call DFS(u, visited, SCC), Add SCC to list
            of SCCs
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">5.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Return strongly connected components:
            </span>{" "}
            Return the list of SCCs
          </span>
        </div>
      </div>
    ),
    "Network Flow": () => (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Time Complexity:</h3>
          <p>
            O(VE²) for Ford-Fulkerson, O(V²E) for Edmonds-Karp, O(V³) for
            Dinic's algorithm
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Space Complexity:</h3>
          <p>
            O(V+E) - where V is the number of vertices and E is the number of
            edges
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Steps:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Initialize flow network with source and sink</li>
            <li>Find an augmenting path from source to sink</li>
            <li>Determine the minimum residual capacity along the path</li>
            <li>Update the flow along the path</li>
            <li>Repeat until no augmenting path exists</li>
            <li>The maximum flow is the sum of all augmenting path flows</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">Variants:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Ford-Fulkerson: Uses DFS to find augmenting paths</li>
            <li>Edmonds-Karp: Uses BFS to find shortest augmenting paths</li>
            <li>Dinic's algorithm: Uses level graphs and blocking flows</li>
            <li>Push-Relabel: Maintains a preflow and pushes excess flow</li>
          </ol>
        </div>
      </div>
    ),
    "Strongly Connected Components": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Strongly Connected Components
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          strongly connected components in directed graphs
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">First DFS:</span>{" "}
            Perform DFS and record finish times
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Transpose graph:</span>{" "}
            Reverse all edges of the graph
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Second DFS:</span>{" "}
            Process vertices in reverse finish time order
          </span>
        </div>
      </div>
    ),
    "State Compression Dynamic Programming": () => (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Time Complexity:</h3>
          <p>
            Varies based on problem, often O(n * 2^k) where n is the problem
            size and k is the number of states
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Space Complexity:</h3>
          <p>O(2^k) - where k is the number of states</p>
        </div>
        <div>
          <h3 className="font-semibold">Steps:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Represent state using binary numbers (0 or 1 for each position)
            </li>
            <li>
              Define dp[i][mask] as the optimal solution for first i elements
              with state mask
            </li>
            <li>For each position i and each possible state mask:</li>
            <li className="ml-4">
              Try all possible transitions from current state
            </li>
            <li className="ml-4">
              Update dp[i][new_mask] based on optimal substructure
            </li>
            <li>Return the optimal solution from the final state</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">Common Operations:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Setting a bit: {"mask | (1 << position)"}</li>
            <li>Clearing a bit: {"mask & ~(1 << position)"}</li>
            <li>Checking a bit: {"(mask >> position) & 1"}</li>
            <li>Counting set bits: {"__builtin_popcount(mask)"}</li>
            <li>
              Iterating through subsets:{" "}
              {
                "for (int submask = mask; submask; submask = (submask - 1) & mask)"
              }
            </li>
          </ol>
        </div>
      </div>
    ),
    "Digit Dynamic Programming": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Digit Dynamic Programming
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Dynamic Programming)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(d * s * b) &nbsp;|&nbsp; Space: O(d * s) &nbsp;|&nbsp; Use:
          Counting numbers with specific properties in a range
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">State definition:</span>{" "}
            Position, tight/non-tight flag, sum/property to track
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Digit iteration:</span>{" "}
            For each position: Try all possible digits, Handle tight/non-tight
            cases
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Property tracking:
            </span>{" "}
            Update running sum/property, Check if target condition is met
          </span>
        </div>
      </div>
    ),
    "Probability Dynamic Programming": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Probability Dynamic Programming
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Dynamic Programming)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n * m) &nbsp;|&nbsp; Space: O(n * m) &nbsp;|&nbsp; Use:
          Solving probability-based problems with overlapping subproblems
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">State definition:</span>{" "}
            Define states representing probability scenarios
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Transition probabilities:
            </span>{" "}
            Calculate probabilities for state transitions
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Base cases:</span>{" "}
            Define initial probability states
          </span>
        </div>
      </div>
    ),
    "Tree DP": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Tree Dynamic Programming
          </span>
          <span className="ml-2 text-xs text-secondary">
            (Dynamic Programming)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solving
          tree-based problems with optimal substructure
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Tree traversal:</span>{" "}
            Post-order traversal to process children before parent
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">State definition:</span>{" "}
            Define states for each node based on children
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              State combination:
            </span>{" "}
            Combine child states to compute parent state
          </span>
        </div>
      </div>
    ),
    "A* Search": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">A* Search Algorithm</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          shortest path with heuristic guidance
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Initialize:</span> Open
            set with start node, closed set empty
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Node selection:</span>{" "}
            Select node with lowest f(n) = g(n) + h(n)
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Path reconstruction:
            </span>{" "}
            Track parent pointers to reconstruct path
          </span>
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
          Time: O(V * E) &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use:
          Finding maximum matching in bipartite graphs
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">
              Graph construction:
            </span>{" "}
            Create bipartite graph representation
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Matching process:</span>{" "}
            Find augmenting paths and update matching
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Termination:</span> Stop
            when no more augmenting paths exist
          </span>
        </div>
      </div>
    ),
    "Network Flow Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Network Flow</span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V * E^2) &nbsp;|&nbsp; Space: O(V + E) &nbsp;|&nbsp; Use:
          Finding maximum flow in networks
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Residual graph:</span>{" "}
            Create and maintain residual capacities
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Augmenting paths:</span>{" "}
            Find paths with positive residual capacity
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Flow update:</span>{" "}
            Update flow along augmenting paths
          </span>
        </div>
      </div>
    ),
    "Strongly Connected Components Algorithm": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">
            Strongly Connected Components
          </span>
          <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(V + E) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
          strongly connected components in directed graphs
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">First DFS:</span>{" "}
            Perform DFS and record finish times
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Transpose graph:</span>{" "}
            Reverse all edges of the graph
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Second DFS:</span>{" "}
            Process vertices in reverse finish time order
          </span>
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
          sorted arrays with fixed jump size
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
            <span className="font-semibold text-accent">Jump process:</span>{" "}
            Jump through array until target range found
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Linear search:</span>{" "}
            Perform linear search in the identified block
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
          Time: O(log3 n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding
          maximum/minimum of unimodal functions
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Divide range:</span>{" "}
            Split search space into three parts
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Compare values:</span>{" "}
            Compare values at two midpoints
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Update range:</span>{" "}
            Eliminate one-third of search space
          </span>
        </div>
      </div>
    ),
    "Trie Data Structure": () => (
      <div>
        <div className="mb-2">
          <span className="text-accent font-bold">Trie</span>
          <span className="ml-2 text-xs text-secondary">
            (Tree Data Structure)
          </span>
        </div>
        <div className="mb-2 text-xs text-secondary">
          Time: O(L) for search/insert &nbsp;|&nbsp; Space: O(N*L) &nbsp;|&nbsp;
          Use: String storage and prefix matching
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">1.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Node structure:</span>{" "}
            Each node represents a character
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">2.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Insertion:</span> Add
            characters as nodes, mark end of words
          </span>
        </div>
        <div className="flex items-start mb-1">
          <span className="font-bold text-main mr-2">3.</span>
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>
            <span className="font-semibold text-accent">Search:</span> Traverse
            nodes following characters
          </span>
        </div>
      </div>
    ),
  };
