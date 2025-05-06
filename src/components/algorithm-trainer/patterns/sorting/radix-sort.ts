import { AlgorithmPattern } from "../../types/pattern-types";

export const radixSortPattern: AlgorithmPattern = {
  title: "Radix Sort Algorithm",
  description:
    "A non-comparative sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value.",
  timeComplexity:
    "O(d * (n + k)) where d is the number of digits, n is the number of elements, and k is the range of input",
  spaceComplexity: "O(n + k)",
  category: "Sorting",
  difficulty: "Medium",
  pseudocode: `1. Find the maximum number to know number of digits
2. Do following for each digit i where i varies from least significant digit to the most significant digit:
   a. Sort input array using counting sort (or any stable sort) according to the i'th digit
3. Return sorted array`,
  example: `arr = [170, 45, 75, 90, 802, 24, 2, 66]

Step 1: Sort by last digit
[170, 90, 802, 2, 24, 45, 75, 66]

Step 2: Sort by second digit
[802, 2, 24, 45, 66, 170, 75, 90]

Step 3: Sort by first digit
[2, 24, 45, 66, 75, 90, 170, 802]`,
  implementation: `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    # Store count of occurrences
    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1
    
    # Change count[i] so that count[i] contains actual position
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # Build the output array
    for i in range(n-1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
    
    # Copy the output array to arr
    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    # Find the maximum number to know number of digits
    max_num = max(arr)
    
    # Do counting sort for every digit
    exp = 1
    while max_num // exp > 0:
        counting_sort(arr, exp)
        exp *= 10
    
    return arr`,
  keySteps: [
    "Find the maximum number to determine the number of digits",
    "Implement counting sort for a specific digit position",
    "Apply counting sort for each digit position from least to most significant",
    "Return the sorted array",
  ],
  testData: [
    {
      input: [170, 45, 75, 90, 802, 24, 2, 66],
      expected: [2, 24, 45, 66, 75, 90, 170, 802],
      description: "Basic test with mixed numbers",
    },
    {
      input: [1000, 100, 10, 1],
      expected: [1, 10, 100, 1000],
      description: "Numbers with different digit lengths",
    },
    {
      input: [1, 1, 1, 1],
      expected: [1, 1, 1, 1],
      description: "All elements are the same",
    },
    {
      input: [999, 888, 777, 666],
      expected: [666, 777, 888, 999],
      description: "Numbers with same digit length",
    },
    {
      input: [],
      expected: [],
      description: "Empty array",
    },
  ],
  explanation: `
Radix Sort is a non-comparative sorting algorithm that processes numbers digit by digit. Here's how it works:

1. Digit Processing:
   - The algorithm processes numbers from the least significant digit (rightmost) to the most significant digit (leftmost)
   - Each digit position is sorted using a stable sorting algorithm (typically counting sort)

2. Counting Sort Subroutine:
   - For each digit position, counting sort is used to sort the numbers
   - Counting sort maintains the relative order of elements with the same digit value
   - This stability is crucial for maintaining the correct order across multiple passes

3. Time Complexity:
   - The algorithm's performance depends on the number of digits (d) in the largest number
   - Each digit position requires O(n + k) time, where k is the range of digits (usually 10)
   - Overall complexity is O(d * (n + k))

4. Space Complexity:
   - Requires O(n + k) additional space for the counting sort subroutine
   - The space is reused for each digit position

5. Advantages:
   - Works well for numbers with a fixed number of digits
   - Stable sorting algorithm
   - Can be faster than comparison-based sorts for large datasets
   - Works well with numbers in a limited range

6. Limitations:
   - Requires additional space for the counting sort
   - Performance depends on the number of digits
   - Not suitable for floating-point numbers without modification
   - Less efficient for numbers with varying digit lengths

The algorithm is particularly useful when:
- Sorting large numbers of integers
- The range of numbers is known and not too large
- Memory usage is not a primary concern
- Stability in sorting is required
  `,
  keyPoints: [
    "Uses counting sort as a subroutine",
    "Stable sorting algorithm",
    "Works well with numbers and strings",
    "Can be used for both LSD (Least Significant Digit) and MSD (Most Significant Digit) variants",
  ],
  commonUseCases: [
    "Sorting large numbers",
    "Sorting strings",
    "Sorting dates",
    "Sorting IP addresses",
  ],
  relatedPatterns: ["Counting Sort", "Bucket Sort", "Merge Sort"],
  tips: [
    "Choose the right base for your data (e.g., base 10 for decimal numbers)",
    "Consider using a larger base for better performance",
    "Be careful with negative numbers - handle them separately",
    "For strings, consider the length of the longest string",
  ],
};
