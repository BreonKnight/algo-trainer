import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "../PseudocodeDisplay";

export const GreedyDijkstraPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Dijkstra's Algorithm</span>
      <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O((V+E)logV) &nbsp;|&nbsp; Space: O(V) &nbsp;|&nbsp; Use: Finding
      shortest paths from a source
    </div>

    <PseudocodeDisplay code={`// Standard Dijkstra's Algorithm
def dijkstra(graph, source):
    # Initialize distances and visited set
    distances = {node: float('inf') for node in graph}
    distances[source] = 0
    visited = set()
    
    # Priority queue for unvisited nodes
    import heapq
    heap = [(0, source)]
    
    while heap:
        # Get node with minimum distance
        current_dist, current = heapq.heappop(heap)
        
        if current in visited:
            continue
        
        visited.add(current)
        
        # Update distances for neighbors
        for neighbor, weight in graph[current].items():
            if neighbor not in visited:
                new_dist = current_dist + weight
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    heapq.heappush(heap, (new_dist, neighbor))
    
    return distances

// Dijkstra with Path Reconstruction
def dijkstra_with_path(graph, source, target):
    distances = {node: float('inf') for node in graph}
    distances[source] = 0
    previous = {node: None for node in graph}
    visited = set()
    
    heap = [(0, source)]
    
    while heap:
        current_dist, current = heapq.heappop(heap)
        
        if current == target:
            break
        
        if current in visited:
            continue
        
        visited.add(current)
        
        for neighbor, weight in graph[current].items():
            if neighbor not in visited:
                new_dist = current_dist + weight
                if new_dist < distances[neighbor]:
                    distances[neighbor] = new_dist
                    previous[neighbor] = current
                    heapq.heappush(heap, (new_dist, neighbor))
    
    # Reconstruct path
    path = []
    current = target
    while current is not None:
        path.append(current)
        current = previous[current]
    path.reverse()
    
    return distances[target], path

// Bidirectional Dijkstra
def bidirectional_dijkstra(graph, source, target):
    # Initialize forward and backward searches
    forward_dist = {node: float('inf') for node in graph}
    backward_dist = {node: float('inf') for node in graph}
    forward_dist[source] = 0
    backward_dist[target] = 0
    
    forward_visited = set()
    backward_visited = set()
    
    forward_heap = [(0, source)]
    backward_heap = [(0, target)]
    
    min_dist = float('inf')
    meeting_node = None
    
    while forward_heap and backward_heap:
        # Forward step
        current_dist, current = heapq.heappop(forward_heap)
        if current in forward_visited:
            continue
        forward_visited.add(current)
        
        if current in backward_visited:
            total_dist = current_dist + backward_dist[current]
            if total_dist < min_dist:
                min_dist = total_dist
                meeting_node = current
        
        for neighbor, weight in graph[current].items():
            if neighbor not in forward_visited:
                new_dist = current_dist + weight
                if new_dist < forward_dist[neighbor]:
                    forward_dist[neighbor] = new_dist
                    heapq.heappush(forward_heap, (new_dist, neighbor))
        
        # Backward step
        current_dist, current = heapq.heappop(backward_heap)
        if current in backward_visited:
            continue
        backward_visited.add(current)
        
        if current in forward_visited:
            total_dist = current_dist + forward_dist[current]
            if total_dist < min_dist:
                min_dist = total_dist
                meeting_node = current
        
        for neighbor, weight in graph[current].items():
            if neighbor not in backward_visited:
                new_dist = current_dist + weight
                if new_dist < backward_dist[neighbor]:
                    backward_dist[neighbor] = new_dist
                    heapq.heappush(backward_heap, (new_dist, neighbor))
    
    return min_dist, meeting_node`} />

    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Initialize:</span> Distances
        and priority queue
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Process:</span> Extract
        minimum distance node
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Relax:</span> Update
        distances for neighbors
      </span>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Standard Dijkstra
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(4), C(2)
B -> C(1), D(5)
C -> D(8), E(10)
D -> E(2)
E -> D(2)

Source: A

Distances from A:
A: 0
B: 4
C: 2
D: 9
E: 11`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Dijkstra with Path
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(4), C(2)
B -> C(1), D(5)
C -> D(8), E(10)
D -> E(2)
E -> D(2)

Source: A, Target: E

Shortest Path: A -> C -> D -> E
Distance: 12`}
      </pre>
    </div>

    <div className="mt-4">
      <span className="font-semibold text-accent">
        Example: Bidirectional Dijkstra
      </span>
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto mt-1">
        {`Input Graph:
A -> B(4), C(2)
B -> C(1), D(5)
C -> D(8), E(10)
D -> E(2)
E -> D(2)

Source: A, Target: E

Meeting Node: D
Total Distance: 12`}
      </pre>
    </div>
  </div>
);
