import { PatternKey } from "./types";

export const patterns = new Map<PatternKey, string>([
  [
    "Quick Sort" as PatternKey,
    `def quick_sort(arr):
    """
    Sort array using quick sort algorithm.
    Time Complexity: O(n log n) average case, O(n²) worst case
    Space Complexity: O(log n) due to recursion stack
    
    Pseudocode:
    1. Base case: If array length <= 1, return array
    
    2. Choose pivot:
       a. Select last element as pivot
       b. Initialize left = 0, right = len(arr) - 2
    
    3. Partition:
       a. While left <= right:
          - If arr[left] <= pivot: move left pointer right
          - If arr[right] > pivot: move right pointer left
          - If both conditions false: swap elements
       b. Place pivot in correct position
    
    4. Recursively sort:
       a. Sort left subarray (elements <= pivot)
       b. Sort right subarray (elements > pivot)
    
    Example:
    arr = [7, 2, 1, 6, 8, 5, 3, 4]
    
    First partition (pivot = 4):
    [7, 2, 1, 6, 8, 5, 3, 4]
     L                    P
    Swap 7 and 3:
    [3, 2, 1, 6, 8, 5, 7, 4]
        L              R
    Swap 6 and 1:
    [3, 2, 1, 6, 8, 5, 7, 4]
           L        R
    Final partition:
    [3, 2, 1, 4, 8, 5, 7, 6]
              P
    
    Recursive calls:
    Left: [3, 2, 1]
    Right: [8, 5, 7, 6]
    """
    if len(arr) <= 1:
        return arr
    
    pivot = arr[-1]
    left = 0
    right = len(arr) - 2
    
    while left <= right:
        if arr[left] <= pivot:
            left += 1
        elif arr[right] > pivot:
            right -= 1
        else:
            arr[left], arr[right] = arr[right], arr[left]
            
    arr[left], arr[-1] = arr[-1], arr[left]
    
    return quick_sort(arr[:left]) + [pivot] + quick_sort(arr[left+1:])`,
  ],

  [
    "Merge Sort",
    `def merge_sort(arr):
    """
    Sort array using merge sort algorithm.
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    
    Pseudocode:
    1. Base case: If array length <= 1, return array
    
    2. Divide:
       a. Calculate mid = len(arr) // 2
       b. Split array into left = arr[:mid] and right = arr[mid:]
       c. Recursively sort left and right halves
    
    3. Merge:
       a. Initialize result array and pointers i, j = 0
       b. While both halves have elements:
          - Compare elements at current pointers
          - Add smaller element to result
          - Increment corresponding pointer
       c. Add remaining elements from non-empty half
       d. Return merged result
    
    Example:
    arr = [38, 27, 43, 3, 9, 82, 10]
    
    First level division:
    left = [38, 27, 43, 3]
    right = [9, 82, 10]
    
    Second level (left):
    [38, 27] | [43, 3]
    
    Second level (right):
    [9, 82] | [10]
    
    Merging process:
    [27, 38] | [3, 43] -> [3, 27, 38, 43]
    [9, 82] | [10] -> [9, 10, 82]
    
    Final merge:
    [3, 27, 38, 43] | [9, 10, 82] -> [3, 9, 10, 27, 38, 43, 82]
    """
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result`,
  ],

  [
    "Stack Sort",
    `def stack_sort(arr):
    """
    Sorts an array using a stack-based approach.
    Time Complexity: O(n²)
    Space Complexity: O(n)
    """
    # Initialize an empty stack to store elements in sorted order
    stack = []
    # Iterate through each element in the input array
    for num in arr:
        # While the stack is not empty and the top element is greater than current number
        # This ensures elements in stack are in descending order
        while stack and stack[-1] > num:
            # Remove elements from stack until we find the correct position
            stack.pop()
        # Add the current number to the stack
        stack.append(num)
    # Return the sorted stack (elements are in descending order)
    return stack`,
  ],

  [
    "Heap Sort",
    `def heap_sort(arr):
    """
    Sort array using heap sort algorithm.
    Time Complexity: O(n log n)
    Space Complexity: O(1) in-place sorting
    
    Pseudocode:
    1. Build max heap from array:
       a. Start from last non-leaf node (n//2 - 1)
       b. For each node:
          - Compare with children
          - If child > parent, swap
          - Recursively heapify affected subtree
    
    2. Extract elements from heap:
       a. For i from n-1 to 1:
          - Swap root (max) with last element
          - Reduce heap size by 1
          - Heapify root
    
    Example:
    arr = [12, 11, 13, 5, 6, 7]
    
    Step 1: Build max heap
    Initial:     After heapify:
      12            13
     /  \\          /  \\
    11   13       11   12
    / \\  /        / \\  /
    5  6 7        5  6  7
    
    Step 2: Extract elements
    [13, 11, 12, 5, 6, 7]  # Initial heap
    [7, 11, 12, 5, 6, 13]  # After first extraction
    [6, 11, 12, 5, 7, 13]  # After second extraction
    ...
    [5, 6, 7, 11, 12, 13]  # Final sorted array
    """
def heapify(arr, n, i):
    largest = i
        left = 2 * i + 1
        right = 2 * i + 2
    
    if left < n and arr[left] > arr[largest]:
        largest = left
    
    if right < n and arr[right] > arr[largest]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    
    n = len(arr)
    
    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # Extract elements from heap one by one
    for i in range(n-1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    
    return arr`,
  ],

  [
    "Bubble Sort",
    `def bubble_sort(arr):
    """
    Sorts an array using the Bubble Sort algorithm.
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    # Get the length of the array
    n = len(arr)
    # Outer loop: iterate through the entire array
    for i in range(n):
        # Inner loop: compare adjacent elements
        # After each outer iteration, the largest element "bubbles up" to the end
        # So we only need to check up to n-i-1 elements
        for j in range(0, n-i-1):
            # If current element is greater than next element, swap them
            if arr[j] > arr[j+1]:
                # Swap elements to maintain ascending order
                arr[j], arr[j+1] = arr[j+1], arr[j]
    # Return the sorted array
    return arr`,
  ],

  [
    "Selection Sort",
    `def selection_sort(arr):
    """
    Sorts an array using the Selection Sort algorithm.
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    # Get the length of the array
    n = len(arr)
    # Outer loop: iterate through the array
    for i in range(n):
        # Assume the current position has the minimum element
        min_idx = i
        # Inner loop: find the minimum element in the unsorted portion
        for j in range(i+1, n):
            # If we find a smaller element, update the minimum index
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap the minimum element with the current position
        # This places the minimum element in its correct position
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    # Return the sorted array
    return arr`,
  ],

  [
    "Insertion Sort",
    `def insertion_sort(arr):
    """
    Sorts an array using the Insertion Sort algorithm.
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    # Start from the second element (index 1)
    # First element is considered sorted by itself
    for i in range(1, len(arr)):
        # Store the current element to be inserted
        key = arr[i]
        # Initialize j to the position before the current element
        j = i - 1
        # Move elements of arr[0..i-1] that are greater than key
        # to one position ahead of their current position
        while j >= 0 and arr[j] > key:
            # Shift element to the right
            arr[j+1] = arr[j]
            # Move to the previous element
            j -= 1
        # Place the key in its correct position
        arr[j+1] = key
    # Return the sorted array
    return arr`,
  ],

  [
    "Binary Search",
    `def binary_search(arr, target):
    """
    Search for target in sorted array using binary search.
    Time Complexity: O(log n)
    Space Complexity: O(1)
    
    Pseudocode:
    1. Initialize left = 0, right = len(arr) - 1
    
    2. While left <= right:
       a. Calculate mid = (left + right) // 2
       b. If arr[mid] == target:
          - Return mid (found target)
       c. If arr[mid] < target:
          - Search right half: left = mid + 1
       d. If arr[mid] > target:
          - Search left half: right = mid - 1
    
    3. Return -1 (target not found)
    
    Example:
    arr = [1, 3, 5, 7, 9, 11, 13, 15]
    target = 7
    
    Iteration 1: left=0, right=7, mid=3
    arr[mid] = 7 == target
    Return 3 (found at index 3)
    
    Another example:
    arr = [1, 3, 5, 7, 9, 11, 13, 15]
    target = 6
    
    Iteration 1: left=0, right=7, mid=3
    arr[mid] = 7 > 6
    right = 2
    
    Iteration 2: left=0, right=2, mid=1
    arr[mid] = 3 < 6
    left = 2
    
    Iteration 3: left=2, right=2, mid=2
    arr[mid] = 5 < 6
    left = 3
    
    Iteration 4: left=3, right=2
    left > right, loop ends
    Return -1 (not found)
    """
    left = 0
    right = len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`,
  ],

  [
    "Binary Search on Answer",
    `def binary_search_on_answer(arr, target):
    """
    Performs binary search on a sorted array to find the first element >= target.
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    def is_valid(mid):
        return arr[mid] >= target

    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if is_valid(mid):
            right = mid - 1
        else:
            left = mid + 1
    return left`,
  ],

  [
    "Linear Search",
    `def linear_search(arr, target):
    """
    Searches for a target value in an array using linear search.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    for i, num in enumerate(arr):
        if num == target:
            return i
    return -1`,
  ],

  [
    "Two Sum",
    `def two_sum(arr, target):
    """
    Finds pairs of numbers in an array that sum to a target value.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Dictionary to store complement values
    # Key: complement (target - current number)
    # Value: current number
    my_dict = {}
    results = []
    
    # Iterate through each number in the array
    for num in arr:
        # If current number is found in dictionary,
        # we've found a pair that sums to target
        if num in my_dict:
            # Add the pair to results
            # my_dict[num] is the first number we saw earlier
            # num is the current number
            results.append([my_dict[num], num])
        else:
            # Store the complement (target - num) as key
            # and current number as value
            # This helps us find pairs later
            my_dict[target - num] = num
    
    # Return all pairs that sum to target
    return results`,
  ],

  [
    "Dynamic Programming",
    `def longest_common_subsequence(str1, str2):
    """
    Find the longest common subsequence of two strings using dynamic programming.
    Time Complexity: O(m*n) where m and n are lengths of input strings
    Space Complexity: O(m*n) for the DP table
    
    Pseudocode:
    1. Create a DP table of size (m+1) x (n+1)
    2. Fill the DP table:
       a. If str1[i-1] == str2[j-1]:
          dp[i][j] = dp[i-1][j-1] + 1
       b. Else:
          dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    3. Reconstruct the LCS:
       a. Start from dp[m][n]
       b. If str1[i-1] == str2[j-1], add character to result
       c. Move diagonally up-left if match, else move up or left based on max
    
    Example:
    str1 = "ABCDGH"
    str2 = "AEDFHR"
    LCS = "ADH" (length 3)
    
    DP Table:
       "" A  E  D  F  H  R
    "" 0  0  0  0  0  0  0
    A  0  1  1  1  1  1  1
    B  0  1  1  1  1  1  1
    C  0  1  1  1  1  1  1
    D  0  1  1  2  2  2  2
    G  0  1  1  2  2  2  2
    H  0  1  1  2  2  3  3
    """
    m, n = len(str1), len(str2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Fill dp table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if str1[i-1] == str2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    # Reconstruct LCS
    lcs = []
    i, j = m, n
    while i > 0 and j > 0:
        if str1[i-1] == str2[j-1]:
            lcs.append(str1[i-1])
            i -= 1
            j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            i -= 1
        else:
            j -= 1
    
    return ''.join(reversed(lcs))`,
  ],

  [
    "Greedy",
    `def greedy(arr):
    """
    Implements a greedy algorithm to maximize profit from array elements.
    Time Complexity: O(n log n) due to sorting
    Space Complexity: O(1)
    """
    arr.sort()
    max_profit = 0
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]:
            max_profit += arr[i] - arr[i-1]
    return max_profit`,
  ],

  [
    "Backtracking",
    `def backtracking(arr):
    """
    Generates all possible permutations of an array using backtracking.
    Time Complexity: O(n!)
    Space Complexity: O(n)
    """
    def backtrack(start, path):
        if len(path) == len(arr):
            result.append(path[:])
            return
        for i in range(start, len(arr)):
            path.append(arr[i])
            backtrack(i+1, path)
            path.pop()
    result = []
    backtrack(0, [])
    return result`,
  ],

  [
    "Sliding Window",
    `def sliding_window(arr, k):
    """
    Finds the maximum sum of any contiguous subarray of size k.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize maximum sum to negative infinity
    # This will store the maximum sum of any window
    max_sum = float('-inf')
    
    # Initialize current sum of window to 0
    current_sum = 0
    
    # Iterate through the array
    for i in range(len(arr)):
        # Add current element to window sum
        current_sum += arr[i]
        
        # If window size exceeds k, remove leftmost element
        if i >= k:
            current_sum -= arr[i-k]  # Subtract element going out of window
        
        # Update maximum sum if current window sum is larger
        # Note: We only update after window reaches size k
        max_sum = max(max_sum, current_sum)
    
    # Return maximum sum found in any window of size k
    return max_sum`,
  ],

  [
    "Bit Manipulation",
    `def bit_manipulation(arr):
    """
    Finds the single number that appears only once in an array where all other numbers appear twice.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    result = 0
    for num in arr:
        result ^= num
    return result`,
  ],

  [
    "Topological Sort",
    `def topological_sort(graph):
    """
    Performs topological sort on a directed acyclic graph.
    Time Complexity: O(V + E) where V is vertices and E is edges
    Space Complexity: O(V + E)
    """
    in_degree = {u: 0 for u in graph}
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    queue = deque([u for u in in_degree if in_degree[u] == 0])
    sorted_list = []
    while queue:
        u = queue.popleft()
        sorted_list.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    return sorted_list`,
  ],

  [
    "DFS",
    `def dfs(graph, start, visited=None):
    """
    Performs depth-first search on a graph starting from a given vertex.
    Time Complexity: O(V + E) where V is vertices and E is edges
    Space Complexity: O(V) for visited set and recursion stack
    """
    # Initialize visited set if not provided
    # This tracks nodes we've already explored
    if visited is None:
        visited = set()
    
    # Mark current node as visited
    visited.add(start)
    
    # Explore each unvisited neighbor recursively
    for neighbor in graph[start]:
        # Only visit nodes that haven't been visited yet
        # This prevents cycles and ensures termination
        if neighbor not in visited:
            # Recursively explore neighbor's neighbors
            dfs(graph, neighbor, visited)`,
  ],

  [
    "BFS",
    `def bfs(graph, start):
    """
    Performs breadth-first search on a graph starting from a given vertex.
    Time Complexity: O(V + E) where V is vertices and E is edges
    Space Complexity: O(V) for visited set and queue
    """
    # Initialize set to track visited nodes
    # This prevents visiting same node multiple times
    visited = set()
    
    # Initialize queue with start node
    # Queue ensures we process nodes in FIFO order
    queue = deque([start])
    
    # Mark start node as visited
    visited.add(start)
    
    # Continue while there are nodes to process
    while queue:
        # Get next node to process from front of queue
        node = queue.popleft()
        
        # Process current node (in this case, print it)
        print(node, end=' ')
        
        # Explore all neighbors of current node
        for neighbor in graph[node]:
            # Only process unvisited neighbors
            if neighbor not in visited:
                # Mark as visited to prevent cycles
                visited.add(neighbor)
                # Add to queue for later processing
                queue.append(neighbor)`,
  ],

  [
    "Stack Implementation",
    `class Stack:
    """
    Implementation of a Stack data structure using a list.
    Operations: push, pop, is_empty, peek
    Time Complexity: O(1) for all operations
    Space Complexity: O(n) where n is number of elements
    """
    def __init__(self):
        # Initialize an empty list to store stack elements
        # Using a list provides O(1) append and pop operations at the end
        self.items = []
    
    def push(self, item):
        # Add an item to the top of the stack (end of the list)
        # O(1) operation as we're appending to the end of the list
        self.items.append(item)
    
    def pop(self):
        # Remove and return the top item from the stack
        # O(1) operation as we're removing from the end of the list
        # Raises IndexError if stack is empty
        return self.items.pop()
    
    def is_empty(self):
        # Check if the stack is empty by checking list length
        # O(1) operation as we're just checking the length
        return len(self.items) == 0
    
    def peek(self):
        # Return the top item without removing it
        # O(1) operation as we're accessing the last element
        # Raises IndexError if stack is empty
        return self.items[-1]`,
  ],

  [
    "Queue Implementation",
    `class Queue:
    """
    Implementation of a Queue data structure using a list.
    Operations: enqueue, dequeue, is_empty, peek
    Time Complexity: O(1) for enqueue, O(n) for dequeue
    Space Complexity: O(n) where n is number of elements
    """
    def __init__(self):
        # Initialize an empty list to store queue elements
        # Elements will be added at the end and removed from the front
        self.items = []
    
    def enqueue(self, item):
        # Add an item to the back of the queue (end of the list)
        # O(1) operation as we're appending to the end of the list
        self.items.append(item)
    
    def dequeue(self):
        # Remove and return the front item from the queue
        # O(n) operation as we need to shift all elements left
        # Raises IndexError if queue is empty
        return self.items.pop(0)
    
    def is_empty(self):
        # Check if the queue is empty by checking list length
        # O(1) operation as we're just checking the length
        return len(self.items) == 0
    
    def peek(self):
        # Return the front item without removing it
        # O(1) operation as we're accessing the first element
        # Raises IndexError if queue is empty
        return self.items[0]`,
  ],

  [
    "Linked List",
    `class ListNode:
    """
    Implementation of a Linked List data structure.
    Operations: append, prepend, search, delete, print_list, reverse, sort
    Time Complexity: O(n) for most operations
    Space Complexity: O(1) for most operations
    """
    def __init__(self, val=0, next=None):
        # Initialize a node with a value and a reference to the next node
        # val: the data stored in the node
        # next: reference to the next node in the list (None by default)
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        # Initialize an empty linked list with head pointing to None
        self.head = None
    
    def append(self, val):
        # Add a new node with the given value at the end of the list
        if not self.head:
            # If list is empty, create new head node
            self.head = ListNode(val)
        else:
            # Traverse to the end of the list
            current = self.head
            while current.next:
                current = current.next
            # Add new node at the end
            current.next = ListNode(val)
    
    def prepend(self, val):
        # Add a new node with the given value at the beginning of the list
        # Create new node and make it point to current head
        new_node = ListNode(val)
        new_node.next = self.head
        # Update head to point to new node
        self.head = new_node
        
    def search(self, item):
        # Search for a node with the given value
        current = self.head
        while current:
            # If value is found, return True
            if current.val == item:
                return True
            # Move to next node
            current = current.next
        # Value not found
        return False

    def delete(self, item):
        # Delete the first node with the given value
        current = self.head
        while current:
            # If we find the node to delete
          if current.val == item:
                # Skip the node by updating the next pointer
            current.next = current.next.next
                return True
            current = current.next
        # Node not found
        return False

    def print_list(self):
        # Print all values in the linked list
        current = self.head
        while current:
            # Print current node's value
            print(current.val, end=' ')
            # Move to next node
            current = current.next
        print()

    def reverse(self):
        # Reverse the linked list in-place
        prev = None  # Keep track of previous node
        current = self.head  # Start from head
        while current:
            # Store next node before changing current's next pointer
            next = current.next
            # Reverse the link
            current.next = prev
            # Move prev and current one step forward
            prev = current
            current = next
        # Return new head (last node of original list)
        return prev

    def sort(self):
        # Sort the linked list using bubble sort
        current = self.head
        while current:
            # Compare current node with all subsequent nodes
          next = current.next
          while next:
                # If current node's value is greater, swap values
            if current.val > next.val:
                current.val, next.val = next.val, current.val
                next = next.next
            # Move to next node
            current = current.next
        # Return head of sorted list
        return self.head`,
  ],

  [
    "Circular Linked List",
    `def circular_linked_list(arr):
    """
    Creates a circular linked list from an array of values.
    Time Complexity: O(n) where n is length of array
    Space Complexity: O(n)
    """
    # Handle empty array case
    if not arr:
        return None
    
    # Create head node with first element
    head = ListNode(arr[0])
    # Keep track of current node while building the list
    current = head
    
    # Iterate through remaining elements in array
    for i in range(1, len(arr)):
        # Create new node for current element
        current.next = ListNode(arr[i]) 
        # Move to the newly created node
        current = current.next
    
    # Make the list circular by connecting last node to head
    current.next = head
    # Return the head of the circular linked list
    return head`,
  ],

  [
    "Hash Table",
    `class HashTable:
    """
    Implementation of a Hash Table data structure.
    Operations: insert, get
    Time Complexity: O(1) average case, O(n) worst case
    Space Complexity: O(n) where n is number of elements
    """
    def __init__(self):
        # Initialize hash table with fixed size array of empty lists
        # Using lists for collision handling (chaining)
        self.size = 10  # Fixed size for simplicity
        self.table = [[] for _ in range(self.size)]
    
    def hash_function(self, key):
        # Simple hash function using modulo operation
        # Maps any integer key to an index within table size
        return key % self.size
    
    def insert(self, key, value):
        # Insert a key-value pair into the hash table
        # Calculate hash value for the key
        hash_key = self.hash_function(key)
        # Append the key-value pair to the list at that index
        # This handles collisions by chaining
        self.table[hash_key].append((key, value))
    
    def get(self, key):
        # Retrieve value associated with the given key
        # Calculate hash value for the key
        hash_key = self.hash_function(key)
        # Search through the list at that index for the key
        for k, v in self.table[hash_key]:
            # If key is found, return its value
            if k == key:
                return v
        # Key not found
        return None`,
  ],

  [
    "Graph",
    `class Graph:
    """
    Implementation of a Graph data structure using adjacency list.
    Operations: add_vertex, add_edge
    Time Complexity: O(1) for adding vertex/edge
    Space Complexity: O(V + E) where V is vertices and E is edges
    """
    def __init__(self):
        # Initialize an empty dictionary to store the graph
        # Keys are vertices, values are lists of adjacent vertices
        self.graph = {}
    
    def add_vertex(self, vertex):
        # Add a new vertex to the graph if it doesn't exist
        # Each vertex is initialized with an empty list of neighbors
        if vertex not in self.graph:
            self.graph[vertex] = []
    
    def add_edge(self, vertex1, vertex2):
        # Add an undirected edge between two vertices
        # For undirected graph, we add edges in both directions
        if vertex1 in self.graph:
            # Add vertex2 to vertex1's adjacency list
            self.graph[vertex1].append(vertex2)
        if vertex2 in self.graph:
            # Add vertex1 to vertex2's adjacency list
            self.graph[vertex2].append(vertex1)`,
  ],

  [
    "Tree",
    `class TreeNode:
    """
    Implementation of a Binary Tree data structure.
    Operations: insert, search, delete
    Time Complexity: O(h) where h is height of tree
    Space Complexity: O(h) for recursion stack
    """
    def __init__(self, val=0, left=None, right=None):
        # Initialize a tree node with a value and references to left and right children
        # val: the data stored in the node
        # left: reference to left child (None by default)
        # right: reference to right child (None by default)
        self.val = val
        self.left = left
        self.right = right

class Tree:
    def __init__(self):
        # Initialize an empty binary tree with root pointing to None
        self.root = None
    
    def insert(self, val):
        # Insert a new value into the binary search tree
        if not self.root:
            # If tree is empty, create new root node
            self.root = TreeNode(val)
        else:
            # Otherwise, recursively insert into appropriate subtree
            self._insert_recursive(self.root, val)
    
    def _insert_recursive(self, node, val):
        # Helper method to recursively insert a value into the tree
        if val < node.val:
            # If value is less than current node, go to left subtree
            if node.left is None:
                # If left child doesn't exist, create new node
                node.left = TreeNode(val)
            else:
                # Otherwise, continue searching in left subtree
                self._insert_recursive(node.left, val)
        else:
            # If value is greater or equal, go to right subtree
            if node.right is None:
                # If right child doesn't exist, create new node
                node.right = TreeNode(val)
            else:
                # Otherwise, continue searching in right subtree
                self._insert_recursive(node.right, val)`,
  ],

  [
    "Heap Implementation",
    `class MaxHeap:
    """
    Implementation of a Max Heap data structure.
    Operations: insert, extract_max, heapify
    Time Complexity: O(log n) for insert and extract_max
    Space Complexity: O(n) where n is number of elements
    """
    def __init__(self):
        # Initialize an empty list to store heap elements
        # The heap property will be maintained using list indices
        self.heap = []
    
    def insert(self, item):
        # Add a new item to the heap
        # First append to the end of the list
        self.heap.append(item)
        # Then restore heap property by moving item up
        self._heapify_up()
    
    def _heapify_up(self):
        # Restore heap property after insertion
        # Start from the last element (newly inserted)
        index = len(self.heap) - 1
        while index > 0:
            # Calculate parent index using integer division
            parent_index = (index - 1) // 2
            # If current element is greater than its parent
            if self.heap[index] > self.heap[parent_index]:
                # Swap with parent to maintain heap property
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                # Move up to parent's position
                index = parent_index
            else:
                # Heap property is satisfied
                break`,
  ],

  [
    "Trie",
    `class TrieNode:
    """
    Implementation of a Trie (prefix tree) data structure.
    Operations: insert, search, starts_with
    Time Complexity: O(m) where m is length of string
    Space Complexity: O(ALPHABET_SIZE * m * n) where n is number of strings
    """
    def __init__(self):
        # Initialize a trie node with:
        # children: dictionary to store child nodes for each character
        # is_end: boolean flag indicating if this node represents end of a word
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        # Initialize trie with an empty root node
        self.root = TrieNode()
    
    def insert(self, word):
        # Insert a word into the trie
        node = self.root
        for char in word:
            # For each character in the word
            if char not in node.children:
                # If path doesn't exist, create new node
                node.children[char] = TrieNode()
            # Move to the next node in the path
            node = node.children[char]
        # Mark the end of the word
        node.is_end = True
    
    def search(self, word):
        # Search for a complete word in the trie
        node = self.root
        for char in word:
            # For each character in the word
            if char not in node.children:
                # If path doesn't exist, word is not in trie
                return False
            # Move to the next node in the path
            node = node.children[char]
        # Return True only if we found the complete word
        return node.is_end`,
  ],

  [
    "Monotonic Stack",
    `def monotonic_stack(arr):
    """
    Maintains a stack where elements are in decreasing order.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Initialize empty stack to store elements in decreasing order
    stack = []
    
    # Process each element in the input array
    for num in arr:
        # While stack is not empty and top element is greater than current number
        # This maintains the decreasing order property
        while stack and stack[-1] > num:
            # Remove elements that violate the monotonic property
            stack.pop()
        # Add current number to stack
        # At this point, all elements in stack are greater than current number
        stack.append(num)
    
    # Return the monotonic stack
    return stack`,
  ],

  [
    "Monotonic Queue",
    `def monotonic_queue(arr):
    """
    Maintains a queue where elements are in decreasing order.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Initialize empty queue to store elements in decreasing order
    queue = []
    
    # Process each element in the input array
    for num in arr:
        # While queue is not empty and last element is greater than current number
        # This maintains the decreasing order property
        while queue and queue[-1] > num:
            # Remove elements that violate the monotonic property
            queue.pop()
        # Add current number to queue
        # At this point, all elements in queue are greater than current number
        queue.append(num)
    
    # Return the monotonic queue
    return queue`,
  ],

  [
    "Two Pointers",
    `def two_pointers(arr, target):
    """
    Finds pairs in a sorted array that sum to target using two pointers.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize pointers at the start and end of the array
    left = 0
    right = len(arr) - 1
    
    # Continue while pointers haven't crossed each other
    while left < right:
        # Calculate current sum of elements at both pointers
        current_sum = arr[left] + arr[right]
        
        # If sum equals target, we found our pair
        if current_sum == target:
            return [left, right]
        # If sum is less than target, move left pointer right
        # to increase the sum
        elif current_sum < target:
            left += 1
        # If sum is greater than target, move right pointer left
        # to decrease the sum
        else:
            right -= 1
    
    # If no pair is found, return empty list
    return []`,
  ],

  [
    "Binary Search Tree" as PatternKey,
    `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
    """
        Insert a value into the BST.
        Time Complexity: O(h) where h is the height of the tree
        Space Complexity: O(h) for recursion stack
        
        Pseudocode:
        1. If tree is empty:
           a. Create new node with value
           b. Set as root
           c. Return
        
        2. Start at root and traverse:
           a. If value < current node:
              - If left child is None: insert here
              - Else: recurse on left subtree
           b. If value > current node:
              - If right child is None: insert here
              - Else: recurse on right subtree
           c. If value == current node: return (duplicate)
        
        Example:
        Insert 5, 3, 7, 1, 4, 6, 8
        
        After 5:    5
        After 3:    5
                  /
                 3
        After 7:    5
                  / \\
                 3   7
        After 1:    5
                  / \\
                 3   7
                /
               1
        After 4:    5
                  / \\
                 3   7
                / \\
               1   4
        After 6:    5
                  / \\
                 3   7
                / \\ /
               1  4 6
        After 8:    5
                  / \\
                 3   7
                / \\ / \\
               1  4 6  8
        """
        if not self.root:
            self.root = Node(value)
            return
            
        def _insert(node, value):
            if value < node.value:
                if not node.left:
                    node.left = Node(value)
            else:
                    _insert(node.left, value)
            elif value > node.value:
                if not node.right:
                    node.right = Node(value)
            else:
                    _insert(node.right, value)
                    
        _insert(self.root, value)
    
    def search(self, value):
    """
        Search for a value in the BST.
        Time Complexity: O(h) where h is the height of the tree
        Space Complexity: O(h) for recursion stack
        
        Pseudocode:
        1. Start at root
        
        2. While current node exists:
           a. If value == current node: return True
           b. If value < current node: go to left child
           c. If value > current node: go to right child
        
        3. If we reach None: return False
        
        Example:
        Tree:    5
                / \\
               3   7
              / \\ / \\
             1  4 6  8
        
        Search for 4:
        1. Start at 5: 4 < 5, go left
        2. At 3: 4 > 3, go right
        3. At 4: 4 == 4, found!
        
        Search for 9:
        1. Start at 5: 9 > 5, go right
        2. At 7: 9 > 7, go right
        3. At 8: 9 > 8, go right
        4. None found, value not in tree
        """
        def _search(node, value):
            if not node:
                return False
            if node.value == value:
                return True
            if value < node.value:
                return _search(node.left, value)
            return _search(node.right, value)
            
        return _search(self.root, value)
    
    def delete(self, value):
    """
        Delete a value from the BST.
        Time Complexity: O(h) where h is the height of the tree
        Space Complexity: O(h) for recursion stack
        
        Pseudocode:
        1. Find node to delete
        
        2. If node has no children:
           a. Simply remove node
        
        3. If node has one child:
           a. Replace node with its child
        
        4. If node has two children:
           a. Find inorder successor (smallest in right subtree)
           b. Replace node value with successor value
           c. Delete successor node
        
        Example:
        Tree:    5
                / \\
               3   7
              / \\ / \\
             1  4 6  8
        
        Delete 3 (node with two children):
        1. Find inorder successor (4)
        2. Replace 3 with 4
        3. Delete original 4
        
        Result:    5
                  / \\
                 4   7
                /   / \\
               1   6   8
        
        Delete 1 (leaf node):
        1. Simply remove node 1
        
        Result:    5
                  / \\
                 4   7
                    / \\
                   6   8
    """
        def _delete(node, value):
            if not node:
                return None
                
            if value < node.value:
                node.left = _delete(node.left, value)
            elif value > node.value:
                node.right = _delete(node.right, value)
            else:
                # Case 1: No children
                if not node.left and not node.right:
                    return None
                    
                # Case 2: One child
                if not node.left:
                    return node.right
                if not node.right:
                    return node.left
                    
                # Case 3: Two children
                successor = node.right
                while successor.left:
                    successor = successor.left
                node.value = successor.value
                node.right = _delete(node.right, successor.value)
                
            return node
            
        self.root = _delete(self.root, value)`,
  ],

  [
    "DFS Linked List",
    `def dfs_linked_list(head):
    """
    Performs depth-first search on a linked list.
    Time Complexity: O(n) where n is length of linked list
    Space Complexity: O(n) due to recursion stack
    """
    if not head:
        return []
    return [head.val] + dfs_linked_list(head.next)`,
  ],

  [
    "BFS Linked List",
    `def bfs_linked_list(head):
    """
    Performs breadth-first search on a linked list.
    Time Complexity: O(n) where n is length of linked list
    Space Complexity: O(n) for queue storage
    """
    if not head:
        return []
    queue = deque([head])
    results = []
    while queue:
        node = queue.popleft()
        results.append(node.val)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    return results`,
  ],

  [
    "DFS Binary Tree",
    `def dfs_binary_tree(root):
    """
    Performs depth-first search on a binary tree.
    Time Complexity: O(n) where n is number of nodes
    Space Complexity: O(h) where h is height of tree
    """
    if not root:
        return []
    return [root.val] + dfs_binary_tree(root.left) + dfs_binary_tree(root.right)`,
  ],

  [
    "Dynamic Programming Fibonacci",
    `def dynamic_programming_fibonacci(n):
    """
    Calculates nth Fibonacci number using dynamic programming.
    Time Complexity: O(n)
    Space Complexity: O(n)
    
    Pseudocode:
    1. Create array dp of size n+1 initialized with zeros
    2. Set base cases:
       dp[0] = 0
       dp[1] = 1
    3. For each i from 2 to n:
       dp[i] = dp[i-1] + dp[i-2]
    4. Return dp[n]
    """
    dp = [0] * (n+1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]`,
  ],

  [
    "Dynamic Programming Iterative",
    `def dynamic_programming_iterative(arr):
    """
    Finds maximum subarray sum using dynamic programming.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    dp = [0] * len(arr)
    dp[0] = arr[0]
    for i in range(1, len(arr)):
        dp[i] = max(dp[i-1] + arr[i], arr[i])
    return max(dp)`,
  ],

  [
    "Dynamic Programming Coin Change",
    `def dynamic_programming_coin_change(coins, amount):
    """
    Finds minimum number of coins needed to make amount using dynamic programming.
    Time Complexity: O(amount * len(coins))
    Space Complexity: O(amount)
    
    Pseudocode:
    1. Create array dp of size amount+1 initialized with infinity
    2. Set base case: dp[0] = 0 (no coins needed for amount 0)
    3. For each coin in coins:
       a. For each amount i from coin to target amount:
          - Update dp[i] = min(dp[i], dp[i-coin] + 1)
    4. Return dp[amount] if it's not infinity, else -1
    
    Example:
    coins = [1, 2, 5], amount = 11
    dp[0] = 0
    dp[1] = 1 (using coin 1)
    dp[2] = 1 (using coin 2)
    dp[3] = 2 (using coins 1+2)
    ...
    dp[11] = 3 (using coins 5+5+1)
    """
    dp = [float('inf')] * (amount+1)
    dp[0] = 0
    for coin in coins:
        for i in range(coin, amount+1):
            dp[i] = min(dp[i], dp[i-coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
  ],

  [
    "Greedy Activity Selection",
    `def greedy_activity_selection(activities):
    """
    Selects maximum number of non-overlapping activities using greedy approach.
    Time Complexity: O(n log n) where n is number of activities
    Space Complexity: O(n) for storing result
    
    Pseudocode:
    1. Sort activities by finish time
    2. Initialize result with first activity
    3. For each remaining activity:
       a. If current activity's start time >= last selected activity's finish time:
          - Add current activity to result
          - Update last selected activity
    4. Return selected activities
    
    Example:
    activities = [(1,4), (2,6), (3,9), (5,7)]
    sorted = [(1,4), (2,6), (5,7), (3,9)]
    result = [(1,4), (5,7)]  # Maximum non-overlapping activities
    """
    # Sort activities by finish time
    activities.sort(key=lambda x: x[1])
    result = [activities[0]]
    last_finish = activities[0][1]
    
    for i in range(1, len(activities)):
        if activities[i][0] >= last_finish:
            result.append(activities[i])
            last_finish = activities[i][1]
    
    return result`,
  ],

  [
    "Greedy Fractional Knapsack",
    `def greedy_fractional_knapsack(items, capacity):
    """
    Solves fractional knapsack problem using greedy approach.
    Time Complexity: O(n log n) due to sorting
    Space Complexity: O(n)
    """
    items.sort(key=lambda x: x[1]/x[0], reverse=True)
    results = []
    current_weight = 0
    for item in items:
        if current_weight + item[0] <= capacity:
            results.append(item)
            current_weight += item[0]
        else:
            results.append((item[0], capacity - current_weight))
            break
    return results`,
  ],

  [
    "Greedy Job Scheduling",
    `def greedy_job_scheduling(jobs):
    """
    Schedules jobs to maximize profit using greedy approach.
    Time Complexity: O(n log n) due to sorting
    Space Complexity: O(n)
    """
    jobs.sort(key=lambda x: x[1], reverse=True)
    results = []
    current_time = 0
    for job in jobs:
        if current_time + job[0] <= job[1]:
            results.append(job)
            current_time += job[0]
    return results`,
  ],

  [
    "Greedy Huffman Coding",
    `def greedy_huffman_coding(data):
    """
    Generates Huffman codes for data compression using greedy approach.
    Time Complexity: O(n log n) where n is unique characters
    Space Complexity: O(n)
    """
    from collections import Counter
    heap = []
    for char, freq in Counter(data).items():
        heappush(heap, (freq, char))
    while len(heap) > 1:
        freq1, char1 = heappop(heap)
        freq2, char2 = heappop(heap)    
        heappush(heap, (freq1 + freq2, char1 + char2))
    codes = {}
    for char, freq in Counter(data).items():
        codes[char] = ''
    while heap:
        freq, char = heappop(heap)
        for code in codes:
            if code in char:
                codes[code] = '0' + codes[code]
            else:
                codes[code] = '1' + codes[code]
    return codes`,
  ],

  [
    "Greedy Dijkstra",
    `def greedy_dijkstra(graph, start):
    """
    Finds shortest paths from start vertex to all vertices using Dijkstra's algorithm.
    Time Complexity: O((V + E) log V) where V is vertices and E is edges
    Space Complexity: O(V + E)
    """
    distances = {vertex: float('inf') for vertex in graph}  
    distances[start] = 0
    queue = [(0, start)]
    while queue:
        dist, vertex = heappop(queue)
        if dist > distances[vertex]:
            continue
        for neighbor, weight in graph[vertex]:  
            new_dist = dist + weight
            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                heappush(queue, (new_dist, neighbor))
    return distances`,
  ],
]);
