import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

export const ShellSortPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
        Shell Sort
      </span>
      <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log² n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Optimized insertion sort with
      gap sequence
    </div>

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
);
