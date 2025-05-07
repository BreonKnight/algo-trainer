import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const quickselectPattern: AlgorithmPattern = {
  title: "Quickselect",
  description: "Efficient algorithm to find the k-th smallest element in an unsorted array",
  timeComplexity: "O(n) average, O(n²) worst case",
  spaceComplexity: "O(1)",
  pseudocode: `1. Choose a pivot element (randomly to avoid worst case)
2. Partition the array around the pivot
3. If pivot is the k-th element:
   - Return pivot
4. If k < pivot index:
   - Recursively search left partition
5. If k > pivot index:
   - Recursively search right partition`,
  example: `arr = [3, 2, 1, 5, 4]
k = 2 (find 2nd smallest element)

Step 1: Choose pivot = 3
Partition: [2, 1, 3, 5, 4]
Pivot index = 2
k = 2 < pivot index, search left

Step 2: Choose pivot = 2
Partition: [1, 2, 3, 5, 4]
Pivot index = 1
k = 2 > pivot index, search right

Step 3: Choose pivot = 3
Partition: [1, 2, 3, 5, 4]
Pivot index = 2
Found! Return 3`,
  implementation: `def quickselect(arr, k):
    def partition(left, right, pivot_idx):
        pivot_val = arr[pivot_idx]
        # Move pivot to end
        arr[pivot_idx], arr[right] = arr[right], arr[pivot_idx]
        
        # Partition around pivot
        store_idx = left
        for i in range(left, right):
            if arr[i] < pivot_val:
                arr[store_idx], arr[i] = arr[i], arr[store_idx]
                store_idx += 1
        
        # Move pivot to final position
        arr[right], arr[store_idx] = arr[store_idx], arr[right]
        return store_idx
    
    def select(left, right, k_smallest):
        if left == right:
            return arr[left]
        
        # Choose random pivot
        pivot_idx = random.randint(left, right)
        
        # Partition and get pivot position
        pivot_idx = partition(left, right, pivot_idx)
        
        # Found the k-th smallest
        if k_smallest == pivot_idx:
            return arr[k_smallest]
        # Search in left partition
        elif k_smallest < pivot_idx:
            return select(left, pivot_idx - 1, k_smallest)
        # Search in right partition
        else:
            return select(pivot_idx + 1, right, k_smallest)
    
    return select(0, len(arr) - 1, k - 1)`,
  category: "Searching",
};
