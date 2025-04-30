import { ChevronRight } from "lucide-react";

export const BitManipulationPattern = () => (
  <div>
    <div className="mb-2">
      <span className="text-accent font-bold">Bit Manipulation Template</span>
      <span className="ml-2 text-xs text-secondary">(Optimization)</span>
    </div>
    <div className="mb-2 text-xs text-secondary">
      Time: O(1) - constant time operations &nbsp;|&nbsp; Space: O(1) - constant
      space &nbsp;|&nbsp; Use: Efficient number operations
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">1.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Basic operations:</span>{" "}
        AND, OR, XOR, NOT
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">2.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Shifts:</span> Left and
        right bit shifts
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">3.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Masks:</span> Create and
        apply bit masks
      </span>
    </div>
    <div className="flex items-start mb-1">
      <span className="font-bold text-main mr-2">4.</span>
      <ChevronRight className="w-4 h-4 text-accent mt-1 mr-1" />
      <span>
        <span className="font-semibold text-accent">Common tricks:</span> Check
        power of 2, count set bits, swap without temp
      </span>
    </div>
  </div>
);
