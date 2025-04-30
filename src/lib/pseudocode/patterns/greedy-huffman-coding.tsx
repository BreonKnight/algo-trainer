import { ChevronRight } from "lucide-react";

export const GreedyHuffmanCodingPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Huffman Coding Template</span>
      <span className="ml-2 text-xs text-secondary">(Greedy Algorithm)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(n log n) - priority queue &nbsp;|&nbsp; Space: O(n) - tree nodes
      &nbsp;|&nbsp; Use: Creating optimal prefix codes
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Count frequencies:</span>{" "}
        Calculate character frequencies
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Build tree:</span> Create
        nodes and merge by frequency
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Generate codes:</span>{" "}
        Traverse tree to assign codes
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Return result:</span> Map of
        characters to codes
      </span>
    </div>
  </div>
);
