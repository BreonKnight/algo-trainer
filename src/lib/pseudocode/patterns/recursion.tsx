import { ChevronRight } from "lucide-react";

export const RecursionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Recursion</span>
      <span className="ml-2 text-xs text-secondary">
        (Problem-Solving Technique)
      </span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(2ⁿ) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Solving problems
      by breaking them into smaller subproblems
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Recursive factorial
FACTORIAL(n):
    # Base case
    if n ≤ 1:
        return 1
    
    # Recursive case
    return n * FACTORIAL(n - 1)

// Recursive Fibonacci
FIBONACCI(n):
    # Base cases
    if n ≤ 1:
        return n
    
    # Recursive cases
    return FIBONACCI(n - 1) + FIBONACCI(n - 2)

// Recursive binary search
BINARY-SEARCH(array, target, left, right):
    # Base case: target not found
    if left > right:
        return NIL
    
    # Find middle element
    middle = floor((left + right) / 2)
    
    # Base case: target found
    if array[middle] == target:
        return middle
    
    # Recursive cases
    if array[middle] > target:
        return BINARY-SEARCH(array, target, left, middle - 1)
    else:
        return BINARY-SEARCH(array, target, middle + 1, right)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Base Case:</span> Define
        stopping condition
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Divide:</span> Break problem
        into subproblems
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Conquer:</span> Solve
        subproblems recursively
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Merge
        subproblem solutions
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Factorial</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`FACTORIAL(5):
5 * FACTORIAL(4)
    4 * FACTORIAL(3)
        3 * FACTORIAL(2)
            2 * FACTORIAL(1)
                1
            = 2
        = 6
    = 24
= 120`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Fibonacci</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`FIBONACCI(5):
F(5) = F(4) + F(3)
    F(4) = F(3) + F(2)
        F(3) = F(2) + F(1)
            F(2) = F(1) + F(0)
                F(1) = 1
                F(0) = 0
            = 1
            F(1) = 1
        = 2
        F(2) = 1
    = 3
    F(3) = 2
= 5`}
      </pre>
    </div>
  </div>
);
