import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const FibonacciSearchPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fibonacci Search</span>
      <span className="ml-2 text-xs text-secondary">(Search)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Find element
      in sorted array using Fibonacci numbers
    </div>

    <PseudocodeDisplay code={`# Fibonacci Search: Find element in sorted array using Fibonacci numbers
# Input: Sorted array A[1..n], target value x
# Output: Index of x in A if found, -1 otherwise

Algorithm FIBONACCI-SEARCH(A, x)
    n ← length[A]
    
    # Initialize Fibonacci numbers
    fibM2 ← 0
    fibM1 ← 1
    fibM ← fibM2 + fibM1
    
    # Find smallest Fibonacci number ≥ n
    while fibM < n do
        fibM2 ← fibM1
        fibM1 ← fibM
        fibM ← fibM2 + fibM1
    end while
    
    # Initialize variables
    offset ← -1
    
    while fibM > 1 do
        i ← min(offset + fibM2, n - 1)
        
        if A[i] < x then
            fibM ← fibM1
            fibM1 ← fibM2
            fibM2 ← fibM - fibM1
            offset ← i
        else if A[i] > x then
            fibM ← fibM2
            fibM1 ← fibM1 - fibM2
            fibM2 ← fibM - fibM1
        else
            return i
        end if
    end while
    
    if fibM1 = 1 and A[offset + 1] = x then
        return offset + 1
    end if
    
    return -1

# Example:
# Input: A = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100], x = 85
# 
# Step 1: Find fibM ≥ 11: fibM = 13
# Step 2: fibM2 = 5, fibM1 = 8, offset = -1
# Step 3: i = 4, A[4] = 45 < 85
#         offset = 4, fibM = 8, fibM1 = 5, fibM2 = 3
# Step 4: i = 7, A[7] = 82 < 85
#         offset = 7, fibM = 5, fibM1 = 3, fibM2 = 2
# Step 5: i = 9, A[9] = 90 > 85
#         fibM = 2, fibM1 = 1, fibM2 = 1
# Step 6: i = 8, A[8] = 85 = 85
# 
# Output: 8`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Initialize Fibonacci numbers</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find smallest Fibonacci number ≥ array length</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Search using Fibonacci numbers to divide array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return index if found, -1 otherwise</span>
      </div>
    </div>
  </div>
);
