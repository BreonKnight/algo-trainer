import { ChevronRight } from "lucide-react";

export const CountingSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Counting Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n + k) &nbsp;|&nbsp; Space: O(n + k) &nbsp;|&nbsp; Use: Integer
      sorting with known range
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`COUNTING-SORT(A, k):
    // A[1..n] is input array, k is maximum value
    n = A.length
    let B[1..n] be a new array
    let C[0..k] be a new array
    
    // Initialize count array
    for i = 0 to k:
        C[i] = 0
    
    // Count occurrences
    for j = 1 to n:
        C[A[j]] = C[A[j]] + 1
    
    // Compute cumulative counts
    for i = 1 to k:
        C[i] = C[i] + C[i-1]
    
    // Place elements in sorted order
    for j = n downto 1:
        B[C[A[j]]] = A[j]
        C[A[j]] = C[A[j]] - 1
    
    return B`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Count:</span> Count
        occurrences of each value
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Cumulate:</span> Compute
        cumulative counts
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Place:</span> Place elements
        in sorted order
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Return the
        sorted array
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: A = [2, 5, 3, 0, 2, 3, 0, 3], k = 5

Step 1: Count occurrences
C = [2, 0, 2, 3, 0, 1]

Step 2: Compute cumulative counts
C = [2, 2, 4, 7, 7, 8]

Step 3: Place elements
B = [0, 0, 2, 2, 3, 3, 3, 5]

Output: [0, 0, 2, 2, 3, 3, 3, 5]`}
      </pre>
    </div>
  </div>
);
