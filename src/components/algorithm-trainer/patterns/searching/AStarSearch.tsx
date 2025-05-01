// A* Search implementation for Monster Hunter

import { ChevronRight } from "lucide-react";

export default function AStarSearch() {
  return (
    <div>
      <div className="mb-2">
        <span className="text-accent font-bold">Monster Hunter A* Search</span>
        <span className="ml-2 text-xs text-secondary">
          (Pathfinding Algorithm)
        </span>
      </div>
      <div className="mb-2 text-xs text-secondary">
        Time: O(b^d) &nbsp;|&nbsp; Space: O(b^d) &nbsp;|&nbsp; Use: Finding
        optimal hunting paths
      </div>

      <div className="mb-4">
        <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
          {`def monster_hunter_a_star(hunting_grounds, start_camp, target_monster):
    """
    Find the optimal path to a monster using A* Search.
    Time: O(b^d) where b is branching factor, d is depth
    Space: O(b^d)
    
    Monster Hunter Context:
    - Like finding the most efficient path to a monster
    - Considers both distance and terrain difficulty
    - Uses heuristics to guide the search
    
    Example:
    hunting_grounds = {
        "Base Camp": [("Ancient Forest", 2), ("Wildspire Waste", 3)],
        "Ancient Forest": [("Coral Highlands", 4)],
        "Wildspire Waste": [("Rotten Vale", 3)],
        "Coral Highlands": [("Elder's Recess", 5)],
        "Rotten Vale": [("Elder's Recess", 4)]
    }
    start = "Base Camp"
    target = "Elder's Recess"
    
    Process:
    1. Initialize priority queue with start camp
    2. Track path costs and estimated distances
    3. Explore most promising paths first
    """
    from heapq import heappush, heappop
    
    def heuristic(current, target):
        """Estimate distance to target monster"""
        # In a real game, this would consider terrain, elevation, etc.
        return abs(ord(current[0]) - ord(target[0]))  # Simple example
    
    # Initialize data structures
    open_set = [(0, start_camp)]  # (f_score, location)
    came_from = {}
    g_score = {start_camp: 0}  # Actual cost from start
    f_score = {start_camp: heuristic(start_camp, target_monster)}  # Estimated total cost
    
    while open_set:
        current_f, current = heappop(open_set)
        
        if current == target_monster:
            # Reconstruct path
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start_camp)
            return path[::-1]
        
        for neighbor, cost in hunting_grounds[current]:
            tentative_g = g_score[current] + cost
            
            if neighbor not in g_score or tentative_g < g_score[neighbor]:
                came_from[neighbor] = current
                g_score[neighbor] = tentative_g
                f_score[neighbor] = tentative_g + heuristic(neighbor, target_monster)
                heappush(open_set, (f_score[neighbor], neighbor))
    
    return None  # No path found`}
        </pre>
      </div>

      <div className="mb-2">
        <span className="text-accent font-bold">Key Steps:</span>
      </div>
      <div className="mb-2 text-sm">
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Initialize: Set up priority queue with starting camp</span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>
            Explore: Process most promising paths first using heuristics
          </span>
        </div>
        <div className="flex items-center">
          <ChevronRight className="h-4 w-4 text-accent" />
          <span>Update: Track actual costs and reconstruct optimal path</span>
        </div>
      </div>
    </div>
  );
}
