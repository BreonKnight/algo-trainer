import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const bucketSortPattern: AlgorithmPattern = {
  title: "Bucket Sort",
  description:
    "A sorting algorithm that works by distributing elements into a number of buckets, then sorting each bucket individually. It's particularly efficient when the input is uniformly distributed over a range.",
  timeComplexity: "Average: O(n + n²/k), Worst: O(n²), where k is the number of buckets",
  spaceComplexity: "O(n + k), where k is the number of buckets",
  pseudocode: `1. Create n empty buckets
2. Insert array elements into their respective buckets
3. Sort individual buckets using insertion sort
4. Concatenate all sorted buckets`,
  example: `Input: [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]

Step 1: Create buckets (e.g., 10 buckets for range 0-1)
Step 2: Distribute elements into buckets:
  Bucket 0: []
  Bucket 1: [0.1234]
  Bucket 2: []
  Bucket 3: [0.3434]
  Bucket 4: []
  Bucket 5: [0.565]
  Bucket 6: [0.656, 0.665]
  Bucket 7: []
  Bucket 8: [0.897]
  Bucket 9: []

Step 3: Sort each bucket
Step 4: Concatenate: [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]`,
  implementation: `from typing import List

def bucket_sort(arr: List[float]) -> List[float]:
    n = len(arr)
    if n <= 1:
        return arr

    # Create buckets
    buckets: List[List[float]] = [[] for _ in range(n)]

    # Find min and max values
    min_val = min(arr)
    max_val = max(arr)
    value_range = max_val - min_val

    # Distribute elements into buckets
    for num in arr:
        # Handle edge case where all elements are the same
        if value_range == 0:
            bucket_index = 0
        else:
            bucket_index = int(((num - min_val) / value_range) * (n - 1))
        buckets[bucket_index].append(num)

    # Sort individual buckets
    for bucket in buckets:
        bucket.sort()

    # Concatenate all buckets
    result = []
    for bucket in buckets:
        result.extend(bucket)
    return result`,
  category: "Sorting",
  keySteps: [
    "1. Create empty buckets based on the range of input values",
    "2. Calculate the bucket index for each element",
    "3. Distribute elements into their respective buckets",
    "4. Sort each bucket individually using insertion sort",
    "5. Concatenate all sorted buckets to get the final sorted array",
  ],
  tips: [
    "Choose the number of buckets carefully - too few buckets may lead to poor performance",
    "Bucket sort works best when the input is uniformly distributed",
    "Consider using a different sorting algorithm for small buckets",
    "Handle edge cases like empty arrays and single-element arrays",
  ],
  relatedPatterns: ["Counting Sort", "Radix Sort", "Insertion Sort"],
};
