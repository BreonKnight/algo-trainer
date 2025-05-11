import { PatternComponent } from "@/lib/pseudocode/types";
import { ChevronRight } from "lucide-react";
import { PseudocodeDisplay } from "@/lib/pseudocode/PseudocodeDisplay";

const DFSPattern: PatternComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
          DFS Graph
        </span>
        <div className="h-1 bg-accent rounded mt-1 w-8 mx-auto"></div>
        <span className="ml-2 text-xs text-secondary">(Algorithm)</span>
      </div>
      <div className="mt-4 text-sm text-secondary">
        <p>Depth-First Search for Graph Traversal</p>
        <p>Time: O(V + E) where V is vertices and E is edges</p>
        <p>Space: O(V) for visited set and recursion stack</p>
        <p>Use: Finding connected components, cycle detection, topological sorting</p>
      </div>
      <div className="mt-4 w-full">
        <PseudocodeDisplay
          code={`function DFS(graph, start):
    visited = set()
    stack = [start]
    
    while stack is not empty:
        current = stack.pop()
        
        if current not in visited:
            visited.add(current)
            process(current)
            
            for neighbor in graph[current]:
                if neighbor not in visited:
                    stack.append(neighbor)`}
        />
      </div>
      <div className="mt-4 w-full">
        <h3 className="text-lg font-semibold mb-2">Key Steps:</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Initialize: Visited set and stack with start vertex</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Process: Pop vertex from stack and mark as visited</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Explore: Add unvisited neighbors to stack</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="h-5 w-5 text-accent mt-0.5" />
            <span>Repeat: Until stack is empty</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DFSPattern;
