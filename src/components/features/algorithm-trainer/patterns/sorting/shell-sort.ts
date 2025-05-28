import { AlgorithmPattern } from "@algo-trainer/shared/types/algorithm-types";

export const shellSortPattern: AlgorithmPattern = {
  title: "Shell Sort Algorithm",
  description:
    "An optimization of insertion sort that allows the exchange of items that are far apart. The idea is to arrange the list of elements so that, starting from any position, taking every hth element produces a sorted list. Such a list is said to be h-sorted. The algorithm starts with a large gap and reduces it until it becomes 1, at which point it becomes a regular insertion sort.",
  timeComplexity: "O(n log² n) average case, O(n²) worst case",
  spaceComplexity: "O(1)",
  pseudocode: `1. Start with a gap sequence (e.g., n/2, n/4, n/8, ..., 1)
2. For each gap:
   a. Perform insertion sort on elements at positions i, i+gap, i+2*gap, ...
   b. Reduce the gap and repeat
3. When gap becomes 1, perform final insertion sort`,
  example: `arr = [12, 34, 54, 2, 3]
n = 5

Step 1: gap = 5/2 = 2
Compare and swap elements at positions i and i+2
[12, 34, 54, 2, 3] -> [12, 2, 54, 34, 3]

Step 2: gap = 2/2 = 1
Perform insertion sort
[12, 2, 54, 34, 3] -> [2, 3, 12, 34, 54]

Final result: [2, 3, 12, 34, 54]`,
  implementation: `def shell_sort(arr):
    n = len(arr)
    
    # Start with a big gap, then reduce the gap
    gap = n // 2
    
    # Do a gapped insertion sort for this gap size
    while gap > 0:
        # Do insertion sort for elements at positions i, i+gap, i+2*gap, ...
        for i in range(gap, n):
            # Save current element
            temp = arr[i]
            
            # Shift earlier gap-sorted elements up until the correct
            # location for arr[i] is found
            j = i
            while j >= gap and arr[j - gap] > temp:
                arr[j] = arr[j - gap]
                j -= gap
            
            # Put temp (the original arr[i]) in its correct location
            arr[j] = temp
        
        # Reduce the gap
        gap //= 2
    
    return arr`,
  category: "Sorting",
  keyPoints: [
    "Optimization of insertion sort",
    "In-place sorting algorithm",
    "Not stable (may change relative order of equal elements)",
    "Performance depends on gap sequence",
  ],
  commonUseCases: [
    "Medium-sized arrays",
    "When memory is limited",
    "When stability is not required",
    "Embedded systems",
  ],
  relatedPatterns: ["Insertion Sort", "Comb Sort", "Bubble Sort"],
  tips: [
    "Choose an efficient gap sequence",
    "Good for medium-sized arrays",
    "Consider using different gap sequences for different data distributions",
    "Can be faster than insertion sort for partially sorted arrays",
  ],
};
