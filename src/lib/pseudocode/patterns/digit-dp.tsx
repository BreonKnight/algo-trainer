import { ChevronRight } from "lucide-react";

import { PseudocodeDisplay } from "@/src/lib/pseudocode/PseudocodeDisplay";

export const DigitDPPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Digit Dynamic Programming
      </span>
    </div>
    <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto" />
    <div className="mb-2 text-xs text-secondary">
      Time: O(d * s * b) &nbsp;|&nbsp; Space: O(d * s) &nbsp;|&nbsp; Use: Number range problems
    </div>

    <PseudocodeDisplay
      code={`DIGIT-DP(low, high, condition):
    // low and high are the range boundaries
    // condition is a function that checks digit constraints
    // Returns count of numbers in range satisfying condition
    
    function COUNT(n):
        digits ← convert n to array of digits
        d ← length(digits)
        dp[d][s][tight] ← -1  // Initialize memoization table
        
        function SOLVE(pos, sum, tight):
            if pos = d:
                return 1 if condition(sum) else 0
            
            if dp[pos][sum][tight] ≠ -1:
                return dp[pos][sum][tight]
            
            limit ← digits[pos] if tight else 9
            count ← 0
            
            for digit ← 0 to limit:
                new_tight ← tight and (digit = limit)
                new_sum ← sum + digit
                if condition(new_sum):
                    count ← count + SOLVE(pos + 1, new_sum, new_tight)
            
            dp[pos][sum][tight] ← count
            return count
        
        return SOLVE(0, 0, true)
    
    return COUNT(high) - COUNT(low - 1)

// Example: Count numbers with digit sum = target
// Range: [1, 1000], target = 10
//
// For number 123:
// pos=0: digit=1, sum=1, tight=true
// pos=1: digit=2, sum=3, tight=true
// pos=2: digit=3, sum=6, tight=true
//
// For number 910:
// pos=0: digit=9, sum=9, tight=true
// pos=1: digit=1, sum=10, tight=true
// pos=2: digit=0, sum=10, tight=false`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Properties:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Efficiently solves number range problems</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Uses digit-by-digit processing with memoization</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Handles constraints on digits and their properties</span>
      </div>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Complexity Analysis:</span>
      <div className="mt-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Time: O(d * s * b) - where d is digits, s is sum range, b is base</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Space: O(d * s) - for memoization table</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Efficient for large number ranges with digit constraints</span>
        </div>
      </div>
    </div>
  </div>
);
