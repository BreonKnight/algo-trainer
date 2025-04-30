import { ChevronRight } from "lucide-react";

export const HeavyLightDecompositionPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">
        Heavy-Light Decomposition Template
      </span>
      <span className="ml-2 text-xs text-secondary">(Tree Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(log n) - per query after decomposition &nbsp;|&nbsp; Space: O(n) -
      for tree structure &nbsp;|&nbsp; Use: Efficient path queries on trees
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Tree preprocessing:</span>{" "}
        Calculate subtree sizes, identify heavy edges
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Decompose tree:</span> Split
        tree into chains of heavy edges
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build segment trees:</span>{" "}
        Create segment trees for each chain
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Query processing:</span>{" "}
        Break path into chains, query each chain's segment tree
      </span>
    </div>
  </div>
);
