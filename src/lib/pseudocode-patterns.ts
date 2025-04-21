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
Time: O(n²) - worst and average, O(n) best
Space: O(1) - in-place
Use Case: Educational, small arrays, nearly sorted data

1. Outer loop:
   - Track if any swaps made
   - Iterate n times

2. Inner loop:
   - Compare adjacent elements
   - Swap if wrong order
   - Update swap flag

3. Early exit:
   - If no swaps needed
   - Array is sorted`,
  ],

  [
    "Selection Sort",
    `# Selection Sort Algorithm
Type: Sorting Algorithm
Time: O(n²) - all cases
Space: O(1) - in-place
Use Case: Small arrays, minimal memory usage

1. Find minimum in unsorted:
   - Iterate through unsorted
   - Track minimum element
   - Remember position

2. Swap elements:
   - Exchange with first unsorted
   - Mark position as sorted

3. Repeat process:
   - Move to next position
   - Consider remaining elements

4. Until sorted:
   - Continue until end
   - Array fully sorted`,
  ],

  [
    "Insertion Sort",
    `# Insertion Sort Algorithm
Type: Sorting Algorithm
Time: O(n²) - worst and average, O(n) best
Space: O(1) - in-place
Use Case: Small arrays, online sorting, nearly sorted data

1. Start from second element:
   - Get current element
   - Prepare insertion

2. Find insertion point:
   - Compare with previous
   - Shift larger elements
   - Make space for insertion

3. Insert element:
   - Place in correct position
   - Continue with next element`,
  ],

  [
    "Binary Search",
    `# Binary Search Algorithm
Type: Search Algorithm
Time: O(log n) - all cases
Space: O(1) - iterative, O(log n) - recursive
Use Case: Searching in sorted arrays

1. Initialize pointers:
   - Set left to start
   - Set right to end

2. While valid range:
   - Calculate middle
   - Compare with target:
     * If equal, return index
     * If less, search right
     * If more, search left

3. Handle not found:
   - Return -1 or sentinel`,
  ],

  [
    "Linear Search",
    `# Linear Search Algorithm
Type: Search Algorithm
Time: O(n) - all cases
Space: O(1) - constant
Use Case: Unsorted arrays, small arrays

1. Initialize:
   - Start from first element
   - Track current position

2. Scan array:
   - Compare each element
   - Check against target
   - Track current index

3. Return result:
   - Found: return index
   - Not found: return -1`,
  ],

  [
    "Two Sum",
    `# Two Sum Algorithm
Type: Array Algorithm
Time: O(n) - with hash table, O(n²) - brute force
Space: O(n) - hash table
Use Case: Finding pairs with target sum

1. Initialize:
   - Track seen numbers
   - Prepare result array

2. Process each number:
   - Calculate complement
   - Check if seen before:
     * If found, return pair
     * If not, store current

3. Return result:
   - Found: return indices
   - Not found: return empty`,
  ],

  [
    "Hash Table",
    `# Hash Table Implementation
Type: Data Structure
Time: O(1) average, O(n) worst for operations
Space: O(n) - for storing n elements
Use Case: Fast key-value lookups

1. Core Components:
   - Array of buckets
   - Hash function:
     * Convert key to index
     * Distribute uniformly
   - Collision strategy

2. Basic Operations:
   - Insert(key, value):
     * Compute hash index
     * Handle collisions
     * Store key-value
   - Get(key):
     * Compute hash index
     * Find key in bucket
     * Return value
   - Delete(key):
     * Find and remove

3. Advanced Features:
   - Dynamic resizing
   - Load factor management
   - Collision resolution`,
  ],

  [
    "Graph",
    `# Graph Implementation
Type: Data Structure
Time: O(1) for adjacency list ops, O(V+E) for traversal
Space: O(V + E) - vertices and edges
Use Case: Network modeling, relationships

1. Structure:
   - Adjacency list/matrix
   - Edge properties:
     * Weight/cost
     * Direction

2. Basic Operations:
   - Add vertex:
     * Create new entry
     * Initialize edges
   - Add edge:
     * Connect vertices
     * Set properties
   - Remove vertex/edge

