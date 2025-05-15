import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const fibonacciSearchPattern: AlgorithmPattern = {
  title: "Fibonacci Search",
  description:
    "A divide and conquer algorithm that uses Fibonacci numbers to search a sorted array. It divides the array into unequal parts using Fibonacci numbers and performs comparisons to find the target element.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(1)",
  category: "Searching",
  pseudocode: `
1. Initialize Fibonacci numbers fibMMinus2 = 0, fibMMinus1 = 1, fibM = fibMMinus2 + fibMMinus1
2. While fibM < n:
   a. Update Fibonacci numbers: fibMMinus2 = fibMMinus1, fibMMinus1 = fibM, fibM = fibMMinus2 + fibMMinus1
3. Initialize offset = -1
4. While fibM > 1:
   a. Calculate i = min(offset + fibMMinus2, n-1)
   b. If arr[i] < target:
      - Update offset = i
      - Update fibM = fibMMinus1
      - Update fibMMinus1 = fibMMinus2
      - Update fibMMinus2 = fibM - fibMMinus1
   c. Else if arr[i] > target:
      - Update fibM = fibMMinus2
      - Update fibMMinus1 = fibMMinus1 - fibMMinus2
      - Update fibMMinus2 = fibM - fibMMinus1
   d. Else:
      - Return i
5. If fibMMinus1 == 1 and arr[offset+1] == target:
   - Return offset+1
6. Return -1
  `,
  example: `Input: [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
Target: 85

Step 1: Initialize Fibonacci numbers
fibMMinus2 = 0, fibMMinus1 = 1, fibM = 1

Step 2: Find smallest Fibonacci number >= n
fibM = 13 (smallest >= 11)

Step 3: First comparison at i = min(-1 + 5, 10) = 4
arr[4] = 45 < 85
Update offset = 4, fibM = 8, fibMMinus1 = 5, fibMMinus2 = 3

Step 4: Next comparison at i = min(4 + 3, 10) = 7
arr[7] = 82 < 85
Update offset = 7, fibM = 5, fibMMinus1 = 3, fibMMinus2 = 2

Step 5: Next comparison at i = min(7 + 2, 10) = 9
arr[9] = 90 > 85
Update fibM = 2, fibMMinus1 = 1, fibMMinus2 = 1

Step 6: Next comparison at i = min(7 + 1, 10) = 8
arr[8] = 85 == target
Found at index 8`,
  implementation: `def fibonacci_search(arr, target):
    n = len(arr)
    
    # Initialize Fibonacci numbers
    fibMMinus2 = 0  # (m-2)'th Fibonacci number
    fibMMinus1 = 1  # (m-1)'th Fibonacci number
    fibM = fibMMinus2 + fibMMinus1  # m'th Fibonacci number
    
    # Find the smallest Fibonacci number >= n
    while fibM < n:
        fibMMinus2 = fibMMinus1
        fibMMinus1 = fibM
        fibM = fibMMinus2 + fibMMinus1
    
    # Marks the eliminated range from front
    offset = -1
    
    # While there are elements to be inspected
    while fibM > 1:
        # Check if fibMMinus2 is a valid location
        i = min(offset + fibMMinus2, n - 1)
        
        # If target is greater than the value at index i
        if arr[i] < target:
            fibM = fibMMinus1
            fibMMinus1 = fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
            offset = i
        
        # If target is less than the value at index i
        elif arr[i] > target:
            fibM = fibMMinus2
            fibMMinus1 = fibMMinus1 - fibMMinus2
            fibMMinus2 = fibM - fibMMinus1
        
        # Element found
        else:
            return i
    
    # Compare the last element with target
    if fibMMinus1 == 1 and arr[offset + 1] == target:
        return offset + 1
    
    # Element not found
    return -1

# Example usage
arr = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
target = 85
result = fibonacci_search(arr, target)
print(f"Element found at index: {result}")  # Output: 8`,
  keySteps: [
    "Initialize Fibonacci numbers",
    "Find the smallest Fibonacci number greater than or equal to the array length",
    "Use Fibonacci numbers to divide the array and perform comparisons",
    "Update Fibonacci numbers and offset based on comparison results",
    "Return the index if found, -1 otherwise",
  ],
  testData: [
    {
      input: {
        arr: [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100],
        target: 85,
      },
      expected: 8,
      description: "Element found in the middle of the array",
    },
    {
      input: {
        arr: [1, 2, 3, 4, 5],
        target: 1,
      },
      expected: 0,
      description: "Element found at the beginning of a small array",
    },
    {
      input: {
        arr: [1, 2, 3, 4, 5],
        target: 5,
      },
      expected: 4,
      description: "Element found at the end of a small array",
    },
    {
      input: {
        arr: [1, 2, 3, 4, 5],
        target: 6,
      },
      expected: -1,
      description: "Element not found in a small array",
    },
    {
      input: {
        arr: [1],
        target: 1,
      },
      expected: 0,
      description: "Element found in a single-element array",
    },
    {
      input: {
        arr: [1],
        target: 2,
      },
      expected: -1,
      description: "Element not found in a single-element array",
    },
    {
      input: {
        arr: [],
        target: 5,
      },
      expected: -1,
      description: "Empty array",
    },
    {
      input: {
        arr: [1, 1, 1, 1, 1],
        target: 1,
      },
      expected: 0,
      description: "Array with duplicate elements",
    },
    {
      input: {
        arr: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
        target: 15,
      },
      expected: 7,
      description: "Element found in a larger array",
    },
  ],
  explanation: `
Fibonacci Search is a divide and conquer algorithm that uses Fibonacci numbers to search a sorted array. It works by dividing the array into unequal parts using Fibonacci numbers, which are a sequence where each number is the sum of the two preceding ones.

The algorithm works as follows:
1. Find the smallest Fibonacci number greater than or equal to the array length
2. Use Fibonacci numbers to divide the array into unequal parts
3. Compare the target element with the element at the calculated index
4. Adjust the search range based on the comparison
5. Repeat until the element is found or the search range is exhausted

Time Complexity: O(log n)
- The algorithm divides the array into unequal parts using Fibonacci numbers
- Each iteration reduces the search range by approximately 1/φ (where φ is the golden ratio)
- This results in a logarithmic time complexity

Space Complexity: O(1)
- The algorithm uses a constant amount of additional space
- No recursion or additional data structures are used

Advantages:
- Works well for arrays that are too large to fit in cache
- Can be more efficient than binary search in some cases
- No division or multiplication operations are used

Limitations:
- Requires the array to be sorted
- More complex to implement than binary search
- Not as widely used as binary search

Use Cases:
- Searching in large sorted arrays
- When the array is too large to fit in cache
- When avoiding division operations is beneficial
  `,
};
