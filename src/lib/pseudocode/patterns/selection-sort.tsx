import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const SelectionSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Selection Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Sorting array in-place
    </div>

    <PseudocodeDisplay
      code={`SELECTION-SORT(A)
    n ← length[A]

    for i ← 1 to n-1
        # Find minimum in unsorted part
        min_idx ← i
        for j ← i+1 to n
            if A[j] < A[min_idx]
                min_idx ← j

        # Swap with first unsorted element
        swap A[i] and A[min_idx]

# Example:
# Input: A = [5, 2, 4, 6, 1, 3]
# After each iteration:
# [1, 2, 4, 6, 5, 3]  # 1 is selected
# [1, 2, 4, 6, 5, 3]  # 2 is selected
# [1, 2, 3, 6, 5, 4]  # 3 is selected
# [1, 2, 3, 4, 5, 6]  # 4 is selected
# [1, 2, 3, 4, 5, 6]  # 5 is selected
# Output: [1, 2, 3, 4, 5, 6]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Minimum element in unsorted part</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Swap: With first unsorted element</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Repeat: Until array is sorted</span>
      </div>
    </div>
  </div>
);
