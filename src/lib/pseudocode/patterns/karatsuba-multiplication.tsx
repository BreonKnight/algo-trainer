import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const KaratsubaMultiplicationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Karatsuba Multiplication
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(n^log₂3) ≈ O(n^1.585) &nbsp;|&nbsp; Space: O(log n) &nbsp;|&nbsp; Use: Fast
      multiplication of large integers
    </div>

    <PseudocodeDisplay
      code={`KARATSUBA(x, y):
    n ← max(length(x), length(y))
    if n ≤ 1:
        return x × y
    
    // Split numbers into high and low parts
    m ← ⌈n/2⌉
    x₁ ← x div 10^m
    x₀ ← x mod 10^m
    y₁ ← y div 10^m
    y₀ ← y mod 10^m
    
    // Recursive calls
    z₂ ← KARATSUBA(x₁, y₁)
    z₀ ← KARATSUBA(x₀, y₀)
    z₁ ← KARATSUBA(x₁ + x₀, y₁ + y₀) - z₂ - z₀
    
    // Combine results
    return z₂ × 10^(2m) + z₁ × 10^m + z₀

// Example:
// Input: x = 1234, y = 5678
//
// Split:
// x₁ = 12, x₀ = 34
// y₁ = 56, y₀ = 78
//
// Recursive calls:
// z₂ = KARATSUBA(12, 56) = 672
// z₀ = KARATSUBA(34, 78) = 2652
// z₁ = KARATSUBA(46, 134) - 672 - 2652 = 6164 - 672 - 2652 = 2840
//
// Combine:
// 672 × 10⁴ + 2840 × 10² + 2652 = 7,006,652`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Divide-and-conquer algorithm for integer multiplication</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Reduces number of multiplications from 4 to 3</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>More efficient than traditional O(n²) multiplication</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Recurrence: T(n) = 3T(n/2) + O(n)</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Master Theorem: a=3, b=2, f(n)=O(n)</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Solution: O(n^log₂3) ≈ O(n^1.585)</span>
        </div>
      </div>
    </div>
  </div>
);
