import { AlgorithmPattern } from "@/components/algorithm-trainer/types/pattern-types";

export const segmentTreePattern: AlgorithmPattern = {
  title: "Segment Tree",
  description:
    "A Segment Tree is a data structure that can efficiently answer range queries and perform range updates on an array.",
  timeComplexity: "O(log n)",
  spaceComplexity: "O(n)",
  pseudocode: `class SegmentTree:
    def __init__(self, data):
        self.data = data
        self.size = len(data)
        self.tree = [0] * (4 * self.size)
        self.build(1, 0, self.size - 1)

    def build(self, node, start, end):
        if start == end:
            self.tree[node] = self.data[start]
            return

        mid = (start + end) // 2
        self.build(2 * node, start, mid)
        self.build(2 * node + 1, mid + 1, end)
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def update(self, i, value):
        self.update_helper(1, 0, self.size - 1, i, value)

    def update_helper(self, node, start, end, i, value):
        if start == end:
            self.data[i] = value
            self.tree[node] = value
            return

        mid = (start + end) // 2
        if i <= mid:
            self.update_helper(2 * node, start, mid, i, value)
        else:
            self.update_helper(2 * node + 1, mid + 1, end, i, value)
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def query(self, l, r):
        return self.query_helper(1, 0, self.size - 1, l, r)

    def query_helper(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]

        mid = (start + end) // 2
        left_sum = self.query_helper(2 * node, start, mid, l, r)
        right_sum = self.query_helper(2 * node + 1, mid + 1, end, l, r)
        return left_sum + right_sum`,
  example: `# Create a Segment Tree from an array
data = [1, 3, 5, 7, 9, 11]
segment_tree = SegmentTree(data)

# Query range sums
print(segment_tree.query(0, 2))  # 9 (1 + 3 + 5)
print(segment_tree.query(1, 4))  # 24 (3 + 5 + 7 + 9)

# Update a value
segment_tree.update(2, 10)
print(segment_tree.query(0, 2))  # 14 (1 + 3 + 10)`,
  implementation: `class SegmentTree:
    def __init__(self, data):
        self.data = data
        self.size = len(data)
        self.tree = [0] * (4 * self.size)
        self.build(1, 0, self.size - 1)

    def build(self, node, start, end):
        if start == end:
            self.tree[node] = self.data[start]
            return

        mid = (start + end) // 2
        self.build(2 * node, start, mid)
        self.build(2 * node + 1, mid + 1, end)
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def update(self, i, value):
        self.update_helper(1, 0, self.size - 1, i, value)

    def update_helper(self, node, start, end, i, value):
        if start == end:
            self.data[i] = value
            self.tree[node] = value
            return

        mid = (start + end) // 2
        if i <= mid:
            self.update_helper(2 * node, start, mid, i, value)
        else:
            self.update_helper(2 * node + 1, mid + 1, end, i, value)
        self.tree[node] = self.tree[2 * node] + self.tree[2 * node + 1]

    def query(self, l, r):
        return self.query_helper(1, 0, self.size - 1, l, r)

    def query_helper(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]

        mid = (start + end) // 2
        left_sum = self.query_helper(2 * node, start, mid, l, r)
        right_sum = self.query_helper(2 * node + 1, mid + 1, end, l, r)
        return left_sum + right_sum`,
  category: "Data Structures",
  keySteps: [
    "1. Initialize the Segment Tree with an array of data",
    "2. Build the tree structure recursively",
    "3. Implement the update operation to modify values",
    "4. Implement the query operation to get range sums",
    "5. Use divide and conquer approach for efficient updates and queries",
  ],
};
