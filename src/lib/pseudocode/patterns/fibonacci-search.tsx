import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const FibonacciSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fibonacci Search</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Search in
      sorted array using Fibonacci numbers
    </div>

    <PseudocodeDisplay
      code={`FIBONACCI-SEARCH(A, x)
1  // Initialize Fibonacci numbers
2  fib2 = 0  // (m-2)'th Fibonacci number
3  fib1 = 1  // (m-1)'th Fibonacci number
4  fib = fib2 + fib1  // m'th Fibonacci number
5
6  // Find smallest Fibonacci number >= n
7  while fib < n
8      fib2 = fib1
9      fib1 = fib
10     fib = fib2 + fib1
11
12 // Initialize offset
13 offset = -1
14
15 while fib {'>'} 1
16     // Check if fib2 is valid index
17     i = min(offset + fib2, n - 1)
18
19     // If x is greater than value at i,
20     // cut the subarray from offset to i
21     if A[i] < x
22         fib = fib1
23         fib1 = fib2
24         fib2 = fib - fib1
25         offset = i
26
27     // If x is less than value at i,
28     // cut the subarray after i+1
29     else if A[i] {'>'} x
30         fib = fib2
31         fib1 = fib1 - fib2
32         fib2 = fib - fib1
33
34     // Element found
35     else
36         return i
37
38 // Compare last element
39 if fib1 and A[offset + 1] == x
40     return offset + 1
41
42 // Element not found
43 return -1

// Example:
// Input: A = [1, 4, 6, 8, 9, 10, 14, 15, 16], x = 14
//
// Step 1: Find Fibonacci numbers
//         fib2 = 5, fib1 = 8, fib = 13
//
// Step 2: Compare A[5] = 10 < 14
//         offset = 5, fib2 = 3, fib1 = 5, fib = 8
//
// Step 3: Compare A[8] = 16 {'>'} 14
//         fib2 = 2, fib1 = 3, fib = 5
//
// Step 4: Compare A[7] = 15 {'>'} 14
//         fib2 = 1, fib1 = 2, fib = 3
//
// Step 5: Compare A[6] = 14 = 14
//         Return 6`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Initialize: Find smallest Fibonacci number {">="} array length
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Compare: Use Fibonacci numbers to divide search space</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update: Fibonacci numbers based on comparison result</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: Index if found, -1 if not found</span>
      </div>
    </div>
  </div>
);
