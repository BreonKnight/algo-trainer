import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const QuickSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Quick Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(log n) &nbsp;|&nbsp; Use: Efficient
      in-place sorting
    </div>

    <PseudocodeDisplay code={`// Main quick sort function
QUICK-SORT(array, start, end):
    # If array has more than one element
    if start < end:
        # Partition the array and get pivot position
        pivot_position = PARTITION(array, start, end)
        # Sort left side of pivot
        QUICK-SORT(array, start, pivot_position - 1)
        # Sort right side of pivot
        QUICK-SORT(array, pivot_position + 1, end)

// Partition the array around a pivot
PARTITION(array, start, end):
    # Choose last element as pivot
    pivot = array[end]
    # Initialize pointer for elements less than pivot
    smaller_element_pointer = start - 1
    
    # Move through the array
    for current_element from start to end - 1:
        # If current element is less than pivot
        if array[current_element] ≤ pivot:
            # Move smaller element pointer
            smaller_element_pointer = smaller_element_pointer + 1
            # Swap current element with element at pointer
            swap array[smaller_element_pointer] with array[current_element]
    
    # Place pivot in correct position
    swap array[smaller_element_pointer + 1] with array[end]
    # Return pivot position
    return smaller_element_pointer + 1`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Choose:</span> Select pivot
        element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Partition:</span> Move
        elements around pivot
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Recursively
        sort each side
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> No combine
        step needed
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Sorting [2, 8, 7, 1, 3, 5, 6, 4]
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Step 1: Initial array
[2, 8, 7, 1, 3, 5, 6, 4]

Step 2: First partition (pivot = 4)
[2, 1, 3, 4, 7, 5, 6, 8]

Step 3: Sort left side [2, 1, 3]
[1, 2, 3]

Step 4: Sort right side [7, 5, 6, 8]
[5, 6, 7, 8]

Final result:
[1, 2, 3, 4, 5, 6, 7, 8]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Partition Process
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Partitioning [2, 8, 7, 1, 3, 5, 6, 4] with pivot = 4:

Step 1: Initialize
smaller_element_pointer = -1
pivot = 4

Step 2: Process 2
2 ≤ 4 → swap with itself
[2, 8, 7, 1, 3, 5, 6, 4]

Step 3: Process 8
8 > 4 → skip
[2, 8, 7, 1, 3, 5, 6, 4]

Step 4: Process 7
7 > 4 → skip
[2, 8, 7, 1, 3, 5, 6, 4]

Step 5: Process 1
1 ≤ 4 → swap with 8
[2, 1, 7, 8, 3, 5, 6, 4]

Step 6: Process 3
3 ≤ 4 → swap with 7
[2, 1, 3, 8, 7, 5, 6, 4]

Step 7: Process 5
5 > 4 → skip
[2, 1, 3, 8, 7, 5, 6, 4]

Step 8: Process 6
6 > 4 → skip
[2, 1, 3, 8, 7, 5, 6, 4]

Step 9: Place pivot
Swap 4 with 8
[2, 1, 3, 4, 7, 5, 6, 8]`}
      </pre>
    </div>
  </div>
);
