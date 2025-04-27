import { PatternKey } from "./types";

interface AlgorithmPattern {
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudocode: string[];
  example: string;
  implementation: string;
}

export const algorithmPatterns: Record<PatternKey, AlgorithmPattern> = {
  "Quick Sort": {
    title: "Quick Sort Algorithm",
    description:
      "A divide-and-conquer algorithm that picks a pivot element and partitions the array around it.",
    timeComplexity: "O(n log n) average case, O(n²) worst case",
    spaceComplexity: "O(log n) due to recursion stack",
    pseudocode: [
      "1. Base case: If array length <= 1, return array",
      "2. Choose pivot:",
      "   a. Select last element as pivot",
      "   b. Initialize left = 0, right = len(arr) - 2",
      "3. Partition:",
      "   a. While left <= right:",
      "      - If arr[left] <= pivot: move left pointer right",
      "      - If arr[right] > pivot: move right pointer left",
      "      - If both conditions false: swap elements",
      "   b. Place pivot in correct position",
      "4. Recursively sort:",
      "   a. Sort left subarray (elements <= pivot)",
      "   b. Sort right subarray (elements > pivot)",
    ],
    example: `arr = [7, 2, 1, 6, 8, 5, 3, 4]

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
Right: [8, 5, 7, 6]`,
    implementation: `def quick_sort(arr):
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
  },

  "Merge Sort": {
    title: "Merge Sort Algorithm",
    description:
      "A divide-and-conquer algorithm that recursively divides the array into two halves, sorts them, and then merges the sorted halves.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "1. Base case: If array length <= 1, return array",
      "2. Divide:",
      "   a. Calculate mid = len(arr) // 2",
      "   b. Split array into left = arr[:mid] and right = arr[mid:]",
      "   c. Recursively sort left and right halves",
      "3. Merge:",
      "   a. Initialize result array and pointers i, j = 0",
      "   b. While both halves have elements:",
      "      - Compare elements at current pointers",
      "      - Add smaller element to result",
      "      - Increment corresponding pointer",
      "   c. Add remaining elements from non-empty half",
      "   d. Return merged result",
    ],
    example: `arr = [38, 27, 43, 3, 9, 82, 10]

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
[3, 27, 38, 43] | [9, 10, 82] -> [3, 9, 10, 27, 38, 43, 82]`,
    implementation: `def merge_sort(arr):
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
  },

  "Stack Sort": {
    title: "Stack Sort Algorithm",
    description:
      "A sorting algorithm that uses a stack data structure to sort elements in descending order.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "1. Initialize an empty stack",
      "2. For each element in the input array:",
      "   a. While stack is not empty and top element > current number:",
      "      - Pop elements from stack",
      "   b. Push current number to stack",
      "3. Return the sorted stack",
    ],
    example: `Input: [5, 2, 8, 1, 9, 3]

Step 1: Push 5
Stack: [5]

Step 2: Push 2
Stack: [5, 2]

Step 3: Push 8
Stack: [8]

Step 4: Push 1
Stack: [8, 1]

Step 5: Push 9
Stack: [9]

Step 6: Push 3
Stack: [9, 3]

Final result: [9, 3]`,
    implementation: `def stack_sort(arr):
    stack = []
    for num in arr:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    return stack`,
  },

  "Heap Sort": {
    title: "Heap Sort Algorithm",
    description:
      "A comparison-based sorting algorithm that uses a binary heap data structure to build a max-heap and repeatedly extract the maximum element.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. Build max heap from input array",
      "2. Repeatedly extract maximum:",
      "   a. Swap root with last element",
      "   b. Reduce heap size by 1",
      "   c. Heapify root node",
      "3. Return sorted array",
    ],
    example: `arr = [4, 10, 3, 5, 1]
Build max heap:
     10
    /  \\
   5    3
  / \\
 4   1

Extract max elements:
1. [1, 5, 3, 4] | 10
2. [1, 4, 3] | 5, 10
3. [1, 3] | 4, 5, 10
4. [1] | 3, 4, 5, 10

Result: [1, 3, 4, 5, 10]`,
    implementation: `def heap_sort(arr):
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
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
        
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    
    return arr`,
  },

  "Bubble Sort": {
    title: "Bubble Sort Algorithm",
    description:
      "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. For i from 0 to n-1:",
      "   a. For j from 0 to n-i-1:",
      "      - If arr[j] > arr[j+1]:",
      "        * Swap arr[j] and arr[j+1]",
      "2. Return sorted array",
    ],
    example: `arr = [64, 34, 25, 12, 22]

Pass 1: [34, 25, 12, 22, 64]
Pass 2: [25, 12, 22, 34, 64]
Pass 3: [12, 22, 25, 34, 64]
Pass 4: [12, 22, 25, 34, 64]`,
    implementation: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
  },

  "Selection Sort": {
    title: "Selection Sort Algorithm",
    description:
      "A simple sorting algorithm that divides the input into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region to add to the sorted region.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. For i from 0 to n-1:",
      "   a. Find minimum element in unsorted region [i..n-1]",
      "   b. Swap minimum element with first element of unsorted region",
      "2. Return sorted array",
    ],
    example: `arr = [64, 25, 12, 22, 11]

First pass:
[64, 25, 12, 22, 11] -> min = 11
[11, 25, 12, 22, 64]

Second pass:
[11, 25, 12, 22, 64] -> min = 12
[11, 12, 25, 22, 64]

Third pass:
[11, 12, 25, 22, 64] -> min = 22
[11, 12, 22, 25, 64]

Fourth pass:
[11, 12, 22, 25, 64] -> min = 25
[11, 12, 22, 25, 64]`,
    implementation: `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`,
  },

  "Insertion Sort": {
    title: "Insertion Sort Algorithm",
    description:
      "A simple sorting algorithm that builds the final sorted array one item at a time, by repeatedly inserting a new element into the sorted portion of the array.",
    timeComplexity: "O(n²) worst/average case, O(n) best case",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. For i from 1 to n-1:",
      "   a. key = arr[i]",
      "   b. j = i - 1",
      "   c. While j >= 0 and arr[j] > key:",
      "      - Move arr[j] one position ahead",
      "      - Decrement j",
      "   d. Place key at correct position",
      "2. Return sorted array",
    ],
    example: `arr = [12, 11, 13, 5, 6]

Pass 1: [11, 12, 13, 5, 6]
Pass 2: [11, 12, 13, 5, 6]
Pass 3: [5, 11, 12, 13, 6]
Pass 4: [5, 6, 11, 12, 13]

Key steps for inserting 5:
[11, 12, 13, 13, 6]
[11, 12, 12, 13, 6]
[11, 11, 12, 13, 6]
[5, 11, 12, 13, 6]`,
    implementation: `def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr`,
  },

  "Binary Search": {
    title: "Binary Search Algorithm",
    description:
      "An efficient search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. Initialize left = 0, right = length - 1",
      "2. While left <= right:",
      "   a. mid = (left + right) // 2",
      "   b. If arr[mid] == target:",
      "      - Return mid",
      "   c. If arr[mid] < target:",
      "      - left = mid + 1",
      "   d. Else:",
      "      - right = mid - 1",
      "3. Return -1 if not found",
    ],
    example: `arr = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7

Step 1: mid = 3
arr[3] = 7 == target
Found at index 3!

Example 2 (target = 10):
Step 1: mid = 3, arr[3] = 7 < 10
left = 4
Step 2: mid = 5, arr[5] = 11 > 10
right = 4
Step 3: left > right
Not found!`,
    implementation: `def binary_search(arr, target):
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
  },

  "Binary Search on Answer": {
    title: "Binary Search on Answer Algorithm",
    description:
      "A problem-solving pattern that uses binary search to find an answer in a range of possible values, typically used when the answer space is monotonic.",
    timeComplexity: "O(log n) * C, where C is the cost of checking a value",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. Define check(x) function that returns true if x is valid",
      "2. Initialize left = min_possible, right = max_possible",
      "3. While left < right:",
      "   a. mid = (left + right) // 2",
      "   b. If check(mid):",
      "      - right = mid",
      "   c. Else:",
      "      - left = mid + 1",
      "4. Return left",
    ],
    example: `Problem: Find square root of 16
left = 1, right = 16

Step 1: mid = 8
check(8): 8*8 > 16
right = 8

Step 2: mid = 4
check(4): 4*4 = 16
right = 4

Step 3: left = 4, right = 4
Answer: 4`,
    implementation: `def binary_search_answer(min_val, max_val, check):
    def check(x):
        # Problem-specific check function
        pass
    
    left, right = min_val, max_val
    while left < right:
        mid = (left + right) // 2
        if check(mid):
            right = mid
        else:
            left = mid + 1
    
    return left`,
  },

  "Linear Search": {
    title: "Linear Search Algorithm",
    description:
      "A simple search algorithm that checks each element in the list sequentially until a match is found or the whole list has been searched.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. For i from 0 to n-1:",
      "   a. If arr[i] == target:",
      "      - Return i",
      "2. Return -1 if not found",
    ],
    example: `arr = [64, 34, 25, 12, 22, 11, 90]
target = 12

