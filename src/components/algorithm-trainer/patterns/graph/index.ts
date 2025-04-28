import { AlgorithmPattern } from "../../types";
import { floyd_cycle_detectionPattern } from "./floyd-cycle-detection";

import { bfs_linked_listPattern } from "./bfs-linked-list";

import { dfs_binary_treePattern } from "./dfs-binary-tree";

import { dfs_linked_listPattern } from "./dfs-linked-list";

import { topological_sortPattern } from "./topological-sort";


type GraphPatternKey =
  | "Graph DFS"
  | "Graph BFS"
  | "Graph Dijkstra"
  | "Graph Bellman-Ford"
  | "Graph Floyd-Warshall"
  | "Graph Kruskal"
  | "Graph Prim"
  | "Graph Topological Sort"
  | "Graph Cycle Detection"
  | "Graph Strongly Connected Components"
  | "Graph Articulation Points"
  | "Graph Bridges";

export const graphPatterns: Partial<Record<GraphPatternKey, AlgorithmPattern>> =
  {
    // Graph patterns will be added here
  };
