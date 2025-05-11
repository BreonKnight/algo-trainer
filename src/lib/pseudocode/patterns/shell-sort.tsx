import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const ShellSortPattern = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Shell Sort
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mt-4 text-sm text-secondary">
      <p>An optimization of insertion sort that allows the exchange of items that are far apart</p>
      <p>Time: O(n log² n) average case, depends on gap sequence</p>
      <p>Space: O(1) in-place sorting algorithm</p>
      <p>Use: Optimized insertion sort with gap sequence, good for medium-sized arrays</p>
    </div>
    <div className="mt-4 w-full">
      <PseudocodeDisplay
        code={`# Shell Sort: An optimization of insertion sort using gap sequence
# Input: Array A[1..n]
# Output: Sorted array A

Algorithm SHELL-SORT(A)
    n ← length[A]
    
    # Start with a large gap, then reduce it
    gap ← ⌊n/2⌋
    
    while gap > 0 do
        # Do insertion sort for elements at positions i, i+gap, i+2*gap, ...
        for i ← gap + 1 to n do
            temp ← A[i]
            j ← i
            
            # Shift earlier gap-sorted elements up until correct location
            while j ≥ gap and A[j - gap] > temp do
                A[j] ← A[j - gap]
                j ← j - gap
            end while
            
            # Put temp in its correct location
            A[j] ← temp
        end for
        
        # Reduce the gap
        gap ← ⌊gap/2⌋
    end while

# Example:
# Input: A = [12, 34, 54, 2, 3]
#
# Step 1: gap = 2
# [12, 34, 54, 2, 3] → [12, 2, 54, 34, 3]
#
# Step 2: gap = 1
# [12, 2, 54, 34, 3] → [2, 3, 12, 34, 54]`}
      />
    </div>
    <div className="mt-4 w-full">
      <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
      <div className="space-y-2">
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Initialize gap sequence starting with n/2</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Perform insertion sort on elements separated by gap</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Reduce gap size and repeat until gap is 1</span>
        </div>
        <div className="flex items-start">
          <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
          <span>Final pass with gap=1 is a standard insertion sort</span>
        </div>
      </div>
    </div>
  </div>
);
