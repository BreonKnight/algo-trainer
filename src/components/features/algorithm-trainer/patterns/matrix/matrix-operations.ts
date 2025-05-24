import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/pattern-types";

export const matrixOperationsPattern: AlgorithmPattern = {
  title: "Matrix Operations",
  description:
    "Common operations on matrices including addition, multiplication, transposition, and determinant calculation.",
  timeComplexity: "Varies by operation: O(n²) for addition, O(n³) for multiplication",
  spaceComplexity: "O(n²) for most operations",
  category: "Matrix",
  difficulty: "Medium",
  pseudocode: `// Matrix Addition
function addMatrices(a, b):
    result = new matrix of same size
    for each element (i,j):
        result[i][j] = a[i][j] + b[i][j]
    return result

// Matrix Multiplication
function multiplyMatrices(a, b):
    result = new matrix of size a.rows × b.cols
    for each element (i,j):
        sum = 0
        for k = 0 to a.cols-1:
            sum += a[i][k] * b[k][j]
        result[i][j] = sum
    return result

// Matrix Transpose
function transpose(matrix):
    result = new matrix of size matrix.cols × matrix.rows
    for each element (i,j):
        result[j][i] = matrix[i][j]
    return result`,
  example: `Matrix Addition:
[1, 2]   [5, 6]   [6,  8]
[3, 4] + [7, 8] = [10, 12]

Matrix Multiplication:
[1, 2]   [5, 6]   [19, 22]
[3, 4] × [7, 8] = [43, 50]

Matrix Transpose:
[1, 2, 3]    [1, 4]
[4, 5, 6] →  [2, 5]
             [3, 6]`,
  implementation: `def add_matrices(a, b):
    if len(a) != len(b) or len(a[0]) != len(b[0]):
        raise ValueError("Matrices must have the same dimensions")
    
    return [[a[i][j] + b[i][j] for j in range(len(a[0]))] for i in range(len(a))]

def multiply_matrices(a, b):
    if len(a[0]) != len(b):
        raise ValueError("Number of columns in first matrix must equal number of rows in second matrix")
    
    result = [[0 for _ in range(len(b[0]))] for _ in range(len(a))]
    for i in range(len(a)):
        for j in range(len(b[0])):
            for k in range(len(b)):
                result[i][j] += a[i][k] * b[k][j]
    return result

def transpose(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0]))]

# Example usage
a = [[1, 2], [3, 4]]
b = [[5, 6], [7, 8]]

print("Matrix Addition:")
result_add = add_matrices(a, b)
for row in result_add:
    print(row)

print("\nMatrix Multiplication:")
result_mult = multiply_matrices(a, b)
for row in result_mult:
    print(row)

print("\nMatrix Transpose:")
result_trans = transpose(a)
for row in result_trans:
    print(row)`,
};
