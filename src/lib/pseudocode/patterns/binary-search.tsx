import { ChevronRight } from "lucide-react";

export const BinarySearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Binary Search</span>
      <span className="ml-2 text-xs text-secondary">(Search Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding
      elements in sorted arrays
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Search for target in sorted array
BINARY-SEARCH(array, target):
    # Initialize search boundaries
    left = 1
    right = length of array
    
    # Continue while search space exists
    while left ≤ right:
        # Find middle element
        middle = floor((left + right) / 2)
        
        # Check if target found
        if array[middle] == target:
            return middle
        
        # If target is smaller, search left half
        if array[middle] > target:
            right = middle - 1
        # If target is larger, search right half
        else:
            left = middle + 1
    
    # Target not found
    return NIL`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set
        search boundaries
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Divide:</span> Find middle
        element
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Compare:</span> Check if
        target found
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Conquer:</span> Narrow
        search space
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Searching for 7
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [1, 3, 5, 7, 9, 11, 13]

Step 1: left = 1, right = 7
middle = 4, array[4] = 7
Found target at position 4

Search path:
[1, 3, 5, 7, 9, 11, 13]
         ^`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Searching for 6
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Array: [1, 3, 5, 7, 9, 11, 13]

Step 1: left = 1, right = 7
middle = 4, array[4] = 7
6 < 7 → search left half

Step 2: left = 1, right = 3
middle = 2, array[2] = 3
6 > 3 → search right half

Step 3: left = 3, right = 3
middle = 3, array[3] = 5
6 > 5 → search right half

Step 4: left = 4, right = 3
left > right → target not found`}
      </pre>
    </div>
  </div>
);
