import { AlgorithmPattern } from "../../types";

export const hungarianAlgorithmPattern: AlgorithmPattern = {
  title: "Hungarian Algorithm",
  description:
    "An algorithm for solving the assignment problem in polynomial time. It finds the optimal assignment of workers to jobs that minimizes the total cost. The algorithm uses a combination of row and column operations to find the optimal solution.",
  timeComplexity: "O(n³) where n is the number of workers/jobs",
  spaceComplexity: "O(n²)",
  category: "Graph",
  pseudocode: `
1. Subtract minimum of each row from all elements in that row
2. Subtract minimum of each column from all elements in that column
3. Cover all zeros with minimum number of lines
4. While number of lines < n:
   a. Find minimum uncovered element
   b. Subtract it from all uncovered elements
   c. Add it to elements covered by two lines
   d. Repeat step 3
5. Find optimal assignment using zeros
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
- Cover row 1 and column 3

Step 4: Adjust matrix
- Min uncovered element: 50
- Subtract from uncovered elements
- Add to double-covered elements

Final assignment:
Worker 1 -> Job 2 (400)
Worker 2 -> Job 3 (350)
Worker 3 -> Job 1 (200)
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
        
        # Step 4: Adjust matrix
        min_uncovered = find_min_uncovered(cost_matrix, lines)
        for i in range(n):
            for j in range(n):
                if not is_covered(i, j, lines):
                    cost_matrix[i][j] -= min_uncovered
                elif is_double_covered(i, j, lines):
                    cost_matrix[i][j] += min_uncovered
    
    # Step 5: Find optimal assignment
    return find_assignment(cost_matrix)

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
            for j in range(n):
                matrix[max_index][j] = float('inf')
        else:
            lines.append(('col', max_index))
            for i in range(n):
                matrix[i][max_index] = float('inf')
    
    return lines

def find_min_uncovered(matrix, lines):
    n = len(matrix)
    min_val = float('inf')
    
    for i in range(n):
        for j in range(n):
            if not is_covered(i, j, lines):
                min_val = min(min_val, matrix[i][j])
    
    return min_val

def is_covered(i, j, lines):
    return any(line[0] == 'row' and line[1] == i or 
               line[0] == 'col' and line[1] == j for line in lines)

def is_double_covered(i, j, lines):
    return sum(1 for line in lines if 
               (line[0] == 'row' and line[1] == i) or 
               (line[0] == 'col' and line[1] == j)) == 2

def find_assignment(matrix):
    n = len(matrix)
    assignment = []
    
    # Find zeros and make assignments
    for i in range(n):
        for j in range(n):
            if matrix[i][j] == 0:
                assignment.append((i, j))
                break
    
    return assignment

# Example usage
cost_matrix = [
    [250, 400, 350],
    [400, 600, 350],
    [200, 400, 250]
]

assignment = hungarian_algorithm(cost_matrix)
total_cost = sum(cost_matrix[i][j] for i, j in assignment)
print(f"Optimal assignment: {assignment}")
print(f"Total cost: {total_cost}")`,
  keySteps: [
    "Subtract minimum values from rows and columns",
    "Cover all zeros with minimum number of lines",
    "Adjust matrix based on uncovered elements",
    "Repeat until optimal assignment is found",
    "Return the optimal assignment and total cost",
  ],
};
