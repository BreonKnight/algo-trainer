import { AlgorithmPattern } from "../../types";
import { bellman_fordPattern } from "./bellman-ford";
import { dijkstraPattern } from "./dijkstra";
import { floyd_warshallPattern } from "./floyd-warshall";
import { kruskalPattern } from "./kruskal";
import { primPattern } from "./prim";
import { articulation_pointsPattern } from "./articulation-points.ts";
import { bridgesPattern } from "./bridges.ts";
import { graphDfsPattern } from "./dfs";
import { bfsPattern } from "./bfs";
import { dfs_linked_listPattern } from "./dfs-linked-list";
import { dfs_binary_treePattern } from "./dfs-binary-tree";
import { bfs_linked_listPattern } from "./bfs-linked-list";
import { graphPattern } from "./graph";
import { kosarajuPattern } from "./kosaraju";
import { topological_sortPattern } from "./topological-sort";
import { networkFlowPattern } from "./network-flow.ts";
import { stronglyConnectedComponentsPattern } from "./strongly-connected-components";
import { maximumBipartiteMatchingPattern } from "./maximum-bipartite-matching";
import { aStarSearchPattern } from "./a-star-search";

export const graphPatterns: Record<string, AlgorithmPattern> = {
  "Graph Bellman Ford": bellman_fordPattern,
  "Graph Dijkstra": dijkstraPattern,
  "Graph Floyd Warshall": floyd_warshallPattern,
  "Graph Kruskal": kruskalPattern,
  Prim: primPattern,
  "Graph Articulation Points": articulation_pointsPattern,
  "Graph Bridges": bridgesPattern,
  DFS: graphDfsPattern,
  BFS: bfsPattern,
  "DFS Linked List": dfs_linked_listPattern,
  "DFS Binary Tree": dfs_binary_treePattern,
  "BFS Linked List": bfs_linked_listPattern,
  Graph: graphPattern,
  "Graph Kosaraju": kosarajuPattern,
  "Topological Sort": topological_sortPattern,
  "Network Flow": networkFlowPattern,
  "Strongly Connected Components": stronglyConnectedComponentsPattern,
  "Maximum Bipartite Matching": maximumBipartiteMatchingPattern,
  "A* Search": aStarSearchPattern,
};
