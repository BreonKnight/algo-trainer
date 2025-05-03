import { AlgorithmPattern, PatternKey } from "../../types";
import { bellmanFordPattern } from "./bellman-ford";
import { dijkstraPattern } from "./dijkstra";
import { floydWarshallPattern } from "./floyd-warshall";
import { kruskalPattern } from "./kruskal";
import { primPattern } from "./prim";
import { articulationPointsPattern } from "./articulation-points";
import { bridgesPattern } from "./bridges";
import { graphDfsPattern } from "./dfs";
import { bfsPattern } from "./bfs";
import { dfsLinkedListPattern } from "./dfs-linked-list";
import { dfsBinaryTreePattern } from "./dfs-binary-tree";
import { bfsLinkedListPattern } from "./bfs-linked-list";
import { graphPattern } from "./graph";
import { kosarajuPattern } from "./kosaraju";
import { topologicalSortPattern } from "./topological-sort";
import { networkFlowPattern } from "./network-flow";
import { stronglyConnectedComponentsPattern } from "./strongly-connected-components";
import { maximumBipartiteMatchingPattern } from "./maximum-bipartite-matching";
import { aStarSearchPattern } from "./a-star-search";

export const graphPatterns: Partial<Record<PatternKey, AlgorithmPattern>> = {
  "Graph Bellman Ford": bellmanFordPattern,
  "Graph Dijkstra": dijkstraPattern,
  "Graph Floyd Warshall": floydWarshallPattern,
  "Graph Kruskal": kruskalPattern,
  Prim: primPattern,
  "Graph Articulation Points": articulationPointsPattern,
  "Graph Bridges": bridgesPattern,
  DFS: graphDfsPattern,
  BFS: bfsPattern,
  "DFS Linked List": dfsLinkedListPattern,
  "DFS Binary Tree": dfsBinaryTreePattern,
  "BFS Linked List": bfsLinkedListPattern,
  Graph: graphPattern,
  "Graph Kosaraju": kosarajuPattern,
  "Topological Sort": topologicalSortPattern,
  "Network Flow": networkFlowPattern,
  "Strongly Connected Components": stronglyConnectedComponentsPattern,
  "Maximum Bipartite Matching": maximumBipartiteMatchingPattern,
  "A* Search": aStarSearchPattern,
};
