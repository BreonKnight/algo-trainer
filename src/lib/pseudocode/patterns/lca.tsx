import { ChevronRight } from "lucide-react";

export const LCAPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">LCA Template</span>
      <span className="ml-2 text-xs text-secondary">(Tree Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) - for queries with binary lifting &nbsp;|&nbsp; Space: O(n
      log n) - for binary lifting table &nbsp;|&nbsp; Use: Find lowest common
      ancestor in trees
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Preprocess:</span> Build
        binary lifting table
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query:</span> Jump up levels
        to find LCA
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Applications:</span> Path
        queries in trees
      </span>
    </div>
  </div>
);
