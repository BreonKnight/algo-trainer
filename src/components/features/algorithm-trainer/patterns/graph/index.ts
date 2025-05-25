import { aStarSearchPattern } from "@/components/features/algorithm-trainer/patterns/graph/a-star-search";
import { articulationPointsPattern } from "@/components/features/algorithm-trainer/patterns/graph/articulation-points";
import { bellmanFordPattern } from "@/components/features/algorithm-trainer/patterns/graph/bellman-ford";
import { bfsPattern } from "@/components/features/algorithm-trainer/patterns/graph/bfs";
import { bfsLinkedListPattern } from "@/components/features/algorithm-trainer/patterns/graph/bfs-linked-list";
import { bridgesPattern } from "@/components/features/algorithm-trainer/patterns/graph/bridges";
import { graphDfsPattern } from "@/components/features/algorithm-trainer/patterns/graph/dfs";
import { dfsBinaryTreePattern } from "@/components/features/algorithm-trainer/patterns/graph/dfs-binary-tree";
import { dfsLinkedListPattern } from "@/components/features/algorithm-trainer/patterns/graph/dfs-linked-list";
import { dijkstraPattern } from "@/components/features/algorithm-trainer/patterns/graph/dijkstra";
import { floydCycleDetectionPattern } from "@/components/features/algorithm-trainer/patterns/graph/floyd-cycle-detection";
import { floydWarshallPattern } from "@/components/features/algorithm-trainer/patterns/graph/floyd-warshall";
import { fordFulkersonPattern } from "@/components/features/algorithm-trainer/patterns/graph/ford-fulkerson";
import { graphRepresentationPattern } from '@algo-trainer/shared/algorithms/graph/representation';
import { hopcroftKarpPattern } from "@/components/features/algorithm-trainer/patterns/graph/hopcroft-karp";
import { hungarianAlgorithmPattern } from "@/components/features/algorithm-trainer/patterns/graph/hungarian-algorithm";
import { kahnsTopologicalSortPattern } from "@/components/features/algorithm-trainer/patterns/graph/kahns-topological-sort";
import { kosarajuPattern } from "@/components/features/algorithm-trainer/patterns/graph/kosaraju";
import { kruskalPattern } from "@/components/features/algorithm-trainer/patterns/graph/kruskal";
import { maximumBipartiteMatchingPattern } from "@/components/features/algorithm-trainer/patterns/graph/maximum-bipartite-matching";
import { networkFlowPattern } from "@/components/features/algorithm-trainer/patterns/graph/network-flow";
import { primPattern } from "@/components/features/algorithm-trainer/patterns/graph/prim";
import { stronglyConnectedComponentsPattern } from "@/components/features/algorithm-trainer/patterns/graph/strongly-connected-components";
import { topologicalSortPattern } from "@/components/features/algorithm-trainer/patterns/graph/topological-sort";
import { BasePattern, PatternCategory, PatternKey } from "@/lib/patterns/types";

export const graphPatterns: Partial<Record<PatternKey, BasePattern>> = {
  "A* Search": {
    ...aStarSearchPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Articulation Points": {
    ...articulationPointsPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Bellman-Ford": {
    ...bellmanFordPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  BFS: { ...bfsPattern, category: "Graph" as PatternCategory, difficulty: "Easy" },
  "BFS Linked List": {
    ...bfsLinkedListPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Easy",
  },
  Bridges: { ...bridgesPattern, category: "Graph" as PatternCategory, difficulty: "Medium" },
  "DFS Graph": { ...graphDfsPattern, category: "Graph" as PatternCategory, difficulty: "Easy" },
  "DFS (Binary Tree)": {
    ...dfsBinaryTreePattern,
    category: "Graph" as PatternCategory,
    difficulty: "Easy",
  },
  "DFS Linked List": {
    ...dfsLinkedListPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Easy",
  },
  "Dijkstra's Algorithm": {
    ...dijkstraPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Floyd-Warshall Algorithm": {
    ...floydWarshallPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Floyd Cycle Detection": {
    ...floydCycleDetectionPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Ford-Fulkerson Algorithm": {
    ...fordFulkersonPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Hard",
  },
  "Graph Representation": {
    ...graphRepresentationPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Easy",
  },
  "Kahn's Topological Sort": {
    ...kahnsTopologicalSortPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Kosaraju's Algorithm": {
    ...kosarajuPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Kruskal's Algorithm": {
    ...kruskalPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Maximum Bipartite Matching": {
    ...maximumBipartiteMatchingPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Hard",
  },
  "Network Flow": {
    ...networkFlowPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Hard",
  },
  "Prim's Algorithm": {
    ...primPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Strongly Connected Components": {
    ...stronglyConnectedComponentsPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Topological Sort": {
    ...topologicalSortPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Medium",
  },
  "Hungarian Algorithm": {
    ...hungarianAlgorithmPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Hard",
  },
  "Hopcroft-Karp's Algorithm": {
    ...hopcroftKarpPattern,
    category: "Graph" as PatternCategory,
    difficulty: "Hard",
  },
};