Step 1: Check 64 ≠ 12
Step 2: Check 34 ≠ 12
Step 3: Check 25 ≠ 12
Step 4: Check 12 = 12
Found at index 3!`,
    implementation: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1`,
  },

  "Two Sum": {
    title: "Two Sum Algorithm (Brute Force)",
    description:
      "A problem-solving pattern that finds two numbers in an array that sum to a target value using a brute force approach.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. For i from 0 to n-1:",
      "   a. For j from i+1 to n-1:",
      "      - If arr[i] + arr[j] == target:",
      "         * Return [i, j]",
      "2. Return [] if no solution found",
    ],
    example: `arr = [2, 7, 11, 15]
target = 9

Step 1: i=0, j=1
2 + 7 = 9
Found solution: [0, 1]`,
    implementation: `def two_sum(arr, target):
    n = len(arr)
    for i in range(n):
        for j in range(i + 1, n):
            if arr[i] + arr[j] == target:
                return [i, j]
    return []`,
  },

  "Two Sum Dict": {
    title: "Two Sum Dictionary Pattern",
    description:
      "An efficient solution to find two numbers in an array that add up to a target value using a hash table/dictionary for O(n) time complexity.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "1. Initialize empty dictionary",
      "2. For each number in array:",
      "   a. Calculate complement = target - current_number",
      "   b. If complement exists in dictionary:",
      "      - Return sorted [complement_index, current_index]",
      "   c. Add current_number and its index to dictionary",
      "3. Return empty array if no solution found",
    ],
    example: `arr = [2, 7, 11, 15]
target = 9

Step 1: num = 2
complement = 9 - 2 = 7
dict = {2: 0}

Step 2: num = 7
complement = 9 - 7 = 2
2 in dict
Found solution: [0, 1]`,
    implementation: `def two_sum_dict(arr, target):
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
    return []`,
  },

  "Two Sum Two Pointers": {
    title: "Two Sum Algorithm (Two Pointers)",
    description:
      "A solution to the Two Sum problem using two pointers technique, which requires the array to be sorted.",
    timeComplexity: "O(n log n) due to sorting",
    spaceComplexity:
      "O(1) if modifying input array, O(n) if creating new array",
    pseudocode: [
      "1. Sort the array (if not already sorted)",
      "2. Initialize left = 0, right = n-1",
      "3. While left < right:",
      "   a. sum = arr[left] + arr[right]",
      "   b. If sum == target:",
      "      - Return [left, right]",
      "   c. If sum < target:",
      "      - left++",
      "   d. Else:",
      "      - right--",
      "4. Return [] if no solution found",
    ],
    example: `arr = [15, 2, 11, 7]
sorted = [2, 7, 11, 15]
target = 9

Step 1: sum = 2 + 15 = 17 > 9
right--

Step 2: sum = 2 + 11 = 13 > 9
right--

Step 3: sum = 2 + 7 = 9 == target
Found solution: [0, 1]`,
    implementation: `def two_sum_two_pointers(arr, target):
    # Create sorted copy to preserve original indices
    sorted_arr = sorted(arr)
    left, right = 0, len(arr) - 1
    
    while left < right:
        curr_sum = sorted_arr[left] + sorted_arr[right]
        if curr_sum == target:
            # Find original indices
            i = arr.index(sorted_arr[left])
            j = arr.index(sorted_arr[right])
            return [min(i, j), max(i, j)]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    return []`,
  },

  "Dynamic Programming": {
    title: "Dynamic Programming Pattern",
    description:
      "A method for solving complex problems by breaking them down into simpler subproblems, storing the results of subproblems to avoid redundant computation.",
    timeComplexity: "Varies by problem",
    spaceComplexity: "Varies by problem",
    pseudocode: [
      "1. Define base cases",
      "2. Define state (what needs to be stored)",
      "3. Define transitions (how to move between states)",
      "4. Initialize memoization or tabulation structure",
      "5. Implement recursive (top-down) or iterative (bottom-up) solution",
      "6. Return final result",
    ],
    example: `Problem: Calculate nth Fibonacci number

Base cases:
- fib(0) = 0
- fib(1) = 1

State: dp[i] = fib(i)

Transition:
dp[i] = dp[i-1] + dp[i-2]`,
    implementation: `def solve_dp(problem_input):
    # Initialize memoization dictionary
    memo = {}
    
    def dp(state):
        # Base cases
        if is_base_case(state):
            return base_case_value
        
        # Check if already computed
        if state in memo:
            return memo[state]
        
        # Compute result from subproblems
        result = combine_subproblems(state)
        memo[state] = result
        
        return result
    
    return dp(initial_state)`,
  },

  "Dynamic Programming Fibonacci": {
    title: "Dynamic Programming Fibonacci",
    description:
      "A classic example of dynamic programming that calculates Fibonacci numbers efficiently by storing previously computed values.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "1. Initialize dp array with base cases",
      "2. For i from 2 to n:",
      "   a. dp[i] = dp[i-1] + dp[i-2]",
      "3. Return dp[n]",
    ],
    example: `Calculate fib(5)

dp = [0, 1]
i=2: dp[2] = 1 + 0 = 1
i=3: dp[3] = 1 + 1 = 2
i=4: dp[4] = 2 + 1 = 3
i=5: dp[5] = 3 + 2 = 5

Result: 5`,
    implementation: `def fibonacci_dp(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]`,
  },

  "Dynamic Programming Iterative": {
    title: "Dynamic Programming Iterative (Bottom-up)",
    description:
      "A bottom-up approach to dynamic programming that builds the solution iteratively from smaller subproblems to larger ones.",
    timeComplexity: "Varies by problem",
    spaceComplexity: "Often O(n) or O(n²)",
    pseudocode: [
      "1. Initialize dp array/table",
      "2. Fill base cases",
      "3. Iterate through states in order:",
      "   a. For each state, compute value from previous states",
      "4. Return final state value",
    ],
    example: `Problem: Longest Increasing Subsequence

arr = [10, 9, 2, 5, 3, 7, 101, 18]
dp[i] = length of LIS ending at i

dp = [1, 1, 1, 2, 2, 3, 4, 4]
Result: 4`,
    implementation: `def longest_increasing_subsequence(arr):
    if not arr:
        return 0
    
    n = len(arr)
    dp = [1] * n
    
    for i in range(1, n):
        for j in range(i):
            if arr[i] > arr[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)`,
  },

  "Dynamic Programming Coin Change": {
    title: "Dynamic Programming Coin Change",
    description:
      "A classic dynamic programming problem that finds the minimum number of coins needed to make a given amount of money.",
    timeComplexity: "O(amount * number of coins)",
    spaceComplexity: "O(amount)",
    pseudocode: [
      "1. Initialize dp array with infinity",
      "2. Set dp[0] = 0",
      "3. For amount from 1 to target:",
      "   a. For each coin:",
      "      - If coin <= amount:",
      "        * dp[amount] = min(dp[amount], dp[amount-coin] + 1)",
      "4. Return dp[target] if not infinity else -1",
    ],
    example: `coins = [1, 2, 5]
amount = 11

dp[0] = 0
dp[1] = 1 (1)
dp[2] = 1 (2)
dp[3] = 2 (1+2)
dp[4] = 2 (2+2)
dp[5] = 1 (5)
...
dp[11] = 3 (5+5+1)`,
    implementation: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != float('inf') else -1`,
  },

  Greedy: {
    title: "Greedy Algorithm Pattern",
    description:
      "A problem-solving approach that makes locally optimal choices at each step with the hope of finding a global optimum.",
    timeComplexity: "Varies by problem",
    spaceComplexity: "Usually O(1) or O(n)",
    pseudocode: [
      "1. Initialize result structure",
      "2. While problem not solved:",
      "   a. Select locally optimal choice",
      "   b. Add to result",
      "   c. Reduce problem size",
      "3. Return result",
    ],
    example: `Problem: Make change with minimum coins
Amount: 30
Coins: [25, 10, 5, 1]

Step 1: Use 25 (remain: 5)
Step 2: Use 5 (remain: 0)
Result: [25, 5]`,
    implementation: `def greedy_solution(problem_input):
    result = []
    
    while not is_solved(problem_input):
        # Find best local choice
        choice = find_best_choice(problem_input)
        
        # Add to result
        result.append(choice)
        
        # Update problem state
        problem_input = update_state(problem_input, choice)
    
    return result`,
  },

  "Greedy Activity Selection": {
    title: "Greedy Activity Selection",
    description:
      "A greedy algorithm that selects the maximum number of non-overlapping activities that can be performed by a single person.",
    timeComplexity: "O(n log n) for sorting, O(n) after sorting",
    spaceComplexity: "O(n) for storing result",
    pseudocode: [
      "1. Sort activities by finish time",
      "2. Select first activity",
      "3. For each remaining activity:",
      "   a. If start time >= last finish time:",
      "      - Select activity",
      "      - Update last finish time",
      "4. Return selected activities",
    ],
    example: `Activities: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11)]
Sorted by finish: [(1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11)]

Selected:
1. (1,4)
2. (5,7)
3. (8,11)

Result: 3 activities`,
    implementation: `def activity_selection(start, finish):
    n = len(start)
    # Sort by finish time
    activities = sorted(zip(start, finish), key=lambda x: x[1])
    
    selected = [activities[0]]
    last_finish = activities[0][1]
    
    for i in range(1, n):
        if activities[i][0] >= last_finish:
            selected.append(activities[i])
            last_finish = activities[i][1]
    
    return selected`,
  },

  "Greedy Fractional Knapsack": {
    title: "Greedy Fractional Knapsack",
    description:
      "A greedy approach to the knapsack problem where items can be broken into smaller pieces, always choosing the item with the highest value per unit weight.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "1. Calculate value/weight ratio for each item",
      "2. Sort items by ratio in descending order",
      "3. For each item:",
      "   a. If can take whole item:",
      "      - Take it completely",
      "   b. Else:",
      "      - Take fraction that fits",
      "4. Return total value",
    ],
    example: `Items: [(60,10), (100,20), (120,30)]
