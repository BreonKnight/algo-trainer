import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KadanesAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Kadane's Algorithm
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding maximum subarray sum
    </div>

    <PseudocodeDisplay
      code={`// Find maximum subarray sum
KADANE(A):
  max_ending_here = A[1]
  max_so_far = A[1]
  for i = 2 to A.length:
    max_ending_here = max(A[i], max_ending_here + A[i])
    max_so_far = max(max_so_far, max_ending_here)
  return max_so_far

// Find maximum subarray sum with indices
KADANE-WITH-INDICES(A):
  max_ending_here = A[1]
  max_so_far = A[1]
  start = 1
  end = 1
  temp_start = 1
  for i = 2 to A.length:
    if A[i] > max_ending_here + A[i]:
      max_ending_here = A[i]
      temp_start = i
    else:
      max_ending_here = max_ending_here + A[i]
    if max_ending_here > max_so_far:
      max_so_far = max_ending_here
      start = temp_start
      end = i
  return (max_so_far, start, end)

// Find maximum circular subarray sum
KADANE-CIRCULAR(A):
  max_kadane = KADANE(A)
  max_wrap = 0
  for i = 1 to A.length:
    max_wrap = max_wrap + A[i]
    A[i] = -A[i]
  max_wrap = max_wrap + KADANE(A)
  return max(max_kadane, max_wrap)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Basic:</span> Find maximum subarray sum
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Indices:</span> Find maximum subarray with
        indices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Circular:</span> Find maximum circular subarray
        sum
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Basic Kadane</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
KADANE → 6 (subarray [4, -1, 2, 1])`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: With Indices</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
KADANE-WITH-INDICES → (6, 4, 7) (sum 6 from index 4 to 7)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Circular</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [5, -3, 5]
KADANE-CIRCULAR → 10 (subarray [5, -3, 5])`}
      </pre>
    </div>
  </div>
);
