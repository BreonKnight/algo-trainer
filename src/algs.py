from collections import deque

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]       
    return quick_sort(left) + middle + quick_sort(right)

print(quick_sort([3, 6, 8, 10, 1, 2, 1]))

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

def stack_sort(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack  

print(stack_sort([3, 6, 8, 10, 1, 2, 1]))

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

print(heap_sort([3, 6, 8, 10, 1, 2, 1]))

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr 

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            

def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

print(selection_sort([3, 6, 8, 10, 1, 2, 1]))


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

print(binary_search([1, 2, 3, 4, 5], 3))    

def linear_search(arr, target):
    for i, num in enumerate(arr):
        if num == target:
            return i
    return -1

print(linear_search([1, 2, 3, 4, 5], 3))

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

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

print(binary_tree_traversal(binary_search_tree([1, 2, 3, 4, 5])))   

def binary_tree_traversal(root):
    if not root:
        return []
    return [root.val] + binary_tree_traversal(root.left) + binary_tree_traversal(root.right)

print(binary_tree_traversal(binary_search_tree([1, 2, 3, 4, 5])))

def binary_tree_traversal(root):
    if not root:
        return []
    return binary_tree_traversal(root.left) + [root.val] + binary_tree_traversal(root.right)    

print(binary_tree_traversal(binary_search_tree([1, 2, 3, 4, 5])))

def binary_tree_traversal(root):
    if not root:
        return []
    return binary_tree_traversal(root.right) + [root.val] + binary_tree_traversal(root.left)

print(binary_tree_traversal(binary_search_tree([1, 2, 3, 4, 5])))

def binary_tree_traversal(root):
    if not root:
        return []
    return [root.val] + binary_tree_traversal(root.left) + binary_tree_traversal(root.right)

print(binary_tree_traversal(binary_search_tree([1, 2, 3, 4, 5])))


def circlar_linked_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for i in range(1, len(arr)):
        current.next = ListNode(arr[i]) 
        current = current.next
    current.next = head
    return head

print(circlar_linked_list([1, 2, 3, 4, 5]))

def two_sum(arr, target):
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]
    return []

def dynamic_programming(arr):
    dp = [0] * len(arr)
    dp[0] = arr[0]
    for i in range(1, len(arr)):
        dp[i] = max(dp[i-1] + arr[i], arr[i])
    return max(dp)


def greedy(arr):
    arr.sort()
    max_profit = 0
    for i in range(len(arr)):
        if arr[i] > arr[i-1]:
            max_profit += arr[i] - arr[i-1]
    return max_profit

print(greedy([1, 2, 3, 4, 5]))

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

print(backtracking([1, 2, 3, 4, 5]))
def sliding_window(arr, k):
    max_sum = float('-inf')
    current_sum = 0
    for i in range(len(arr)):
        current_sum += arr[i]
        if i >= k:
            current_sum -= arr[i-k]
        max_sum = max(max_sum, current_sum)
    return max_sum

print(sliding_window([1, 2, 3, 4, 5], 3))

def bit_manipulation(arr):
    result = 0
    for num in arr:
        result ^= num
    return result

print(bit_manipulation([1, 2, 3, 4, 5]))    

def binary_search_on_answer(arr):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if is_valid(mid):
            right = mid - 1
        else:
            left = mid + 1
    return left

print(binary_search_on_answer([1, 2, 3, 4, 5]))

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

print(topological_sort({0: [1, 2], 1: [3], 2: [3], 3: []}))

def binary_search_tree(arr):
    if not arr:
        return None
    mid = len(arr) // 2
    root = TreeNode(arr[mid])
    root.left = binary_search_tree(arr[:mid])
    root.right = binary_search_tree(arr[mid+1:])
    return root

print(binary_search_tree([1, 2, 3, 4, 5]))

class stack:
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

print(stack([1, 2, 3, 4, 5]))




class queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        return self.items.popleft()

    def is_empty(self):
        return len(self.items) == 0

    def peek(self):
        return self.items[0]

print(queue([1, 2, 3, 4, 5]))

class linked_list:
    def __init__(self):
        self.head = None

    def append(self, item):
        if not self.head:
            self.head = item
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = item

    def prepend(self, item):
        new_node = ListNode(item)
        new_node.next = self.head
        self.head = new_node

print(linked_list([1, 2, 3, 4, 5])) 

class hash_table:
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

print(hash_table([1, 2, 3, 4, 5]))

class graph:
    def __init__(self):
        self.graph = {}

    def add_vertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, vertex1, vertex2):
        self.graph[vertex1].append(vertex2)
        self.graph[vertex2].append(vertex1)                         

print(graph([1, 2, 3, 4, 5]))

class tree:
    def __init__(self):
        self.root = None

    def insert(self, item):
        if not self.root:
            self.root = item
        else:
            current = self.root
            while current.next: 
                current = current.next
            current.next = item

    def search(self, item):
        current = self.root
        while current:
            if current.val == item:
                return True
            current = current.next
        return False

print(tree([1, 2, 3, 4, 5]))    

class heap:
    def __init__(self):
        self.heap = []

    def insert(self, item):
        self.heap.append(item)
        self.heapify_up()

    def heapify_up(self):
        index = len(self.heap) - 1
        while index > 0:
            parent_index = (index - 1) // 2
            if self.heap[index] > self.heap[parent_index]:
                self.heap[index], self.heap[parent_index] = self.heap[parent_index], self.heap[index]
                index = parent_index
            else:
                break

    def extract_max(self):
        if len(self.heap) == 0:
            return None
        max_item = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self.heapify_down()
        return max_item

    def heapify_down(self):
        index = 0
        while index < len(self.heap):
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            if left_child_index < len(self.heap) and self.heap[left_child_index] > self.heap[index]:
                largest_index = left_child_index
            if right_child_index < len(self.heap) and self.heap[right_child_index] > self.heap[largest_index]:
                largest_index = right_child_index
            if largest_index != index:
                self.heap[index], self.heap[largest_index] = self.heap[largest_index], self.heap[index]
                index = largest_index
            else:
                break

print(heap([1, 2, 3, 4, 5]))

class trie:
    def __init__(self):
        self.root = {}

    def insert(self, word):
        current = self.root
        for char in word:
            if char not in current:
                current[char] = {}
            current = current[char]
        current['*'] = True

    def search(self, word):
        current = self.root
        for char in word:
            if char not in current:
                return False
            current = current[char]
        return '*' in current

print(trie([1, 2, 3, 4, 5]))    


def sliding_window(arr, k):
    max_sum = float('-inf')
    current_sum = 0
    for i in range(len(arr)):
        current_sum += arr[i]
        if i >= k:
            current_sum -= arr[i-k] 
        max_sum = max(max_sum, current_sum)
    return max_sum

print(sliding_window([1, 2, 3, 4, 5], 3))

def monotonic_stack(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack

print(monotonic_stack([1, 2, 3, 4, 5]))

def monotonic_queue(arr):
    queue = []
    for num in arr:
        while queue and queue[-1] > num:
            queue.pop()
        queue.append(num)
    return queue

print(monotonic_queue([1, 2, 3, 4, 5]))

def two_pointers(arr):
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

print(two_pointers([1, 2, 3, 4, 5], 6))

def binary_search_tree(arr):
    if not arr:
        return None
    mid = len(arr) // 2
    root = TreeNode(arr[mid])
    root.left = binary_search_tree(arr[:mid])
    root.right = binary_search_tree(arr[mid+1:])
    return root