Ratios: [6, 5, 4]
Capacity: 50

Take:
1. 10kg of item 1: value = 60
2. 20kg of item 2: value = 100
3. 20kg of item 3: value = 80

Total value: 240`,
    implementation: `def fractional_knapsack(values, weights, capacity):
    # Calculate value/weight ratios
    ratios = [(v/w, v, w) for v, w in zip(values, weights)]
    ratios.sort(reverse=True)
    
    total_value = 0
    remaining = capacity
    
    for ratio, value, weight in ratios:
        if remaining >= weight:
            # Take whole item
            total_value += value
            remaining -= weight
        else:
            # Take fraction
            total_value += ratio * remaining
            break
    
    return total_value`,
  },

  "Greedy Job Scheduling": {
    title: "Greedy Job Scheduling",
    description:
      "A greedy algorithm that schedules jobs to minimize completion time or maximize profit, typically sorting jobs by duration or profit/time ratio.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "1. Sort jobs by profit/time ratio",
      "2. Initialize timeline",
      "3. For each job in sorted order:",
      "   a. Find earliest possible slot",
      "   b. If slot found:",
      "      - Schedule job in that slot",
      "4. Return schedule",
    ],
    example: `Jobs: [(2,100), (1,19), (2,27), (1,25), (3,15)]
Sorted by profit/time: [(1,19), (2,100), (1,25), (2,27), (3,15)]

Timeline:
t=0: Job 2 (100)
t=2: Job 3 (25)
t=3: Job 1 (19)

Total profit: 144`,
    implementation: `def job_scheduling(jobs):
    # Sort jobs by profit/time ratio
    sorted_jobs = sorted(jobs, key=lambda x: x[1]/x[0], reverse=True)
    
    max_time = sum(job[0] for job in jobs)
    timeline = [False] * max_time
    total_profit = 0
    
    for duration, profit in sorted_jobs:
        # Find latest possible slot
        latest_slot = max_time - duration
        while latest_slot >= 0:
            if not any(timeline[latest_slot:latest_slot+duration]):
                # Schedule job
                for t in range(latest_slot, latest_slot+duration):
                    timeline[t] = True
                total_profit += profit
                break
            latest_slot -= 1
    
    return total_profit`,
  },

  "Greedy Huffman Coding": {
    title: "Greedy Huffman Coding",
    description:
      "A greedy algorithm for constructing optimal prefix codes for data compression, building a binary tree from bottom up based on character frequencies.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "1. Create leaf nodes for each character with frequency",
      "2. While more than one node remains:",
      "   a. Extract two minimum frequency nodes",
      "   b. Create new node with sum of frequencies",
      "   c. Add new node back to queue",
      "3. Traverse tree to generate codes",
      "4. Return encoding map",
    ],
    example: `Text: "ABRACADABRA"
Frequencies: A:5, B:2, R:2, C:1, D:1

Tree building:
1. Join C(1) + D(1) = CD(2)
2. Join CD(2) + R(2) = CDR(4)
3. Join B(2) + CDR(4) = BCDR(6)
4. Join BCDR(6) + A(5) = ABCDR(11)

Codes:
A: 0
B: 10
C: 110
D: 111
R: 112`,
    implementation: `from heapq import heappush, heappop

def huffman_coding(text):
    # Count frequencies
    freq = {}
    for char in text:
        freq[char] = freq.get(char, 0) + 1
    
    # Create priority queue
    heap = []
    for char, frequency in freq.items():
        heappush(heap, (frequency, char))
    
    # Build tree
    while len(heap) > 1:
        freq1, char1 = heappop(heap)
        freq2, char2 = heappop(heap)
        heappush(heap, (freq1 + freq2, char1 + char2))
    
    # Generate codes (simplified)
    codes = {char: bin(i)[2:].zfill(len(bin(len(freq))[2:]))
            for i, char in enumerate(freq)}
    
    return codes`,
  },

  "Greedy Dijkstra": {
    title: "Dijkstra's Algorithm",
    description:
      "A greedy algorithm that finds the shortest path between nodes in a graph, which may represent road networks, computer networks, etc.",
    timeComplexity: "O((V + E) log V) with binary heap",
    spaceComplexity: "O(V)",
    pseudocode: [
      "1. Initialize distances to infinity except source (0)",
      "2. Initialize priority queue with source",
      "3. While queue not empty:",
      "   a. Get vertex with minimum distance",
      "   b. For each neighbor:",
      "      - Calculate new distance",
      "      - If better, update distance and add to queue",
      "4. Return distances array",
    ],
    example: `Graph:
A --4-- B --2-- C
|       |       |
8       3       1
|       |       |
D --2-- E --7-- F

Source: A
Step 1: A(0)
Step 2: B(4), D(8)
Step 3: E(7), C(6)
Step 4: F(7)

Shortest paths from A:
B: 4
C: 6
D: 8
E: 7
F: 7`,
    implementation: `from heapq import heappush, heappop

def dijkstra(graph, source):
    distances = {v: float('inf') for v in graph}
    distances[source] = 0
    pq = [(0, source)]
    
    while pq:
        curr_dist, curr = heappop(pq)
        
        if curr_dist > distances[curr]:
            continue
            
        for neighbor, weight in graph[curr].items():
            distance = curr_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heappush(pq, (distance, neighbor))
    
    return distances`,
  },

  Backtracking: {
    title: "Backtracking Algorithm Pattern",
    description:
      "A general algorithmic technique that considers searching every possible combination in order to solve a computational problem, abandoning each partial candidate ('backtracking') that cannot possibly be completed to a valid solution.",
    timeComplexity:
      "Usually exponential O(b^d) where b is branching factor and d is depth",
    spaceComplexity: "O(d) where d is the maximum depth of recursion",
    pseudocode: [
      "1. Define base cases for valid/invalid solutions",
      "2. For each possible choice:",
      "   a. Make choice",
      "   b. Recursively try to solve rest of problem",
      "   c. If solution found, return it",
      "   d. Else, undo choice (backtrack)",
      "3. Return false if no solution possible",
    ],
    example: `Problem: N-Queens (n=4)
Board:
. . . .
. . . .
. . . .
. . . .

Try Q at (0,0):
Q . . .
. . Q .
. Q . .
. . . Q

Solution found!`,
    implementation: `def backtrack(candidates, path, result):
    if is_solution(path):
        result.append(path[:])
        return
        
    for candidate in candidates:
        if is_valid(path, candidate):
            # Make choice
            path.append(candidate)
            
            # Recurse
            backtrack(candidates, path, result)
            
            # Undo choice
            path.pop()
            
def solve_backtracking(input):
    result = []
    backtrack(get_candidates(input), [], result)
    return result`,
  },

  "Sliding Window": {
    title: "Sliding Window Pattern",
    description:
      "An algorithmic technique that involves maintaining a subset of elements as a window that slides over the data, typically used for array/string problems involving contiguous sequences.",
    timeComplexity: "Usually O(n)",
    spaceComplexity: "Usually O(1) or O(k) where k is window size",
    pseudocode: [
      "1. Initialize window pointers (start, end)",
      "2. Initialize window state (sum, count, etc.)",
      "3. While end < array length:",
      "   a. Add element at end to window",
      "   b. While window condition not met:",
      "      - Remove element at start from window",
      "      - Increment start",
      "   c. Update result if needed",
      "   d. Increment end",
    ],
    example: `Problem: Find max sum subarray of size k
Array: [2, 1, 5, 1, 3, 2], k=3

Window sums:
[2, 1, 5] = 8
[1, 5, 1] = 7
[5, 1, 3] = 9
[1, 3, 2] = 6

Max sum: 9`,
    implementation: `def sliding_window(arr, k):
    if not arr or k <= 0:
        return 0
        
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        # Remove first element of previous window
        window_sum -= arr[i-k]
        # Add last element of current window
        window_sum += arr[i]
        # Update max
        max_sum = max(max_sum, window_sum)
    
    return max_sum`,
  },

  "Bit Manipulation": {
    title: "Bit Manipulation Pattern",
    description:
      "Techniques for performing operations at the bit level, often used to optimize space usage or perform fast arithmetic operations.",
    timeComplexity: "Usually O(1) or O(number of bits)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "Common operations:",
      "1. Get bit: num & (1 << i)",
      "2. Set bit: num | (1 << i)",
      "3. Clear bit: num & ~(1 << i)",
      "4. Toggle bit: num ^ (1 << i)",
      "5. Count set bits: while n: count += n & 1; n >>= 1",
    ],
    example: `Number: 10 (1010 in binary)

Get bit at position 1:
1010 & (1 << 1) = 1010 & 0010 = 0010 (bit is 1)

Set bit at position 2:
1010 | (1 << 2) = 1010 | 0100 = 1110

Clear bit at position 3:
1010 & ~(1 << 3) = 1010 & 0111 = 0010

