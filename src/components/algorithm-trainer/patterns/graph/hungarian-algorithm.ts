import { AlgorithmPattern } from "../../types";

export const hungarianAlgorithmPattern: AlgorithmPattern = {
  title: "Hungarian Algorithm",
  description:
    "An algorithm for solving the assignment problem, which finds the optimal assignment of tasks to workers with minimum cost.",
  timeComplexity: "O(n³)",
  spaceComplexity: "O(n²)",
  category: "Graph",
  pseudocode: `HUNGARIAN-ALGORITHM(cost_matrix)
1  n = cost_matrix.rows
2  // Step 1: Subtract row minima
3  for i = 1 to n
4      min_val = min(cost_matrix[i])
5      for j = 1 to n
6          cost_matrix[i][j] = cost_matrix[i][j] - min_val
7  // Step 2: Subtract column minima
8  for j = 1 to n
9      min_val = min(cost_matrix[i][j] for i = 1 to n)
10     for i = 1 to n
11         cost_matrix[i][j] = cost_matrix[i][j] - min_val
12 // Step 3: Find initial assignment
13 assignment = [-1] * n
14 row_covered = [False] * n
15 col_covered = [False] * n
16 while True
17     // Find uncovered zero
18     i, j = FIND-ZERO(cost_matrix, row_covered, col_covered)
19     if i == -1
20         break
21     // Star the zero
22     assignment[j] = i
23     row_covered[i] = True
24     col_covered[j] = True
25     // If all rows are covered, we're done
26     if all(row_covered)
27         break
28     // Find minimum uncovered value
29     min_val = ∞
30     for i = 1 to n
31         if not row_covered[i]
32             for j = 1 to n
33                 if not col_covered[j]
34                     min_val = min(min_val, cost_matrix[i][j])
35     // Adjust matrix
36     for i = 1 to n
37         if row_covered[i]
38             for j = 1 to n
39                 cost_matrix[i][j] = cost_matrix[i][j] + min_val
40         if not col_covered[j]
41             for i = 1 to n
42                 cost_matrix[i][j] = cost_matrix[i][j] - min_val
43 // Calculate total cost
44 total_cost = 0
45 for j = 1 to n
46     i = assignment[j]
47     total_cost = total_cost + cost_matrix[i][j]
48 return total_cost, assignment

FIND-ZERO(cost_matrix, row_covered, col_covered)
1  for i = 1 to cost_matrix.rows
2      for j = 1 to cost_matrix.cols
3          if cost_matrix[i][j] == 0 and not row_covered[i] and not col_covered[j]
4              return i, j
5  return -1, -1`,
  example: `Cost matrix:
[3, 5, 7]
[2, 4, 6]
[3, 5, 8]

Optimal assignment:
Worker 1 -> Task 2 (cost 2)
Worker 2 -> Task 1 (cost 2)
Worker 3 -> Task 3 (cost 3)
Total cost: 7`,
  implementation: `def hungarian_algorithm(cost_matrix: list[list[int]]) -> tuple[int, list[int]]:
    """
    Solve the assignment problem using the Hungarian algorithm.
    
    Args:
        cost_matrix: n x n matrix of costs
    
    Returns:
        Tuple containing:
        - Minimum total cost
        - List of assignments (worker -> task)
    """
    n = len(cost_matrix)
    
    # Step 1: Subtract row minima
    for i in range(n):
        min_val = min(cost_matrix[i])
        for j in range(n):
            cost_matrix[i][j] -= min_val
    
    # Step 2: Subtract column minima
    for j in range(n):
        min_val = min(cost_matrix[i][j] for i in range(n))
        for i in range(n):
            cost_matrix[i][j] -= min_val
    
    # Step 3: Find initial assignment
    assignment = [-1] * n
    row_covered = [False] * n
    col_covered = [False] * n
    
    def find_zero() -> tuple[int, int]:
        for i in range(n):
            for j in range(n):
                if cost_matrix[i][j] == 0 and not row_covered[i] and not col_covered[j]:
                    return i, j
        return -1, -1
    
    def find_star_in_row(row: int) -> int:
        for j in range(n):
            if assignment[j] == row:
                return j
        return -1
    
    def find_star_in_col(col: int) -> int:
        for i in range(n):
            if assignment[col] == i:
                return i
        return -1
    
    def find_prime_in_row(row: int) -> int:
        for j in range(n):
            if cost_matrix[row][j] == 0 and not col_covered[j]:
                return j
        return -1
    
    # Main loop
    while True:
        # Find uncovered zero
        i, j = find_zero()
        if i == -1:
            break
        
        # Star the zero
        assignment[j] = i
        row_covered[i] = True
        col_covered[j] = True
        
        # If all rows are covered, we're done
        if all(row_covered):
            break
        
        # Find minimum uncovered value
        min_val = float('inf')
        for i in range(n):
            if not row_covered[i]:
                for j in range(n):
                    if not col_covered[j]:
                        min_val = min(min_val, cost_matrix[i][j])
        
        # Adjust matrix
        for i in range(n):
            if row_covered[i]:
                for j in range(n):
                    cost_matrix[i][j] += min_val
            if not col_covered[j]:
                for i in range(n):
                    cost_matrix[i][j] -= min_val
    
    # Calculate total cost
    total_cost = 0
    for j in range(n):
        i = assignment[j]
        total_cost += cost_matrix[i][j]
    
    return total_cost, assignment

# Example usage
cost_matrix = [
    [3, 5, 7],
    [2, 4, 6],
    [3, 5, 8]
]

total_cost, assignment = hungarian_algorithm(cost_matrix)
print(f"Minimum total cost: {total_cost}")
print(f"Assignments: {assignment}")`,
};
