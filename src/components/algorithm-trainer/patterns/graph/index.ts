import { AlgorithmPattern, PatternKey } from "../../types/pattern-types";
import { aStarSearchPattern } from "./a-star-search";
import { articulationPointsPattern } from "./articulation-points";
import { bellmanFordPattern } from "./bellman-ford";
import { bfsPattern } from "./bfs";
import { bfsLinkedListPattern } from "./bfs-linked-list";
import { bridgesPattern } from "./bridges";
import { dfsBinaryTreePattern } from "./dfs-binary-tree";
import { dfsLinkedListPattern } from "./dfs-linked-list";
import { graphDfsPattern } from "./dfs";
import { dijkstraPattern } from "./dijkstra";
import { floydWarshallPattern } from "./floyd-warshall";
import { floydCycleDetectionPattern } from "./floyd-cycle-detection";
import { fordFulkersonPattern } from "./ford-fulkerson";
import { graphRepresentationPattern } from "./graph-representation";
import { kahnsTopologicalSortPattern } from "./kahns-topological-sort";
import { kosarajuPattern } from "./kosaraju";
import { kruskalPattern } from "./kruskal";
import { maximumBipartiteMatchingPattern } from "./maximum-bipartite-matching";
import { networkFlowPattern } from "./network-flow";
import { primPattern } from "./prim";
import { stronglyConnectedComponentsPattern } from "./strongly-connected-components";
import { topologicalSortPattern } from "./topological-sort";
import { hungarianAlgorithmPattern } from "./hungarian-algorithm";
import { hopcroftKarpPattern } from "./hopcroft-karp";

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
