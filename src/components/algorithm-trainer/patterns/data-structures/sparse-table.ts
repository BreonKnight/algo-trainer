import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const sparseTablePattern: AlgorithmPattern = {
  title: "Sparse Table",
  description:
    "A Sparse Table is a data structure that allows efficient range queries on static arrays. It precomputes answers for ranges of length 2^k and uses these to answer queries in O(1) time. It's particularly useful for Range Minimum/Maximum Query (RMQ) problems.",
  timeComplexity: "O(n log n) for preprocessing, O(1) for queries",
  spaceComplexity: "O(n log n)",
  category: "data-structures",
  pseudocode: `SPARSE-TABLE(arr)
    n = arr.length
    k = floor(log2(n))
    
    // Initialize sparse table
    st = new int[n][k+1]
    
    // Fill first column with original array
    for i = 0 to n-1
        st[i][0] = arr[i]
    
    // Fill remaining columns
    for j = 1 to k
        for i = 0 to n-(1<<j)
            st[i][j] = min(st[i][j-1], st[i+(1<<(j-1))][j-1])
    
    return st

QUERY(st, left, right)
    length = right - left + 1
    k = floor(log2(length))
    return min(st[left][k], st[right-(1<<k)+1][k])`,
  implementation: `def sparse_table(arr):
    n = len(arr)
    k = (n).bit_length() - 1
    
    # Initialize sparse table
    st = [[0] * (k + 1) for _ in range(n)]
    
    # Fill first column with original array
    for i in range(n):
        st[i][0] = arr[i]
    
    # Fill remaining columns
    for j in range(1, k + 1):
        for i in range(n - (1 << j) + 1):
            st[i][j] = min(st[i][j-1], st[i + (1 << (j-1))][j-1])
    
    return st

def query(st, left, right):
    length = right - left + 1
    k = (length).bit_length() - 1
    return min(st[left][k], st[right - (1 << k) + 1][k])

# Example usage:
# arr = [1, 3, 2, 5, 4, 6]
# st = sparse_table(arr)
# print(query(st, 1, 3))  # Output: 2`,
  example: `# Example 1: Basic RMQ
arr = [1, 3, 2, 5, 4, 6]
st = sparse_table(arr)
print(query(st, 1, 3))  # Output: 2

# Example 2: Query entire array
print(query(st, 0, 5))  # Output: 1

# Example 3: Single element query
print(query(st, 2, 2))  # Output: 2`,
  keySteps: [
    "Initialize the sparse table with appropriate dimensions",
    "Fill the first column with the original array values",
    "Fill remaining columns using the min/max of previous ranges",
    "Process queries by finding the appropriate power of 2 ranges",
  ],
  keyPoints: [
    "Efficient for static arrays where values don't change",
    "O(1) query time after O(n log n) preprocessing",
    "Can be used for various range queries (min, max, gcd, etc.)",
    "Space complexity is O(n log n)",
  ],
  commonUseCases: [
    "Range Minimum/Maximum Query (RMQ)",
    "Range GCD queries",
    "Static array range queries",
    "Lowest Common Ancestor (LCA) in trees",
  ],
  relatedPatterns: ["Segment Tree", "Binary Lifting", "Range Queries"],
  tips: [
    "Use bitwise operations for efficient power of 2 calculations",
    "Consider using a different data structure if the array is dynamic",
    "Precompute log values for faster query processing",
  ],
};
