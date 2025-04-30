import { ChevronRight } from "lucide-react";

export const InsertionSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Insertion Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Small datasets or
      nearly sorted arrays
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`INSERTION-SORT(A):
    for j = 2 to A.length:
        key = A[j]
        // Insert A[j] into the sorted sequence A[1..j-1]
        i = j - 1
        while i > 0 and A[i] > key:
            A[i+1] = A[i]
            i = i - 1
        A[i+1] = key`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Select:</span> Pick next
        element to insert
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Shift:</span> Move larger
        elements right
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Insert:</span> Place element
        in correct position
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

First pass (j=2):
1. key = 2
2. Shift 5 right: [5, 5, 9, 3, 7, 6, 1, 8, 4]
3. Insert 2: [2, 5, 9, 3, 7, 6, 1, 8, 4]

Second pass (j=3):
1. key = 9
2. No shift needed
3. Insert 9: [2, 5, 9, 3, 7, 6, 1, 8, 4]

Third pass (j=4):
1. key = 3
2. Shift 5,9 right: [2, 5, 9, 9, 7, 6, 1, 8, 4]
3. Shift 5 right: [2, 5, 5, 9, 7, 6, 1, 8, 4]
4. Insert 3: [2, 3, 5, 9, 7, 6, 1, 8, 4]

Continue until sorted...

Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]`}
      </pre>
    </div>
  </div>
);
