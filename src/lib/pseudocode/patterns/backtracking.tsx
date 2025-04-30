import { ChevronRight } from "lucide-react";

export const BacktrackingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Backtracking</span>
      <span className="ml-2 text-xs text-secondary">(Search Technique)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(2ⁿ) &nbsp;|&nbsp; Space: O(n) &nbsp;|&nbsp; Use: Finding all
      possible solutions
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`// Generate all possible combinations
BACKTRACKING(current, choices, result):
    # If current solution is complete
    if is_solution(current):
        # Add to results
        result.append(current.copy())
        return
    
    # Try each possible choice
    for each choice in choices:
        # If choice is valid
        if is_valid(choice):
            # Make choice
            current.append(choice)
            # Remove choice from available options
            choices.remove(choice)
            
            # Explore further
            BACKTRACKING(current, choices, result)
            
            # Undo choice (backtrack)
            current.remove(choice)
            choices.append(choice)`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Check:</span> Verify if
        solution is complete
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Choose:</span> Select next
        valid option
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Explore:</span> Recursively
        try next choices
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Backtrack:</span> Undo
        choice and try alternatives
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Permutations of [1, 2, 3]
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Step 1: Start with empty current []
Choices: [1, 2, 3]

Step 2: Choose 1
Current: [1]
Choices: [2, 3]

Step 3: Choose 2
Current: [1, 2]
Choices: [3]

Step 4: Choose 3
Current: [1, 2, 3] → Add to results
Backtrack to [1, 2]

Step 5: Backtrack to [1]
Choose 3
Current: [1, 3]
Choices: [2]

... and so on

Final results:
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: N-Queens Problem
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Board size: 4x4

Step 1: Place queen in row 1, column 1
Q . . .
. . . .
. . . .
. . . .

Step 2: Try placing queen in row 2, column 3
Q . . .
. . Q .
. . . .
. . . .

Step 3: No valid position in row 3
Backtrack to step 2

Step 4: Try placing queen in row 2, column 4
Q . . .
. . . Q
. . . .
. . . .

... and so on

Valid solution:
. Q . .
. . . Q
Q . . .
. . Q .`}
      </pre>
    </div>
  </div>
);