Toggle bit at position 1:
1010 ^ (1 << 1) = 1010 ^ 0010 = 1000`,
    implementation: `class BitManipulation:
    @staticmethod
    def get_bit(num, i):
        return (num & (1 << i)) != 0
    
    @staticmethod
    def set_bit(num, i):
        return num | (1 << i)
    
    @staticmethod
    def clear_bit(num, i):
        return num & ~(1 << i)
    
    @staticmethod
    def toggle_bit(num, i):
        return num ^ (1 << i)
    
    @staticmethod
    def count_set_bits(num):
        count = 0
        while num:
            count += num & 1
            num >>= 1
        return count`,
  },

  "Topological Sort": {
    title: "Topological Sort Algorithm",
    description:
      "An algorithm for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge u->v, vertex u comes before v in the ordering.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    pseudocode: [
      "1. Calculate in-degree for each vertex",
      "2. Add vertices with in-degree 0 to queue",
      "3. While queue not empty:",
      "   a. Remove vertex from queue",
      "   b. Add to result",
      "   c. Reduce in-degree of neighbors",
      "   d. If any neighbor's in-degree becomes 0:",
      "      - Add to queue",
      "4. If visited all vertices, return result",
      "   Else, graph has cycle",
    ],
    example: `Graph:
A -> B -> C
|         ^
v         |
D --------|

In-degrees: A:0, B:1, C:2, D:1

Steps:
1. Start with A (in-degree 0)
2. Add B (now in-degree 0)
3. Add D (now in-degree 0)
4. Add C (now in-degree 0)

Result: [A, B, D, C]`,
    implementation: `from collections import defaultdict, deque

def topological_sort(graph):
    # Calculate in-degree
    in_degree = defaultdict(int)
    for u in graph:
        for v in graph[u]:
            in_degree[v] += 1
    
    # Add vertices with in-degree 0 to queue
    queue = deque([u for u in graph if in_degree[u] == 0])
    result = []
    
    while queue:
        u = queue.popleft()
        result.append(u)
        
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)
    
    return result if len(result) == len(graph) else []`,
  },

  DFS: {
    title: "Depth-First Search Algorithm",
    description:
      "A graph traversal algorithm that explores as far as possible along each branch before backtracking, typically implemented using recursion or a stack.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V) for recursion stack",
    pseudocode: [
      "1. Mark current vertex as visited",
      "2. For each unvisited neighbor:",
      "   a. Recursively call DFS on neighbor",
      "3. Backtrack when no unvisited neighbors",
    ],
    example: `Graph:
    1 --- 2
    |     |
    4 --- 3

DFS from vertex 1:
1. Visit 1
2. Visit 2
3. Visit 3
4. Visit 4

