import { AlgorithmPattern } from "../../types";

export const aStarSearchPattern: AlgorithmPattern = {
  title: "A* Search",
  description:
    "A graph algorithm that finds the shortest path between two nodes using a heuristic function to guide the search. It combines the advantages of Dijkstra's algorithm (guaranteed shortest path) with the efficiency of greedy best-first search.",
  timeComplexity:
    "O(b^d) where b is the branching factor and d is the depth of the solution",
  spaceComplexity: "O(b^d)",
  pseudocode: `
function aStar(start, goal, graph, heuristic):
    open_set = PriorityQueue()
    open_set.put(start, 0)
    came_from = {}
    g_score = {start: 0}
    f_score = {start: heuristic(start, goal)}
    
    while not open_set.empty():
        current = open_set.get()
        
        if current == goal:
            return reconstruct_path(came_from, current)
            
        for neighbor in graph.neighbors(current):
            tentative_g_score = g_score[current] + graph.cost(current, neighbor)
            
            if neighbor not in g_score or tentative_g_score < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g_score
                f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal)
                if neighbor not in open_set:
                    open_set.put(neighbor, f_score[neighbor])
    
    return None  # No path found

function reconstruct_path(came_from, current):
    path = [current]
    while current in came_from:
        current = came_from[current]
        path.append(current)
    return path.reverse()
  `,
  example: `
// Example usage:
const graph = {
  nodes: [
    {x: 0, y: 0},  // A
    {x: 1, y: 0},  // B
    {x: 2, y: 0},  // C
    {x: 0, y: 1},  // D
    {x: 1, y: 1},  // E
    {x: 2, y: 1}   // F
  ],
  edges: [
    [0, 1], [1, 2], [0, 3], [1, 4],
    [2, 5], [3, 4], [4, 5]
  ]
};

function heuristic(a: number, b: number): number {
  const dx = graph.nodes[a].x - graph.nodes[b].x;
  const dy = graph.nodes[a].y - graph.nodes[b].y;
  return Math.sqrt(dx * dx + dy * dy);
}

const start = 0;  // A
const goal = 5;   // F
const path = aStar(start, goal, graph, heuristic);
console.log(path); // Output: [0, 1, 4, 5] or similar shortest path
  `,
  implementation: `
interface Node {
  x: number;
  y: number;
}

interface Graph {
  nodes: Node[];
  edges: number[][];
}

function aStar(
  start: number,
  goal: number,
  graph: Graph,
  heuristic: (a: number, b: number) => number
): number[] | null {
  const openSet = new PriorityQueue<number>();
  openSet.enqueue(start, 0);
  
  const cameFrom: { [key: number]: number } = {};
  const gScore: { [key: number]: number } = { [start]: 0 };
  const fScore: { [key: number]: number } = { [start]: heuristic(start, goal) };
  
  while (!openSet.isEmpty()) {
    const current = openSet.dequeue()!;
    
    if (current === goal) {
      return reconstructPath(cameFrom, current);
    }
    
    for (const neighbor of getNeighbors(current, graph)) {
      const tentativeGScore = gScore[current] + getCost(current, neighbor, graph);
      
      if (!(neighbor in gScore) || tentativeGScore < gScore[neighbor]) {
        cameFrom[neighbor] = current;
        gScore[neighbor] = tentativeGScore;
        fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);
        
        if (!openSet.contains(neighbor)) {
          openSet.enqueue(neighbor, fScore[neighbor]);
        }
      }
    }
  }
  
  return null; // No path found
}

function reconstructPath(cameFrom: { [key: number]: number }, current: number): number[] {
  const path = [current];
  while (current in cameFrom) {
    current = cameFrom[current];
    path.push(current);
  }
  return path.reverse();
}

function getNeighbors(node: number, graph: Graph): number[] {
  return graph.edges
    .filter(edge => edge[0] === node || edge[1] === node)
    .map(edge => edge[0] === node ? edge[1] : edge[0]);
}

function getCost(a: number, b: number, graph: Graph): number {
  const dx = graph.nodes[a].x - graph.nodes[b].x;
  const dy = graph.nodes[a].y - graph.nodes[b].y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Priority Queue implementation
class PriorityQueue<T> {
  private items: { value: T; priority: number }[] = [];
  
  enqueue(value: T, priority: number): void {
    this.items.push({ value, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }
  
  dequeue(): T | undefined {
    return this.items.shift()?.value;
  }
  
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  
  contains(value: T): boolean {
    return this.items.some(item => item.value === value);
  }
}
  `,
  category: "graph",
};
