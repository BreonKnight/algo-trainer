import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Editor, { Monaco } from "@monaco-editor/react";
import { pseudocodePatterns } from "@/lib/pseudocode-patterns";
import styles from "@/styles/pseudocode.module.css";
import { AudioPlayer } from "./AudioPlayer";

// Define Dracula theme
const draculaTheme = {
  base: "vs-dark" as const,
  inherit: true,
  rules: [
    { token: "", foreground: "f8f8f2" },
    { token: "comment", foreground: "6272a4" },
    { token: "keyword", foreground: "ff79c6" },
    { token: "string", foreground: "f1fa8c" },
    { token: "number", foreground: "bd93f9" },
    { token: "regexp", foreground: "ff5555" },
    { token: "type", foreground: "8be9fd" },
    { token: "class", foreground: "50fa7b" },
    { token: "function", foreground: "50fa7b" },
    { token: "variable", foreground: "f8f8f2" },
    { token: "constant", foreground: "bd93f9" },
    { token: "operator", foreground: "ff79c6" },
    { token: "delimiter", foreground: "f8f8f2" },
    { token: "tag", foreground: "ff79c6" },
    { token: "attribute.name", foreground: "50fa7b" },
    { token: "attribute.value", foreground: "f1fa8c" },
  ],
  colors: {
    "editor.background": "#282a36",
    "editor.foreground": "#f8f8f2",
    "editor.lineHighlightBackground": "#44475a",
    "editor.selectionBackground": "#44475a",
    "editor.inactiveSelectionBackground": "#44475a80",
    "editorCursor.foreground": "#f8f8f2",
    "editorWhitespace.foreground": "#6272a480",
    "editorIndentGuide.background": "#6272a440",
    "editorIndentGuide.activeBackground": "#6272a480",
    "editor.selectionHighlightBackground": "#44475a80",
    "editor.wordHighlightBackground": "#44475a80",
    "editorBracketMatch.background": "#44475a80",
    "editorBracketMatch.border": "#6272a4",
    "editorOverviewRuler.border": "#282a36",
    "editorGutter.background": "#282a36",
    "editorError.foreground": "#ff5555",
    "editorWarning.foreground": "#ffb86c",
    "editorInfo.foreground": "#8be9fd",
    "editorHint.foreground": "#6272a4",
  },
};

const PATTERN_KEYS = [
  "Quick Sort",
  "Merge Sort",
  "Stack Sort",
  "Heap Sort",
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Binary Search",
  "Binary Search on Answer",
  "Linear Search",
  "Two Sum",
  "Dynamic Programming",
  "Greedy",
  "Backtracking",
  "Sliding Window",
  "Bit Manipulation",
  "Topological Sort",
  "DFS",
  "BFS",
  "Stack Implementation",
  "Queue Implementation",
  "Linked List",
  "Circular Linked List",
  "Hash Table",
  "Graph",
  "Tree",
  "Binary Search Tree",
  "Heap Implementation",
  "Trie",
  "Monotonic Stack",
  "Monotonic Queue",
  "Two Pointers",
] as const;

type PatternKey = (typeof PATTERN_KEYS)[number];