Path: 1->2->3->4`,
    implementation: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(start)
    print(start)  # Process vertex
    
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
    
    return visited`,
  },

  "DFS Linked List": {
    title: "DFS on Linked List",
    description:
      "Application of DFS pattern to traverse or process a linked list recursively, useful for operations like reversing or finding cycles.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n) for recursion stack",
    pseudocode: [
      "1. Base case: if node is null, return",
      "2. Process current node",
      "3. Recursively call DFS on next node",
      "4. (Optional) Process node after recursion",
    ],
    example: `List: 1->2->3->4->null

DFS to print in reverse:
1. Visit 1, recurse
2. Visit 2, recurse
3. Visit 3, recurse
4. Visit 4, recurse
5. Print: 4,3,2,1`,
    implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def dfs_linked_list(node):
    # Base case
    if not node:
        return
    
    # Process node (pre-order)
    print(node.val)
    
    # Recurse
    dfs_linked_list(node.next)
    
    # Process node (post-order)
    # print(node.val)  # Uncomment for reverse order`,
  },

  "DFS Binary Tree": {
    title: "DFS on Binary Tree",
    description:
      "Application of DFS to traverse a binary tree, with three main variations: pre-order, in-order, and post-order traversal.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h) where h is tree height",
    pseudocode: [
      "Pre-order traversal:",
      "1. Process root",
      "2. Traverse left subtree",
      "3. Traverse right subtree",
      "",
      "In-order traversal:",
      "1. Traverse left subtree",
      "2. Process root",
      "3. Traverse right subtree",
      "",
      "Post-order traversal:",
      "1. Traverse left subtree",
      "2. Traverse right subtree",
      "3. Process root",
    ],
    example: `Tree:
     1
   /   \\
  2     3
 / \\
4   5

Pre-order: 1,2,4,5,3
In-order: 4,2,5,1,3
Post-order: 4,5,2,3,1`,
    implementation: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def preorder(root):
    if not root:
        return
    print(root.val)  # Process root
    preorder(root.left)  # Left subtree
    preorder(root.right)  # Right subtree

def inorder(root):
    if not root:
        return
    inorder(root.left)  # Left subtree
    print(root.val)  # Process root
    inorder(root.right)  # Right subtree

def postorder(root):
    if not root:
        return
    postorder(root.left)  # Left subtree
    postorder(root.right)  # Right subtree
    print(root.val)  # Process root`,
  },

  BFS: {
    title: "Breadth-First Search Algorithm",
    description:
      "A graph traversal algorithm that explores all vertices at the present depth before moving to vertices at the next depth level, typically implemented using a queue.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    pseudocode: [
      "1. Initialize queue with start vertex",
      "2. While queue not empty:",
      "   a. Remove vertex from queue",
      "   b. Process vertex",
      "   c. Add unvisited neighbors to queue",
      "   d. Mark neighbors as visited",
    ],
    example: `Graph:
    1 --- 2
    |     |
    4 --- 3

BFS from vertex 1:
Queue: [1]
Visit 1, Queue: [2,4]
Visit 2, Queue: [4,3]
Visit 4, Queue: [3]
Visit 3, Queue: []`,
    implementation: `from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        vertex = queue.popleft()
        print(vertex)  # Process vertex
        
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return visited`,
  },

  "BFS Linked List": {
    title: "BFS on Linked List",
    description:
      "Application of BFS pattern to process a linked list level by level, useful for operations like finding the middle node or detecting cycles.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1) as we process one node at a time",
    pseudocode: [
      "1. Initialize slow and fast pointers",
      "2. While fast pointer valid:",
      "   a. Move slow one step",
      "   b. Move fast two steps",
      "3. Slow pointer at middle/cycle start",
    ],
    example: `List: 1->2->3->4->5->null

Find middle:
Step 1: s=1, f=1
Step 2: s=2, f=3
Step 3: s=3, f=5
Middle: 3`,
    implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_middle(head):
    if not head or not head.next:
        return head
    
    slow = fast = head
    
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow

def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False`,
  },

  "Stack Implementation": {
    title: "Stack Data Structure Implementation",
    description:
      "Implementation of a Last-In-First-Out (LIFO) data structure that supports push and pop operations.",
    timeComplexity: "Push/Pop: O(1)",
    spaceComplexity: "O(n) for n elements",
    pseudocode: [
      "Stack operations:",
      "1. push(element):",
      "   - Add element to top",
      "2. pop():",
      "   - Remove and return top element",
      "3. peek():",
      "   - Return top element without removing",
      "4. isEmpty():",
      "   - Return true if stack empty",
      "5. size():",
      "   - Return number of elements",
    ],
    example: `stack = Stack()
stack.push(1)  # [1]
stack.push(2)  # [1,2]
stack.push(3)  # [1,2,3]
stack.pop()    # returns 3, stack=[1,2]
stack.peek()   # returns 2, stack=[1,2]`,
    implementation: `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if not self.isEmpty():
            return self.items.pop()
        raise IndexError("Stack is empty")
    
    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        raise IndexError("Stack is empty")
    
    def isEmpty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)`,
  },

  "Queue Implementation": {
    title: "Queue Data Structure Implementation",
    description:
      "Implementation of a First-In-First-Out (FIFO) data structure that supports enqueue and dequeue operations.",
    timeComplexity: "Enqueue/Dequeue: O(1)",
    spaceComplexity: "O(n) for n elements",
    pseudocode: [
      "Queue operations:",
      "1. enqueue(element):",
      "   - Add element to rear",
      "2. dequeue():",
      "   - Remove and return front element",
      "3. front():",
      "   - Return front element without removing",
      "4. isEmpty():",
      "   - Return true if queue empty",
      "5. size():",
      "   - Return number of elements",
    ],
    example: `queue = Queue()
queue.enqueue(1)  # [1]
queue.enqueue(2)  # [1,2]
queue.enqueue(3)  # [1,2,3]
queue.dequeue()   # returns 1, queue=[2,3]
queue.front()     # returns 2, queue=[2,3]`,
    implementation: `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.isEmpty():
            return self.items.popleft()
        raise IndexError("Queue is empty")
    
    def front(self):
        if not self.isEmpty():
            return self.items[0]
        raise IndexError("Queue is empty")
    
    def isEmpty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)`,
  },

  "Linked List": {
    title: "Linked List Implementation",
    description:
      "Implementation of a linear data structure where each element points to the next element in the sequence.",
    timeComplexity: "Access: O(n), Insert/Delete at known position: O(1)",
    spaceComplexity: "O(n) for n elements",
    pseudocode: [
      "Linked List operations:",
      "1. append(element):",
      "   - Add element to end",
      "2. prepend(element):",
      "   - Add element to start",
      "3. delete(element):",
      "   - Remove first occurrence",
      "4. insert(element, position):",
      "   - Insert at specific position",
      "5. search(element):",
      "   - Return position of element",
    ],
    example: `list = LinkedList()
list.append(1)    # 1->null
list.append(2)    # 1->2->null
list.prepend(0)   # 0->1->2->null
list.delete(1)    # 0->2->null
list.insert(1, 1) # 0->1->2->null`,
    implementation: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def delete(self, data):
        if not self.head:
            return
        
        if self.head.data == data:
            self.head = self.head.next
            return
        
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next
    
    def insert(self, data, position):
        if position == 0:
            self.prepend(data)
            return
        
        new_node = Node(data)
        current = self.head
        for i in range(position - 1):
            if not current:
                return
            current = current.next
        
        if current:
            new_node.next = current.next
            current.next = new_node`,
  },

  "Circular Linked List": {
    title: "Circular Linked List Implementation",
    description:
      "Implementation of a linked list where the last element points back to the first element, forming a circle.",
    timeComplexity: "Access: O(n), Insert/Delete at known position: O(1)",
    spaceComplexity: "O(n) for n elements",
    pseudocode: [
      "Circular Linked List operations:",
      "1. append(element):",
      "   - Add element and point to head",
      "2. prepend(element):",
      "   - Add element and update last->next",
      "3. delete(element):",
      "   - Remove and maintain circle",
      "4. insert(element, position):",
      "   - Insert and maintain circle",
      "5. traverse():",
      "   - Visit each node once",
    ],
    example: `list = CircularLinkedList()
list.append(1)    # 1->1
list.append(2)    # 1->2->1
list.prepend(0)   # 0->1->2->0
list.delete(1)    # 0->2->0
list.insert(1, 1) # 0->1->2->0`,
    implementation: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
            return
        
        current = self.head
        while current.next != self.head:
            current = current.next
        current.next = new_node
        new_node.next = self.head
    
    def prepend(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            new_node.next = self.head
            return
        
        current = self.head
        while current.next != self.head:
            current = current.next
        new_node.next = self.head
        current.next = new_node
        self.head = new_node
    
    def delete(self, data):
        if not self.head:
            return
        
        if self.head.data == data:
            if self.head.next == self.head:
                self.head = None
                return
            current = self.head
            while current.next != self.head:
                current = current.next
            current.next = self.head.next
            self.head = self.head.next
            return
        
        current = self.head
        while current.next != self.head:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next
    
    def traverse(self):
        if not self.head:
            return
        
        current = self.head
        while True:
            print(current.data)
            current = current.next
            if current == self.head:
                break`,
  },

  "Hash Table": {
    title: "Hash Table Implementation",
    description:
      "Implementation of a data structure that maps keys to values using a hash function, providing constant-time average case operations.",
    timeComplexity: "Average: O(1) for insert/delete/search, Worst: O(n)",
    spaceComplexity: "O(n) for n key-value pairs",
    pseudocode: [
      "Hash Table operations:",
      "1. put(key, value):",
      "   - Hash key to get index",
      "   - Handle collisions",
      "   - Store key-value pair",
      "2. get(key):",
      "   - Hash key to get index",
      "   - Return value if found",
      "3. remove(key):",
      "   - Hash key to get index",
      "   - Remove key-value pair",
      "4. contains(key):",
      "   - Check if key exists",
    ],
    example: `table = HashTable()
table.put("name", "John")  # hash("name") = 2
table.put("age", 30)      # hash("age") = 5
table.get("name")         # returns "John"
table.contains("age")     # returns True
table.remove("name")      # removes entry`,
    implementation: `class HashTable:
    def __init__(self, size=1024):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def put(self, key, value):
        index = self._hash(key)
        for item in self.table[index]:
            if item[0] == key:
                item[1] = value
                return
        self.table[index].append([key, value])
    
    def get(self, key):
        index = self._hash(key)
        for item in self.table[index]:
            if item[0] == key:
                return item[1]
        raise KeyError(key)
    
    def remove(self, key):
        index = self._hash(key)
        for i, item in enumerate(self.table[index]):
            if item[0] == key:
                del self.table[index][i]
                return
        raise KeyError(key)
    
    def contains(self, key):
        index = self._hash(key)
        return any(item[0] == key for item in self.table[index])`,
  },

  Graph: {
    title: "Graph Implementation",
    description:
      "Implementation of a graph data structure using adjacency list representation, supporting both directed and undirected graphs.",
    timeComplexity:
      "Add vertex/edge: O(1), Remove vertex: O(V+E), Remove edge: O(E)",
    spaceComplexity: "O(V + E) for V vertices and E edges",
    pseudocode: [
      "Graph operations:",
      "1. addVertex(vertex):",
      "   - Add new vertex to graph",
      "2. addEdge(v1, v2, weight):",
      "   - Connect vertices with edge",
      "3. removeVertex(vertex):",
      "   - Remove vertex and its edges",
      "4. removeEdge(v1, v2):",
      "   - Remove edge between vertices",
      "5. getNeighbors(vertex):",
      "   - Get adjacent vertices",
    ],
    example: `graph = Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A", "B", 1)
graph.addEdge("B", "C", 2)
graph.getNeighbors("B")  # returns ["A", "C"]`,
    implementation: `class Graph:
    def __init__(self, directed=False):
        self.graph = {}
        self.directed = directed
    
    def addVertex(self, vertex):
        if vertex not in self.graph:
            self.graph[vertex] = {}
    
    def addEdge(self, v1, v2, weight=1):
        if v1 not in self.graph:
            self.addVertex(v1)
        if v2 not in self.graph:
            self.addVertex(v2)
        
        self.graph[v1][v2] = weight
        if not self.directed:
            self.graph[v2][v1] = weight
    
    def removeVertex(self, vertex):
        if vertex in self.graph:
            # Remove edges to this vertex
            for v in self.graph:
                if vertex in self.graph[v]:
                    del self.graph[v][vertex]
            # Remove vertex and its edges
            del self.graph[vertex]
    
    def removeEdge(self, v1, v2):
        if v1 in self.graph and v2 in self.graph[v1]:
            del self.graph[v1][v2]
            if not self.directed and v1 in self.graph[v2]:
                del self.graph[v2][v1]
    
    def getNeighbors(self, vertex):
        return list(self.graph.get(vertex, {}).keys())`,
  },

  Tree: {
    title: "Tree Implementation",
    description:
      "Implementation of a general tree data structure where each node can have multiple children.",
    timeComplexity: "Insert/Delete: O(1) with parent reference, Search: O(n)",
    spaceComplexity: "O(n) for n nodes",
    pseudocode: [
      "Tree operations:",
      "1. addChild(parent, child):",
      "   - Add child to parent node",
      "2. removeChild(parent, child):",
      "   - Remove child from parent",
      "3. findNode(value):",
      "   - Find node with value",
      "4. traverse():",
      "   - Visit all nodes",
      "5. getDepth(node):",
      "   - Get depth of node",
    ],
    example: `tree = Tree(1)
tree.addChild(1, 2)
tree.addChild(1, 3)
tree.addChild(2, 4)
tree.addChild(2, 5)

     1
   /   \\
  2     3
 / \\
4   5`,
    implementation: `class TreeNode:
    def __init__(self, value):
        self.value = value
        self.children = []
        self.parent = None

class Tree:
    def __init__(self, root_value):
        self.root = TreeNode(root_value)
    
    def addChild(self, parent_value, child_value):
        parent = self.findNode(parent_value)
        if parent:
            child = TreeNode(child_value)
            child.parent = parent
            parent.children.append(child)
    
    def removeChild(self, parent_value, child_value):
        parent = self.findNode(parent_value)
        if parent:
            parent.children = [
                child for child in parent.children
                if child.value != child_value
            ]
    
    def findNode(self, value, node=None):
        if node is None:
            node = self.root
        if node.value == value:
            return node
        for child in node.children:
            result = self.findNode(value, child)
            if result:
                return result
        return None
    
    def traverse(self, node=None):
        if node is None:
            node = self.root
        print(node.value)
        for child in node.children:
            self.traverse(child)
    
    def getDepth(self, node):
        depth = 0
        while node.parent:
            depth += 1
            node = node.parent
        return depth`,
  },

  "Binary Search Tree": {
    title: "Binary Search Tree Implementation",
    description:
      "Implementation of a binary tree that maintains the BST property: left subtree values are less than node, right subtree values are greater.",
    timeComplexity: "Average: O(log n) for insert/delete/search, Worst: O(n)",
    spaceComplexity: "O(n) for n nodes",
    pseudocode: [
      "BST operations:",
      "1. insert(value):",
      "   - Add value maintaining BST property",
      "2. delete(value):",
      "   - Remove value maintaining BST property",
      "3. search(value):",
      "   - Find node with value",
      "4. min():",
      "   - Find minimum value",
      "5. max():",
      "   - Find maximum value",
    ],
    example: `bst = BST()
bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(1)
bst.insert(9)

     5
   /   \\
  3     7
 /       \\
1         9`,
    implementation: `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, value):
        if not self.root:
            self.root = Node(value)
            return
        
        def _insert(node, value):
            if value < node.value:
                if node.left is None:
                    node.left = Node(value)
                else:
                    _insert(node.left, value)
            else:
                if node.right is None:
                    node.right = Node(value)
                else:
                    _insert(node.right, value)
        
        _insert(self.root, value)
    
    def search(self, value):
        def _search(node, value):
            if node is None or node.value == value:
                return node
            if value < node.value:
                return _search(node.left, value)
            return _search(node.right, value)
        
        return _search(self.root, value)
    
    def min(self):
        if not self.root:
            return None
        
        node = self.root
        while node.left:
            node = node.left
        return node.value
    
    def max(self):
        if not self.root:
            return None
        
        node = self.root
        while node.right:
            node = node.right
        return node.value
    
    def delete(self, value):
        def _min_value_node(node):
            current = node
            while current.left:
                current = current.left
            return current
        
        def _delete(node, value):
            if not node:
                return node
            
            if value < node.value:
                node.left = _delete(node.left, value)
            elif value > node.value:
                node.right = _delete(node.right, value)
            else:
                if not node.left:
                    return node.right
                elif not node.right:
                    return node.left
                
                temp = _min_value_node(node.right)
                node.value = temp.value
                node.right = _delete(node.right, temp.value)
            
            return node
        
        self.root = _delete(self.root, value)`,
  },

  "Heap Implementation": {
    title: "Binary Heap Implementation",
    description:
      "Implementation of a complete binary tree that satisfies the heap property (min-heap or max-heap), commonly used for priority queues.",
    timeComplexity: "Insert/Delete: O(log n), Get Min/Max: O(1)",
    spaceComplexity: "O(n) for n elements",
    pseudocode: [
      "Heap operations:",
      "1. insert(value):",
      "   - Add to end",
      "   - Bubble up until heap property satisfied",
      "2. extractMin/Max():",
      "   - Remove root",
      "   - Replace with last element",
      "   - Bubble down until heap property satisfied",
      "3. peek():",
      "   - Return root value",
      "4. heapify(array):",
      "   - Convert array to heap",
    ],
    example: `heap = MinHeap()
heap.insert(5)
heap.insert(3)
heap.insert(7)
heap.insert(1)

     1
   /   \\
  3     7
 /
5`,
    implementation: `class MinHeap:
    def __init__(self):
        self.heap = []
    
    def parent(self, i):
        return (i - 1) // 2
    
    def leftChild(self, i):
        return 2 * i + 1
    
    def rightChild(self, i):
        return 2 * i + 2
    
    def swap(self, i, j):
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]
    
    def insert(self, key):
        self.heap.append(key)
        self._bubbleUp(len(self.heap) - 1)
    
    def _bubbleUp(self, i):
        parent = self.parent(i)
        if i > 0 and self.heap[i] < self.heap[parent]:
            self.swap(i, parent)
            self._bubbleUp(parent)
    
    def extractMin(self):
        if not self.heap:
            return None
        
        min_val = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        
        if self.heap:
            self._bubbleDown(0)
        
        return min_val
    
    def _bubbleDown(self, i):
        min_idx = i
        left = self.leftChild(i)
        right = self.rightChild(i)
        
        if left < len(self.heap) and self.heap[left] < self.heap[min_idx]:
            min_idx = left
        
        if right < len(self.heap) and self.heap[right] < self.heap[min_idx]:
            min_idx = right
        
        if min_idx != i:
            self.swap(i, min_idx)
            self._bubbleDown(min_idx)
    
    def peek(self):
        return self.heap[0] if self.heap else None`,
  },

  Trie: {
    title: "Trie Implementation",
    description:
      "Implementation of a tree-like data structure for storing and retrieving strings, commonly used for prefix-based operations and autocomplete.",
    timeComplexity: "Insert/Search: O(m) where m is key length",
    spaceComplexity: "O(ALPHABET_SIZE * m * n) for n keys of length m",
    pseudocode: [
      "Trie operations:",
      "1. insert(word):",
      "   - Add characters as nodes",
      "   - Mark last node as end of word",
      "2. search(word):",
      "   - Follow character path",
      "   - Check if end of word",
      "3. startsWith(prefix):",
      "   - Follow character path",
      "   - Return true if path exists",
      "4. delete(word):",
      "   - Remove word marking",
      "   - Remove unused nodes",
    ],
    example: `trie = Trie()
trie.insert("cat")
trie.insert("car")
trie.insert("cart")

Structure:
     root
      |
      c
      |
      a
    /   \\
   r     t*
   |
   t*

search("cat")     # True
startsWith("ca")  # True
search("cap")     # False`,
    implementation: `class TrieNode:
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
    
    def startsWith(self, prefix):
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True
    
    def delete(self, word):
        def _delete(node, word, depth):
            if depth == len(word):
                if node.is_end:
                    node.is_end = False
                return len(node.children) == 0
            
            char = word[depth]
            if char not in node.children:
                return False
            
            should_delete = _delete(node.children[char], word, depth + 1)
            
            if should_delete:
                del node.children[char]
                return len(node.children) == 0
            
            return False
        
        _delete(self.root, word, 0)`,
  },

  "Monotonic Stack": {
    title: "Monotonic Stack Pattern",
    description:
      "A stack that maintains its elements in a strictly increasing or decreasing order, useful for finding the next/previous greater/smaller element.",
    timeComplexity: "O(n) amortized for n elements",
    spaceComplexity: "O(n) for stack",
    pseudocode: [
      "Monotonic Stack operations:",
      "1. For each element:",
      "   a. While stack not empty and current element breaks monotonicity:",
      "      - Pop elements",
      "      - Process popped elements",
      "   b. Push current element",
      "2. Process remaining elements in stack",
    ],
    example: `Find next greater element:
Array: [4, 5, 2, 10, 8]

Steps:
4: stack=[4]
5: pop 4, stack=[5]
2: stack=[5,2]
10: pop 2,5, stack=[10]
8: stack=[10,8]

Result: [5, 10, 10, -1, -1]`,
    implementation: `def next_greater_element(arr):
    n = len(arr)
    result = [-1] * n
    stack = []
    
    for i in range(n):
        while stack and arr[i] > arr[stack[-1]]:
            idx = stack.pop()
            result[idx] = arr[i]
        stack.append(i)
    
    return result

def previous_smaller_element(arr):
    n = len(arr)
    result = [-1] * n
    stack = []
    
    for i in range(n):
        while stack and arr[i] < arr[stack[-1]]:
            stack.pop()
        if stack:
            result[i] = arr[stack[-1]]
        stack.append(i)
    
    return result`,
  },

  "Monotonic Queue": {
    title: "Monotonic Queue Pattern",
    description:
      "A queue that maintains its elements in a strictly increasing or decreasing order, commonly used for sliding window maximum/minimum problems.",
    timeComplexity: "O(n) for n elements",
    spaceComplexity: "O(k) where k is window size",
    pseudocode: [
      "Monotonic Queue operations:",
      "1. For each element:",
      "   a. Remove elements outside window",
      "   b. While queue not empty and current element breaks monotonicity:",
      "      - Remove from back",
      "   c. Add current element",
      "   d. Front of queue is max/min in window",
    ],
    example: `Find maximum in sliding window of size 3:
Array: [1, 3, -1, -3, 5, 3, 6, 7]

Window positions:
[1, 3, -1] -> max=3
[3, -1, -3] -> max=3
[-1, -3, 5] -> max=5
[-3, 5, 3] -> max=5
[5, 3, 6] -> max=6
[3, 6, 7] -> max=7

Result: [3, 3, 5, 5, 6, 7]`,
    implementation: `from collections import deque

def sliding_window_maximum(arr, k):
    result = []
    window = deque()  # stores indices
    
    for i in range(len(arr)):
        # Remove elements outside window
        while window and window[0] <= i - k:
            window.popleft()
        
        # Remove smaller elements
        while window and arr[i] >= arr[window[-1]]:
            window.pop()
        
        window.append(i)
        
        # Add to result if window is complete
        if i >= k - 1:
            result.append(arr[window[0]])
    
    return result

def sliding_window_minimum(arr, k):
    result = []
    window = deque()  # stores indices
    
    for i in range(len(arr)):
        # Remove elements outside window
        while window and window[0] <= i - k:
            window.popleft()
        
        # Remove larger elements
        while window and arr[i] <= arr[window[-1]]:
            window.pop()
        
        window.append(i)
        
        # Add to result if window is complete
        if i >= k - 1:
            result.append(arr[window[0]])
    
    return result`,
  },

  "Two Pointers": {
    title: "Two Pointers Pattern",
    description:
      "A technique that uses two pointers to solve array-related problems efficiently, often moving them towards each other or in the same direction.",
    timeComplexity: "Usually O(n)",
    spaceComplexity: "Usually O(1)",
    pseudocode: [
      "Two Pointers patterns:",
      "1. Opposite direction:",
      "   - left = 0, right = n-1",
      "   - While left < right:",
      "     * Process elements",
      "     * Move pointers based on condition",
      "2. Same direction:",
      "   - slow = fast = 0",
      "   - While fast < n:",
      "     * Process elements",
      "     * Move pointers at different speeds",
    ],
    example: `Problem: Two Sum in sorted array
Array: [2, 7, 11, 15], target = 9

left = 0, right = 3
Step 1: 2 + 15 = 17 > 9
right--
Step 2: 2 + 11 = 13 > 9
right--
Step 3: 2 + 7 = 9 == target
Found pair: [0, 1]`,
    implementation: `def two_pointers_opposite(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        curr_sum = arr[left] + arr[right]
        if curr_sum == target:
            return [left, right]
        elif curr_sum < target:
            left += 1
        else:
            right -= 1
    
    return []

def two_pointers_same_direction(arr):
    # Example: Remove duplicates
    if not arr:
        return 0
    
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    
    return slow + 1`,
  },

  "Prefix Sum": {
    title: "Prefix Sum Pattern",
    description:
      "A technique that precomputes cumulative sums of array elements to efficiently answer range sum queries.",
    timeComplexity: "Build: O(n), Query: O(1)",
    spaceComplexity: "O(n) for prefix array",
    pseudocode: [
      "Prefix Sum operations:",
      "1. Build prefix array:",
      "   - prefix[0] = arr[0]",
      "   - For i from 1 to n-1:",
      "     * prefix[i] = prefix[i-1] + arr[i]",
      "2. Range sum query(left, right):",
      "   - If left == 0:",
      "     * Return prefix[right]",
      "   - Else:",
      "     * Return prefix[right] - prefix[left-1]",
    ],
    example: `Array: [1, 2, 3, 4, 5]
Prefix: [1, 3, 6, 10, 15]

Query sum(1, 3):
prefix[3] - prefix[0] = 10 - 1 = 9
(sum of elements at indices 1,2,3)

Query sum(2, 4):
prefix[4] - prefix[1] = 15 - 3 = 12
(sum of elements at indices 2,3,4)`,
    implementation: `class PrefixSum:
    def __init__(self, arr):
        self.prefix = [0] * len(arr)
        self.build_prefix(arr)
    
    def build_prefix(self, arr):
        self.prefix[0] = arr[0]
        for i in range(1, len(arr)):
            self.prefix[i] = self.prefix[i-1] + arr[i]
    
    def range_sum(self, left, right):
        if left == 0:
            return self.prefix[right]
        return self.prefix[right] - self.prefix[left-1]
    
    def range_average(self, left, right):
        sum_range = self.range_sum(left, right)
        return sum_range / (right - left + 1)`,
  },

  "Kadane's Algorithm": {
    title: "Kadane's Algorithm Pattern",
    description:
      "A dynamic programming algorithm for finding the maximum subarray sum in a one-dimensional array.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "Kadane's Algorithm steps:",
      "1. Initialize:",
      "   - current_sum = max_sum = arr[0]",
      "2. For each element from index 1:",
      "   a. current_sum = max(element, current_sum + element)",
      "   b. max_sum = max(max_sum, current_sum)",
      "3. Return max_sum",
    ],
    example: `Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Steps:
-2: curr=-2, max=-2
1:  curr=1,  max=1
-3: curr=-2, max=1
4:  curr=4,  max=4
-1: curr=3,  max=4
2:  curr=5,  max=5
1:  curr=6,  max=6
-5: curr=1,  max=6
4:  curr=5,  max=6

Maximum subarray sum: 6
Subarray: [4, -1, 2, 1]`,
    implementation: `def kadanes_algorithm(arr):
    if not arr:
        return 0
    
    current_sum = max_sum = arr[0]
    start = end = temp_start = 0
    
    for i in range(1, len(arr)):
        if arr[i] > current_sum + arr[i]:
            current_sum = arr[i]
            temp_start = i
        else:
            current_sum = current_sum + arr[i]
        
        if current_sum > max_sum:
            max_sum = current_sum
            start = temp_start
            end = i
    
    return max_sum, arr[start:end+1]

def kadanes_algorithm_simple(arr):
    if not arr:
        return 0
    
    current_sum = max_sum = arr[0]
    
    for num in arr[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    
    return max_sum`,
  },

  "Floyd Cycle Detection": {
    title: "Floyd's Cycle Detection Algorithm",
    description:
      "Also known as the 'tortoise and hare' algorithm, used to detect cycles in a linked list or array, and find the start of the cycle.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "Floyd's Algorithm steps:",
      "1. Initialize slow and fast pointers to head",
      "2. Move slow one step, fast two steps",
      "3. If they meet, cycle exists",
      "4. To find cycle start:",
      "   a. Reset slow to head",
      "   b. Move both one step until they meet",
      "   c. Meeting point is cycle start",
    ],
    example: `Linked List: 1->2->3->4->5->3
(5 points back to 3)

Detection:
Step 1: s=1, f=1
Step 2: s=2, f=3
Step 3: s=3, f=5
Step 4: s=4, f=3
Step 5: s=5, f=5 (meet)

Find start:
Step 1: s=1, f=5
Step 2: s=2, f=3
Step 3: s=3, f=3 (cycle start)`,
    implementation: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def detect_cycle(head):
    if not head or not head.next:
        return None
    
    # Phase 1: Detect cycle
    slow = fast = head
    has_cycle = False
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    
    if not has_cycle:
        return None
    
    # Phase 2: Find cycle start
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    
    return slow

