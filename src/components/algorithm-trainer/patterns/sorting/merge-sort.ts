import { AlgorithmPattern } from "../../types";

export const merge_sortPattern: AlgorithmPattern = {
  title: "Merge Sort Algorithm",
  description: "A divide-and-conquer algorithm that recursively divides the array into two halves, sorts them, and then merges the sorted halves.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. Base case: If array length <= 1, return array\n2. Divide:\n   - Calculate mid = len(arr) // 2\n   - Split array into left = arr[:mid] and right = arr[mid:]\n   - Recursively sort left and right halves\n3. Merge:\n   - Initialize result array and pointers i, j = 0\n   - While both halves have elements:\n     - Compare elements at current pointers\n     - Add smaller element to result\n     - Increment corresponding pointer\n   - Add remaining elements from non-empty half\n   - Return merged result`,
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
    return result`
};
