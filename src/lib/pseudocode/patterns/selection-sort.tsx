import { ChevronRight } from "lucide-react";

export const SelectionSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Selection Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Simple sorting
      with minimal swaps
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`SELECTION-SORT(A):
    n = A.length
    for i = 1 to n-1:
        min_idx = i
        for j = i+1 to n:
            if A[j] < A[min_idx]:
                min_idx = j
        exchange A[i] with A[min_idx]`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find min:</span> Search for
        minimum element in unsorted portion
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Swap:</span> Exchange with
        first unsorted element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Advance:</span> Move
        boundary between sorted and unsorted
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        until all elements sorted
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [5, 2, 9, 3, 7, 6, 1, 8, 4]

First pass (i=1):
1. Find min: 1 at index 6
2. Swap with A[1]: [1, 2, 9, 3, 7, 6, 5, 8, 4]

Second pass (i=2):
1. Find min: 2 at index 2
2. Already in place: [1, 2, 9, 3, 7, 6, 5, 8, 4]

Third pass (i=3):
1. Find min: 3 at index 4
2. Swap with A[3]: [1, 2, 3, 9, 7, 6, 5, 8, 4]

Continue until sorted...

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
      </pre>
    </div>
  </div>
);
