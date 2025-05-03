import { AlgorithmPattern } from "../../types/pattern-types";

export const hungarianAlgorithmPattern: AlgorithmPattern = {
  title: "Hungarian Algorithm",
  description:
    "An algorithm for solving the assignment problem in polynomial time. It finds the minimum cost matching in a bipartite graph where each edge has a non-negative cost.",
  timeComplexity: "O(n³)",
  spaceComplexity: "O(n²)",
  category: "Graph",
  pseudocode: `
1. Subtract the smallest element in each row from all elements in that row
2. Subtract the smallest element in each column from all elements in that column
3. Cover all zeros with minimum number of lines
4. If number of lines equals n, we have optimal assignment
5. Else:
   a. Find smallest uncovered element
   b. Subtract it from all uncovered elements
   c. Add it to all elements covered by two lines
   d. Go back to step 3
  `,
  example: `Input cost matrix:
[
  [250, 400, 350],
  [400, 600, 350],
  [200, 400, 250]
]

Step 1: Subtract row minimums
[
  [0, 150, 100],
  [50, 250, 0],
  [0, 200, 50]
]

Step 2: Subtract column minimums
[
  [0, 0, 100],
  [50, 100, 0],
  [0, 50, 50]
]

Step 3: Cover zeros with minimum lines
Lines: 2 (less than n=3)

Step 4: Find minimum uncovered element (50)
Adjust matrix:
[
  [0, 0, 150],
  [0, 50, 0],
  [0, 0, 50]
]

Final assignment:
Worker 1 -> Job 2
Worker 2 -> Job 3
Worker 3 -> Job 1
Total cost: 950`,
  implementation: `def hungarian_algorithm(cost_matrix):
    n = len(cost_matrix)
    
    # Step 1: Subtract row minimums
    for i in range(n):
        min_val = min(cost_matrix[i])
        for j in range(n):
            cost_matrix[i][j] -= min_val
    
    # Step 2: Subtract column minimums
    for j in range(n):
        min_val = min(cost_matrix[i][j] for i in range(n))
        for i in range(n):
            cost_matrix[i][j] -= min_val
    
    # Step 3: Cover zeros with minimum lines
    while True:
        # Find minimum number of lines to cover all zeros
        lines = cover_zeros(cost_matrix)
        if len(lines) == n:
            break
        
        # Find minimum uncovered element
        min_uncovered = float('inf')
        for i in range(n):
            for j in range(n):
                if not is_covered(i, j, lines):
                    min_uncovered = min(min_uncovered, cost_matrix[i][j])
        
        # Adjust matrix
        for i in range(n):
            for j in range(n):
                if not is_covered(i, j, lines):
                    cost_matrix[i][j] -= min_uncovered
                elif is_double_covered(i, j, lines):
                    cost_matrix[i][j] += min_uncovered
    
    # Find optimal assignment
    assignment = find_assignment(cost_matrix)
    return assignment

def cover_zeros(matrix):
    n = len(matrix)
    lines = []
    
    # Try to cover with minimum lines
    while True:
        # Find row or column with most zeros
        max_zeros = -1
        max_index = -1
        is_row = True
        
        # Check rows
        for i in range(n):
            zeros = sum(1 for j in range(n) if matrix[i][j] == 0)
            if zeros > max_zeros:
                max_zeros = zeros
                max_index = i
        
        # Check columns
        for j in range(n):
            zeros = sum(1 for i in range(n) if matrix[i][j] == 0)
            if zeros > max_zeros:
                max_zeros = zeros
                max_index = j
                is_row = False
        
        if max_zeros == 0:
            break
        
        if is_row:
            lines.append(('row', max_index))
        else:
            lines.append(('col', max_index))
    
    return lines

def is_covered(i, j, lines):
    return any(line[0] == 'row' and line[1] == i or line[0] == 'col' and line[1] == j for line in lines)

def is_double_covered(i, j, lines):
    return sum(1 for line in lines if (line[0] == 'row' and line[1] == i) or (line[0] == 'col' and line[1] == j)) == 2

def find_assignment(matrix):
    n = len(matrix)
    assignment = [-1] * n
    
    # Find zeros and assign
    for i in range(n):
        for j in range(n):
            if matrix[i][j] == 0 and assignment[j] == -1:
                assignment[j] = i
                break
    
    return assignment

# Example usage
cost_matrix = [
    [250, 400, 350],
    [400, 600, 350],
    [200, 400, 250]
]
assignment = hungarian_algorithm(cost_matrix)
print("Assignment:", assignment)  # Output: [2, 0, 1]`,
  keySteps: [
    "Subtract row minimums from each row",
    "Subtract column minimums from each column",
    "Cover all zeros with minimum number of lines",
    "Adjust matrix if number of lines is less than n",
    "Find optimal assignment from final matrix",
  ],
  testData: [
    {
      input: [250, 400, 350, 400, 600, 350, 200, 400, 250],
      expected: [2, 0, 1],
      description: "Basic 3x3 cost matrix",
    },
    {
      input: [10, 19, 8, 15, 10, 18, 7, 17, 13, 16, 9, 14, 12, 19, 8, 18],
      expected: [2, 1, 0, 3],
      description: "4x4 cost matrix",
    },
    {
      input: [1, 1, 1, 1],
      expected: [0, 1],
      description: "All equal costs",
    },
  ],
  explanation: `
The Hungarian Algorithm is a combinatorial optimization algorithm that solves the assignment problem in polynomial time. It works by transforming the cost matrix through a series of operations to find the optimal assignment.

Key Concepts:
1. Cost Matrix Transformation:
   - Subtract row minimums to create at least one zero in each row
   - Subtract column minimums to create at least one zero in each column
   - These operations preserve the optimal assignment

2. Zero Covering:
   - Cover all zeros with minimum number of lines (rows or columns)
   - If number of lines equals matrix size, optimal assignment exists
   - Otherwise, adjust matrix and repeat

3. Matrix Adjustment:
   - Find minimum uncovered element
   - Subtract it from all uncovered elements
   - Add it to elements covered by two lines
   - This creates new zeros while preserving optimality

4. Assignment:
   - Once optimal matrix is found, assign workers to jobs
   - Each assignment corresponds to a zero in the final matrix
   - Total cost is minimized

Time Complexity: O(n³)
- Each iteration takes O(n²) time
- Number of iterations is O(n)
- Overall complexity is O(n³)

Space Complexity: O(n²)
- Need to store the cost matrix
- Additional O(n) space for lines and assignments

Advantages:
- Guaranteed to find optimal solution
- Polynomial time complexity
- Works for any cost matrix with non-negative entries

Limitations:
- Requires square matrix
- All costs must be non-negative
- Not suitable for very large matrices due to cubic time complexity

Use Cases:
- Job assignment problems
- Resource allocation
- Matching problems in bipartite graphs
- Any problem that can be modeled as an assignment problem
  `,
};
