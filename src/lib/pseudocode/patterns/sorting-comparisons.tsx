import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const SortingComparisonsPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Sorting Comparisons
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Comparing and analyzing sorting
      algorithms
    </div>

    <PseudocodeDisplay
      code={`// Comparison-based sorting algorithms
QUICK-SORT(A, p, r):
  if p < r:
    q = PARTITION(A, p, r)
    QUICK-SORT(A, p, q-1)
    QUICK-SORT(A, q+1, r)

MERGE-SORT(A, p, r):
  if p < r:
    q = floor((p + r) / 2)
    MERGE-SORT(A, p, q)
    MERGE-SORT(A, q+1, r)
    MERGE(A, p, q, r)

HEAP-SORT(A):
  BUILD-MAX-HEAP(A)
  for i = length[A] downto 2:
    exchange A[1] with A[i]
    heap-size[A] = heap-size[A] - 1
    MAX-HEAPIFY(A, 1)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Quick Sort:</span> O(n log n) average, O(n²)
        worst
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Merge Sort:</span> O(n log n) guaranteed
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Heap Sort:</span> O(n log n) guaranteed
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Comparison Table</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Algorithm    | Time (Best) | Time (Avg) | Time (Worst) | Space  | Stable
------------|------------|------------|-------------|--------|--------
Quick Sort  | O(n log n) | O(n log n) | O(n²)       | O(log n)| No
Merge Sort  | O(n log n) | O(n log n) | O(n log n)  | O(n)   | Yes
Heap Sort   | O(n log n) | O(n log n) | O(n log n)  | O(1)   | No

Key Features:
- Quick Sort: In-place, cache-friendly
- Merge Sort: Stable, predictable
- Heap Sort: In-place, no extra space`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Key Properties</span>
      <div className="mt-2">
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>All comparison-based sorts have Ω(n log n) lower bound</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Choose based on data characteristics and requirements</span>
        </div>
        <div className="flex items-start mb-1">
          <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
          <span>Hybrid approaches (e.g., Timsort) combine strengths</span>
        </div>
      </div>
    </div>
  </div>
);
