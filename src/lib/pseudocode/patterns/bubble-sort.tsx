import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BubbleSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Bubble Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Sorting array in-place
    </div>

    <PseudocodeDisplay
      code={`# Bubble Sort: Repeatedly swap adjacent elements if they are in wrong order
# Input: Array A[1..n] of n elements
# Output: Array A sorted in non-decreasing order

BUBBLE-SORT(A)
    n ← length[A]    # Number of elements in array

    # Outer loop: n-1 passes needed
    for i ← 1 to n-1 do
        # Inner loop: compare adjacent elements
        for j ← 1 to n-i do
            # Swap if elements are in wrong order
            if A[j] > A[j+1] then
                # Exchange A[j] and A[j+1]
                temp ← A[j]
                A[j] ← A[j+1]
                A[j+1] ← temp
            end if
        end for
    end for

# Example:
# Input: A = [5, 2, 4, 6, 1, 3]
# Pass 1: [2, 4, 5, 1, 3, 6]  # 6 bubbles to end
# Pass 2: [2, 4, 1, 3, 5, 6]  # 5 bubbles to end
# Pass 3: [2, 1, 3, 4, 5, 6]  # 4 bubbles to end
# Pass 4: [1, 2, 3, 4, 5, 6]  # 3 bubbles to end
# Pass 5: [1, 2, 3, 4, 5, 6]  # 2 bubbles to end
# Output: [1, 2, 3, 4, 5, 6]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">1.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Compare:</span> Adjacent elements in each pass
        </span>
      </div>
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">2.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Swap:</span> Elements if they are in wrong
          order
        </span>
      </div>
      <div className="flex items-start mb-1">
        <span className="font-bold text-main mr-2">3.</span>
        <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
        <span>
          <span className="font-semibold text-accent">Repeat:</span> Until array is completely
          sorted
        </span>
      </div>
    </div>
  </div>
);
