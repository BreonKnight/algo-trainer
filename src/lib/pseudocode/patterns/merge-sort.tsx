import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const MergeSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Merge Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Stable sorting of arrays
    </div>

    <PseudocodeDisplay
      code={`// Main merge sort function
MERGE-SORT(array, start, end):
    # If array has more than one element
    if start < end:
        # Find middle point
        middle = floor of (start + end) / 2

        # Sort left half
        MERGE-SORT(array, start, middle)
        # Sort right half
        MERGE-SORT(array, middle + 1, end)
        # Merge sorted halves
        MERGE(array, start, middle, end)

// Helper function to merge two sorted arrays
MERGE(array, start, middle, end):
    # Calculate sizes of left and right arrays
    left_size = middle - start + 1
    right_size = end - middle

    # Create temporary arrays
    left = new array of size left_size + 1
    right = new array of size right_size + 1

    # Copy data to temporary arrays
    for i from 1 to left_size:
        left[i] = array[start + i - 1]

    for j from 1 to right_size:
        right[j] = array[middle + j]

    # Add sentinel values
    left[left_size + 1] = infinity
    right[right_size + 1] = infinity

    # Merge the temporary arrays
    i = 1
    j = 1

    for k from start to end:
        if left[i] ≤ right[j]:
            array[k] = left[i]
            i = i + 1
        else:
            array[k] = right[j]
            j = j + 1`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Divide:</span> Split array into two halves
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Recursively sort each half
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Merge:</span> Combine sorted halves
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Pick smallest element from
        either half
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Sorting [5, 2, 4, 7, 1, 3, 2, 6]</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Step 1: Split array
[5, 2, 4, 7] | [1, 3, 2, 6]

Step 2: Split left half
[5, 2] | [4, 7]

Step 3: Split right half
[1, 3] | [2, 6]

Step 4: Sort and merge smallest arrays
[2, 5] | [4, 7] | [1, 3] | [2, 6]

Step 5: Merge left half
[2, 4, 5, 7]

Step 6: Merge right half
[1, 2, 3, 6]

Step 7: Final merge
[1, 2, 2, 3, 4, 5, 6, 7]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Merge Process</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Merging [2, 4, 5, 7] and [1, 2, 3, 6]:

Step 1: Compare first elements
Left: [2, 4, 5, 7]
Right: [1, 2, 3, 6]
Take 1 from right → [1]

Step 2: Compare next elements
Left: [2, 4, 5, 7]
Right: [2, 3, 6]
Take 2 from left → [1, 2]

Step 3: Compare next elements
Left: [4, 5, 7]
Right: [2, 3, 6]
Take 2 from right → [1, 2, 2]

Step 4: Continue comparison
Left: [4, 5, 7]
Right: [3, 6]
Take 3 from right → [1, 2, 2, 3]

Step 5: Continue comparison
Left: [4, 5, 7]
Right: [6]
Take 4 from left → [1, 2, 2, 3, 4]

Step 6: Continue comparison
Left: [5, 7]
Right: [6]
Take 5 from left → [1, 2, 2, 3, 4, 5]

Step 7: Continue comparison
Left: [7]
Right: [6]
Take 6 from right → [1, 2, 2, 3, 4, 5, 6]

Step 8: Take remaining elements
Left: [7]
Right: []
Take 7 from left → [1, 2, 2, 3, 4, 5, 6, 7]`}
      </pre>
    </div>
  </div>
);
