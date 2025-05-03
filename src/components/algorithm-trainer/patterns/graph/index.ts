import { AlgorithmPattern, PatternKey } from "../../types/pattern-types.ts";
import { aStarSearchPattern } from "./a-star-search.ts";
import { articulationPointsPattern } from "./articulation-points.ts";
import { bellmanFordPattern } from "./bellman-ford.ts";
import { bfsPattern } from "./bfs.ts";
import { bfsLinkedListPattern } from "./bfs-linked-list.ts";
import { bridgesPattern } from "./bridges.ts";
import { dfsBinaryTreePattern } from "./dfs-binary-tree.ts";
import { dfsLinkedListPattern } from "./dfs-linked-list.ts";
import { graphDfsPattern } from "./dfs.ts";
import { dijkstraPattern } from "./dijkstra.ts";
import { floydWarshallPattern } from "./floyd-warshall.ts";
import { floydCycleDetectionPattern } from "./floyd-cycle-detection.ts";
import { graphPattern } from "./graph.ts";
import { kosarajuPattern } from "./kosaraju.ts";
import { kruskalPattern } from "./kruskal.ts";
import { maximumBipartiteMatchingPattern } from "./maximum-bipartite-matching.ts";
import { networkFlowPattern } from "./network-flow.ts";
import { primPattern } from "./prim.ts";
import { stronglyConnectedComponentsPattern } from "./strongly-connected-components.ts";
import { topologicalSortPattern } from "./topological-sort.ts";

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
};
