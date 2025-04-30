import { ChevronRight } from "lucide-react";

export const RadixSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Radix Sort</span>
      <span className="ml-2 text-xs text-secondary">(Sorting Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(d(n + k)) &nbsp;|&nbsp; Space: O(n + k) &nbsp;|&nbsp; Use: Integer
      sorting with multiple digits
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`RADIX-SORT(A, d):
    // A[1..n] is input array, d is number of digits
    for i = 1 to d:
        // Use a stable sort to sort array A on digit i
        A = COUNTING-SORT(A, i)

// Helper function to get digit at position i
DIGIT(A[j], i):
    return (A[j] / 10^(i-1)) mod 10`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Digit:</span> Sort by least
        significant digit
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Stable:</span> Use stable
        sorting algorithm
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Advance:</span> Move to next
        significant digit
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Repeat:</span> Continue
        until all digits processed
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: A = [329, 457, 657, 839, 436, 720, 355], d = 3

Step 1: Sort by 1st digit (units place)
[720, 355, 436, 457, 657, 329, 839]

Step 2: Sort by 2nd digit (tens place)
[720, 329, 436, 839, 355, 457, 657]

Step 3: Sort by 3rd digit (hundreds place)
[329, 355, 436, 457, 657, 720, 839]

Output: [329, 355, 436, 457, 657, 720, 839]`}
      </pre>
    </div>
  </div>
);
