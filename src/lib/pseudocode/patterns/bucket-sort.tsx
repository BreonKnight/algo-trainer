import { ChevronRight } from "lucide-react";

export const BucketSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bucket Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Sorting uniformly
      distributed numbers
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Standard Bucket Sort
BUCKET-SORT(A):
    # Initialize buckets
    n = len(A)
    buckets = [[] for _ in range(n)]
    
    # Distribute elements into buckets
    for x in A:
        bucket_idx = int(x * n)
        buckets[bucket_idx].append(x)
    
    # Sort individual buckets
    for bucket in buckets:
        INSERTION-SORT(bucket)
    
    # Concatenate buckets
    result = []
    for bucket in buckets:
        result.extend(bucket)
    
    return result

// Bucket Sort with Custom Range
BUCKET-SORT-RANGE(A, min_val, max_val):
    # Initialize buckets
    n = len(A)
    buckets = [[] for _ in range(n)]
    
    # Distribute elements into buckets
    for x in A:
        bucket_idx = int((x - min_val) / (max_val - min_val) * (n-1))
        buckets[bucket_idx].append(x)
    
    # Sort individual buckets
    for bucket in buckets:
        INSERTION-SORT(bucket)
    
    # Concatenate buckets
    result = []
    for bucket in buckets:
        result.extend(bucket)
    
    return result

// Bucket Sort with Linked Lists
BUCKET-SORT-LIST(A):
    # Initialize buckets
    n = len(A)
    buckets = [LinkedList() for _ in range(n)]
    
    # Distribute elements into buckets
    for x in A:
        bucket_idx = int(x * n)
        buckets[bucket_idx].append(x)
    
    # Sort individual buckets
    for bucket in buckets:
        bucket.sort()
    
    # Concatenate buckets
    result = []
    for bucket in buckets:
        result.extend(bucket.to_list())
    
    return result

// Bucket Sort with Counting Sort
BUCKET-SORT-COUNTING(A):
    # Initialize buckets
    n = len(A)
    buckets = [[] for _ in range(n)]
    
    # Distribute elements into buckets
    for x in A:
        bucket_idx = int(x * n)
        buckets[bucket_idx].append(x)
    
    # Sort individual buckets using counting sort
    for bucket in buckets:
        if bucket:
            max_val = max(bucket)
            count = [0] * (max_val + 1)
            for x in bucket:
                count[x] += 1
            sorted_bucket = []
            for i in range(max_val + 1):
                sorted_bucket.extend([i] * count[i])
            bucket[:] = sorted_bucket
    
    # Concatenate buckets
    result = []
    for bucket in buckets:
        result.extend(bucket)
    
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

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Bucket Sort
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]

Buckets:
[0.12, 0.17]
[0.21, 0.23, 0.26]
[0.39]
[]
[0.68]
[0.72, 0.78]
[]
[]
[]
[0.94]

Output: [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Custom Range</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
Range: [10, 100]

Buckets:
[10, 20]
[30, 40]
[50, 60]
[70, 80]
[90, 100]

Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Counting Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]

Buckets with counting sort:
[0.12, 0.17]
[0.21, 0.23, 0.26]
[0.39]
[]
[0.68]
[0.72, 0.78]
[]
[]
[]
[0.94]

Output: [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]`}
      </pre>
    </div>
  </div>
);
