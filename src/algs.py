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