def find_cycle_length(head):
    if not head or not head.next:
        return 0
    
    slow = fast = head
    has_cycle = False
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    
    if not has_cycle:
        return 0
    
    # Count cycle length
    length = 1
    fast = fast.next
    while fast != slow:
        length += 1
        fast = fast.next
    
    return length`,
  },

  "Rabin-Karp": {
    title: "Rabin-Karp String Matching Algorithm",
    description:
      "A string matching algorithm that uses hashing to find exact string matches or multiple pattern matches efficiently.",
    timeComplexity: "Average: O(n+m), Worst: O(nm)",
    spaceComplexity: "O(1)",
    pseudocode: [
      "Rabin-Karp steps:",
      "1. Calculate hash of pattern",
      "2. For each m-length substring of text:",
      "   a. Calculate rolling hash",
      "   b. If hash matches pattern hash:",
      "      * Check character by character",
      "   c. Update rolling hash for next window",
    ],
    example: `Text: "AABAACAADAABAAABAA"
Pattern: "AABA"

Hash function: sum(char * prime^pos)
Pattern hash: 1*3^0 + 1*3^1 + 2*3^2 + 1*3^3 = 40

Window 1: "AABA" (hash=40) - Match at pos 0
Window 2: "ABAA" (hash≠40)
Window 3: "BAAC" (hash≠40)
...
Window 13: "AABA" (hash=40) - Match at pos 12`,
    implementation: `def rabin_karp(text, pattern):
    if not pattern or not text:
        return []
    
    # Constants for hash calculation
    d = 256  # number of characters in alphabet
    q = 101  # prime number for hash modulo
    
    m = len(pattern)
    n = len(text)
    if m > n:
        return []
    
    # Calculate pattern hash
    pattern_hash = 0
    window_hash = 0
    h = pow(d, m-1) % q
    
    for i in range(m):
        pattern_hash = (d * pattern_hash + ord(pattern[i])) % q
        window_hash = (d * window_hash + ord(text[i])) % q
    
    matches = []
    
    # Slide window and check hashes
    for i in range(n - m + 1):
        if pattern_hash == window_hash:
            # Verify character by character
            if text[i:i+m] == pattern:
                matches.append(i)
        
        # Calculate hash for next window
        if i < n - m:
            window_hash = (d * (window_hash - ord(text[i]) * h) + 
                         ord(text[i + m])) % q
            if window_hash < 0:
                window_hash += q
    
    return matches`,
  },

  "Knuth-Morris-Pratt": {
    title: "Knuth-Morris-Pratt (KMP) Algorithm",
    description:
      "An efficient string matching algorithm that preprocesses the pattern to avoid unnecessary comparisons by utilizing a prefix function.",
    timeComplexity: "O(n + m)",
    spaceComplexity: "O(m) for pattern array",
    pseudocode: [
      "KMP steps:",
      "1. Build LPS (Longest Proper Prefix Suffix) array:",
      "   - lps[0] = 0",
      "   - Use two pointers to find matching prefixes",
      "2. Search pattern:",
      "   - Use pattern and lps array to skip comparisons",
      "   - When mismatch occurs, use lps to determine next position",
    ],
    example: `Pattern: "ABABCABAB"
