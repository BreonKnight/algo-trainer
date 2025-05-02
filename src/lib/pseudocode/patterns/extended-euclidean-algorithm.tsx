import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const ExtendedEuclideanAlgorithmPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Extended Euclidean Algorithm
      </span>
      <span className="ml-2 text-xs text-secondary">(Number Theory)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log min(a,b)) &nbsp;|&nbsp; Space: O(log min(a,b)) &nbsp;|&nbsp;
      Use: Find GCD and Bézout coefficients
    </div>

    <PseudocodeDisplay code={`# Extended Euclidean Algorithm
# Input: Integers a, b
# Output: Tuple (d, x, y) where d = gcd(a,b) and ax + by = d

Algorithm EXTENDED-EUCLID(a, b)
    if b = 0 then
        return (a, 1, 0)
    end if
    
    (d', x', y') ← EXTENDED-EUCLID(b, a mod b)
    d ← d'
    x ← y'
    y ← x' - ⌊a/b⌋ · y'
    return (d, x, y)

# Example:
# Input: a = 30, b = 18
# 
# Step 1: a = 30, b = 18
#         a mod b = 12
#         Recursive call: a = 18, b = 12
# 
# Step 2: a = 18, b = 12
#         a mod b = 6
#         Recursive call: a = 12, b = 6
# 
# Step 3: a = 12, b = 6
#         a mod b = 0
#         Base case: return (6, 1, 0)
# 
# Step 4: Back to Step 2
#         d = 6, x = 0, y = 1 - ⌊18/12⌋·0 = 1
#         return (6, 0, 1)
# 
# Step 5: Back to Step 1
#         d = 6, x = 1, y = 0 - ⌊30/18⌋·1 = -1
#         return (6, 1, -1)
# 
# Output: (6, 1, -1)
# 
# Verification:
# 6 = 30·1 + 18·(-1)`} />

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Base case: Return GCD and coefficients when b = 0</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Recursively compute GCD and coefficients</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Update coefficients using floor division</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return GCD and Bézout coefficients</span>
      </div>
    </div>

    <div className="mt-4 mb-2">
      <span className="text-accent font-bold">Monster Hunter Guide:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Title: Resource Distribution Among Hunters</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Description: Finding integer solutions to equations for fair resource
          distribution
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Example: Distributing 30 potions and 18 antidotes among hunters
        </span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>
          Tips: Use GCD to find optimal distribution, verify solutions
        </span>
      </div>
    </div>
  </div>
);
