import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const quickSortPattern: AlgorithmPattern = {
  title: "Quick Sort Algorithm",
  description:
    "A highly efficient, comparison-based, divide and conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.",
  timeComplexity: "O(n log n) average case, O(n²) worst case",
  spaceComplexity: "O(log n)",
  pseudocode: `1. Choose a pivot element from the array
2. Partition the array around the pivot:
   - Elements smaller than pivot go to the left
   - Elements larger than pivot go to the right
3. Recursively sort the sub-arrays
4. Combine the results`,
  example: `arr = [3, 6, 8, 10, 1, 2, 1]

Step 1: Choose pivot (3)
[1, 2, 1] | 3 | [6, 8, 10]

Step 2: Recursively sort sub-arrays
[1, 1, 2] | 3 | [6, 8, 10]

Final result: [1, 1, 2, 3, 6, 8, 10]`,
  implementation: `def partition(arr, low, high):
    # Choose the rightmost element as pivot
    pivot = arr[high]
    
    # Index of smaller element
    i = low - 1
    
    for j in range(low, high):
        # If current element is smaller than or equal to pivot
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    # Place pivot at its correct position
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        # pi is partitioning index
        pi = partition(arr, low, high)
        
        # Sort elements before and after partition
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    
    return arr

# Wrapper function
def quick_sort_wrapper(arr):
    return quick_sort(arr, 0, len(arr) - 1)`,
  category: "Sorting",
  difficulty: "Medium",
  keyPoints: [
    "In-place sorting algorithm",
    "Not stable (may change relative order of equal elements)",
    "Efficient for large datasets",
    "Performance depends on pivot selection",
  ],
  commonUseCases: [
    "General-purpose sorting",
    "Large datasets",
    "In-memory sorting",
    "Real-time applications",
  ],
  relatedPatterns: ["Merge Sort", "Heap Sort", "Insertion Sort"],
  tips: [
    "Choose a good pivot strategy (e.g., median-of-three)",
    "Use insertion sort for small sub-arrays",
    "Consider using a random pivot to avoid worst-case scenarios",
    "Be careful with duplicate elements",
  ],
};
