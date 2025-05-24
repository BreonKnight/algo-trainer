import { BasePattern, PatternCategory } from "@/lib/patterns/types";

export const radixSortPattern: BasePattern = {
  title: "Radix Sort",
  description:
    "A non-comparative sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value.",
  timeComplexity:
    "O(d * (n + k)) where d is the number of digits, n is the number of elements, and k is the range of input",
  spaceComplexity: "O(n + k)",
  category: "Sorting" as PatternCategory,
  difficulty: "Medium",
  pseudocode: `
1. Find the maximum number to know number of digits
2. Do following for each digit i where i varies from least significant digit to the most significant digit:
   a. Sort input array using counting sort (or any stable sort) according to the i'th digit
  `,
  example: `Input: [170, 45, 75, 90, 802, 24, 2, 66]
Step 1: Sort by least significant digit (1's place)
[170, 90, 802, 2, 24, 45, 75, 66]

Step 2: Sort by next digit (10's place)
[802, 2, 24, 45, 66, 170, 75, 90]

Step 3: Sort by most significant digit (100's place)
[2, 24, 45, 66, 75, 90, 170, 802]`,
  implementation: `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    # Store count of occurrences in count[]
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1
    
    # Change count[i] so that count[i] now contains actual
    # position of this digit in output[]
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # Build the output array
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
    
    # Copy the output array to arr[]
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
    
    return arr

# Example usage
arr = [170, 45, 75, 90, 802, 24, 2, 66]
sorted_arr = radix_sort(arr)
print(sorted_arr)  # [2, 24, 45, 66, 75, 90, 170, 802]`,
  keySteps: [
    "Find the maximum number to determine the number of digits",
    "Perform counting sort for each digit position",
    "Start from least significant digit and move to most significant",
    "Use counting sort as a stable sort for each digit position",
  ],
};
