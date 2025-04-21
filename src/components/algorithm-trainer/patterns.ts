import { PatternKey } from "./types";

export const patterns = new Map<PatternKey, string>([
  [
    "Quick Sort",
    `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]       
    return quick_sort(left) + middle + quick_sort(right)`,
  ],

  [
    "Merge Sort",
    `def merge_sort(arr):
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
    return result + left[i:] + right[j:]`,
  ],

  [
    "Stack Sort",
    `def stack_sort(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack`,
  ],

  [
    "Heap Sort",
    `def heap_sort(arr):
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
        heapify(arr, n, largest)`,
  ],

  [
    "Bubble Sort",
    `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
  ],

  [
    "Selection Sort",
    `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
  ],

  [
    "Insertion Sort",
    `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
    return arr`,
  ],

  [
    "Binary Search",
    `def binary_search(arr, target):
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
  ],

  [
    "Binary Search on Answer",
    `def binary_search_on_answer(arr, target):
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
    for i, num in enumerate(arr):
        if num == target:
            return i
    return -1`,
  ],

  [
    "Two Sum",
    `def two_sum(arr, target):
    my_dict = {}
    results = []
    for num in arr:
        if num in my_dict:
            results.append([my_dict[num], num])
        else:
            my_dict[target - num] = num
    return results`,
  ],

  [
    "Dynamic Programming",
    `def dynamic_programming(arr):
    dp = [0] * len(arr)
    dp[0] = arr[0]
    for i in range(1, len(arr)):
        dp[i] = max(dp[i-1] + arr[i], arr[i])
    return max(dp)`,
  ],

  [
    "Greedy",
    `def greedy(arr):
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
    max_sum = float('-inf')
    current_sum = 0
    for i in range(len(arr)):
        current_sum += arr[i]
        if i >= k:
            current_sum -= arr[i-k]
        max_sum = max(max_sum, current_sum)
    return max_sum`,
  ],

  [
    "Bit Manipulation",
    `def bit_manipulation(arr):
    result = 0
    for num in arr:
        result ^= num
    return result`,
  ],

  [
    "Topological Sort",
    `def topological_sort(graph):
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
    if visited is None:
        visited = set()
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`,
  ],

  [
    "BFS",
    `def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        node = queue.popleft()
        print(node, end=' ')
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`,
  ],

  [
    "Stack Implementation",
    `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        return self.items.pop()
    
    def is_empty(self):
        return len(self.items) == 0
    
    def peek(self):
        return self.items[-1]`,
  ],

  [
    "Queue Implementation",
    `class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        return self.items.pop(0)
    
    def is_empty(self):
        return len(self.items) == 0
    
    def peek(self):
        return self.items[0]`,
  ],

  [
    "Linked List",
    `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

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
        return prev

    def sort(self):
        current = self.head
        while current:
          next = current.next
          while next:
            if current.val > next.val:
                current.val, next.val = next.val, current.val
                next = next.next
            current = current.next
        return self.head`,
  ],

  [
    "Circular Linked List",
    `def circular_linked_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for i in range(1, len(arr)):
        current.next = ListNode(arr[i]) 
        current = current.next
    current.next = head
    return head`,
  ],

  [
    "Hash Table",
    `class HashTable:
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
        return None`,
  ],

  [
    "Graph",
    `class Graph:
    def __init__(self):
        self.graph = {}
    
    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []
    
    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.graph:
            self.graph[vertex1].append(vertex2)
        if vertex2 in self.graph:
            self.graph[vertex2].append(vertex1)`,
  ],

  [
    "Tree",
    `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

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
                self._insert_recursive(node.right, val)`,
  ],

  [
    "Heap Implementation",
    `class MaxHeap:
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
                break`,
  ],

  [
    "Trie",
    `class TrieNode:
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
        return node.is_end`,
  ],

  [
    "Monotonic Stack",
    `def monotonic_stack(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack`,
  ],

  [
    "Monotonic Queue",
    `def monotonic_queue(arr):
    queue = []
    for num in arr:
        while queue and queue[-1] > num:
            queue.pop()
        queue.append(num)
    return queue`,
  ],

  [
    "Two Pointers",
    `def two_pointers(arr, target):
    left = 0
    right = len(arr) - 1
    while left < right:
        if arr[left] + arr[right] == target:
            return [left, right]
        elif arr[left] + arr[right] < target:
            left += 1
        else:
            right -= 1
    return []`,
  ],

  [
    "Binary Search Tree",
    `def binary_search_tree(arr):
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
    return [root.val] + binary_tree_traversal(root.left) + binary_tree_traversal(root.right)`,
  ],
]);
