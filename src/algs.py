from collections import deque
from heapq import heappush, heappop

# ============================================================================
# DATA STRUCTURES
# ============================================================================

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[-1]

class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        return self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[0]

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, val):
        if not self.head:
            self.head = ListNode(val)
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = ListNode(val)

    def prepend(self, val):
        new_node = ListNode(val)
        new_node.next = self.head
        self.head = new_node

    def search(self, item):
        current = self.head
        while current:
            if current.val == item:
                return True
            current = current.next
        return False

    def delete(self, item):
        current = self.head
        while current:
            if current.val == item:
                current.next = current.next.next
                return True
            current = current.next
        return False

    def print_list(self):
        current = self.head
        while current:
            print(current.val, end=' ')
            current = current.next
        print()

    def reverse(self):
        prev = None
        current = self.head
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next
        self.head = prev

    def sort(self):
        current = self.head
        while current:
            next = current.next
            while next:
                if current.val > next.val:
                    current.val, next.val = next.val, current.val
                next = next.next
            current = current.next
        return self.head

class HashTable:
    def __init__(self):
        self.size = 10
        self.table = [[] for _ in range(self.size)]

    def hash_function(self, key):
        return key % self.size

    def insert(self, key, value):
        hash_key = self.hash_function(key)
        self.table[hash_key].append((key, value))

    def get(self, key):
        hash_key = self.hash_function(key)
        for k, v in self.table[hash_key]:
            if k == key:
                return v
        return None

class Graph:
    def __init__(self):
        self.graph = {}

    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.graph:
            self.graph[vertex1].append(vertex2)
        if vertex2 in self.graph:
            self.graph[vertex2].append(vertex1)

class Tree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
        else:
            self._insert_recursive(self.root, val)

    def _insert_recursive(self, node, val):
        if val < node.val:
            if node.left is None:
                node.left = TreeNode(val)
            else:
                self._insert_recursive(node.left, val)
        else:
            if node.right is None:
                node.right = TreeNode(val)
            else:
                self._insert_recursive(node.right, val)

class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, item):
        self.heap.append(item)
        self._heapify_up()

    def _heapify_up(self):
        index = len(self.heap) - 1
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] > self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

class TrieNode:
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

# ============================================================================
# SORTING ALGORITHMS
# ============================================================================

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]       
    return quick_sort(left) + middle + quick_sort(right)

def merge_sort(arr):
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
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    return result + left[i:] + right[j:]

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr

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

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr

# ============================================================================
# SEARCH ALGORITHMS
# ============================================================================

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def linear_search(arr, target):
    for i, num in enumerate(arr):
        if num == target:
            return i
    return -1

def binary_search_on_answer(arr, target):
    def is_valid(mid):
        return arr[mid] >= target

    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if is_valid(mid):
            right = mid - 1
        else:
            left = mid + 1
    return left

# ============================================================================
# TREE ALGORITHMS
# ============================================================================

def binary_search_tree(arr):
    if not arr:
        return None
    mid = len(arr) // 2
    root = TreeNode(arr[mid])
    root.left = binary_search_tree(arr[:mid])
    root.right = binary_search_tree(arr[mid+1:])
    return root

def binary_tree_traversal(root):
    if not root:
        return []
    return [root.val] + binary_tree_traversal(root.left) + binary_tree_traversal(root.right)

def dfs_binary_tree(root):
    if not root:
        return []
    return [root.val] + dfs_binary_tree(root.left) + dfs_binary_tree(root.right)

# ============================================================================
# GRAPH ALGORITHMS
# ============================================================================

def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        node = queue.popleft()
        print(node, end=' ')
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

def topological_sort(graph):
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
    return sorted_list

def greedy_dijkstra(graph, start):
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
    return distances

# ============================================================================
# LINKED LIST ALGORITHMS
# ============================================================================

def dfs_linked_list(head):
    if not head:
        return []
    return [head.val] + dfs_linked_list(head.next)

def bfs_linked_list(head):
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
    return results

