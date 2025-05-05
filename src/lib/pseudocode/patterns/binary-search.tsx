import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BinarySearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Binary Search</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Searching in sorted arrays
    </div>

    <PseudocodeDisplay
      code={`// Standard Binary Search
BINARY-SEARCH(A, x):
  left = 0
  right = n - 1
  while left ≤ right:
    mid = floor((left + right) / 2)
    if A[mid] == x:
      return mid
    if A[mid] < x:
      left = mid + 1
    else:
      right = mid - 1
  return -1

// First Occurrence
FIRST-OCCURRENCE(A, x):
  left = 0
  right = n - 1
  result = -1
  while left ≤ right:
    mid = floor((left + right) / 2)
    if A[mid] == x:
      result = mid
      right = mid - 1
    elif A[mid] < x:
      left = mid + 1
    else:
      right = mid - 1
  return result

// Last Occurrence
LAST-OCCURRENCE(A, x):
  left = 0
  right = n - 1
  result = -1
  while left ≤ right:
    mid = floor((left + right) / 2)
    if A[mid] == x:
      result = mid
      left = mid + 1
    elif A[mid] < x:
      left = mid + 1
    else:
      right = mid - 1
  return result

// Rotated Array Search
ROTATED-SEARCH(A, x):
  left = 0
  right = n - 1
  while left ≤ right:
    mid = floor((left + right) / 2)
    if A[mid] == x:
      return mid
    if A[left] ≤ A[mid]:
      if A[left] ≤ x < A[mid]:
        right = mid - 1
      else:
        left = mid + 1
    else:
      if A[mid] < x ≤ A[right]:
        left = mid + 1
      else:
        right = mid - 1
  return -1`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set search boundaries
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Check middle element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Adjust:</span> Update boundaries based on
        comparison
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Standard Search</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [1, 3, 5, 7, 9, 11, 13]
x = 7
Search steps:
[1, 3, 5, 7, 9, 11, 13]
       ^
[1, 3, 5, 7, 9, 11, 13]
          ^
Found at index 3`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: First Occurrence</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [1, 2, 2, 2, 3, 4, 5]
x = 2
Search steps:
[1, 2, 2, 2, 3, 4, 5]
       ^
[1, 2, 2, 2, 3, 4, 5]
    ^
[1, 2, 2, 2, 3, 4, 5]
 ^
First occurrence at index 1`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Rotated Array</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [4, 5, 6, 7, 0, 1, 2]
x = 0
Search steps:
[4, 5, 6, 7, 0, 1, 2]
       ^
[4, 5, 6, 7, 0, 1, 2]
          ^
[4, 5, 6, 7, 0, 1, 2]
         ^
Found at index 4`}
      </pre>
    </div>
  </div>
);
