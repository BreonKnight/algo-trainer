import { AlgorithmPattern } from "../../types";

export const maximumBipartiteMatchingPattern: AlgorithmPattern = {
  title: "Maximum Bipartite Matching",
  description:
    "A graph algorithm that finds the maximum matching in a bipartite graph. A matching is a set of edges without common vertices, and a maximum matching is a matching of maximum size.",
  timeComplexity: "O(V * E)",
  spaceComplexity: "O(V + E)",
  pseudocode: `
function maxBipartiteMatching(graph, n, m):
    # n = number of vertices in left set
    # m = number of vertices in right set
    match_to = [-1] * m
    result = 0
    
    def bpm(u, seen):
        for v in range(m):
            if graph[u][v] and not seen[v]:
                seen[v] = True
                if match_to[v] == -1 or bpm(match_to[v], seen):
                    match_to[v] = u
                    return True
        return False
    
    for u in range(n):
        seen = [False] * m
        if bpm(u, seen):
            result += 1
    
    return result
  `,
  example: `
// Example usage:
const graph = [
  [0, 1, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1]
];
const n = 6; // Number of vertices in left set
const m = 6; // Number of vertices in right set
const maxMatching = maxBipartiteMatching(graph, n, m);
console.log(maxMatching); // Output: 5
  `,
  implementation: `
function maxBipartiteMatching(graph: number[][], n: number, m: number): number {
  const matchTo = new Array(m).fill(-1);
  let result = 0;
  
  function bpm(u: number, seen: boolean[]): boolean {
    for (let v = 0; v < m; v++) {
      if (graph[u][v] && !seen[v]) {
        seen[v] = true;
        if (matchTo[v] === -1 || bpm(matchTo[v], seen)) {
          matchTo[v] = u;
          return true;
        }
      }
    }
    return false;
  }
  
  for (let u = 0; u < n; u++) {
    const seen = new Array(m).fill(false);
    if (bpm(u, seen)) {
      result++;
    }
  }
  
  return result;
}
  `,
  category: "graph",
};
