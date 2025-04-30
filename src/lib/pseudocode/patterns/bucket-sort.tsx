import { ChevronRight } from "lucide-react";

export const BucketSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bucket Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n²) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Uniformly
      distributed floating-point numbers
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`BUCKET-SORT(A):
    n = A.length
    let B[0..n-1] be a new array of empty lists
    
    // Distribute elements into buckets
    for i = 1 to n:
        insert A[i] into B[⌊n * A[i]⌋]
    
    // Sort individual buckets
    for i = 0 to n-1:
        sort B[i] using INSERTION-SORT
    
    // Concatenate buckets
    let result be an empty list
    for i = 0 to n-1:
        concatenate B[i] to result
    
    return result`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Distribute:</span> Place
        elements into buckets
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Sort each
        bucket individually
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Concatenate:</span> Combine
        sorted buckets
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
        {`Input: A = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]

Step 1: Distribute into buckets
B[0] = [0.17, 0.12]
B[1] = [0.26, 0.21, 0.23]
B[2] = [0.39]
B[3] = []
B[4] = []
B[5] = []
B[6] = [0.68, 0.72]
B[7] = [0.78]
B[8] = []
B[9] = [0.94]

Step 2: Sort each bucket
B[0] = [0.12, 0.17]
B[1] = [0.21, 0.23, 0.26]
B[2] = [0.39]
B[6] = [0.68, 0.72]
B[7] = [0.78]
B[9] = [0.94]

Step 3: Concatenate
[0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]

Output: [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]`}
      </pre>
    </div>
  </div>
);
