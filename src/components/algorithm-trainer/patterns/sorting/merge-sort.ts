import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const mergeSortPattern: AlgorithmPattern = {
  title: "Merge Sort Algorithm",
  description:
    "A divide-and-conquer algorithm that recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. The solutions to the sub-problems are then combined to give a solution to the original problem.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Divide the array into two halves
2. Recursively sort the two halves
3. Merge the sorted halves:
   a. Compare elements from both halves
   b. Take the smaller element and move to the result array
   c. Move the pointer in the array from which the element was taken
   d. Repeat until all elements are merged`,
  example: `arr = [38, 27, 43, 3, 9, 82, 10]

Step 1: Divide
[38, 27, 43, 3] | [9, 82, 10]

Step 2: Recursively sort
[3, 27, 38, 43] | [9, 10, 82]

Step 3: Merge
[3, 9, 10, 27, 38, 43, 82]`,
  implementation: `def merge(arr, left, mid, right):
    # Create temporary arrays
    n1 = mid - left + 1
    n2 = right - mid
    L = [0] * n1
    R = [0] * n2
    
    # Copy data to temporary arrays
    for i in range(n1):
        L[i] = arr[left + i]
    for j in range(n2):
        R[j] = arr[mid + 1 + j]
    
    # Merge the temporary arrays back
    i = 0  # Initial index of first subarray
    j = 0  # Initial index of second subarray
    k = left  # Initial index of merged subarray
    
    while i < n1 and j < n2:
        if L[i] <= R[j]:
            arr[k] = L[i]
            i += 1
        else:
            arr[k] = R[j]
            j += 1
        k += 1
    
    # Copy remaining elements of L[] if any
    while i < n1:
        arr[k] = L[i]
        i += 1
        k += 1
    
    # Copy remaining elements of R[] if any
    while j < n2:
        arr[k] = R[j]
        j += 1
        k += 1

def merge_sort(arr, left, right):
    if left < right:
        # Same as (left + right) // 2, but avoids overflow
        mid = left + (right - left) // 2
        
        # Sort first and second halves
        merge_sort(arr, left, mid)
        merge_sort(arr, mid + 1, right)
        
        # Merge the sorted halves
        merge(arr, left, mid, right)
    
    return arr

# Wrapper function
def merge_sort_wrapper(arr):
    return merge_sort(arr, 0, len(arr) - 1)`,
  category: "Sorting",
  keyPoints: [
    "Stable sorting algorithm",
    "Guaranteed O(n log n) time complexity",
    "Requires extra space for merging",
    "Good for external sorting",
  ],
  commonUseCases: [
    "Sorting linked lists",
    "External sorting",
    "Parallel processing",
    "Database operations",
  ],
  relatedPatterns: ["Quick Sort", "Heap Sort", "Divide and Conquer"],
  tips: [
    "Use for stable sorting requirements",
    "Consider memory constraints due to O(n) space complexity",
    "Good choice for linked lists due to no random access requirement",
    "Can be parallelized for better performance",
  ],
};
