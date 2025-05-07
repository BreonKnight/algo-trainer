import { aStarSearchPattern } from "@/src/components/algorithm-trainer/patterns/graph/a-star-search";
import { articulationPointsPattern } from "@/src/components/algorithm-trainer/patterns/graph/articulation-points";
import { bellmanFordPattern } from "@/src/components/algorithm-trainer/patterns/graph/bellman-ford";
import { bfsPattern } from "@/src/components/algorithm-trainer/patterns/graph/bfs";
import { bfsLinkedListPattern } from "@/src/components/algorithm-trainer/patterns/graph/bfs-linked-list";
import { bridgesPattern } from "@/src/components/algorithm-trainer/patterns/graph/bridges";
import { graphDfsPattern } from "@/src/components/algorithm-trainer/patterns/graph/dfs";
import { dfsBinaryTreePattern } from "@/src/components/algorithm-trainer/patterns/graph/dfs-binary-tree";
import { dfsLinkedListPattern } from "@/src/components/algorithm-trainer/patterns/graph/dfs-linked-list";
import { dijkstraPattern } from "@/src/components/algorithm-trainer/patterns/graph/dijkstra";
import { floydCycleDetectionPattern } from "@/src/components/algorithm-trainer/patterns/graph/floyd-cycle-detection";
import { floydWarshallPattern } from "@/src/components/algorithm-trainer/patterns/graph/floyd-warshall";
import { fordFulkersonPattern } from "@/src/components/algorithm-trainer/patterns/graph/ford-fulkerson";
import { graphRepresentationPattern } from "@/src/components/algorithm-trainer/patterns/graph/graph-representation";
import { hopcroftKarpPattern } from "@/src/components/algorithm-trainer/patterns/graph/hopcroft-karp";
import { hungarianAlgorithmPattern } from "@/src/components/algorithm-trainer/patterns/graph/hungarian-algorithm";
import { kahnsTopologicalSortPattern } from "@/src/components/algorithm-trainer/patterns/graph/kahns-topological-sort";
import { kosarajuPattern } from "@/src/components/algorithm-trainer/patterns/graph/kosaraju";
import { kruskalPattern } from "@/src/components/algorithm-trainer/patterns/graph/kruskal";
import { maximumBipartiteMatchingPattern } from "@/src/components/algorithm-trainer/patterns/graph/maximum-bipartite-matching";
import { networkFlowPattern } from "@/src/components/algorithm-trainer/patterns/graph/network-flow";
import { primPattern } from "@/src/components/algorithm-trainer/patterns/graph/prim";
import { stronglyConnectedComponentsPattern } from "@/src/components/algorithm-trainer/patterns/graph/strongly-connected-components";
import { topologicalSortPattern } from "@/src/components/algorithm-trainer/patterns/graph/topological-sort";
import {
  AlgorithmPattern,
  PatternKey,
} from "@/src/components/algorithm-trainer/types/pattern-types";

export const graphPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  "A* Search": aStarSearchPattern,
  "Articulation Points": articulationPointsPattern,
  "Bellman-Ford": bellmanFordPattern,
  BFS: bfsPattern,
  "BFS Linked List": bfsLinkedListPattern,
  Bridges: bridgesPattern,
  DFS: graphDfsPattern,
  "DFS Binary Tree": dfsBinaryTreePattern,
  "DFS Linked List": dfsLinkedListPattern,
  Dijkstra: dijkstraPattern,
  "Floyd-Warshall": floydWarshallPattern,
  "Floyd Cycle Detection": floydCycleDetectionPattern,
  "Ford-Fulkerson": fordFulkersonPattern,
  "Graph Representation": graphRepresentationPattern,
  "Kahn's Topological Sort": kahnsTopologicalSortPattern,
  Kosaraju: kosarajuPattern,
  Kruskal: kruskalPattern,
  "Maximum Bipartite Matching": maximumBipartiteMatchingPattern,
  "Network Flow": networkFlowPattern,
  Prim: primPattern,
  "Strongly Connected Components": stronglyConnectedComponentsPattern,
  "Topological Sort": topologicalSortPattern,
  "Hungarian Algorithm": hungarianAlgorithmPattern,
  "Hopcroft-Karp": hopcroftKarpPattern,
};
