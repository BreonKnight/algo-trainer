import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const matrixOperationsPattern: AlgorithmPattern = {
  title: "Matrix Operations",
  description:
    "Perform various matrix operations including rotation, multiplication, and traversal",
  timeComplexity: "O(n^2)",
  spaceComplexity: "O(n^2)",
  pseudocode: `function matrixOperations(matrix):
    // Matrix Initialization
    matrix = initializeMatrix(rows, cols, value)
    
    // Matrix Operations
    result = matrixOperations(matrix)
    return result`,
  example: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]`,
  implementation: `def matrix_operations(matrix):
    """
    Comprehensive matrix operations implementation with detailed comments.
    This implementation covers various matrix operations and traversal methods.
    """
    
    # Matrix Initialization
    def initialize_matrix(rows, cols, value=0):
        """
        Initialize a matrix with given dimensions and default value.
        This is the foundation for creating matrices of any size.
        """
        return [[value for _ in range(cols)] for _ in range(rows)]
    
    # Matrix Traversal Methods
    def row_major_traversal(matrix):
        """
        Traverse matrix row by row, left to right.
        This is the most common traversal method and follows memory layout.
        """
        for i in range(len(matrix)):          # For each row
            for j in range(len(matrix[0])):   # For each column in the row
                print(matrix[i][j], end=" ")  # Process element
            print()                           # New line after each row
    
    def column_major_traversal(matrix):
        """
        Traverse matrix column by column, top to bottom.
        Useful when processing data column-wise.
        """
        for j in range(len(matrix[0])):       # For each column
            for i in range(len(matrix)):      # For each row in the column
                print(matrix[i][j], end=" ")  # Process element
            print()                           # New line after each column
    
    def diagonal_traversal(matrix):
        """
        Traverse matrix diagonally from top-left to bottom-right.
        Useful for operations that need to process diagonal elements.
        """
        n = len(matrix)
        # Traverse upper diagonals
        for d in range(n):                    # For each diagonal
            for i in range(d + 1):            # For each element in the diagonal
                print(matrix[i][d - i], end=" ")
            print()
        # Traverse lower diagonals
        for d in range(1, n):
            for i in range(d, n):
                print(matrix[i][n - 1 - (i - d)], end=" ")
            print()
    
    def spiral_traversal(matrix):
        """
        Traverse matrix in a spiral pattern from outer to inner layers.
        Useful for problems that require processing matrix in layers.
        """
        result = []
        top, bottom = 0, len(matrix) - 1
        left, right = 0, len(matrix[0]) - 1
        
        while top <= bottom and left <= right:
            # Traverse top row
            for j in range(left, right + 1):
                result.append(matrix[top][j])
            top += 1
            
            # Traverse right column
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1
            
            if top <= bottom:
                # Traverse bottom row
                for j in range(right, left - 1, -1):
                    result.append(matrix[bottom][j])
                bottom -= 1
            
            if left <= right:
                # Traverse left column
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1
        
        return result
    
    # Matrix Operations
    def transpose(matrix):
        """
        Create the transpose of a matrix (rows become columns).
        Essential for many matrix operations and transformations.
        """
        return [[matrix[j][i] for j in range(len(matrix))] 
                for i in range(len(matrix[0]))]
    
    def rotate_90_clockwise(matrix):
        """
        Rotate matrix 90 degrees clockwise.
        Common operation in matrix manipulation problems.
        """
        n = len(matrix)
        # First transpose the matrix
        for i in range(n):
            for j in range(i, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # Then reverse each row
        for i in range(n):
            matrix[i] = matrix[i][::-1]
        return matrix
    
    def matrix_multiplication(a, b):
        """
        Multiply two matrices.
        Fundamental operation in linear algebra and many applications.
        """
        if len(a[0]) != len(b):
            raise ValueError("Incompatible matrix dimensions")
        
        result = [[0 for _ in range(len(b[0]))] for _ in range(len(a))]
        
        for i in range(len(a)):              # For each row of first matrix
            for j in range(len(b[0])):       # For each column of second matrix
                for k in range(len(b)):      # For each element in the row/column
                    result[i][j] += a[i][k] * b[k][j]
        
        return result
    
    # Example usage
    matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    
    print("Row Major Traversal:")
    row_major_traversal(matrix)
    
    print("\nColumn Major Traversal:")
    column_major_traversal(matrix)
    
    print("\nDiagonal Traversal:")
    diagonal_traversal(matrix)
    
    print("\nSpiral Traversal:")
    print(spiral_traversal(matrix))
    
    print("\nTranspose:")
    print(transpose(matrix))
    
    print("\nRotate 90° Clockwise:")
    print(rotate_90_clockwise(matrix))
    
    # Example matrix multiplication
    a = [[1, 2], [3, 4]]
    b = [[5, 6], [7, 8]]
    print("\nMatrix Multiplication:")
    print(matrix_multiplication(a, b))`,
  category: "Matrix Operations",
};
