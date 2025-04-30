import { AlgorithmPattern } from "../../types";
import { bellman_fordPattern } from "./bellman-ford";
import { dijkstraPattern } from "./dijkstra";
import { floyd_warshallPattern } from "./floyd-warshall";
import { kruskalPattern } from "./kruskal";
import { primPattern } from "./prim";
import { articulation_pointsPattern } from "./articulation-points.ts";
import { bridgesPattern } from "./bridges.ts";

export const graphPatterns: Record<string, AlgorithmPattern> = {
  "Graph Bellman-Ford": bellman_fordPattern,
  "Graph Dijkstra": dijkstraPattern,
  "Graph Floyd-Warshall": floyd_warshallPattern,
  "Graph Kruskal": kruskalPattern,
  "Graph Prim": primPattern,
  "Graph Articulation Points": articulation_pointsPattern,
  "Graph Bridges": bridgesPattern,
};
