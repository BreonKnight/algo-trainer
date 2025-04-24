export const pseudocodePatterns = new Map([
  [
    "Dynamic Programming",
    `# Dynamic Programming Template
Type: Algorithm Paradigm
Time: O(n * m) - depends on state space dimensions
Space: O(n * m) - for memoization table
Use Case: Optimization problems with overlapping subproblems

1. Define state parameters:
   - Identify subproblem dimensions
   - Choose state representation

2. Create memoization structure:
   - Initialize memo table/map
   - Match dimensions to state

3. Handle base cases:
   - Identify smallest subproblems
   - Set their values directly

4. Define recurrence relation:
   - Try all possible choices
   - Take minimum/maximum
   - Store result in memo

5. Return optimal answer`,
  ],

  [
    "Greedy",
    `# Greedy Algorithm Template
Type: Algorithm Paradigm
Time: O(n) or O(n log n) - typically requires sorting
Space: O(1) - usually constant
Use Case: Local optimal choices lead to global optimal solution

1. Initialize solution:
   - Set up initial state
   - Prepare data structures

2. While problem not solved:
   - Choose locally optimal move
   - Update problem state
   - Track current solution

3. Return solution:
   - Validate final state
   - Return optimal result`,
  ],

  [
    "Binary Search on Answer",
    `# Binary Search on Answer Template
Type: Search Algorithm
Time: O(log n) * C - where C is time to check validity
Space: O(1) - constant
Use Case: Finding optimal value in monotonic search space

1. Define search space:
   - Set left and right bounds
   - Identify valid range

2. While search space valid:
   - Calculate mid point
   - Check if mid is valid:
     * If valid, update best answer
     * If too small, search right half
     * If too large, search left half

3. Return best answer found`,
  ],

  [
    "Bit Manipulation",
    `# Bit Manipulation Template
Type: Algorithm Technique
Time: O(2^n) - for generating all subsets
Space: O(1) - for bit operations
Use Case: Optimizing space and time using binary operations

1. Setup:
   - Define n (number of elements)
   - Initialize result variable

2. Generate subsets:
   - Loop through 0 to 2^n:
     * Convert number to binary
     * Each bit represents element

3. Process each subset:
   - Check each bit position
   - Include if bit is 1
   - Skip if bit is 0

4. Return result`,
  ],

  [
    "Sliding Window",
    `# Sliding Window Template
Type: Algorithm Pattern
Time: O(n) - linear scan
Space: O(1) or O(k) - k is window size
Use Case: Array/string problems with consecutive elements

1. Initialize window:
   - Set window pointers (left, right)
   - Initialize window sum/state
   - Set up result variable

2. Expand window:
   - Move right pointer
   - Add new element to window
   - Update window state

3. Contract if invalid:
   - While window invalid:
     * Remove leftmost element
     * Move left pointer
     * Update window state

4. Update result:
   - Check current window
   - Update best result if needed`,
  ],

  [
    "DFS",
    `# DFS Template
Type: Graph/Tree Traversal Algorithm
Time: O(V + E) - vertices + edges
Space: O(V) - recursion stack
Use Case: Path finding, tree traversal, cycle detection

1. Setup:
   - Create visited set/map
   - Initialize result structure
   - Prepare recursion stack

2. For each unvisited node:
   - Mark as visited
   - Process current node
   - For each neighbor:
     * If not visited:
     * Recursively visit

3. Return result`,
  ],

  [
    "BFS",
    `# BFS Template
Type: Graph/Tree Traversal Algorithm
Time: O(V + E) - vertices + edges
Space: O(V) - queue size
Use Case: Shortest path, level order traversal

1. Initialize:
   - Create queue and visited set
   - Add start node to queue
   - Mark start as visited

2. While queue not empty:
   - Get current node
   - Process current node
   - For each neighbor:
     * If not visited:
     * Add to queue
     * Mark as visited

3. Return result`,
  ],

  [
    "Quick Sort",
    `# Quick Sort Algorithm
Type: Sorting Algorithm
Time: O(n log n) average, O(n²) worst
Space: O(log n) - recursion stack
Use Case: General purpose sorting, in-place sorting

1. Choose pivot:
   - Select middle element
   - Or use other selection strategy

2. Partition array:
   - Elements < pivot go left
   - Elements = pivot stay middle
   - Elements > pivot go right

3. Recursive sort:
   - Sort left partition
   - Sort right partition

4. Combine results`,
  ],

  [
    "Merge Sort",
    `# Merge Sort Algorithm
Type: Sorting Algorithm
Time: O(n log n) - all cases
Space: O(n) - requires auxiliary array
Use Case: Stable sorting, external sorting

1. Divide array:
   - Find middle point
   - Split into two halves

2. Recursive sort:
   - Sort left half
   - Sort right half

3. Merge sorted halves:
   - Compare elements
   - Place smaller first
   - Handle remaining elements`,
  ],

  [
    "Stack Sort",
    `# Stack Sort Algorithm
Type: Sorting Algorithm
Time: O(n²) - worst and average case
Space: O(n) - auxiliary stack
Use Case: Sorting with stack data structure

1. Initialize:
   - Create empty stack
   - Prepare for sorting

2. Process each number:
   - While stack top > current:
     * Pop from stack
   - Push current number

3. Return stack contents`,
  ],

  [
    "Heap Sort",
    `# Heap Sort Algorithm
Type: Sorting Algorithm
Time: O(n log n) - all cases
Space: O(1) - in-place
Use Case: In-place sorting with guaranteed performance

1. Build max heap:
   - Start from n/2 down to 1
   - Heapify each subtree

2. Extract elements:
   - Swap root with last
   - Reduce heap size
   - Heapify root node

3. Array is sorted`,
  ],

  [
    "Bubble Sort",
    `# Bubble Sort Algorithm
Type: Sorting Algorithm
Time: O(n²) - worst and average case
Space: O(1) - in-place
Use Case: Simple sorting, nearly sorted data

1. For each pass i from 0 to n-1:
   - For each element j from 0 to n-i-1:
     * If arr[j] > arr[j+1]:
       - Swap arr[j] and arr[j+1]

2. Return sorted array`,
  ],

  [
    "Selection Sort",
    `# Selection Sort Algorithm
Type: Sorting Algorithm
Time: O(n²) - all cases
Space: O(1) - in-place
Use Case: Small arrays, minimal memory usage

1. For i from 0 to n-1:
   - Find minimum element in arr[i:n]
   - Swap with element at position i

2. Return sorted array`,
  ],

  [
    "Insertion Sort",
    `# Insertion Sort Algorithm
Type: Sorting Algorithm
Time: O(n²) worst/avg, O(n) best
Space: O(1) - in-place
Use Case: Small arrays, nearly sorted data

1. For i from 1 to n-1:
   - Store current element as key
   - Move elements > key one position ahead
   - Insert key in correct position

2. Return sorted array`,
  ],

  [
    "Binary Search",
    `# Binary Search Algorithm
Type: Search Algorithm
Time: O(log n)
Space: O(1)
Use Case: Finding element in sorted array

1. Initialize pointers:
   - left = 0, right = length - 1

2. While left <= right:
   - mid = (left + right) // 2
   - If arr[mid] == target:
     * Return mid
   - If arr[mid] < target:
     * left = mid + 1
   - Else:
     * right = mid - 1

3. Return -1 if not found`,
  ],

  [
    "Linear Search",
    `# Linear Search Algorithm
Type: Search Algorithm
Time: O(n)
Space: O(1)
Use Case: Finding element in unsorted array

1. For each element in array:
   - If element equals target:
     * Return its index

2. Return -1 if not found`,
  ],

  [
    "Two Sum",
    `# Two Sum Algorithm
Type: Array Algorithm
Time: O(n)
Space: O(n)
Use Case: Finding pair of numbers that sum to target

1. Initialize hash map

2. For each number in array:
   - Calculate complement = target - num
   - If complement in hash map:
     * Return [map[complement], current_index]
   - Add num to hash map

3. Return [] if no solution`,
  ],

  [
    "Two Sum Two Pointers",
    `# Two Sum Two Pointers Algorithm
Type: Array Algorithm
Time: O(n)
Space: O(1)
Use Case: Finding pair in sorted array that sums to target

1. Initialize pointers:
   - left = 0, right = length - 1

2. While left < right:
   - sum = arr[left] + arr[right]
   - If sum == target:
     * Return [left, right]
   - If sum < target:
     * left++
   - Else:
     * right--

3. Return [] if no solution`,
  ],

  [
    "Dynamic Programming Fibonacci",
    `# Dynamic Programming Fibonacci
Type: Dynamic Programming
Time: O(n)
Space: O(n)
Use Case: Computing nth Fibonacci number

1. Initialize dp array:
   - dp[0] = 0, dp[1] = 1

2. For i from 2 to n:
   - dp[i] = dp[i-1] + dp[i-2]

3. Return dp[n]`,
  ],

  [
    "Dynamic Programming Iterative",
    `# Dynamic Programming Iterative
Type: Dynamic Programming
Time: O(n) - linear scan
Space: O(n) - state array
Use Case: Bottom-up dynamic programming

1. Initialize state array:
   - Create array for storing results
   - Set base cases

2. Iterate through states:
   - For i from smallest to largest:
     * Calculate current state
     * Use previously computed results

3. Return final state`,
  ],

  [
    "Dynamic Programming Coin Change",
    `# Dynamic Programming Coin Change
Type: Dynamic Programming
Time: O(amount * coins)
Space: O(amount)
Use Case: Finding minimum coins for amount

1. Initialize dp array:
   - dp[0] = 0
   - dp[1...amount] = infinity

2. For each amount i from 1 to target:
   - For each coin in coins:
     * If coin <= i:
       - dp[i] = min(dp[i], dp[i-coin] + 1)

3. Return dp[amount]`,
  ],

  [
    "Greedy Activity Selection",
    `# Greedy Activity Selection
Type: Greedy Algorithm
Time: O(n log n)
Space: O(1)
Use Case: Maximum non-overlapping activities

1. Sort activities by end time

2. Initialize:
   - Select first activity
   - prev_end = first activity's end

3. For each remaining activity:
   - If start time >= prev_end:
     * Select activity
     * Update prev_end

4. Return selected activities`,
  ],

  [
    "Greedy Fractional Knapsack",
    `# Greedy Fractional Knapsack
Type: Greedy Algorithm
Time: O(n log n)
Space: O(1)
Use Case: Maximize value with weight constraint

1. Calculate value/weight ratio for items
2. Sort items by ratio (descending)

3. For each item:
   - If can take whole item:
     * Add to knapsack
   - Else:
     * Take fraction that fits
     * Break loop

4. Return maximum value`,
  ],

  [
    "Greedy Job Scheduling",
    `# Greedy Job Scheduling
Type: Greedy Algorithm
Time: O(n log n)
Space: O(1)
Use Case: Maximize profit with deadline constraints

1. Sort jobs by profit (descending)

2. Find maximum deadline

3. Initialize time slots array

4. For each job:
   - Find latest available slot <= deadline
   - If found, assign job to slot

5. Return maximum profit`,
  ],

  [
    "Greedy Huffman Coding",
    `# Greedy Huffman Coding
Type: Greedy Algorithm
Time: O(n log n)
Space: O(n)
Use Case: Data compression

1. Create leaf nodes for characters

2. Build Huffman Tree:
   - While > 1 node remains:
     * Extract two minimum freq nodes
     * Create new node with their sum
     * Add new node to queue

3. Assign codes by traversing tree:
   - Left edge = 0
   - Right edge = 1

4. Return character codes`,
  ],

  [
    "Greedy Dijkstra",
    `# Greedy Dijkstra's Algorithm
Type: Greedy Algorithm
Time: O((V + E) log V)
Space: O(V)
Use Case: Shortest path in weighted graph

1. Initialize:
   - distances[start] = 0
   - distances[others] = infinity
   - priority queue with (0, start)

2. While queue not empty:
   - Get vertex with min distance
   - For each neighbor:
     * Calculate new distance
     * If shorter, update and add to queue

3. Return distances`,
  ],

  [
    "DFS Linked List",
    `# DFS on Linked List
Type: Graph Algorithm
Time: O(n)
Space: O(n)
Use Case: Traversing linked list recursively

1. Base case:
   - If node is null, return

2. Process current node:
   - Visit node
   - Mark as visited

3. Recursive call:
   - DFS(node.next)

4. Return result`,
  ],

  [
    "DFS Binary Tree",
    `# DFS on Binary Tree
Type: Tree Algorithm
Time: O(n)
Space: O(h) - height of tree
Use Case: Tree traversal, path finding

1. Base case:
   - If node is null, return

2. Process current node:
   - Visit node
   - Add to result

3. Recursive calls:
   - DFS(node.left)
   - DFS(node.right)

4. Return result`,
  ],

  [
    "BFS Linked List",
    `# BFS on Linked List
Type: Graph Algorithm
Time: O(n)
Space: O(n)
Use Case: Level-wise traversal

1. Initialize:
   - Create queue
   - Add head to queue

2. While queue not empty:
   - Get current node
   - Process node
   - Add next node to queue

3. Return result`,
  ],

  [
    "Stack Implementation",
    `# Stack Implementation
Type: Data Structure
Operations: O(1)
Space: O(n)
Use Case: LIFO operations

Methods:
1. push(item):
   - Add item to top

2. pop():
   - Remove and return top item

3. peek():
   - Return top item without removing

4. isEmpty():
   - Check if stack is empty`,
  ],

  [
    "Queue Implementation",
    `# Queue Implementation
Type: Data Structure
Operations: O(1)
Space: O(n)
Use Case: FIFO operations

Methods:
1. enqueue(item):
   - Add item to end

2. dequeue():
   - Remove and return front item

3. peek():
   - Return front item without removing

4. isEmpty():
   - Check if queue is empty`,
  ],

  [
    "Hash Table",
    `# Hash Table Implementation
Type: Data Structure
Operations: O(1) average
Space: O(n)
Use Case: Fast key-value lookups

Methods:
1. put(key, value):
   - Calculate hash
   - Handle collision
   - Store value

2. get(key):
   - Calculate hash
   - Return value

3. remove(key):
   - Calculate hash
   - Remove entry`,
  ],

  [
    "Monotonic Stack",
    `# Monotonic Stack Algorithm
Type: Data Structure Technique
Time: O(n)
Space: O(n)
Use Case: Next/previous greater/smaller element

1. Initialize empty stack

2. For each element:
   - While stack not empty and condition met:
     * Process stack top
     * Pop from stack
   - Push current element

3. Process remaining stack`,
  ],

  [
    "Monotonic Queue",
    `# Monotonic Queue Algorithm
Type: Data Structure Technique
Time: O(n)
Space: O(k)
Use Case: Sliding window maximum/minimum

1. Initialize deque

2. For each element:
   - Remove elements outside window
   - Remove larger/smaller elements
   - Add current element
   - Update result

3. Return result`,
  ],

  [
    "Two Pointers",
    `# Two Pointers Algorithm
Type: Array Algorithm
Time: O(n)
Space: O(1)
Use Case: Array manipulation, substring problems

1. Initialize pointers:
   - left = start position
   - right = end position

2. While left < right:
   - Process elements at both pointers
   - Move pointers based on condition
   - Update result if needed

3. Return result`,
  ],

  [
    "Prefix Sum",
    `# Prefix Sum Algorithm
Type: Array Technique
Time: O(n)
Space: O(n)
Use Case: Range sum queries

1. Build prefix array:
   - prefix[0] = arr[0]
   - For i from 1 to n:
     * prefix[i] = prefix[i-1] + arr[i]

2. Range sum query(left, right):
   - Return prefix[right] - prefix[left-1]`,
  ],

  [
    "Kadane's Algorithm",
    `# Kadane's Algorithm
Type: Array Technique
Time: O(n)
Space: O(1)
Use Case: Maximum subarray sum

1. Initialize:
   - current_sum = 0
   - max_sum = -infinity

2. For each number:
   - current_sum = max(num, current_sum + num)
   - max_sum = max(max_sum, current_sum)

3. Return max_sum`,
  ],

  [
    "Floyd Cycle Detection",
    `# Floyd Cycle Detection
Type: Graph Algorithm
Time: O(n)
Space: O(1)
Use Case: Finding cycles in linked structures

1. Initialize pointers:
   - slow = head
   - fast = head

2. Detect cycle:
   - Move slow one step
   - Move fast two steps
   - If they meet, cycle exists

3. Find cycle start:
   - Reset slow to head
   - Move both one step
   - Meeting point is start`,
  ],

  [
    "Rabin-Karp",
    `# Rabin-Karp Algorithm
Type: String Algorithm
Time: O(n+m)
Space: O(1)
Use Case: Pattern matching with rolling hash

1. Calculate pattern hash

2. For each window in text:
   - Calculate window hash
   - If hashes match:
     * Check characters
   - Update rolling hash

3. Return matches`,
  ],

  [
    "Knuth-Morris-Pratt",
    `# Knuth-Morris-Pratt Algorithm
Type: String Algorithm
Time: O(n+m)
Space: O(m)
Use Case: Efficient string pattern matching

1. Build failure function:
   - Compute partial match table
   - Track prefix matches

2. Search pattern:
   - Use failure function
   - Skip unnecessary comparisons

3. Return matches`,
  ],

  [
    "Manacher's Algorithm",
    `# Manacher's Algorithm
Type: String Algorithm
Time: O(n)
Space: O(n)
Use Case: Finding all palindromic substrings

1. Transform string:
   - Add special characters

2. For each center:
   - Expand palindrome
   - Use previous results
   - Update radius array

3. Return palindromes`,
  ],

  [
    "Z-Algorithm",
    `# Z-Algorithm
Type: String Algorithm
Time: O(n)
Space: O(n)
Use Case: Pattern matching, string preprocessing

1. Build Z-array:
   - Track matching prefixes
   - Use Z-box technique

2. For each position:
   - Extend match if possible
   - Use previous results

3. Return Z-array`,
  ],

  [
    "Matrix Traversal",
    `# Matrix Traversal Algorithm
Type: Matrix Operation
Time: O(rows * cols)
Space: O(1)
Use Case: Grid processing

1. For each row:
   - For each column:
     * Process current cell
     * Update result

2. Return result`,
  ],

  [
    "Matrix Traversal Recursive",
    `# Matrix Traversal Recursive
Type: Matrix Operation
Time: O(rows * cols)
Space: O(rows + cols)
Use Case: Complex grid patterns

1. Base cases:
   - Check boundaries
   - Check visited

2. Process current cell:
   - Mark visited
   - Add to result

3. Recursive calls:
   - Visit neighbors
   - Combine results`,
  ],

  [
    "Matrix Spiral Traversal",
    `# Matrix Spiral Traversal
Type: Matrix Operation
Time: O(rows * cols)
Space: O(1)
Use Case: Spiral order processing

1. Initialize boundaries:
   - top, bottom, left, right

2. While boundaries valid:
   - Traverse right
   - Traverse down
   - Traverse left
   - Traverse up
   - Update boundaries

3. Return result`,
  ],

  [
    "Matrix Spiral Recursive",
    `# Matrix Spiral Recursive
Type: Matrix Operation
Time: O(rows * cols)
Space: O(rows + cols)
Use Case: Recursive spiral patterns

1. Base cases:
   - Check boundaries
   - Check completion

2. Process current layer:
   - Traverse perimeter
   - Add to result

3. Recursive call:
   - Process inner layer`,
  ],

  [
    "Backtracking",
    `# Backtracking Algorithm
Type: Algorithm Paradigm
Time: O(b^d) - branching factor ^ depth
Space: O(d) - recursion depth
Use Case: Constraint satisfaction problems

1. Base cases:
   - Check if solution found
   - Check if invalid path

2. For each choice:
   - Make choice
   - Recursively solve
   - Undo choice (backtrack)

3. Return solutions`,
  ],

  [
    "Topological Sort",
    `# Topological Sort Algorithm
Type: Graph Algorithm
Time: O(V + E)
Space: O(V)
Use Case: Ordering tasks with dependencies

1. Initialize:
   - Create indegree array
   - Create queue for nodes with 0 indegree

2. Build graph:
   - Count indegree for each node
   - Add nodes with 0 indegree to queue

3. Process nodes:
   - While queue not empty:
     * Remove node
     * Add to result
     * Decrease neighbors' indegree
     * Add new 0 indegree nodes to queue

4. Return result if no cycle`,
  ],

  [
    "Circular Linked List",
    `# Circular Linked List Implementation
Type: Data Structure
Operations: O(1) or O(n)
Space: O(n)
Use Case: Circular buffer, round-robin scheduling

Methods:
1. insert(data):
   - Create new node
   - If empty, point to self
   - Else, insert after head

2. delete(node):
   - Update next pointers
   - Handle head case

3. traverse():
   - Stop when back at start`,
  ],

  [
    "Graph",
    `# Graph Implementation
Type: Data Structure
Operations: O(1) or O(V+E)
Space: O(V + E)
Use Case: Representing relationships

Methods:
1. addVertex(v):
   - Add to adjacency list

2. addEdge(v1, v2):
   - Update adjacency lists

3. removeVertex(v):
   - Remove all edges
   - Remove vertex

4. removeEdge(v1, v2):
   - Update adjacency lists`,
  ],

  [
    "Tree",
    `# Tree Implementation
Type: Data Structure
Operations: O(h) - height of tree
Space: O(n)
Use Case: Hierarchical data

Methods:
1. insert(data):
   - Find proper location
   - Create new node
   - Update parent/child links

2. delete(data):
   - Find node
   - Update structure
   - Handle children

3. search(data):
   - Traverse to find data`,
  ],

  [
    "Binary Search Tree",
    `# Binary Search Tree Implementation
Type: Data Structure
Operations: O(h) - height of tree
Space: O(n)
Use Case: Ordered data storage

Methods:
1. insert(data):
   - Compare with current
   - Go left if smaller
   - Go right if larger

2. delete(data):
   - Find node
   - Handle leaf/1-child/2-child

3. search(data):
   - Binary search process`,
  ],

  [
    "Heap Implementation",
    `# Heap Implementation
Type: Data Structure
Operations: O(log n)
Space: O(n)
Use Case: Priority queue

Methods:
1. insert(data):
   - Add at end
   - Bubble up

2. extractTop():
   - Remove root
   - Move last to root
   - Bubble down

3. heapify():
   - Build heap property`,
  ],

  [
    "Trie",
    `# Trie Implementation
Type: Data Structure
Operations: O(key_length)
Space: O(ALPHABET_SIZE * key_length * n)
Use Case: String dictionary

Methods:
1. insert(word):
   - Create path of nodes
   - Mark last as end

2. search(word):
   - Follow path
   - Check end marker

3. startsWith(prefix):
   - Follow path
   - Return true if exists`,
  ],
]);
