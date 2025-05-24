import { AlgorithmPattern } from "@/components/features/algorithm-trainer/types/types";

export const fenwickTreePattern: AlgorithmPattern = {
  title: "Fenwick Tree",
  description:
    "A Fenwick Tree (or Binary Indexed Tree) is a data structure that can efficiently update elements and calculate prefix sums in a table of numbers.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(n)",
  pseudocode: `class FenwickTree:
    def __init__(self, size):
        self.size = size
        self.tree = [0] * (size + 1)

    def update(self, i, delta):
        while i <= self.size:
            self.tree[i] += delta
            i += i & -i  # Get the least significant bit

    def query(self, i):
        sum = 0
        while i > 0:
            sum += self.tree[i]
            i -= i & -i  # Get the least significant bit
        return sum

    def range_query(self, l, r):
        return self.query(r) - self.query(l - 1)`,
  example: `# Create a Fenwick Tree of size 5
fenwick_tree = FenwickTree(5)

# Update values
fenwick_tree.update(1, 3)
fenwick_tree.update(2, 2)
fenwick_tree.update(3, 5)
fenwick_tree.update(4, 1)
fenwick_tree.update(5, 4)

# Query prefix sums
print(fenwick_tree.query(3))  # 10 (3 + 2 + 5)
print(fenwick_tree.range_query(2, 4))  # 8 (2 + 5 + 1)`,
  implementation: `class FenwickTree:
    def __init__(self, size):
        self.size = size
        self.tree = [0] * (size + 1)

    def update(self, i, delta):
        while i <= self.size:
            self.tree[i] += delta
            i += i & -i

    def query(self, i):
        sum = 0
        while i > 0:
            sum += self.tree[i]
            i -= i & -i
        return sum

    def range_query(self, l, r):
        return self.query(r) - self.query(l - 1)`,
  category: "Data Structures",
  keySteps: [
    "1. Initialize the Fenwick Tree with a given size",
    "2. Implement the update operation to add a delta to an index",
    "3. Implement the query operation to get prefix sums",
    "4. Implement the range query operation to get sums between indices",
    "5. Use bit manipulation for efficient updates and queries",
  ],
};
