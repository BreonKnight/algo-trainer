import { AlgorithmPattern } from "@/src/components/algorithm-trainer/types/pattern-types";

export const hopcroftKarpPattern: AlgorithmPattern = {
  title: "Hopcroft-Karp",
  description:
    "An algorithm that finds the maximum matching in a bipartite graph. It's more efficient than the Ford-Fulkerson algorithm for bipartite matching problems, with a time complexity of O(√V * E) where V is the number of vertices and E is the number of edges.",
  timeComplexity: "O(√V * E) where V is the number of vertices and E is the number of edges",
  spaceComplexity: "O(V + E) for storing the graph and matching information",
  pseudocode: `1. Initialize matching arrays for both partitions
2. While there exists an augmenting path:
   a. Use BFS to find the shortest augmenting paths
   b. Use DFS to find and apply the augmenting paths
3. Return the maximum matching`,
  example: `Input: Bipartite Graph
Left partition: [1, 2, 3]
Right partition: [4, 5, 6]
Edges: 1-4, 1-5, 2-5, 2-6, 3-4

Step 1: Initialize matching arrays
Left matching: [-1, -1, -1]
Right matching: [-1, -1, -1]

Step 2: Find augmenting paths
First iteration:
  - Find path: 1 -> 4
  - Update matching: [4, -1, -1], [1, -1, -1]

Second iteration:
  - Find path: 2 -> 5
  - Update matching: [4, 5, -1], [1, 2, -1]

Third iteration:
  - Find path: 3 -> 4 -> 1 -> 5 -> 2 -> 6
  - Update matching: [5, 6, 4], [3, 1, 2]

Final matching: 1-5, 2-6, 3-4`,
  implementation: `class HopcroftKarp:
    def __init__(self, left_size: int, right_size: int):
        self.left_size = left_size
        self.right_size = right_size
        self.graph = [[] for _ in range(left_size)]
        self.left_match = [-1] * left_size
        self.right_match = [-1] * right_size
        self.dist = [0] * left_size

    def add_edge(self, left: int, right: int) -> None:
        self.graph[left].append(right)

    def _bfs(self) -> bool:
        queue = []
        
        # Initialize distances
        for i in range(self.left_size):
            if self.left_match[i] == -1:
                self.dist[i] = 0
                queue.append(i)
            else:
                self.dist[i] = float('inf')
        
        found = False
        
        # BFS to find shortest augmenting paths
        while queue:
            left = queue.pop(0)
            
            for right in self.graph[left]:
                next_left = self.right_match[right]
                
                if next_left == -1:
                    found = True
                elif self.dist[next_left] == float('inf'):
                    self.dist[next_left] = self.dist[left] + 1
                    queue.append(next_left)
        
        return found

    def _dfs(self, left: int) -> bool:
        for right in self.graph[left]:
            next_left = self.right_match[right]
            
            if (next_left == -1 or 
                (self.dist[next_left] == self.dist[left] + 1 and self._dfs(next_left))):
                self.left_match[left] = right
                self.right_match[right] = left
                return True
        
        self.dist[left] = float('inf')
        return False

    def find_max_matching(self) -> int:
        matching = 0
        
        while self._bfs():
            for i in range(self.left_size):
                if self.left_match[i] == -1 and self._dfs(i):
                    matching += 1
        
        return matching`,
  category: "Graph",
  keySteps: [
    "1. Initialize the bipartite graph representation",
    "2. Implement BFS to find shortest augmenting paths",
    "3. Implement DFS to find and apply augmenting paths",
    "4. Track matching information for both partitions",
    "5. Count and return the maximum matching size",
  ],
  tips: [
    "Use adjacency lists for efficient graph representation",
    "Keep track of distances for BFS optimization",
    "Handle edge cases like empty graphs",
    "Consider using a queue for BFS implementation",
    "Use arrays for efficient matching storage",
  ],
  relatedPatterns: ["Maximum Bipartite Matching", "Ford-Fulkerson", "BFS", "DFS"],
};
