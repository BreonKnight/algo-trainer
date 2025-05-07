import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const RecursionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Recursion
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Break problems into smaller
      subproblems
    </div>

    <PseudocodeDisplay
      code={`// Factorial
FACTORIAL(n):
  if n ≤ 1:
    return 1
  return n * FACTORIAL(n-1)

// Fibonacci
FIBONACCI(n):
  if n ≤ 1:
    return n
  return FIBONACCI(n-1) + FIBONACCI(n-2)

// Tower of Hanoi
HANOI(n, source, target, auxiliary):
  if n == 1:
    move disk from source to target
    return
  HANOI(n-1, source, auxiliary, target)
  move disk from source to target
  HANOI(n-1, auxiliary, target, source)

// Binary Search
BINARY-SEARCH(A, l, r, x):
  if l > r:
    return -1
  mid = floor((l + r) / 2)
  if A[mid] == x:
    return mid
  if A[mid] > x:
    return BINARY-SEARCH(A, l, mid-1, x)
  return BINARY-SEARCH(A, mid+1, r, x)

// Merge Sort
MERGE-SORT(A, l, r):
  if l ≥ r:
    return
  mid = floor((l + r) / 2)
  MERGE-SORT(A, l, mid)
  MERGE-SORT(A, mid+1, r)
  MERGE(A, l, mid, r)

// Quick Sort
QUICK-SORT(A, l, r):
  if l ≥ r:
    return
  p = PARTITION(A, l, r)
  QUICK-SORT(A, l, p-1)
  QUICK-SORT(A, p+1, r)`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base Case:</span> Define stopping condition
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Recursive Case:</span> Break problem into
        smaller parts
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Merge results from subproblems
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Factorial</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`n = 5
FACTORIAL(5)
  → 5 * FACTORIAL(4)
    → 4 * FACTORIAL(3)
      → 3 * FACTORIAL(2)
        → 2 * FACTORIAL(1)
          → 1
Result: 120`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Fibonacci</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`n = 5
FIBONACCI(5)
  → FIBONACCI(4) + FIBONACCI(3)
    → (FIBONACCI(3) + FIBONACCI(2)) + (FIBONACCI(2) + FIBONACCI(1))
      → ((FIBONACCI(2) + FIBONACCI(1)) + (FIBONACCI(1) + FIBONACCI(0))) + 
        ((FIBONACCI(1) + FIBONACCI(0)) + 1)
Result: 5`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Tower of Hanoi</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`n = 3
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C`}
      </pre>
    </div>
  </div>
);