def floyd_cycle_detection(head):
    """
    Detect cycle in a linked list using Floyd's Cycle Detection Algorithm.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize two pointers - slow and fast
    slow = head
    fast = head
    
    # Move slow pointer by 1 and fast pointer by 2
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        # If pointers meet, cycle exists
        if slow == fast:
            return True
    
    # If fast pointer reaches end, no cycle
    return False

# ============================================================================
# ARRAY ALGORITHMS
# ============================================================================

def two_sum(arr, target):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]
    return []

def two_sum_dict(arr, target):
    """
    Find two numbers in an array that add up to a target value.
    Time Complexity: O(n)
    Space Complexity: O(n)
    Returns indices in format [0,1] where the smaller index comes first
    """ 
    num_dict = {}
    for i, num in enumerate(arr):
        complement = target - num
        if complement in num_dict and num_dict[complement] != i:  # Check that we're not using the same index
            # Return indices in sorted order [0,1]
            return sorted([num_dict[complement], i])
        num_dict[num] = i
    return []

def two_sum_two_pointers(arr, target):
    arr.sort()
    left = 0
    right = len(arr) - 1
    while left < right:
        if arr[left] + arr[right] == target:
            return [left, right]
        elif arr[left] + arr[right] < target:
            left += 1
        else:
            right -= 1
    return []

def two_pointers(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        if arr[left] + arr[right] == target:
            return [left, right]
        elif arr[left] + arr[right] < target:
            left += 1
        else:
            right -= 1
    return []

def sliding_window(arr, k):
    max_sum = float('-inf')
    current_sum = 0
    for i in range(len(arr)):
        current_sum += arr[i]
        if i >= k:
            current_sum -= arr[i-k]
        max_sum = max(max_sum, current_sum)
    return max_sum

def bit_manipulation(arr):
    result = 0
    for num in arr:
        result ^= num
    return result

def monotonic_stack(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack

def monotonic_queue(arr):
    queue = []
    for num in arr:
        while queue and queue[-1] > num:
            queue.pop()
        queue.append(num)
    return queue

def prefix_sum(arr):
    """
    Calculate prefix sum array where each element is the sum of all previous elements.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Initialize result array with same length as input
    result = [0] * len(arr)
    
    # First element is same as input array's first element
    result[0] = arr[0]
    
    # For each element, add the previous result to current element
    for i in range(1, len(arr)):
        result[i] = result[i-1] + arr[i]
    
    return result

def kadane_algorithm(arr):
    """
    Find maximum subarray sum in an array.
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    # Initialize variables to track current and maximum sum
    current_sum = arr[0]
    max_sum = arr[0]
    
    # Iterate through array starting from second element
    for i in range(1, len(arr)):
        # Update current sum by taking maximum of current element or current sum + current element
        current_sum = max(arr[i], current_sum + arr[i])
        
        # Update maximum sum if current sum is greater
        if current_sum > max_sum:
            max_sum = current_sum
    
    return max_sum

# ============================================================================
# DYNAMIC PROGRAMMING
# ============================================================================

def dynamic_programming(arr):
    dp = [0] * len(arr)
    dp[0] = arr[0]
    for i in range(1, len(arr)):
        dp[i] = max(dp[i-1] + arr[i], arr[i])
    return max(dp)

def dynamic_programming_fibonacci(n):
    dp = [0] * (n+1)
    dp[0] = 0
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

def dynamic_programming_iterative(arr):
    dp = [0] * len(arr)
    dp[0] = arr[0]
    for i in range(1, len(arr)):
        dp[i] = max(dp[i-1] + arr[i], arr[i])
    return max(dp)

def dynamic_programming_coin_change(coins, amount):
    dp = [float('inf')] * (amount+1)
    dp[0] = 0
    for coin in coins:
        for i in range(coin, amount+1):
            dp[i] = min(dp[i], dp[i-coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# ============================================================================
# GREEDY ALGORITHMS
# ============================================================================

def greedy(arr):
    arr.sort()
    max_profit = 0
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]:
            max_profit += arr[i] - arr[i-1]
    return max_profit

def greedy_activity_selection(activities):
    activities.sort(key=lambda x: x[1])
    results = []
    current_end = 0
    for activity in activities:
        if activity[0] >= current_end:
            results.append(activity)
            current_end = activity[1]
    return results

def greedy_fractional_knapsack(items, capacity):
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
    return results

def greedy_job_scheduling(jobs):
    jobs.sort(key=lambda x: x[1], reverse=True)
    results = []
    current_time = 0
    for job in jobs:
        if current_time + job[0] <= job[1]:
            results.append(job)
            current_time += job[0]
    return results

def greedy_huffman_coding(data):
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
    return codes

# ============================================================================
# BACKTRACKING
# ============================================================================

def backtracking(arr):
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
    return result

# ============================================================================
# STRING ALGORITHMS
# ============================================================================

def rabin_karp(text, pattern):
    """
    Pattern matching algorithm using rolling hash.
    Time Complexity: O(n+m) average case, O(nm) worst case
    Space Complexity: O(1)
    """
    # Define prime number for hash function
    prime = 101
    
    # Calculate pattern hash
    pattern_hash = 0
    for char in pattern:
        pattern_hash = (pattern_hash * 256 + ord(char)) % prime
    
    # Calculate first window hash
    window_hash = 0
    for i in range(len(pattern)):
        window_hash = (window_hash * 256 + ord(text[i])) % prime
    
    # Slide window and compare hashes
    for i in range(len(text) - len(pattern) + 1):
        # If hashes match, verify pattern
        if pattern_hash == window_hash:
            if text[i:i+len(pattern)] == pattern:
                return i
        
        # Calculate hash for next window
        if i < len(text) - len(pattern):
            window_hash = ((window_hash * 256 - ord(text[i]) * pow(256, len(pattern)-1, prime)) + ord(text[i+len(pattern)])) % prime
    
    return -1

def knuth_morris_pratt(text, pattern):
    """
    Pattern matching algorithm using KMP algorithm.
    Time Complexity: O(n+m)
    Space Complexity: O(m)
    """
    # Build partial match table (failure function)
    def build_lps(pattern):
        lps = [0] * len(pattern)
        j = 0
        i = 1
        
        while i < len(pattern):
            if pattern[i] == pattern[j]:
                j += 1
                lps[i] = j
                i += 1
            elif j > 0:
                j = lps[j-1]
            else:
                lps[i] = 0
                i += 1
        
        return lps
    
    # Get partial match table
    lps = build_lps(pattern)
    
    # Initialize pointers
    i = 0  # for text
    j = 0  # for pattern
    
    # Match pattern in text
    while i < len(text):
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == len(pattern):
            return i - j
        elif i < len(text) and pattern[j] != text[i]:
            if j != 0:
                j = lps[j-1]
            else:
                i += 1
    
    return -1

def manacher_algorithm(s):
    """
    Find longest palindromic substring in linear time.
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Transform string to handle even length palindromes
    t = '#' + '#'.join(s) + '#'
    
    # Initialize array to store palindrome radii
    p = [0] * len(t)
    
    # Center and right boundary of current palindrome
    center = 0
    right = 0
    
    # Calculate palindrome radii
    for i in range(len(t)):
        if i < right:
            # Use mirror property if within right boundary
            p[i] = min(right - i, p[2*center - i])
        
        # Expand palindrome centered at i
        left = i - (p[i] + 1)
        r = i + (p[i] + 1)
        while left >= 0 and r < len(t) and t[left] == t[r]:
            p[i] += 1
            left -= 1
            r += 1
        
        # Update center and right boundary if needed
        if i + p[i] > right:
            center = i
            right = i + p[i]
    
    # Find longest palindrome
    max_len = max(p)
    center_index = p.index(max_len)
    
    # Convert back to original string indices
    start = (center_index - max_len) // 2
    end = start + max_len
    
    return s[start:end]

