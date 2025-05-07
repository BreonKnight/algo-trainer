import { PatternComponent } from "@/lib/pseudocode/types";

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
        <p className="mt-2">Time Complexity: O(V + E)</p>
        <p>Space Complexity: O(V)</p>
      </div>
      <div className="mt-4 w-full">
        <pre className="bg-background/50 p-4 rounded-lg text-sm">
          {`function DFS(graph, start):
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
        </pre>
      </div>
    </div>
  );
};

export default DFSPattern;