3. Algorithms:
   - Traversal (DFS/BFS)
   - Path finding
   - Cycle detection`,
  ],

  [
    "Tree",
    `# Tree Implementation
Type: Data Structure
Time: O(h) for most operations, h = height
Space: O(n) - for n nodes
Use Case: Hierarchical data, fast search

1. Node Structure:
   - Value/data
   - Left/right children
   - Parent reference

2. Tree Operations:
   - Insert:
     * Find position
     * Update links
   - Delete:
     * Handle leaf nodes
     * Handle single child
     * Handle two children
   - Search:
     * Compare values
     * Choose path

3. Traversals:
   - In-order (LNR)
   - Pre-order (NLR)
   - Post-order (LRN)
   - Level-order`,
  ],

  [
    "Binary Search Tree",
    `# Binary Search Tree
Type: Data Structure
Time: O(log n) average, O(n) worst for operations
Space: O(n) - for n nodes
Use Case: Ordered data storage and retrieval

1. Properties:
   - Left subtree < node
   - Right subtree > node
   - No duplicates

2. Operations:
   - Insert:
     * Compare with root
     * Choose subtree
     * Create new node
   - Delete:
     * Find node
     * Handle cases
     * Maintain BST
   - Search:
     * Compare values
     * Navigate tree

3. Traversal:
   - In-order gives sorted
   - Balance if needed`,
  ],

  [
    "Heap Implementation",
    `# Heap Implementation
Type: Data Structure
Time: O(log n) for insert/delete, O(1) for peek
Space: O(n) - for n elements
Use Case: Priority queues, heap sort

1. Structure:
   - Array-based tree
   - Parent-child indices
   - Size tracking

2. Core Operations:
   - Insert:
     * Add at end
     * Heapify up
   - Extract root:
     * Remove top
     * Replace with last
     * Heapify down

3. Helper Functions:
   - Get parent/child
   - Swap elements
   - Compare values`,
  ],

  [
    "Trie",
    `# Trie Data Structure
Type: Data Structure
Time: O(L) for operations, L = key length
Space: O(ALPHABET_SIZE * L * N) - N keys
Use Case: String/prefix operations, autocomplete

1. Node Structure:
   - Map/Array of children nodes
   - Boolean flag for word ending
   - Optional value/frequency counter

2. Basic Operations:
   - Insert word:
     * Traverse/create nodes for each character
     * Mark last node as word end
   - Search word:
     * Follow character path
     * Verify word end marker
   - Search prefix:
     * Follow character path
     * No need to check word end

3. Advanced Operations:
   - Delete word
   - Count words with prefix
   - Autocomplete suggestions`,
  ],

  [
    "Stack Implementation",
    `# Stack Implementation
Type: Data Structure
Time: O(1) for all operations
Space: O(n) - for n elements
Use Case: LIFO operations, function calls

1. Structure:
   - Array/linked list
   - Top pointer
   - Size tracking

2. Core Operations:
   - Push:
     * Add to top
     * Update pointer
     * Check overflow
   - Pop:
     * Remove from top
     * Update pointer
     * Check underflow

3. Helper Methods:
   - Peek top
   - Check empty
   - Get size`,
  ],

  [
    "Queue Implementation",
    `# Queue Implementation
Type: Data Structure
Time: O(1) for all operations
Space: O(n) - for n elements
Use Case: FIFO operations, BFS

1. Structure:
   - Array/linked list
   - Front/rear pointers
   - Size counter

2. Core Operations:
   - Enqueue:
     * Add to rear
     * Update pointer
     * Handle overflow
   - Dequeue:
     * Remove from front
     * Update pointer
     * Handle underflow

3. Helper Methods:
   - Peek front
   - Check empty
   - Get size

4. Variations:
   - Circular queue
   - Priority queue
   - Double-ended`,
  ],

  [
    "Backtracking",
    `# Backtracking Algorithm
Type: Algorithm Paradigm
Time: O(b^d) - b = branching factor, d = depth
Space: O(d) - recursion depth
Use Case: Constraint satisfaction problems

