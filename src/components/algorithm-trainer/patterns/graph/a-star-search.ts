import { AlgorithmPattern } from "../../types/pattern-types";

export const aStarSearchPattern: AlgorithmPattern = {
  title: "A* Search",
  description:
    "A graph algorithm that finds the shortest path between two nodes using a heuristic function to guide the search. It combines the advantages of Dijkstra's algorithm (guaranteed shortest path) with the efficiency of greedy best-first search.",
  timeComplexity: "O(b^d) where b is the branching factor and d is the depth of the solution",
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
const graphPatternPatternPatternPattern = {
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
  const dxPatternPatternPatternPattern = graph.nodes[a].x - graph.nodes[b].x;
  const dyPatternPatternPatternPattern = graph.nodes[a].y - graph.nodes[b].y;
  return Math.sqrt(dx * dx + dy * dy);
}

const startPatternPatternPatternPattern = 0;  // A
const goalPatternPatternPatternPattern = 5;   // F
const pathPatternPatternPatternPattern = aStar(start, goal, graph, heuristic);
console.log(path); // Output: [0, 1, 4, 5] or similar shortest path
  `,
  implementation: `class PriorityQueue:
    def __init__(self):
        self.elements = []
    
    def empty(self):
        return len(self.elements) == 0
    
    def put(self, item, priority):
        heapq.heappush(self.elements, (priority, item))
    
    def get(self):
        return heapq.heappop(self.elements)[1]

def heuristic(a, b, graph):
    """Calculate Euclidean distance between two nodes"""
    dx = graph.nodes[a].x - graph.nodes[b].x
    dy = graph.nodes[a].y - graph.nodes[b].y
    return math.sqrt(dx * dx + dy * dy)

def reconstruct_path(came_from, current):
    """Reconstruct the path from start to goal"""
    path = [current]
    while current in came_from:
        current = came_from[current]
        path.append(current)
    path.reverse()
    return path

def a_star(start, goal, graph):
    """
    A* Search Algorithm
    
    Args:
        start: Starting node index
        goal: Goal node index
        graph: Graph object containing nodes and edges
    
    Returns:
        List of node indices representing the shortest path from start to goal
    """
    open_set = PriorityQueue()
    open_set.put(start, 0)
    
    came_from = {}
    g_score = {start: 0}
    f_score = {start: heuristic(start, goal, graph)}
    
    while not open_set.empty():
        current = open_set.get()
        
        if current == goal:
            return reconstruct_path(came_from, current)
        
        for neighbor in graph.neighbors(current):
            tentative_g_score = g_score[current] + graph.cost(current, neighbor)
            
            if neighbor not in g_score or tentative_g_score < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g_score
                f_score[neighbor] = g_score[neighbor] + heuristic(neighbor, goal, graph)
                open_set.put(neighbor, f_score[neighbor])
    
    return None  # No path found

# Example usage
class Graph:
    def __init__(self):
        self.nodes = [
            {'x': 0, 'y': 0},  # A
            {'x': 1, 'y': 0},  # B
            {'x': 2, 'y': 0},  # C
            {'x': 0, 'y': 1},  # D
            {'x': 1, 'y': 1},  # E
            {'x': 2, 'y': 1}   # F
        ]
        self.edges = [
            [0, 1], [1, 2], [0, 3], [1, 4],
            [2, 5], [3, 4], [4, 5]
        ]
    
    def neighbors(self, node):
        """Get all neighbors of a node"""
        neighbors = []
        for edge in self.edges:
            if edge[0] == node:
                neighbors.append(edge[1])
            elif edge[1] == node:
                neighbors.append(edge[0])
        return neighbors
    
    def cost(self, a, b):
        """Calculate cost between two nodes (Euclidean distance)"""
        dx = self.nodes[a]['x'] - self.nodes[b]['x']
        dy = self.nodes[a]['y'] - self.nodes[b]['y']
        return math.sqrt(dx * dx + dy * dy)

# Create graph and find path
graph = Graph()
start = 0  # A
goal = 5   # F
path = a_star(start, goal, graph)
print(path)  # Output: [0, 1, 4, 5] or similar shortest path
  `,
  category: "Graph",
};
