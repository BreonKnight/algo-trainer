import { ChevronRight } from "lucide-react";

export const RadixSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Radix Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(d(n+k)) &nbsp;|&nbsp; Space: O(n+k) &nbsp;|&nbsp; Use: Sort
      numbers by processing individual digits
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`RADIX-SORT(A)
1  // Find maximum number to know number of digits
2  max_num = max(A)
3  exp = 1
4  while max_num/exp > 0
5      COUNTING-SORT(A, exp)
6      exp *= 10

COUNTING-SORT(A, exp)
1  n = A.length
2  output = [0] * n
3  count = [0] * 10
4  
5  // Store count of occurrences
6  for i = 0 to n-1
7      index = (A[i]/exp) % 10
8      count[index] += 1
9  
10 // Change count[i] to position of digit i in output
11 for i = 1 to 9
12     count[i] += count[i-1]
13 
14 // Build output array
15 for i = n-1 downto 0
16     index = (A[i]/exp) % 10
17     output[count[index]-1] = A[i]
18     count[index] -= 1
19 
20 // Copy output to A
21 for i = 0 to n-1
22     A[i] = output[i]

// Example:
// Input: A = [170, 45, 75, 90, 802, 24, 2, 66]
// 
// Step 1 (exp=1):
// Count: [2, 0, 2, 0, 1, 2, 2, 0, 0, 1]
// Output: [170, 90, 802, 2, 24, 45, 75, 66]
// 
// Step 2 (exp=10):
// Count: [2, 2, 2, 0, 1, 1, 0, 0, 0, 0]
// Output: [802, 2, 24, 45, 66, 170, 75, 90]
// 
// Step 3 (exp=100):
// Count: [6, 1, 1, 0, 0, 0, 0, 0, 0, 0]
// Output: [2, 24, 45, 66, 75, 90, 170, 802]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Maximum number to determine digit count</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Each digit position from least to most significant</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Sort: Using counting sort for each digit position</span>
      </div>
    </div>
  </div>
);
