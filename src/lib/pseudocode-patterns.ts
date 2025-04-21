export const pseudocodePatterns = new Map([
  [
    "Dynamic Programming",
    `# Dynamic Programming Template
1. Define state parameters
2. Create memoization structure
3. Handle base cases
4. Recurrence relation:
   - Try all possible choices
   - Take minimum/maximum
5. Store result in memo
6. Return optimal answer`,
  ],

  [
    "Greedy",
    `# Greedy Algorithm Template
1. Initialize solution
2. While problem not solved:
   - Choose locally optimal move
   - Update problem state
3. Return solution`,
  ],

  [
    "Binary Search on Answer",
    `# Binary Search on Answer Template
1. Define search space [L, R]
2. While L <= R:
   - Calculate mid point
   - Check if mid is valid
   - Update search space
3. Return best answer found`,
  ],

  [
    "Bit Manipulation",
    `# Bit Manipulation Template
1. Define n (number of elements)
2. Generate all possible subsets (2^n)
3. For each subset:
   - Check each bit position
   - Process elements in subset`,
  ],

  [
    "Sliding Window",
    `# Sliding Window Template
1. Initialize window pointers
2. While right < array length:
   - Expand window
   - Contract if invalid
   - Update result
3. Return optimal result`,
  ],

  [
    "DFS (Depth-First Search)",
    `# DFS Template
1. Create visited set
2. For each unvisited node:
   - Mark as visited
   - Process current node
   - Recursively visit neighbors`,
  ],

  [
    "BFS (Breadth-First Search)",
    `# BFS Template
1. Create queue and visited set
2. Add start node to queue
3. While queue not empty:
   - Process current level
   - Add unvisited neighbors
4. Return result`,
  ],

  [
    "Linked List (Full CRUD Functions)",
    `# Linked List Operations
1. Node Structure:
   - value
   - next pointer

2. Create Operations:
   - Insert at head
   - Insert at tail

3. Read Operations:
   - Search for value

4. Update/Delete:
   - Remove node
   - Update value`,
  ],

  [
    "Quick Sort",
    `# Quick Sort Algorithm
1. Choose a pivot element
2. Partition array around pivot:
   - Elements < pivot go to left
   - Elements = pivot stay in middle
   - Elements > pivot go to right
3. Recursively sort left and right partitions
4. Combine results`,
  ],

  [
    "Merge Sort",
    `# Merge Sort Algorithm
1. Divide array into two halves
2. Recursively sort both halves
3. Merge the sorted halves:
   - Compare elements from both halves
   - Place smaller element first
   - Continue until all elements merged`,
  ],

  [
    "Stack Sort",
    `# Stack Sort Algorithm
1. Initialize empty stack
2. For each number in array:
   - While stack top > current number:
     - Pop from stack
   - Push current number
3. Return stack contents`,
  ],

  [
    "Heap Sort",
    `# Heap Sort Algorithm
1. Build max heap from array
2. Repeatedly:
   - Swap root with last element
   - Reduce heap size by 1
   - Heapify root node
3. Array is sorted in ascending order`,
  ],

  [
    "Bubble Sort",
    `# Bubble Sort Algorithm
1. For each element:
   - Compare with next element
   - Swap if in wrong order
2. Repeat until no swaps needed
3. Array is sorted`,
  ],

  [
    "Selection Sort",
    `# Selection Sort Algorithm
1. Find minimum in unsorted portion
2. Swap with first unsorted position
3. Repeat for remaining unsorted portion
4. Continue until array is sorted`,
  ],

  [
    "Binary Search",
    `# Binary Search Algorithm
1. Initialize left and right pointers
2. While left <= right:
   - Calculate middle point
   - If target found, return index
   - If target < middle, search left half
   - If target > middle, search right half
3. Return -1 if not found`,
  ],

  [
    "Binary Search Tree",
    `# Binary Search Tree Operations
1. Node Structure:
   - value
   - left child
   - right child

2. Tree Properties:
   - Left subtree < node
   - Right subtree > node
   - No duplicates

3. Operations:
   - Insert
   - Search
   - Delete`,
  ],

  [
    "Insertion Sort",
    `# Insertion Sort Algorithm
1. Start from second element
2. Compare with previous elements
3. Insert into correct position
4. Shift larger elements right
5. Repeat for all elements`,
  ],

  [
    "Linear Search",
    `# Linear Search Algorithm
1. Iterate through array
2. Compare each element with target
3. Return index if found
4. Return -1 if not found`,
  ],

  [
    "Two Sum",
    `# Two Sum Algorithm
1. For each number in array:
   - For each other number:
     - If sum equals target
     - Return indices
2. Return empty array if not found`,
  ],

  [
    "Dynamic Programming Algorithm",
    `# Dynamic Programming Algorithm
1. Initialize DP array
2. Set base case
3. For each element:
   - Calculate optimal value
   - Use previous results
4. Return maximum value`,
  ],

  [
    "Greedy Algorithm",
    `# Greedy Algorithm
1. Sort array
2. Initialize profit
3. For each element:
   - If profitable move exists
   - Add to total profit
4. Return total profit`,
  ],

  [
    "Backtracking Algorithm",
    `# Backtracking Algorithm
1. Define backtrack function:
   - If valid solution found:
     - Add to results
   - For each possible choice:
     - Make choice
     - Recursively backtrack
     - Undo choice
2. Return all solutions`,
  ],

  [
    "Sliding Window Algorithm",
    `# Sliding Window Algorithm
1. Initialize window sum and max
2. For each element:
   - Add to current sum
   - If window full:
     - Remove leftmost element
   - Update maximum sum
3. Return maximum`,
  ],

  [
    "Bit Manipulation Algorithm",
    `# Bit Manipulation Algorithm
1. Initialize result
2. For each number:
   - XOR with result
3. Return result`,
  ],

  [
    "Topological Sort Algorithm",
    `# Topological Sort Algorithm
1. Calculate in-degree for each vertex
2. Add vertices with 0 in-degree to queue
3. While queue not empty:
   - Remove vertex
   - Add to result
   - Reduce in-degree of neighbors
   - Add new 0 in-degree vertices
4. Return sorted list`,
  ],

  [
    "Stack Data Structure",
    `# Stack Data Structure
1. Operations:
   - push: Add to top
   - pop: Remove from top
   - peek: View top element
   - isEmpty: Check if empty
2. Use array as underlying storage`,
  ],

  [
    "Queue Data Structure",
    `# Queue Data Structure
1. Operations:
   - enqueue: Add to back
   - dequeue: Remove from front
   - peek: View front element
   - isEmpty: Check if empty
2. Use array/linked list as storage`,
  ],

  [
    "Linked List Implementation",
    `# Linked List Implementation
1. Node structure:
   - value
   - next pointer
2. Operations:
   - append: Add to end
   - prepend: Add to front
   - traverse: Visit all nodes`,
  ],

  [
    "Hash Table Implementation",
    `# Hash Table Implementation
1. Array of buckets
2. Hash function:
   - Convert key to index
3. Operations:
   - insert: Add key-value pair
   - get: Retrieve value by key
4. Handle collisions`,
  ],

  [
    "Graph Implementation",
    `# Graph Implementation
1. Adjacency list structure
2. Operations:
   - addVertex: Add new vertex
   - addEdge: Connect vertices
   - traverse: Visit all vertices
3. Handle directed/undirected`,
  ],

  [
    "Tree Implementation",
    `# Tree Implementation
1. Node structure:
   - value
   - left/right children
2. Operations:
   - insert: Add new node
   - search: Find value
   - traverse: Visit all nodes`,
  ],

  [
    "Heap Implementation",
    `# Heap Implementation
1. Array-based structure
2. Operations:
   - insert: Add and heapify up
   - extractMax: Remove root
   - heapifyDown: Maintain heap
3. Parent-child relationships`,
  ],

  [
    "Trie Implementation",
    `# Trie Implementation
1. Node structure:
   - character map
   - isEnd flag
2. Operations:
   - insert: Add word
   - search: Find word
   - startsWith: Prefix search`,
  ],

  [
    "Monotonic Stack Algorithm",
    `# Monotonic Stack Algorithm
1. Initialize empty stack
2. For each element:
   - While stack top > element:
     - Pop from stack
   - Push element
3. Maintains increasing order`,
  ],

  [
    "Monotonic Queue Algorithm",
    `# Monotonic Queue Algorithm
1. Initialize empty queue
2. For each element:
   - While queue back > element:
     - Pop from back
   - Push element
3. Maintains increasing order`,
  ],

  [
    "Two Pointers Algorithm",
    `# Two Pointers Algorithm
1. Initialize left and right pointers
2. While left < right:
   - If sum equals target:
     - Return indices
   - If sum < target:
     - Move left pointer
   - If sum > target:
     - Move right pointer
3. Return empty if not found`,
  ],
]);
