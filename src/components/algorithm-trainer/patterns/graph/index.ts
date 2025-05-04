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
import { graphPattern } from "./graph";
import { kosarajuPattern } from "./kosaraju";
import { kruskalPattern } from "./kruskal";
import { maximumBipartiteMatchingPattern } from "./maximum-bipartite-matching";
import { networkFlowPattern } from "./network-flow";
import { primPattern } from "./prim";
import { stronglyConnectedComponentsPattern } from "./strongly-connected-components";
import { topologicalSortPattern } from "./topological-sort";
import { hungarianAlgorithmPattern } from "./hungarian-algorithm";

export const graphPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  "Bellman-Ford": bellmanFordPattern,
  Dijkstra: dijkstraPattern,
  "Floyd-Warshall": floydWarshallPattern,
  "Floyd Cycle Detection": floydCycleDetectionPattern,
  Kruskal: kruskalPattern,
  Prim: primPattern,
  "Articulation Points": articulationPointsPattern,
  Bridges: bridgesPattern,
  DFS: graphDfsPattern,
  BFS: bfsPattern,
  "DFS Linked List": dfsLinkedListPattern,
  "DFS Binary Tree": dfsBinaryTreePattern,
  "BFS Linked List": bfsLinkedListPattern,
  Graph: graphPattern,
  Kosaraju: kosarajuPattern,
  "Topological Sort": topologicalSortPattern,
  "Network Flow": networkFlowPattern,
  "Strongly Connected Components": stronglyConnectedComponentsPattern,
  "Maximum Bipartite Matching": maximumBipartiteMatchingPattern,
  "A* Search": aStarSearchPattern,
  "Hungarian Algorithm": hungarianAlgorithmPattern,
};
