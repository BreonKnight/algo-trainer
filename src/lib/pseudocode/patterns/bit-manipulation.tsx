import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const BitManipulationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Bit Manipulation
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Efficient bit-level operations
    </div>

    <PseudocodeDisplay
      code={`// Basic Operations
AND(x, y):     return x & y
OR(x, y):      return x | y
XOR(x, y):     return x ^ y
NOT(x):        return ~x
LEFT-SHIFT(x, n):  return x << n
RIGHT-SHIFT(x, n): return x >> n

// Count Set Bits
COUNT-BITS(x):
  count = 0
  while x > 0:
    count += x & 1
    x = x >> 1
  return count

// Check Power of Two
IS-POWER-OF-TWO(x):
  return x > 0 and (x & (x - 1)) == 0

// Find Single Number
SINGLE-NUMBER(A):
  result = 0
  for num in A:
    result ^= num
  return result

// Swap Without Temp
SWAP(x, y):
  x = x ^ y
  y = x ^ y
  x = x ^ y
  return (x, y)

// Add Without Plus
ADD(x, y):
  while y != 0:
    carry = x & y
    x = x ^ y
    y = carry << 1
  return x`}
    />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Basic:</span> AND, OR, XOR, NOT operations
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Shift:</span> Left and right bit shifts
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Advanced:</span> Bit counting, power checks
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Basic Operations</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`x = 5 (0101)
y = 3 (0011)

AND:  0101 & 0011 = 0001 (1)
OR:   0101 | 0011 = 0111 (7)
XOR:  0101 ^ 0011 = 0110 (6)
NOT:  ~0101 = 1010 (-6)
Left Shift:  0101 << 1 = 1010 (10)
Right Shift: 0101 >> 1 = 0010 (2)`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Count Bits</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`x = 13 (1101)
Count steps:
1101 & 1 = 1, count = 1
110 >> 1 = 110
110 & 1 = 0, count = 1
11 >> 1 = 11
11 & 1 = 1, count = 2
1 >> 1 = 1
1 & 1 = 1, count = 3
Total set bits: 3`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Single Number</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [4, 1, 2, 1, 2]
XOR steps:
result = 0
result ^ 4 = 4
result ^ 1 = 5
result ^ 2 = 7
result ^ 1 = 6
result ^ 2 = 4
Single number: 4`}
      </pre>
    </div>
  </div>
);
