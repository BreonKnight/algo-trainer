import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const CountingSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Counting Sort
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n+k) &nbsp;|&nbsp; Space: O(n+k) &nbsp;|&nbsp; Use: Sorting integers with small range
    </div>

    <PseudocodeDisplay
      code={`// Standard Counting Sort
COUNTING-SORT(A):
    # Find maximum value
    max_val = max(A)
    n = len(A)

    # Initialize count array
    count = [0] * (max_val + 1)
    output = [0] * n

    # Store count of each element
    for x in A:
        count[x] += 1

    # Change count[i] to position of element
    for i in range(1, max_val + 1):
        count[i] += count[i-1]

    # Build output array
    for i in range(n-1, -1, -1):
        output[count[A[i]]-1] = A[i]
        count[A[i]] -= 1

    return output

// Counting Sort with Negative Numbers
COUNTING-SORT-NEGATIVE(A):
    # Find min and max values
    min_val = min(A)
    max_val = max(A)
    range_val = max_val - min_val + 1
    n = len(A)

    # Initialize count array
    count = [0] * range_val
    output = [0] * n

    # Store count of each element
    for x in A:
        count[x - min_val] += 1

    # Change count[i] to position of element
    for i in range(1, range_val):
        count[i] += count[i-1]

    # Build output array
    for i in range(n-1, -1, -1):
        output[count[A[i] - min_val]-1] = A[i]
        count[A[i] - min_val] -= 1

    return output

// Counting Sort with Objects
COUNTING-SORT-OBJECTS(A, key_func):
    # Find maximum key value
    max_key = max(key_func(x) for x in A)
    n = len(A)

    # Initialize count array
    count = [0] * (max_key + 1)
    output = [None] * n

    # Store count of each key
    for x in A:
        count[key_func(x)] += 1

    # Change count[i] to position of element
    for i in range(1, max_key + 1):
        count[i] += count[i-1]

    # Build output array
    for i in range(n-1, -1, -1):
        key = key_func(A[i])
        output[count[key]-1] = A[i]
        count[key] -= 1

    return output

// Counting Sort with Radix
COUNTING-SORT-RADIX(A, exp):
    n = len(A)
    output = [0] * n
    count = [0] * 10

    # Store count of occurrences
    for i in range(n):
        index = (A[i] // exp) % 10
        count[index] += 1

    # Change count[i] to position of digit
    for i in range(1, 10):
        count[i] += count[i-1]

    # Build output array
    for i in range(n-1, -1, -1):
        index = (A[i] // exp) % 10
        output[count[index]-1] = A[i]
        count[index] -= 1

    # Copy output to A
    for i in range(n):
        A[i] = output[i]`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Count:</span> Occurrences of each element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Cumulate:</span> Compute cumulative counts
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Place:</span> Elements in sorted order
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Counting Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [4, 2, 2, 8, 3, 3, 1]

Count array:
[0, 1, 2, 2, 1, 0, 0, 0, 1]

Cumulative count:
[0, 1, 3, 5, 6, 6, 6, 6, 7]

Output: [1, 2, 2, 3, 3, 4, 8]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Negative Numbers</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [-5, -10, 0, -3, 8, 5, -1, 10]

Count array:
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

Cumulative count:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

Output: [-10, -5, -3, -1, 0, 5, 8, 10]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Objects</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [("apple", 3), ("banana", 1), ("cherry", 2)]
Key: fruit count

Count array:
[0, 1, 1, 1]

Cumulative count:
[0, 1, 2, 3]

Output: [("banana", 1), ("cherry", 2), ("apple", 3)]`}
      </pre>
    </div>
  </div>
);
