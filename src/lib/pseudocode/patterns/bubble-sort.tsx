import { ChevronRight } from "lucide-react";

export const BubbleSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bubble Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Simple sorting
      for small datasets
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`BUBBLE-SORT(A):
    n = A.length
    for i = 1 to n-1:
        swapped = false
        for j = 1 to n-i:
            if A[j] > A[j+1]:
                exchange A[j] with A[j+1]
                swapped = true
        if not swapped:
            break`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Compare
        adjacent elements
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Swap:</span> Exchange if out
        of order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        passes until sorted
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Optimize:</span> Stop if no
        swaps in a pass
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [5, 2, 9, 3, 7, 6, 1, 8, 4]

First pass:
1. Compare 5 and 2: [2, 5, 9, 3, 7, 6, 1, 8, 4]
2. Compare 5 and 9: [2, 5, 9, 3, 7, 6, 1, 8, 4]
3. Compare 9 and 3: [2, 5, 3, 9, 7, 6, 1, 8, 4]
4. Continue until end...

Second pass:
1. Compare 2 and 5: [2, 5, 3, 7, 6, 1, 8, 4, 9]
2. Compare 5 and 3: [2, 3, 5, 7, 6, 1, 8, 4, 9]
3. Continue until sorted...

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
      </pre>
    </div>
  </div>
);