LPS Array: [0,0,1,2,0,1,2,3,4]

Text: "ABABDABABCABAB"
Pattern matches at index 6

Building LPS:
A -> [0]
AB -> [0,0]
ABA -> [0,0,1]
ABAB -> [0,0,1,2]
...`,
    implementation: `def compute_lps(pattern):
    m = len(pattern)
    lps = [0] * m
    length = 0  # length of previous longest prefix suffix
    
    # lps[0] is always 0
    i = 1
    while i < m:
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                # Use lps of previous character
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1
    return lps

def kmp_search(text, pattern):
    n = len(text)
    m = len(pattern)
    matches = []
    
    if m == 0:
        return matches
    
    # Compute LPS array
    lps = compute_lps(pattern)
    
    i = 0  # index for text
    j = 0  # index for pattern
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == m:
            matches.append(i - j)
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches`,
  },

  "Manacher's Algorithm": {
    title: "Manacher's Algorithm",
    description:
      "An efficient algorithm to find all palindromic substrings in a string in linear time.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    pseudocode: [
      "Manacher's steps:",
      "1. Transform string by adding boundaries:",
      "   - Insert special char between each char",
      "   - Add special chars at start and end",
      "2. For each center position i:",
      "   a. Use previously computed values if possible",
      "   b. Expand around center while matches found",
      "   c. Update right boundary and center",
      "3. Extract palindrome lengths from array",
    ],
    example: `String: "ababa"
Transform: "#a#b#a#b#a#"
Centers:   0123456789
P array:   [0,1,0,3,0,5,0,3,0,1,0]