1. State Space:
   - Define parameters
   - Set constraints
   - Track current state

2. Recursive Function:
   - Base cases:
     * Found solution
     * Invalid state
   - For each choice:
     * Make choice
     * Recurse deeper
     * Undo choice

3. Optimization:
   - Prune invalid paths
   - Order choices well
   - Use constraints`,
  ],

  [
    "Monotonic Stack",
    `# Monotonic Stack Algorithm
Type: Data Structure Pattern
Time: O(n) - each element pushed/popped once
Space: O(n) - stack size
Use Case: Next/previous greater/smaller element

1. Initialize:
   - Empty stack
   - Choose property:
     * Increasing
     * Decreasing

2. Process Elements:
   - While stack not empty:
     * Check property
     * Pop if violated
   - Push current
   - Track result

3. Applications:
   - Next greater/less
   - Temperature span
   - Rectangle area`,
  ],

  [
    "Monotonic Queue",
    `# Monotonic Queue Algorithm
Type: Data Structure Pattern
Time: O(n) - each element processed once
Space: O(k) - k = window size
Use Case: Sliding window min/max

1. Initialize:
   - Empty deque
   - Choose property:
     * Increasing
     * Decreasing

2. Process Elements:
   - Remove outdated
   - Maintain property:
     * Remove from back
     * Add new element
   - Track optimal

3. Applications:
   - Sliding window
   - Next greater/less`,
  ],

  [
    "Two Pointers",
    `# Two Pointers Algorithm
Type: Algorithm Pattern
Time: O(n) - single pass through array
Space: O(1) - constant
Use Case: Array manipulation, substring problems

1. Initialize:
   - Set left pointer
   - Set right pointer
   - Define target/condition

2. While pointers valid:
   - Calculate current state
   - Compare with target:
     * If match, return result
     * If too small, move left
     * If too large, move right

3. Return result:
   - Found solution
   - Or not found`,
  ],

  [
    "Linked List",
    `# Linked List Implementation
Type: Data Structure
Time: O(1) head ops, O(n) search/tail ops
Space: O(n) - for n nodes
Use Case: Dynamic data storage, constant time insertion

1. Node Structure:
   - Value/data field
   - Next pointer
   - Optional prev pointer

2. Basic Operations:
   - Insert:
     * At beginning (prepend)
     * At end (append)
     * At position
   - Delete:
     * From beginning
     * From end
     * From position
   - Search:
     * Traverse list
     * Compare values

3. Helper Operations:
   - Get length
   - Reverse list
   - Detect cycle
   - Find middle

4. Edge Cases:
   - Empty list
   - Single node
   - Last node`,
  ],

  [
    "Circular Linked List",
    `# Circular Linked List Implementation
Type: Data Structure
Time: O(1) for tail ops, O(n) for search
Space: O(n) - for n nodes
Use Case: Round-robin scheduling, circular buffer

1. Node Structure:
   - Value/data field
   - Next pointer
   - Last node points to head

2. Basic Operations:
   - Insert:
     * At beginning:
       - Update new node's next
       - Update last node's next
     * At end:
       - Set next to head
       - Update references
   - Delete:
     * Update surrounding links
     * Maintain circular property

3. Special Considerations:
   - Cycle detection
   - List traversal:
     * Stop at head
     * Handle full cycle
   - Empty list case
   - Single node case`,
  ],

  [
    "Topological Sort",
    `# Topological Sort Algorithm
Type: Graph Algorithm
Time: O(V + E) - vertices + edges
Space: O(V) - for queue and in-degree map
Use Case: Dependency resolution, task scheduling

1. Initialize:
   - Create in-degree map
   - Empty queue for 0 in-degree
   - Result array/list

2. Build In-degree:
   - Count incoming edges
   - For each vertex:
     * Calculate dependencies
     * Track incoming edges

3. Process Vertices:
   - Start with 0 in-degree
   - While queue not empty:
     * Remove vertex
     * Add to result
     * Reduce neighbors' in-degree
     * Add new 0 in-degree

4. Detect Cycles:
   - Check result length
   - Verify all processed
   - Handle invalid cases`,
  ],
]);
