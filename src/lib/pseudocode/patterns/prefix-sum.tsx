import { ChevronRight } from "lucide-react";

export const PrefixSumPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Prefix Sum</span>
      <span className="ml-2 text-xs text-secondary">
        (Optimization Technique)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Efficient range
      sum queries
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Build prefix sum array
BUILD-PREFIX-SUM(array):
    n = length of array
    prefix = new array of size n + 1
    prefix[0] = 0
    for i from 1 to n:
        prefix[i] = prefix[i - 1] + array[i]
    return prefix

// Query sum in range [l, r]
QUERY-SUM(prefix, l, r):
    return prefix[r] - prefix[l - 1]

// Update value at index i
UPDATE-VALUE(array, prefix, i, new_value):
    diff = new_value - array[i]
    array[i] = new_value
    for j from i to length of array:
        prefix[j] = prefix[j] + diff`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build:</span> Compute
        cumulative sums
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Get range sum
        in O(1)
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Modify value
        and prefix sums
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Prefix Sum Construction
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input array: [2, 4, 1, 5, 3]

Prefix sum array:
[0, 2, 6, 7, 12, 15]

Query sum(2, 4):
prefix[4] - prefix[1] = 12 - 2 = 10
(4 + 1 + 5 = 10)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Update Operation
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Update array[3] from 1 to 6:
Original prefix: [0, 2, 6, 7, 12, 15]
Diff = 6 - 1 = 5

Updated prefix: [0, 2, 6, 12, 17, 20]

New query sum(2, 4):
prefix[4] - prefix[1] = 17 - 2 = 15
(4 + 6 + 5 = 15)`}
      </pre>
    </div>
  </div>
);
