import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const countingSortPattern: AlgorithmPattern = {
  title: "Counting Sort Algorithm",
  description:
    "A non-comparison-based sorting algorithm that works by counting the occurrences of each element in the input array and using that information to place elements in their correct positions. It is particularly efficient when the range of input data is not significantly greater than the number of elements to be sorted.",
  timeComplexity: "O(n + k) where k is the range of input",
  spaceComplexity: "O(n + k)",
  pseudocode: `1. Find the maximum element in the array
2. Create a count array of size max+1
3. Store the count of each element in the count array
4. Modify the count array to store the position of each element
5. Create the output array
6. Place elements in their correct positions using the count array`,
  example: `arr = [4, 2, 2, 8, 3, 3, 1]

Step 1: Find maximum (8)
Step 2: Create count array [0, 0, 0, 0, 0, 0, 0, 0, 0]
Step 3: Count occurrences
[0, 1, 2, 2, 1, 0, 0, 0, 1]

Step 4: Modify count array to store positions
[0, 1, 3, 5, 6, 6, 6, 6, 7]

Step 5: Create output array
[0, 0, 0, 0, 0, 0, 0]

Step 6: Place elements
[1, 2, 2, 3, 3, 4, 8]`,
  implementation: `def counting_sort(arr):
    # Find the maximum element
    max_val = max(arr)
    
    # Create count array
    count = [0] * (max_val + 1)
    
    # Store count of each element
    for num in arr:
        count[num] += 1
    
    # Modify count array to store position of each element
    for i in range(1, len(count)):
        count[i] += count[i - 1]
    
    # Create output array
    output = [0] * len(arr)
    
    # Place elements in their correct positions
    for num in reversed(arr):
        output[count[num] - 1] = num
        count[num] -= 1
    
    return output`,
  category: "Sorting",
  keyPoints: [
    "Non-comparison-based sorting",
    "Stable sorting algorithm",
    "Works best with small range of input values",
    "Linear time complexity when range is small",
  ],
  commonUseCases: [
    "Sorting integers with small range",
    "As a subroutine in radix sort",
    "Frequency counting",
    "Histogram generation",
  ],
  relatedPatterns: ["Radix Sort", "Bucket Sort", "Pigeonhole Sort"],
  tips: [
    "Use when the range of input is not significantly larger than the number of elements",
    "Consider memory usage for large ranges",
    "Good for sorting integers",
    "Can be modified to handle negative numbers",
  ],
};
