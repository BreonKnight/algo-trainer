import { AlgorithmPattern } from "../../types";

export const merge_sortPattern: AlgorithmPattern = {
  title: "Merge Sort Algorithm",
  description:
    "A divide-and-conquer algorithm that recursively breaks down a problem into smaller, more manageable subproblems until they become simple enough to solve directly.",
  timeComplexity: "O(n log n)",
  spaceComplexity: "O(n)",
  pseudocode: `1. If array has 1 or fewer elements, return it (base case)\n2. Find middle point\n3. Recursively sort left half\n4. Recursively sort right half\n5. Merge sorted halves\n6. Return merged result`,
  example: `arr = [38, 27, 43, 3, 9, 82, 10]

Step 1: Split [38, 27, 43, 3, 9, 82, 10]
  Left: [38, 27, 43, 3]
  Right: [9, 82, 10]

Step 2: Split left [38, 27, 43, 3]
  Left: [38, 27]
  Right: [43, 3]

Step 3: Split [38, 27]
  Left: [38]
  Right: [27]
  Merge: [27, 38]

Step 4: Split [43, 3]
  Left: [43]
  Right: [3]
  Merge: [3, 43]

Step 5: Merge [27, 38] and [3, 43]
  Result: [3, 27, 38, 43]

Step 6: Split right [9, 82, 10]
  Left: [9, 82]
  Right: [10]

Step 7: Split [9, 82]
  Left: [9]
  Right: [82]
  Merge: [9, 82]

Step 8: Merge [9, 82] and [10]
  Result: [9, 10, 82]

Step 9: Merge [3, 27, 38, 43] and [9, 10, 82]
  Final Result: [3, 9, 10, 27, 38, 43, 82]`,
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
  category: "Sorting",
};