const patterns = new Map<PatternKey, string>([
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
    return []
`,
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

export function AlgorithmTrainer() {
  const [currentPattern, setCurrentPattern] = useState<PatternKey | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");
  const monacoRef = useRef<Monaco | null>(null);
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);

  const handleEditorDidMount = (_editor: unknown, monaco: Monaco) => {
    monacoRef.current = monaco;
    monaco.editor.defineTheme("dracula", draculaTheme);
    monaco.editor.setTheme("dracula");
  };

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    const nextPattern = PATTERN_KEYS[randomIndex];

    // Add to history if it's a new pattern
    if (currentPattern !== nextPattern) {
      // If we're not at the end of the history, remove all patterns after current index
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(
          0,
          currentIndexRef.current + 1
        );
      }

      // Add the new pattern to history
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      setCurrentPattern(nextPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern =
        patternHistoryRef.current[currentIndexRef.current];
      setCurrentPattern(previousPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  return (
    <div className="min-h-screen w-[100vw] flex flex-col bg-gradient-to-br from-[#282a36] via-[#44475a] to-[#282a36] text-[#f8f8f2] overflow-x-hidden">
      <div className="bg-gradient-to-r from-dracula-purple via-dracula-pink to-dracula-purple animate-gradient-x py-1 px-3 fixed top-0 left-0 right-0 z-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
          Algorithm Trainer
        </h1>
      </div>

      <main className="flex-1 px-2 py-1 w-full mt-[40px] mb-[32px] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 mb-1 sticky top-0 bg-[#282a36] z-10 py-1">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button
              onClick={nextPattern}
              className="bg-[#bd93f9] hover:bg-[#bd93f9]/90 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap h-8 px-3"
            >
              {currentPattern ? "Next Pattern" : "Start Training"}
            </Button>
            {currentPattern && (
              <Button
                onClick={previousPattern}
                className="bg-[#6272a4] hover:bg-[#6272a4]/90 w-full sm:w-auto text-sm sm:text-base whitespace-nowrap h-8 px-3"
                disabled={currentIndexRef.current <= 0}
              >
                Previous Pattern
              </Button>
            )}
          </div>
          <AudioPlayer />
        </div>

        {currentPattern && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 min-h-[calc(100vh-7.5rem)]">
            {/* Left side: Pattern/Pseudocode */}
            <Card className="p-2 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col order-1">
              <h2 className="text-base sm:text-lg font-semibold mb-1 text-[#ff79c6] truncate flex-shrink-0">
                {currentPattern}
              </h2>
              <div className="flex-1 min-h-0">
                <div
                  className={`${styles.pseudocodeContainer} h-full overflow-y-auto`}
                >
                  <div
                    className={`${styles.pseudocodeContent} text-sm sm:text-base`}
                    dangerouslySetInnerHTML={{
                      __html:
                        pseudocodePatterns.get(currentPattern) ||
                        "Pseudocode coming soon...",
                    }}
                  />
                </div>
              </div>
            </Card>

            {/* Middle: Code Editor - Always in the middle */}
            <Card className="p-2 bg-[#44475a] border-[#6272a4] w-full h-full flex flex-col xl:col-start-2 xl:col-span-1 order-2 md:order-1 md:col-span-2 xl:order-2">
              <h2 className="text-base sm:text-lg font-semibold mb-1 text-[#50fa7b] truncate flex-shrink-0">
                Your Implementation
              </h2>
              <div className="flex-1 min-h-0">
                <div className="flex flex-col h-full min-h-[400px] w-full">
                  <Editor
                    height="100%"
                    defaultLanguage="python"
                    theme="dracula"
                    value={userCode}
                    onChange={(value: string | undefined) =>
                      setUserCode(value || "")
                    }
                    onMount={handleEditorDidMount}
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      lineNumbers: "on",
                      roundedSelection: false,
                      padding: { top: 8, bottom: 8 },
                      cursorStyle: "line",
                      automaticLayout: true,
                      wordWrap: "on",
                      tabSize: 4,
                      insertSpaces: true,
                      overviewRulerBorder: false,
                      hideCursorInOverviewRuler: true,
                      renderLineHighlight: "line",
                      lineDecorationsWidth: 0,
                      renderLineHighlightOnlyWhenFocus: true,
                      fixedOverflowWidgets: true,
                    }}
                  />
                </div>
              </div>
            </Card>

            {/* Right side: Answer */}
            <Card className="p-2 bg-[#44475a] border-[#6272a4] w-full flex flex-col order-3 min-h-[300px]">
              <div className="flex justify-between gap-2 mb-1 flex-shrink-0">
                <Button
                  onClick={() => setShowAnswer(!showAnswer)}
                  className="bg-[#50fa7b] hover:bg-[#50fa7b]/90 text-[#282a36] text-sm sm:text-base whitespace-nowrap h-8 px-3"
                >
                  {showAnswer ? "Hide Answer" : "Show Answer"}
                </Button>
                <Button
                  onClick={nextPattern}
                  className="bg-[#ff79c6] hover:bg-[#ff79c6]/90 text-sm sm:text-base whitespace-nowrap h-8 px-3"
                >
                  Next Pattern
                </Button>
              </div>
              <div
                className={`flex-1 min-h-0 transition-all duration-200 ${
                  showAnswer ? "opacity-100" : "opacity-0 h-0"
                }`}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-1 text-[#50fa7b] truncate flex-shrink-0">
                  Implementation:
                </h3>
                <div className="h-[calc(100%-2rem)] w-full rounded-md overflow-hidden">
                  <Editor
                    height="100%"
                    defaultLanguage="python"
                    theme="dracula"
                    value={patterns.get(currentPattern)}
                    onMount={handleEditorDidMount}
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                      lineNumbers: "on",
                      readOnly: true,
                      roundedSelection: false,
                      padding: { top: 8, bottom: 8 },
                      cursorStyle: "line",
                      automaticLayout: true,
                      wordWrap: "on",
                      tabSize: 4,
                      insertSpaces: true,
                      overviewRulerBorder: false,
                      hideCursorInOverviewRuler: true,
                      renderLineHighlight: "line",
                      lineDecorationsWidth: 0,
                      renderLineHighlightOnlyWhenFocus: true,
                      fixedOverflowWidgets: true,
                    }}
                  />
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-[#1e1f29]/80 backdrop-blur-md py-1 px-3 text-center fixed bottom-0 left-0 right-0 z-10">
        <p className="text-[#6272a4] text-sm sm:text-base">
          Created by{" "}
          <a
            href="https://breon.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#bd93f9] hover:text-[#ff79c6] transition-colors"
          >
            Breon
          </a>
        </p>
      </footer>
    </div>
  );
}

export default AlgorithmTrainer;
