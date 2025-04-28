import { AlgorithmPattern } from "../../types";

export const greedy_dijkstraPattern: AlgorithmPattern = {
  title: "Greedy Dijkstra's Algorithm",
  description:
    "A greedy algorithm that finds the shortest path from a source vertex to all other vertices in a weighted graph.",
  timeComplexity: "O((V + E) log V)",
  spaceComplexity: "O(V)",
  pseudocode: `1. Initialize distances to all vertices as infinity and source as 0\n2. Create a priority queue and add source vertex with distance 0\n3. While the queue is not empty:\n   a. Extract the vertex with minimum distance\n   b. For each adjacent vertex:\n      - If the new distance is less than the current distance, update it\n      - Add the adjacent vertex to the queue with the new distance\n4. Return the distances array`,
  example: `Graph:\nA --(4)--> B --(3)--> D\n|         /|         /|\n(2)    (1) |    (5)  |\n|    /     |    /    |\nC --(3)---- E --(2)-- F\n\nSource: A\n\nStep 1: distances = {A:0, B:inf, C:inf, D:inf, E:inf, F:inf}\nStep 2: Queue = [(A,0)]\nStep 3: Process A\n   - Update B: 4\n   - Update C: 2\n   Queue = [(C,2), (B,4)]\nStep 4: Process C\n   - Update E: 5\n   Queue = [(B,4), (E,5)]\nStep 5: Process B\n   - Update D: 7\n   - Update E: 5 (no change)\n   Queue = [(E,5), (D,7)]\nStep 6: Process E\n   - Update F: 7\n   Queue = [(D,7), (F,7)]\nStep 7: Process D and F\n   No updates\n\nFinal distances: {A:0, B:4, C:2, D:7, E:5, F:7}`,
  implementation: `def dijkstra(graph, source):\n    distances = {vertex: float('infinity') for vertex in graph}\n    distances[source] = 0\n    pq = [(0, source)]\n    \n    while pq:\n        current_distance, current_vertex = heapq.heappop(pq)\n        \n        if current_distance > distances[current_vertex]:\n            continue\n        \n        for neighbor, weight in graph[current_vertex].items():\n            distance = current_distance + weight\n            \n            if distance < distances[neighbor]:\n                distances[neighbor] = distance\n                heapq.heappush(pq, (distance, neighbor))\n    \n    return distances`,
};
