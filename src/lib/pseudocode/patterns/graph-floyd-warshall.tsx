import { ChevronRight } from "lucide-react";

export const FloydWarshallPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Floyd-Warshall Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Graph Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(V³) &nbsp;|&nbsp; Space: O(V²) &nbsp;|&nbsp; Use: All-pairs
      shortest paths in graphs with negative weights
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`FLOYD-WARSHALL(W):
    // W is the weight matrix of the graph
    n = W.rows
    D⁽⁰⁾ = W
    for k = 1 to n:
        D⁽ᵏ⁾ = new n × n matrix
        for i = 1 to n:
            for j = 1 to n:
                D⁽ᵏ⁾[i, j] = min(D⁽ᵏ⁻¹⁾[i, j], D⁽ᵏ⁻¹⁾[i, k] + D⁽ᵏ⁻¹⁾[k, j])
    return D⁽ⁿ⁾

PRINT-ALL-PAIRS-SHORTEST-PATH(Π, i, j):
    if i == j:
        print i
    else if Π[i, j] == NIL:
        print "no path from" i "to" j "exists"
    else:
        PRINT-ALL-PAIRS-SHORTEST-PATH(Π, i, Π[i, j])
        print j`}
      </pre>
    </div>

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Set D⁽⁰⁾
        to the weight matrix
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Iterate:</span> Consider
        each vertex as intermediate
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Update:</span> Update
        shortest paths through intermediate vertex
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return:</span> Final
        distance matrix D⁽ⁿ⁾
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">Example:</span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Graph:
     A
    / \
   2   4
  /     \
 B       C
  \     /
   3   1
    \ /
     D

Initial weight matrix:
    A   B   C   D
A   0   2   4   ∞
B   2   0   3   ∞
C   4   3   0   1
D   ∞   ∞   1   0

After iteration k=1 (A):
    A   B   C   D
A   0   2   4   ∞
B   2   0   3   ∞
C   4   3   0   1
D   ∞   ∞   1   0

After iteration k=2 (B):
    A   B   C   D
A   0   2   4   ∞
B   2   0   3   ∞
C   4   3   0   1
D   ∞   ∞   1   0

After iteration k=3 (C):
    A   B   C   D
A   0   2   4   5
B   2   0   3   4
C   4   3   0   1
D   5   4   1   0

After iteration k=4 (D):
    A   B   C   D
A   0   2   4   5
B   2   0   3   4
C   4   3   0   1
D   5   4   1   0`}
      </pre>
    </div>
  </div>
);
