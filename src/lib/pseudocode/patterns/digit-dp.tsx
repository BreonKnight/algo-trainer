import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const DigitDPPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Digit Dynamic Programming</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(d·s·t) &nbsp;|&nbsp; Space: O(d·s·t) &nbsp;|&nbsp; Use: Count numbers with digit
      constraints
    </div>

    <PseudocodeDisplay
      code={`DIGIT-DP(n, k)
    let digits[1‥d] be a new array
    let i ← 1
    while n > 0
        do digits[i] ← n mod 10
            n ← ⌊n/10⌋
            i ← i + 1
    let d ← i - 1
    let dp[0‥d][0‥k][0‥1] be a new array
    return COUNT-DIGITS(digits, d, k, 0, TRUE)

COUNT-DIGITS(digits, pos, sum, tight, leading_zero)
    if pos = 0
        then if sum = 0 and not leading_zero
                then return 1
                else return 0
    if dp[pos][sum][tight] ≠ -1
        then return dp[pos][sum][tight]

    let limit ← if tight then digits[pos] else 9
    let count ← 0

    for i ← 0 to limit
        do let new_tight ← tight and (i = limit)
            let new_leading ← leading_zero and (i = 0)
            let new_sum ← sum - i
            if new_sum ≥ 0
                then count ← count + COUNT-DIGITS(digits, pos-1, new_sum, new_tight, new_leading)

    dp[pos][sum][tight] ← count
    return count

// Example:
// Input: n = 123, k = 6
//
// digits = [3, 2, 1]
// d = 3
//
// Initial call: pos = 3, sum = 6, tight = TRUE, leading_zero = TRUE
//
// For i = 0:
//   new_tight = FALSE, new_leading = TRUE
//   new_sum = 6
//   Recursive call with pos = 2
//
// For i = 1:
//   new_tight = TRUE, new_leading = FALSE
//   new_sum = 5
//   Recursive call with pos = 2
//
// ... (continues for all digits)
//
// Output: Number of numbers ≤ 123 with digit sum = 6`}
    />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Preprocess: Convert number to digits array</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Memoize: Store results for digit positions and constraints</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Count: Recursively count valid numbers with digit constraints</span>
      </div>
    </div>
  </div>
);
