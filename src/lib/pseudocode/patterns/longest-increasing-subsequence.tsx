import { PatternComponent } from "@/lib/pseudocode/types";
import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

const LongestIncreasingSubsequencePattern: PatternComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
          Longest Increasing Subsequence
        </span>
        <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
        <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
      </div>
      <div className="mt-4 text-sm text-secondary">
        <p>Find the length of the longest strictly increasing subsequence in an array</p>
        <p>Time: O(n log n) using binary search, O(n²) using dynamic programming</p>
        <p>Space: O(n) for storing the dp array or patience sorting array</p>
        <p>Use: Finding optimal sequences, pattern matching, data analysis</p>
      </div>
      <div className="mt-4 w-full">
        <PseudocodeDisplay
          code={`def lengthOfLIS(nums):
    if not nums:
        return 0
    
    # dp[i] represents the length of LIS ending at index i
    dp = [1] * len(nums)
    
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

# Binary search approach (O(n log n))
def lengthOfLIS_optimized(nums):
    if not nums:
        return 0
    
    # dp[i] represents the smallest tail of all increasing subsequences of length i+1
    dp = []
    
    for num in nums:
        # Find the first number in dp that is greater than or equal to num
        i = bisect.bisect_left(dp, num)
        if i == len(dp):
            dp.append(num)
        else:
            dp[i] = num
    
    return len(dp)`}
        />
      </div>
      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Initialize dp array with 1s (each element is a subsequence of length 1)</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>For each element, check all previous elements for increasing sequence</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Update dp[i] if a longer increasing subsequence is found</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Return the maximum value in dp array</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongestIncreasingSubsequencePattern;
