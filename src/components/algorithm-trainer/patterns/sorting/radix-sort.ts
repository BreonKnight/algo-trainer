import { AlgorithmPattern } from "../../types";

export const radixSortPattern: AlgorithmPattern = {
  title: "Radix Sort",
  description:
    "A non-comparative sorting algorithm that sorts numbers by processing individual digits.",
  timeComplexity:
    "O(d * (n + k)) where d is the number of digits, n is the number of elements, and k is the range of digits",
  spaceComplexity: "O(n + k)",
  category: "Sorting",
  pseudocode: `COUNTING-SORT(A, exp)
1  n = A.length
2  output = [0] * n
3  count = [0] * 10
4  // Count frequency of each digit
5  for i = 1 to n
6      index = (A[i] / exp) mod 10
7      count[index] = count[index] + 1
8  // Calculate cumulative frequency
9  for i = 1 to 9
10     count[i] = count[i] + count[i-1]
11 // Build output array
12 for i = n downto 1
13     index = (A[i] / exp) mod 10
14     output[count[index]-1] = A[i]
15     count[index] = count[index] - 1
16 return output

RADIX-SORT(A)
1  if A.length == 0
2      return A
3  // Find maximum number to determine number of digits
4  max_num = max(A)
5  // Perform counting sort for every digit
6  exp = 1
7  while max_num / exp > 0
8      A = COUNTING-SORT(A, exp)
9      exp = exp * 10
10 return A`,
  example: `Input: [170, 45, 75, 90, 802, 24, 2, 66]
Step 1 (ones place):
[170, 90, 802, 2, 24, 45, 75, 66]

Step 2 (tens place):
[802, 2, 24, 45, 66, 170, 75, 90]

Step 3 (hundreds place):
[2, 24, 45, 66, 75, 90, 170, 802]`,
  implementation: `def counting_sort(arr: list[int], exp: int) -> list[int]:
    """
    Perform counting sort on the given array based on the specified digit.
    
    Args:
        arr: Array to sort
        exp: Current digit position (10^exp)
    
    Returns:
        Sorted array
    """
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    # Count frequency of each digit
    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1
    
    # Calculate cumulative frequency
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # Build output array
    i = n - 1
    while i >= 0:
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
        i -= 1
    
    return output

def radix_sort(arr: list[int]) -> list[int]:
    """
    Sort an array using radix sort.
    
    Args:
        arr: Array to sort
    
    Returns:
        Sorted array
    """
    if not arr:
        return arr
    
    # Find maximum number to determine number of digits
    max_num = max(arr)
    
    # Perform counting sort for every digit
    exp = 1
    while max_num // exp > 0:
        arr = counting_sort(arr, exp)
        exp *= 10
    
    return arr

# Example usage
arr = [170, 45, 75, 90, 802, 24, 2, 66]
print(f"Original array: {arr}")

sorted_arr = radix_sort(arr)
print(f"Sorted array: {sorted_arr}")`,
};
