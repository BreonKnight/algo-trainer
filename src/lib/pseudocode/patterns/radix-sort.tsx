import { ChevronRight } from "lucide-react";

export const RadixSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Radix Sort</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(d(n+k)) &nbsp;|&nbsp; Space: O(n+k) &nbsp;|&nbsp; Use: Sorting
      numbers with fixed number of digits
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Standard Radix Sort
RADIX-SORT(A):
    # Find maximum number to know number of digits
    max_num = max(A)
    exp = 1
    
    # Do counting sort for every digit
    while max_num // exp > 0:
        COUNTING-SORT-BY-DIGIT(A, exp)
        exp *= 10

COUNTING-SORT-BY-DIGIT(A, exp):
    n = len(A)
    output = [0] * n
    count = [0] * 10
    
    # Store count of occurrences
    for i in range(n):
        index = (A[i] // exp) % 10
        count[index] += 1
    
    # Change count[i] to position of digit
    for i in range(1, 10):
        count[i] += count[i-1]
    
    # Build output array
    for i in range(n-1, -1, -1):
        index = (A[i] // exp) % 10
        output[count[index]-1] = A[i]
        count[index] -= 1
    
    # Copy output to A
    for i in range(n):
        A[i] = output[i]

// Radix Sort with MSD (Most Significant Digit)
RADIX-SORT-MSD(A):
    # Find maximum number to know number of digits
    max_num = max(A)
    max_digit = len(str(max_num))
    
    # Sort using MSD
    return MSD-SORT(A, max_digit)

MSD-SORT(A, digit):
    if digit == 0 or len(A) <= 1:
        return A
    
    # Create buckets for each digit
    buckets = [[] for _ in range(10)]
    
    # Distribute numbers into buckets
    for num in A:
        d = (num // (10 ** (digit-1))) % 10
        buckets[d].append(num)
    
    # Sort each bucket recursively
    result = []
    for bucket in buckets:
        if bucket:
            result.extend(MSD-SORT(bucket, digit-1))
    
    return result

// Radix Sort with Strings
RADIX-SORT-STRINGS(A):
    # Find maximum length
    max_len = max(len(s) for s in A)
    
    # Pad strings with null character
    padded = [s.ljust(max_len, '\\0') for s in A]
    
    # Sort from least significant character
    for i in range(max_len-1, -1, -1):
        COUNTING-SORT-BY-CHAR(padded, i)
    
    # Remove padding
    return [s.rstrip('\\0') for s in padded]

COUNTING-SORT-BY-CHAR(A, pos):
    n = len(A)
    output = [''] * n
    count = [0] * 256
    
    # Store count of occurrences
    for s in A:
        count[ord(s[pos])] += 1
    
    # Change count[i] to position of character
    for i in range(1, 256):
        count[i] += count[i-1]
    
    # Build output array
    for i in range(n-1, -1, -1):
        index = ord(A[i][pos])
        output[count[index]-1] = A[i]
        count[index] -= 1
    
    # Copy output to A
    for i in range(n):
        A[i] = output[i]`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Find Maximum:</span>{" "}
        Determine number of digits
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Sort:</span> Perform
        counting sort for each digit
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Combine:</span> Build sorted
        array from digit-wise sorts
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Radix Sort
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [170, 45, 75, 90, 802, 24, 2, 66]

Sort by 1's place:
[170, 90, 802, 2, 24, 45, 75, 66]

Sort by 10's place:
[802, 2, 24, 45, 66, 170, 75, 90]

Sort by 100's place:
[2, 24, 45, 66, 75, 90, 170, 802]

Output: [2, 24, 45, 66, 75, 90, 170, 802]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: MSD Radix Sort</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: [170, 45, 75, 90, 802, 24, 2, 66]

Sort by 100's place:
[2, 24, 45, 66, 75, 90, 170, 802]

Output: [2, 24, 45, 66, 75, 90, 170, 802]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: String Radix Sort
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input: ["apple", "banana", "cherry", "date", "fig"]

Sort by 1st character:
["apple", "banana", "cherry", "date", "fig"]

Sort by 2nd character:
["apple", "banana", "cherry", "date", "fig"]

Sort by 3rd character:
["apple", "banana", "cherry", "date", "fig"]

Output: ["apple", "banana", "cherry", "date", "fig"]`}
      </pre>
    </div>
  </div>
);
