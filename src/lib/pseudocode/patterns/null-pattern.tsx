import { ChevronRight } from "lucide-react";

export const NullPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Null Pattern</span>
      <span className="ml-2 text-xs text-secondary">(Pattern)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) &nbsp;|&nbsp; Space: O(1) &nbsp;|&nbsp; Use: Represent absence
      of value
    </div>

    <div className="mb-4">
      <pre className="bg-main/10 p-2 rounded text-sm overflow-x-auto">
        {`NULL-PATTERN()
1  return NIL

HANDLE-NULL(value)
1  if value == NIL
2      return NIL
3  return value * 2  // Example processing

// Example:
// Input: value = NIL
// Output: NIL
// 
// Input: value = 5
// Output: 10`}
      </pre>
    </div>

    <div className="mb-2">
      <span className="text-accent font-bold">Key Steps:</span>
    </div>
    <div className="mb-2 text-sm">
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Return: NIL value</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Check: If value is NIL</span>
      </div>
      <div className="flex items-center">
        <ChevronRight className="h-4 w-4 text-accent" />
        <span>Process: Non-NIL values</span>
      </div>
    </div>
  </div>
);