def z_algorithm(text, pattern):
    """
    Pattern matching using Z-algorithm.
    Time Complexity: O(n+m)
    Space Complexity: O(n+m)
    """
    # Concatenate pattern and text with special character
    s = pattern + '$' + text
    
    # Initialize Z array
    z = [0] * len(s)
    
    # Initialize left and right boundaries
    left = right = 0
    
    # Calculate Z values
    for i in range(1, len(s)):
        if i > right:
            # If outside current Z-box, start new comparison
            left = right = i
            while right < len(s) and s[right-left] == s[right]:
                right += 1
            z[i] = right - left
        else:
            # If inside Z-box, use previous values
            k = i - left
            if z[k] < right - i:
                z[i] = z[k]
            else:
                # Need to compare further
                left = i
                while right < len(s) and s[right-left] == s[right]:
                    right += 1
                z[i] = right - left
    
    # Find pattern matches
    matches = []
    for i in range(len(pattern) + 1, len(s)):
        if z[i] == len(pattern):
            matches.append(i - len(pattern) - 1)
    
    return matches

# ============================================================================
# MATRIX ALGORITHMS
# ============================================================================

def traverse_matrix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    for i in range(rows):
        for j in range(cols):
            print(matrix[i][j], end=' ')
        print()

def traverse_matrix_spiral(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    top = 0
    bottom = rows - 1
    left = 0
    right = cols - 1

    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            print(matrix[top][i], end=' ')
        top += 1
        for i in range(top, bottom + 1):
            print(matrix[i][right], end=' ')
        right -= 1  
        if top <= bottom:
            for i in range(right, left - 1, -1):
                print(matrix[bottom][i], end=' ')
            bottom -= 1
        if left <= right:   
            for i in range(bottom, top - 1, -1):
                print(matrix[i][left], end=' ')
            left += 1

def traverse_matrix_spiral_recursive(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    def spiral_helper(matrix, top, bottom, left, right):
        if top > bottom or left > right:
            return
        for i in range(left, right + 1):
            print(matrix[top][i], end=' ')
        top += 1
        for i in range(top, bottom + 1):
            print(matrix[i][right], end=' ')
        right -= 1
        if top <= bottom:
            for i in range(right, left - 1, -1):
                print(matrix[bottom][i], end=' ')   
            bottom -= 1
        if left <= right:
            for i in range(bottom, top - 1, -1):
                print(matrix[i][left], end=' ')
            left += 1
    spiral_helper(matrix, 0, rows - 1, 0, cols - 1)

# ============================================================================
# MAIN FUNCTION
# ============================================================================

if __name__ == "__main__":
    # Example usage
    print("Two Sum Dictionary:", two_sum_dict([2, 7, 11, 15], 9))
    print("Two Sum Dictionary:", two_sum_dict([3, 2, 4], 6))
    print("Two Sum Dictionary:", two_sum_dict([3, 3], 6))