Palindromes found:
- a (length 1)
- aba (length 3)
- ababa (length 5)`,
    implementation: `def manacher(s):
    # Transform string
    t = '#' + '#'.join(s) + '#'
    n = len(t)
    p = [0] * n  # palindrome radii
    
    center = right = 0
    
    for i in range(n):
        if i < right:
            # Use previously computed values
            mirror = 2 * center - i
            p[i] = min(right - i, p[mirror])
        
        # Expand around center i
        a = i + (p[i] + 1)
        b = i - (p[i] + 1)
        while a < n and b >= 0 and t[a] == t[b]:
            p[i] += 1
            a += 1
            b -= 1
        
        # Update center and right boundary
        if i + p[i] > right:
            center = i
            right = i + p[i]
    
    return p

def find_palindromes(s):
    p = manacher(s)
    palindromes = []
    
    for i in range(len(p)):
        # Convert transformed index to original
        center = (i - 1) // 2
        radius = p[i] // 2
        
        if p[i] > 0:
            # Even length palindromes
            if i % 2 == 0:
                start = center - radius + 1
                end = center + radius
                palindromes.append(s[start:end])
            # Odd length palindromes
            else:
                start = center - radius
                end = center + radius + 1
                palindromes.append(s[start:end])
    
    return palindromes`,
  },

  "Z-Algorithm": {
    title: "Z-Algorithm",
    description:
      "A linear time pattern matching algorithm that utilizes the Z array (which stores the length of the longest substring starting from the current position that is also a prefix of the string).",
    timeComplexity: "O(n + m)",
    spaceComplexity: "O(n + m)",
    pseudocode: [
      "Z-Algorithm steps:",
      "1. Concatenate pattern + special_char + text",
      "2. Build Z array:",
      "   - If inside Z-box, use previous values",
      "   - Otherwise, compare characters",
      "   - Maintain Z-box [left, right]",
      "3. Find pattern matches where Z[i] = pattern_length",
    ],
    example: `Pattern: "aab"
Text: "baabaa"
Concatenated: "aab$baabaa"

Z array: [0,1,0,0,0,3,1,0,2,1]
Matches found at index 3 (Z[5] = 3)`,
    implementation: `def calculate_z_array(s):
    n = len(s)
    z = [0] * n
    
    # [left,right] make a window which matches 
    # with prefix of s
    left = right = 0
    
    for i in range(1, n):
        if i > right:
            # If outside Z-box, compute traditionally
            left = right = i
            while right < n and s[right] == s[right-left]:
                right += 1
            z[i] = right - left
            right -= 1
        else:
            # If inside Z-box
            k = i - left
            
            # If value does not stretch till right boundary
            if z[k] < right - i + 1:
                z[i] = z[k]
            else:
                # Try to find more matches
                left = i
                while right < n and s[right] == s[right-left]:
                    right += 1
                z[i] = right - left
                right -= 1
    
    return z

def z_algorithm(text, pattern):
    # Concatenate pattern and text with a special character
    concat = pattern + "$" + text
    n = len(concat)
    
    # Calculate Z array
    z = calculate_z_array(concat)
    
    # Find matches
    matches = []
    pattern_length = len(pattern)
    
    for i in range(pattern_length + 1, n):
        if z[i] == pattern_length:
            matches.append(i - pattern_length - 1)
    
    return matches`,
  },

  "Matrix Traversal": {
    title: "Matrix Traversal",
    description:
      "A pattern for traversing a 2D matrix iteratively, typically using nested loops to visit each element in a specific order (row-wise or column-wise).",
    timeComplexity: "O(m*n) where m is rows and n is columns",
    spaceComplexity: "O(1) for traversal, O(m*n) if storing results",
    pseudocode: [
      "Matrix Traversal steps:",
      "1. For each row i from 0 to rows-1:",
      "   For each column j from 0 to cols-1:",
      "     Process matrix[i][j]",
      "",
      "Common variations:",
      "- Row-wise: outer loop on rows",
      "- Column-wise: outer loop on columns",
      "- Different directions: top-down, bottom-up",
      "- Different starting points",
    ],
    example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Row-wise traversal: 1,2,3,4,5,6,7,8,9
Column-wise traversal: 1,4,7,2,5,8,3,6,9`,
    implementation: `def matrix_traversal(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    # Row-wise traversal
    for i in range(rows):
        for j in range(cols):
            result.append(matrix[i][j])
    
    return result

def matrix_traversal_columnwise(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    # Column-wise traversal
    for j in range(cols):
        for i in range(rows):
            result.append(matrix[i][j])
    
    return result`,
  },

  "Matrix Traversal Recursive": {
    title: "Matrix Traversal Recursive",
    description:
      "A recursive approach to traverse a 2D matrix, which can be particularly useful for problems requiring backtracking or complex traversal patterns.",
    timeComplexity: "O(m*n) where m is rows and n is columns",
    spaceComplexity: "O(m*n) due to recursive call stack",
    pseudocode: [
      "Matrix Recursive Traversal steps:",
      "1. Base case: Check bounds and conditions",
      "2. Process current cell",
      "3. Recursive calls for next positions:",
      "   - Call for next row",
      "   - Call for next column",
      "4. Backtrack if needed",
    ],
    example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Recursive traversal (row-first):
traverse(0,0) -> 1
  traverse(1,0) -> 4
    traverse(2,0) -> 7
      traverse(0,1) -> 2
        ...`,
    implementation: `def matrix_traversal_recursive(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    def traverse(row, col):
        # Base case: out of bounds
        if row >= rows or col >= cols:
            return
        
        # Process current cell
        result.append(matrix[row][col])
        
        # Recursive calls
        if col + 1 < cols:
            # Move right in current row
            traverse(row, col + 1)
        elif row + 1 < rows:
            # Move to start of next row
            traverse(row + 1, 0)
    
    traverse(0, 0)
    return result`,
  },

  "Matrix Spiral Traversal": {
    title: "Matrix Spiral Traversal",
    description:
      "An iterative pattern to traverse a matrix in a spiral order, moving in a clockwise direction from the outer elements to the inner elements.",
    timeComplexity: "O(m*n) where m is rows and n is columns",
    spaceComplexity: "O(1) excluding the result array",
    pseudocode: [
      "Spiral Traversal steps:",
      "1. Initialize boundaries: top, bottom, left, right",
      "2. While boundaries haven't crossed:",
      "   a. Traverse right (top row)",
      "   b. Traverse down (right column)",
      "   c. Traverse left (bottom row)",
      "   d. Traverse up (left column)",
      "   e. Update boundaries inward",
    ],
    example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Spiral order: 1,2,3,6,9,8,7,4,5

Steps:
1. Top row: 1,2,3
2. Right col: 6,9
3. Bottom row: 8,7
4. Left col: 4
5. Inner element: 5`,
    implementation: `def spiral_traversal(matrix):
    if not matrix or not matrix[0]:
        return []
    
    rows = len(matrix)
    cols = len(matrix[0])
    result = []
    
    top = 0
    bottom = rows - 1
    left = 0
    right = cols - 1
    
    while top <= bottom and left <= right:
        # Traverse right
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        
        # Traverse down
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        if top <= bottom:
            # Traverse left
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        
        if left <= right:
            # Traverse up
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result`,
  },

  "Matrix Spiral Recursive": {
    title: "Matrix Spiral Recursive",
    description:
      "A recursive approach to traverse a matrix in spiral order, which breaks down the spiral traversal into smaller subproblems.",
    timeComplexity: "O(m*n) where m is rows and n is columns",
    spaceComplexity: "O(min(m,n)) due to recursive call stack",
    pseudocode: [
      "Recursive Spiral steps:",
      "1. Base cases:",
      "- Empty matrix",
      "- Single row/column",
      "2. Process outer layer:",
      "   - Traverse top row",
      "   - Traverse right column",
      "   - Traverse bottom row",
      "   - Traverse left column",
      "3. Recursively process inner matrix",
    ],
    example: `Matrix:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Recursive calls:
1. Outer layer: 1,2,3,6,9,8,7,4
2. Inner matrix: [5]`,
    implementation: `def spiral_recursive(matrix):
    if not matrix or not matrix[0]:
        return []
    
    def spiral_helper(top, bottom, left, right):
        if top > bottom or left > right:
            return []
        
        result = []
        
        # Single row
        if top == bottom:
            return [matrix[top][j] for j in range(left, right + 1)]
        
        # Single column
        if left == right:
            return [matrix[i][left] for i in range(top, bottom + 1)]
        
        # Process outer layer
        # Top row
        result.extend(matrix[top][j] for j in range(left, right + 1))
        
        # Right column
        result.extend(matrix[i][right] for i in range(top + 1, bottom))
        
        # Bottom row
        result.extend(matrix[bottom][j] for j in range(right, left - 1, -1))
        
        # Left column
        result.extend(matrix[i][left] for i in range(bottom - 1, top, -1))
        
        # Recursively process inner matrix
        result.extend(spiral_helper(top + 1, bottom - 1, 
                                 left + 1, right - 1))
        
        return result
    
    return spiral_helper(0, len(matrix) - 1, 
                        0, len(matrix[0]) - 1)`,
  },
};

// Export the patterns in the original format for backward compatibility
export const patterns = new Map<PatternKey, string>(
  Object.entries(algorithmPatterns).map(([key, pattern]) => [
    key as PatternKey,
    `def ${key.toLowerCase().replace(/\s+/g, "_")}(arr):
    """
    ${pattern.description}
    Time Complexity: ${pattern.timeComplexity}
    Space Complexity: ${pattern.spaceComplexity}
    
    Pseudocode:
    ${pattern.pseudocode.join("\n")}
    
    Example:
    ${pattern.example}
    """
    ${pattern.implementation}`,
  ])
);
