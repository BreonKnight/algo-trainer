import { AlgorithmPattern } from "../../types";

export const backtrackingPattern: AlgorithmPattern = {
  title: "Backtracking Algorithm Pattern",
  description:
    "A general algorithmic technique that considers searching every possible combination in order to solve a computational problem, abandoning each partial candidate ('backtracking') that cannot possibly be completed to a valid solution.",
  timeComplexity:
    "Usually exponential O(b^d) where b is branching factor and d is depth",
  spaceComplexity: "O(d) where d is the maximum depth of recursion",
  pseudocode: `1. Define base cases for valid/invalid solutions\n2. For each possible choice:\n   a. Make choice\n   b. Recursively try to solve rest of problem\n   c. If solution found, return it\n   d. Else, undo choice (backtrack)\n3. Return false if no solution possible`,
  example: `Problem: N-Queens (n=4)
    Board:
    . . . .
    . . . .
    . . . .
    . . . .
    
    Try Q at (0,0):
    Q . . .
    . . Q .
    . Q . .
    . . . Q
    
    Solution found!`,
  implementation: `def backtrack(candidates, path, result):
        if is_solution(path):
                result.append(path[:])
                return
            
        for candidate in candidates:
            if is_valid(path, candidate):
                # Make choice
                path.append(candidate)
                
                # Recurse
                backtrack(candidates, path, result)
                
                # Undo choice
                path.pop()
                
    def solve_backtracking(input):
        result = []
        backtrack(get_candidates(input), [], result)
        return result`,
  category: "Backtracking",
};
