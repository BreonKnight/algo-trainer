import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const TwoPointersPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Two Pointers</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Finding pairs or
      subarrays that satisfy certain conditions
    </div>

    <PseudocodeDisplay code={`// Two sum
TWO-SUM(A, target):
    left = 0
    right = A.length - 1
    while left < right:
        sum = A[left] + A[right]
        if sum == target:
            return [left, right]
        else if sum < target:
            left += 1
        else:
            right -= 1
    return NIL

// Remove duplicates
REMOVE-DUPLICATES(A):
    if A.length == 0:
        return 0
    slow = 0
    for fast = 1 to A.length-1:
        if A[fast] != A[slow]:
            slow += 1
            A[slow] = A[fast]
    return slow + 1

// Container with most water
MAX-AREA(height):
    left = 0
    right = height.length - 1
    max_area = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_area

// Three sum
THREE-SUM(A, target):
    sort(A)
    result = []
    for i = 0 to A.length-2:
        if i > 0 and A[i] == A[i-1]:
            continue
        left = i + 1
        right = A.length - 1
        while left < right:
            sum = A[i] + A[left] + A[right]
            if sum == target:
                result.append([A[i], A[left], A[right]])
                while left < right and A[left] == A[left+1]:
                    left += 1
                while left < right and A[right] == A[right-1]:
                    right -= 1
                left += 1
                right -= 1
            else if sum < target:
                left += 1
            else:
                right -= 1
    return result`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set
        pointers at appropriate positions
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Move:</span> Adjust pointers
        based on comparison
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Terminate:</span> Stop when
        pointers meet or cross
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example: Two Sum</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [2, 7, 11, 15]
target = 9
Pointers:
left = 0 (2), right = 3 (15) → sum = 17 > 9
left = 0 (2), right = 2 (11) → sum = 13 > 9
left = 0 (2), right = 1 (7) → sum = 9
Result: [0, 1]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Remove Duplicates
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`A = [1, 1, 2, 2, 2, 3, 4, 4]
Pointers:
slow = 0, fast = 1 → A[1] == A[0]
slow = 0, fast = 2 → A[2] != A[0] → A[1] = 2
slow = 1, fast = 3 → A[3] == A[1]
slow = 1, fast = 4 → A[4] == A[1]
slow = 1, fast = 5 → A[5] != A[1] → A[2] = 3
slow = 2, fast = 6 → A[6] != A[2] → A[3] = 4
slow = 3, fast = 7 → A[7] == A[3]
Result: [1, 2, 3, 4]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Container with Most Water
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Pointers:
left = 0 (1), right = 8 (7) → area = 8
left = 1 (8), right = 8 (7) → area = 49
left = 1 (8), right = 7 (3) → area = 18
left = 1 (8), right = 6 (8) → area = 40
left = 2 (6), right = 6 (8) → area = 24
left = 3 (2), right = 6 (8) → area = 12
left = 4 (5), right = 6 (8) → area = 15
left = 5 (4), right = 6 (8) → area = 8
Maximum area: 49`}
      </pre>
    </div>
  </div>
);
