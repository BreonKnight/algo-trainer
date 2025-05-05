import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const FastFourierTransformPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Fast Fourier Transform</span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Polynomial multiplication
    </div>

    <PseudocodeDisplay
      code={`# Fast Fourier Transform
# Input: Array a of complex numbers, length n (power of 2)
# Output: Array y of complex numbers (DFT of a)

Algorithm FFT(a, n)
    if n = 1 then
        return a

    # Split into even and odd indices
    a_even ← array of length n/2
    a_odd ← array of length n/2
    for i ← 0 to n/2 - 1 do
        a_even[i] ← a[2i]
        a_odd[i] ← a[2i + 1]
    end for

    # Recursive calls
    y_even ← FFT(a_even, n/2)
    y_odd ← FFT(a_odd, n/2)

    # Combine results
    y ← array of length n
    ω ← e^(2πi/n)
    for k ← 0 to n/2 - 1 do
        y[k] ← y_even[k] + ω^k · y_odd[k]
        y[k + n/2] ← y_even[k] - ω^k · y_odd[k]
    end for

    return y

# Inverse FFT
Algorithm IFFT(y, n)
    # Conjugate input
    for i ← 0 to n-1 do
        y[i] ← conjugate(y[i])
    end for

    # Apply FFT
    a ← FFT(y, n)

    # Conjugate and scale
    for i ← 0 to n-1 do
        a[i] ← conjugate(a[i]) / n
    end for

    return a

# Example:
# Input: a = [1, 2, 3, 4], n = 4
#
# Step 1: Split into even and odd
#         a_even = [1, 3]
#         a_odd = [2, 4]
#
# Step 2: Recursive calls
#         y_even = FFT([1, 3], 2) = [4, -2]
#         y_odd = FFT([2, 4], 2) = [6, -2]
#
# Step 3: Combine results
#         ω = e^(2πi/4) = i
#         y[0] = 4 + 6 = 10
#         y[1] = -2 + i·(-2) = -2 - 2i
#         y[2] = 4 - 6 = -2
#         y[3] = -2 - i·(-2) = -2 + 2i
#
# Output: [10, -2-2i, -2, -2+2i]`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Split input into even and odd indices</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recursively compute FFT on halves</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Combine results using roots of unity</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Inverse FFT uses conjugation and scaling</span>
      </div>
    </div>
  </div>
);
