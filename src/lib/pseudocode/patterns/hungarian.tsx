import { ChevronRight } from "lucide-react";

export const HungarianPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Hungarian Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n³) &nbsp;|&nbsp; Space: O(n²) &nbsp;|&nbsp; Use: Solve assignment
      problem
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`HUNGARIAN(C)
1  n = C.rows
2  // Step 1: Subtract row minima
3  for i = 1 to n
4      row_min = min(C[i][j] for j = 1 to n)
5      for j = 1 to n
6          C[i][j] = C[i][j] - row_min
7  
8  // Step 2: Subtract column minima
9  for j = 1 to n
10     col_min = min(C[i][j] for i = 1 to n)
11     for i = 1 to n
12         C[i][j] = C[i][j] - col_min
13 
14 // Step 3: Cover all zeros with minimum lines
15 while true
16     // Find minimum uncovered value
17     min_val = ∞
18     for i = 1 to n
19         for j = 1 to n
20             if not covered[i] and not covered[j]
21                 min_val = min(min_val, C[i][j])
22 
23     // Subtract from uncovered rows, add to covered columns
24     for i = 1 to n
25         for j = 1 to n
26             if not covered[i] and not covered[j]
27                 C[i][j] = C[i][j] - min_val
28             else if covered[i] and covered[j]
29                 C[i][j] = C[i][j] + min_val
30 
31     // Try to find complete matching
32     matching = FIND-MATCHING(C)
33     if size(matching) == n
34         return matching
35 
36 FIND-MATCHING(C)
37     n = C.rows
38     matching = {}
39     for i = 1 to n
40         visited = [False] * n
41         if DFS(i, visited, matching)
42             continue
43     return matching
44 
45 DFS(u, visited, matching)
46     for v = 1 to n
47         if not visited[v] and C[u][v] == 0
48             visited[v] = true
49             if v not in matching or DFS(matching[v], visited, matching)
50                 matching[v] = u
51                 return true
52     return false

// Example:
// Input: C = [[5, 2, 3],
//             [2, 4, 6],
//             [3, 6, 8]]
// 
// Step 1: Subtract row minima
//         [[3, 0, 1],
//          [0, 2, 4],
//          [0, 3, 5]]
// 
// Step 2: Subtract column minima
//         [[3, 0, 0],
//          [0, 2, 3],
//          [0, 3, 4]]
// 
// Step 3: Find complete matching
//         Matching: {(1,2), (2,1), (3,3)}
// 
// Final assignment: [(1,2), (2,1), (3,3)]`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Subtract: Row and column minima</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Cover: All zeros with minimum lines</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Find: Complete matching using DFS</span>
      </div>
    </div>
  </div>
);
